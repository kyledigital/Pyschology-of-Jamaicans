document.addEventListener("DOMContentLoaded", () => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  initThemeToggle();
  initMeter(reducedMotion);
  initVibeTest(reducedMotion);
  initReveals(reducedMotion);
});

const VIBE_OUTCOMES = {
  Exciting: {
    heat: "Hot",
    insight: "The crowd is reading the moment as pure release with attention still glued to the room."
  },
  Chaotic: {
    heat: "High",
    insight: "You are picking up on crowd compression, unpredictability, and the moments where energy starts outrunning control."
  },
  Sexy: {
    heat: "Flirt",
    insight: "That read makes sense. Visibility, styling, and social performance are all part of the atmosphere tonight."
  },
  Watchful: {
    heat: "Alert",
    insight: "This pick leans into the awareness layer. People are having fun, but they are still scanning timing, transport, and who is around them."
  },
  Overhyped: {
    heat: "Mixed",
    insight: "You are catching the gap between online gloss and street reality. The energy is real, but not every moment lands at the same level."
  }
};

function initThemeToggle() {
  const body = document.body;
  const toggle = document.getElementById("theme-toggle");
  const label = toggle?.querySelector(".theme-toggle-label");
  const themeColor = document.querySelector('meta[name="theme-color"]');

  if (!body || !toggle || !label) return;

  const themeMap = {
    pulse: {
      label: "Pulse green",
      nextLabel: "Carnival glow",
      color: "#143227"
    },
    carnival: {
      label: "Carnival glow",
      nextLabel: "Pulse green",
      color: "#ff6f3c"
    }
  };

  let storedTheme = "";

  try {
    storedTheme = window.localStorage.getItem("carnivalSignalTheme") || "";
  } catch (error) {
    storedTheme = "";
  }

  const initialTheme = themeMap[storedTheme] ? storedTheme : body.dataset.theme || "pulse";

  const applyTheme = (theme, shouldStore) => {
    const nextTheme = themeMap[theme] ? theme : "pulse";
    const config = themeMap[nextTheme];

    body.dataset.theme = nextTheme;
    label.textContent = config.label;
    toggle.setAttribute("aria-pressed", nextTheme === "pulse" ? "true" : "false");
    toggle.setAttribute("aria-label", `Switch to ${config.nextLabel} theme`);

    if (themeColor) {
      themeColor.setAttribute("content", config.color);
    }

    if (shouldStore) {
      try {
        window.localStorage.setItem("carnivalSignalTheme", nextTheme);
      } catch (error) {
        // Theme choice is still applied even when storage is unavailable.
      }
    }
  };

  applyTheme(initialTheme, false);

  toggle.addEventListener("click", () => {
    applyTheme(body.dataset.theme === "pulse" ? "carnival" : "pulse", true);
  });
}

function initMeter(reducedMotion) {
  const meter = document.querySelector("[data-meter]");
  if (!meter) return;

  const value = clampPercentage(Number(meter.dataset.meter) || 0);
  const fill = meter.querySelector(".meter-fill");
  const marker = meter.querySelector(".meter-marker");

  if (!fill || !marker) return;

  const applyValue = () => {
    fill.style.width = `${value}%`;
    marker.style.left = `${value}%`;
  };

  if (reducedMotion) {
    applyValue();
    return;
  }

  window.setTimeout(() => {
    applyValue();
  }, 180);
}

function initVibeTest(reducedMotion) {
  const options = Array.from(document.querySelectorAll(".vibe-option"));
  const resultsPanel = document.getElementById("vibe-results");
  const selectedVibe = document.getElementById("selected-vibe");
  const heatNode = document.getElementById("vibe-heat");
  const insightNode = document.getElementById("vibe-insight");
  const bars = Array.from(document.querySelectorAll(".result-bar-fill"));

  if (!options.length || !resultsPanel || !selectedVibe || !heatNode || !insightNode || !bars.length) return;

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const choice = option.dataset.option || option.textContent.trim();
      const vibeOutcome = VIBE_OUTCOMES[choice] || VIBE_OUTCOMES.Exciting;

      options.forEach((button) => {
        const isSelected = button === option;
        button.classList.toggle("is-selected", isSelected);
        button.setAttribute("aria-pressed", isSelected ? "true" : "false");
      });

      selectedVibe.textContent = choice;
      heatNode.textContent = vibeOutcome.heat;
      insightNode.textContent = vibeOutcome.insight;

      if (resultsPanel.hidden) {
        resultsPanel.hidden = false;
      }

      resultsPanel.classList.remove("is-visible");

      if (!reducedMotion) {
        bars.forEach((bar) => {
          bar.style.width = "0%";
        });
      }

      requestAnimationFrame(() => {
        resultsPanel.classList.add("is-visible");

        bars.forEach((bar) => {
          const value = clampPercentage(Number(bar.dataset.value) || 0);
          bar.style.width = `${value}%`;
        });
      });
    });
  });
}

function initReveals(reducedMotion) {
  const revealItems = Array.from(document.querySelectorAll(".reveal"));
  if (!revealItems.length) return;

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.18,
    rootMargin: "0px 0px -8% 0px"
  });

  revealItems.forEach((item) => {
    if (item.classList.contains("is-visible")) return;
    observer.observe(item);
  });
}

function clampPercentage(value) {
  return Math.max(0, Math.min(100, value));
}
