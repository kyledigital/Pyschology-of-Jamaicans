(function () {
  const scenarios = [
    {
      id: "late-arrival-text",
      label: "Timing",
      title: "The late arrival text",
      image: "assets/images/editorial-monochrome-collage.jpg",
      alt: "Layered monochrome collage with torn textures.",
      scene: "You text that you are outside. The reply comes back: 'Mi soon forward.' Ten minutes pass and nobody has moved yet.",
      leftChoice: "They are leaving where they are right now.",
      rightChoice: "They are saying they should be on the way or arriving soon.",
      correct: "right",
      answer: "They mean they should be arriving soon.",
      explanation: "In Jamaican speech, 'forward' points to arrival, not departure. The timing can still stretch, but the meaning is about coming, not leaving.",
      signal: "Simple words can still carry a very local read. If you read them literally, you miss the rhythm of the moment.",
      teaser: "What sounds like departure is often a promise of arrival."
    },
    {
      id: "skipped-blessing-up",
      label: "Respect",
      title: "The skipped blessing-up",
      image: "assets/images/editorial-community-faces.jpg",
      alt: "A collage of faces looking in different directions.",
      scene: "At a gathering, somebody greets the whole circle warmly and glides straight past you like you are not there.",
      leftChoice: "It is just random and probably means nothing.",
      rightChoice: "It can be a public signal of distance, disrespect, or tension.",
      correct: "right",
      answer: "It can be a deliberate public message.",
      explanation: "Greetings are social currency. When everybody gets acknowledged except you, people often read that as a sign, not an accident.",
      signal: "In Jamaican spaces, omission can speak as loudly as confrontation. People watch who gets acknowledged and who does not.",
      teaser: "Sometimes the loudest signal is who gets left out."
    },
    {
      id: "joking-compliment",
      label: "Pressure",
      title: "The joking compliment",
      image: "assets/images/editorial-paper-hands.jpg",
      alt: "Layered paper hands reaching upward.",
      scene: "After you level up, a friend laughs and says, 'Yuh a big person now eeh.' The room laughs, but the energy sharpens a little.",
      leftChoice: "It is pure praise and nothing else is inside it.",
      rightChoice: "It can be praise mixed with pressure, comparison, or red-eye energy.",
      correct: "right",
      answer: "The joke may carry pressure inside the praise.",
      explanation: "Humour often softens what people really feel. The line can still carry envy, distance, or a reminder that people are now watching you differently.",
      signal: "Not every smile is simple. Social pressure often arrives dressed as a joke first.",
      teaser: "Praise can still come with comparison inside it."
    },
    {
      id: "useful-connection",
      label: "Links",
      title: "The useful connection",
      image: "assets/images/editorial-author-signing.jpg",
      alt: "A close view of hands signing a book at a table.",
      scene: "A problem comes up and someone says, 'Mi have a link.' The room relaxes immediately.",
      leftChoice: "They know somebody useful who can help move things.",
      rightChoice: "They found a website or online page.",
      correct: "left",
      answer: "They mean a useful personal connection.",
      explanation: "A 'link' is usually access to a person, not a URL. It means there is a relationship that can unlock help, speed, or information.",
      signal: "Trust and access often move through people before they move through systems.",
      teaser: "A link is usually a person, not a page."
    },
    {
      id: "quick-shutdown",
      label: "Tone",
      title: "The quick shutdown",
      image: "assets/images/editorial-collage-detail.jpg",
      alt: "Editorial collage detail with layered paper textures and faces.",
      scene: "Something awkward or tense happens nearby and somebody leans over and says, 'No watch nothing, man.'",
      leftChoice: "Drop it, stay calm, and do not feed the tension.",
      rightChoice: "Keep watching closely and ask what happened.",
      correct: "left",
      answer: "You are being told to leave it alone and move carefully.",
      explanation: "That phrase usually means do not linger on the drama, do not draw attention, and do not make yourself part of the problem.",
      signal: "Sometimes social intelligence is not about spotting more. It is about knowing when to pull back and keep moving.",
      teaser: "The safest read is often knowing when not to look harder."
    },
    {
      id: "warning-before-going-out",
      label: "Visibility",
      title: "The warning before going out",
      image: "assets/images/editorial-retro-tv.jpg",
      alt: "Miniature figures gathered around a retro television.",
      scene: "Before heading somewhere, somebody warns you, 'Doan dress too hype fi go deh.' They are serious, not playful.",
      leftChoice: "They are protecting you from standing out in the wrong way.",
      rightChoice: "They believe style is rude everywhere.",
      correct: "left",
      answer: "They are warning you about visibility and risk.",
      explanation: "The issue is usually not fashion itself. It is whether your appearance could attract the wrong kind of attention in that specific space.",
      signal: "Reading Jamaica well includes knowing when visibility is power and when visibility is exposure.",
      teaser: "Looking good is not the issue. Being seen the wrong way is."
    }
  ];

  const resultProfiles = [
    {
      min: 0,
      max: 2,
      title: "You are hearing the words, not the undertone yet",
      badge: "Signal reader profile",
      description: "You are catching the surface of the moment, but some of the real social meaning is still slipping past. The full guide gives you a steadier read."
    },
    {
      min: 3,
      max: 4,
      title: "You are starting to catch the signal",
      badge: "Signal reader profile",
      description: "Your instincts are waking up. You are noticing pressure, tone, and timing, but a few important reads are still getting by you."
    },
    {
      min: 5,
      max: 6,
      title: "You read the room with real instinct",
      badge: "Signal reader profile",
      description: "You are already catching tone, pressure, respect, and visibility well. The full guide helps you turn that instinct into a deeper and more reliable read."
    }
  ];

  function getDateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function hashString(input) {
    let hash = 0;
    for (let index = 0; index < input.length; index += 1) {
      hash = ((hash << 5) - hash) + input.charCodeAt(index);
      hash |= 0;
    }
    return Math.abs(hash);
  }

  function getSignalIndex(date = new Date()) {
    if (!scenarios.length) return 0;
    return hashString(getDateKey(date)) % scenarios.length;
  }

  function getSignalOfTheDay(date = new Date()) {
    return scenarios[getSignalIndex(date)];
  }

  window.JAMAICAN_SIGNALS = {
    scenarios,
    resultProfiles,
    getSignalIndex,
    getSignalOfTheDay
  };
}());
