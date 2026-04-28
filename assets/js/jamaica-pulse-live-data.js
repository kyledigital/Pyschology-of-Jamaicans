(function () {
  window.JAMAICA_PULSE_LIVE_DATA = {
    updatedAt: "2026-04-22T11:30:00-05:00",
    moodScore: 67,
    moodLabel: "Watchful",
    heroInterpretation: "The pulse is holding because work and tourism are still moving, but price pressure and weather risk are keeping patience thin.",
    interpretation: "Jamaica's pulse is being held up by real supports, not just vibes. STATIN reported unemployment at 3.6% in January 2026, while March 2026 inflation came in at 4.3%, back inside the Bank of Jamaica target range. But BOJ warned on March 31, 2026 that imported oil, shipping, and other commodity costs could push energy and transport prices higher again. Add a 7.1% GDP drop in the October to December 2025 quarter and the start of the April to December tropical weather window, and the clearest read is this: people are still moving, but they are moving more carefully.",
    signalLines: [
      "Low unemployment is helping people keep going, but it is not removing strain.",
      "Tourism is adding real lift, especially where jobs, transport, and small spending touch the ground.",
      "The main pressure point is imported cost: if fuel and shipping stay hot, patience tightens fast."
    ],
    drivers: [
      "low unemployment",
      "tourism inflow",
      "energy-led inflation risk",
      "weather exposure"
    ],
    heroDrivers: [
      "low unemployment",
      "energy-led inflation risk",
      "weather exposure"
    ],
    headlines: [
      {
        type: "Prices",
        tone: "pressure",
        weight: "Main pressure",
        title: "The pressure point is not collapse. It is how fast imported costs can thin people's patience.",
        summary: "STATIN put March 2026 inflation at 4.3%, but BOJ said on March 31, 2026 that oil, LNG, fertilizer, and shipping costs could still lift energy and transport inflation through the year."
      },
      {
        type: "Work",
        tone: "lift",
        weight: "Main support",
        title: "People still have a reason to keep moving because the jobs floor is holding.",
        summary: "STATIN reported unemployment at 3.6% in January 2026. That does not mean life feels easy, but it does mean the base mood is effort and movement, not shutdown."
      },
      {
        type: "Tourism",
        tone: "energy",
        weight: "Fresh lift",
        title: "A lot of the optimism right now is coming from opportunity flow, not comfort.",
        summary: "The Ministry of Tourism said Jamaica added more than 62,000 Latin American arrivals in 2025 and USD 116 million in earnings from that market, feeding real activity into 2026."
      },
      {
        type: "Weather",
        tone: "watch",
        weight: "Planning risk",
        title: "Weather is moving from background risk to planning risk.",
        summary: "The Meteorological Service says tropical systems affect Jamaica from April to December, with the official hurricane season running June to November, so disruption is moving into the planning layer now."
      },
      {
        type: "Recovery",
        tone: "watch",
        weight: "Still uneven",
        title: "The country is active, but it is still carrying the bruise from late 2025.",
        summary: "STATIN's key indicators show GDP fell 7.1% in the October to December 2025 quarter, which helps explain why the mood can stay busy while still feeling guarded."
      }
    ],
    metrics: [
      { icon: "👀", label: "Public mood", value: "Held together", note: "Work is steady, but patience is thin" },
      { icon: "📈", label: "Inflation", value: "4.3%", note: "March 2026, back inside BOJ target" },
      { icon: "💼", label: "Jobs", value: "3.6%", note: "January 2026 unemployment remains low" },
      { icon: "✈️", label: "Tourism", value: "Expanding", note: "LATAM arrivals rose by 62,000 in 2025" },
      { icon: "🌦️", label: "Weather", value: "Risk window open", note: "Tropical systems affect April to December" },
      { icon: "🏗️", label: "Recovery", value: "Uneven", note: "GDP fell 7.1% in Oct to Dec 2025" }
    ],
    desks: [
      {
        name: "Street Mood",
        status: "Patience is thinner",
        tone: "watch",
        summary: "The key street insight right now is not that people have gone cold. It is that pressure is shortening the distance between normal interaction and irritation, so tone and timing matter more.",
        chips: ["respect", "tone", "patience", "guarded trust"],
        cadence: "Daily check-in"
      },
      {
        name: "Cost and Transport",
        status: "Imported pressure risk",
        tone: "pressure",
        summary: "This is the first place the macro story turns personal. BOJ's warning around imported energy and shipping costs matters here because fuel and movement costs are what people feel fastest.",
        chips: ["fuel", "fares", "food prices", "shipping"],
        cadence: "Weekly reality check"
      },
      {
        name: "Weather and Island Risk",
        status: "Risk season opening",
        tone: "energy",
        summary: "The weather desk matters more now because Jamaica is entering the part of the year where disruption has to be budgeted early. Weather is not scenery. It is operational pressure.",
        chips: ["storm season", "road risk", "utilities", "planning"],
        cadence: "Seasonal check"
      },
      {
        name: "Work and Opportunity",
        status: "Support is real, but uneven",
        tone: "lift",
        summary: "This is where the country gets some lift. Low unemployment and stronger tourism demand are keeping movement alive, but the benefit is not spreading evenly enough to make the mood fully relaxed.",
        chips: ["jobs", "tourism", "diaspora", "small business"],
        cadence: "Monthly check-in"
      }
    ],
    sourceWatch: [
      {
        name: "STATIN and BOJ",
        kind: "Prices and jobs",
        status: "Primary anchor",
        note: "STATIN reported 4.3% inflation for March 2026 and 3.6% unemployment for January 2026. BOJ kept rates at 5.50% on March 31, 2026 but warned imported energy and shipping costs could push prices up again."
      },
      {
        name: "Ministry of Tourism",
        kind: "Opportunity flow",
        status: "Adding real lift",
        note: "The Ministry of Tourism said Jamaica added more than 62,000 Latin American arrivals in 2025 and USD 116 million in earnings from that market, which supports jobs and on-the-ground spending."
      },
      {
        name: "Met Service and ODPEM",
        kind: "Weather check",
        status: "Season turning",
        note: "The Meteorological Service says tropical systems affect Jamaica from April to December, with hurricane season from June to November, so weather pressure is moving into everyday planning."
      },
      {
        name: "STATIN growth data",
        kind: "Recovery check",
        status: "Still uneven",
        note: "STATIN's key indicators show GDP fell 7.1% in the October to December 2025 quarter, which helps explain why the national mood stays active without feeling secure."
      },
      {
        name: "Editorial street read",
        kind: "On-the-ground read",
        status: "Needs human judgment",
        note: "The numbers show what is pushing and what is supporting. The human read is still what tells us whether that balance feels hopeful, irritated, disciplined, or close to snapping."
      }
    ]
  };
}());
