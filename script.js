const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const clientTrack = document.querySelector("[data-client-track]");
const metricsSection = document.querySelector("[data-metrics]");
const timelineSection = document.querySelector("[data-timeline]");
const missionSection = document.querySelector("[data-mission-section]");

const clients = [
  ["Grupo Fleury", "fleury", "<small>Grupo</small><strong>Fleury</strong>"],
  ["Exata Brasil", "exata", "<strong>EXATA</strong><small>Brasil</small>"],
  ["Mozaiko", "mozaiko", "<strong>mozaiko</strong>"],
  ["LWSA", "lwsa", "<strong>lwsa</strong>"],
  ["Sodexo", "sodexo", "<strong>sodexo</strong>"],
  ["Cidade Ágil", "agil", "<small>Cidade</small><strong>ÁGIL</strong>"],
  ["VINCI", "vinci", "<strong>VINCI</strong>"],
  ["FIA Business School", "fia", "<strong>FIA</strong><small>Business School</small>"],
  ["Agrex do Brasil", "agrex", "<strong>AGREX</strong><small>do Brasil</small>"],
  ["Trademaster", "trademaster", "<strong>TN</strong><em>trademaster</em>"],
  ["CNH Industrial Capital", "cnh", "<strong>CNH</strong><small>Industrial Capital</small>"],
  ["Lindt", "lindt", "<strong>Lindt</strong>"],
  ["GGN", "ggn", "<strong>GGN</strong><small>Jornal de todos os Brasis</small>"],
  ["Send.Knowledge", "send", "<strong>Send</strong><em>.Knowledge</em>"],
  ["Banco BV", "bv", "<small>banco</small><strong>BV</strong>"],
  ["Instituto Butantan", "butantan", "<strong>Instituto</strong><small>Butantan</small>"],
  ["Grupo Editorial Nacional", "gen", "<strong>gen</strong><small>Grupo Editorial Nacional</small>"],
  ["Grupo Mulheres do Brasil", "mulheres", "<strong>Grupo Mulheres</strong><small>do Brasil</small>"],
  ["MEDMEP", "medmep", "<strong>MED</strong><em>MEP</em>"],
  ["TMG", "tmg", "<strong>TMG</strong>"],
  ["Grupo A", "grupo-a", "<strong>Grupo A</strong><small>Soluções em energia</small>"],
  ["São Martinho", "martinho", "<strong>São Martinho</strong>"],
  ["Grupo Taking", "taking", "<small>Grupo</small><strong>Taking</strong>"],
  ["Agrivalle", "agrivalle", "<strong>Agrivalle</strong>"],
  ["AIKNOW", "aiknow", "<strong>AIKNOW</strong>"],
  ["Uniodonto", "uniodonto", "<strong>uniodonto</strong>"],
  ["Embrapa", "embrapa", "<strong>Embrapa</strong>"],
  ["Aqua Capital", "aqua", "<strong>AQUA</strong><small>CAPITAL</small>"],
  ["iCoLab", "icolab", "<strong>iCoLab</strong>"],
  ["Demarest", "demarest", "<strong>Demarest</strong><small>Advogados</small>"],
  ["MCIO Brasil", "mcio", "<strong>MCIO</strong><small>Brasil</small>"],
  ["Craft", "craft", "<strong>Craft</strong>"],
  ["Eureciclo", "eureciclo", "<strong>eureciclo</strong>"],
  ["Veritas", "veritas", "<strong>VERITAS</strong>"],
  ["PwC", "pwc", "<strong>pwc</strong>"],
  ["Zapps", "zapps", "<strong>zapps</strong>"],
  ["iProcess", "iprocess", "<strong>i</strong><em>process</em>"],
  ["Trisul", "trisul", "<strong>TRISUL</strong>"],
  ["PGE Bahia", "pge", "<strong>PGE</strong><small>Procuradoria Geral do Estado da Bahia</small>"],
  ["Bunge", "bunge", "<strong>BUNGE</strong>"],
  ["ABINC", "abinc", "<strong>ABINC</strong><small>Internet das coisas</small>"],
  ["Ibmec", "ibmec", "<strong>Ibmec</strong>"],
  ["PUC-SP", "puc", "<strong>PUC-SP</strong>"]
];

const clientDomains = {
  fleury: "grupofleury.com.br",
  exata: "exatabrasil.com.br",
  mozaiko: "mozaiko.com.br",
  lwsa: "lwsa.com.br",
  sodexo: "sodexo.com.br",
  agil: "cidadeagil.com.br",
  vinci: "vinci.com",
  fia: "fia.com.br",
  agrex: "agrex.com.br",
  trademaster: "trademaster.com.br",
  cnh: "cnhindustrial.com",
  lindt: "lindt.com.br",
  ggn: "jornalggn.com.br",
  send: "sendknowledge.com.br",
  bv: "bv.com.br",
  butantan: "butantan.gov.br",
  gen: "grupogen.com.br",
  mulheres: "grupomulheresdobrasil.org.br",
  medmep: "medmep.com.br",
  tmg: "tmg.agr.br",
  "grupo-a": "grupo-a.com.br",
  martinho: "saomartinho.com.br",
  taking: "grupotaking.com.br",
  agrivalle: "agrivalle.com.br",
  aiknow: "aiknow.com.br",
  uniodonto: "uniodonto.coop.br",
  embrapa: "embrapa.br",
  aqua: "aqua.capital",
  icolab: "icolab.com.br",
  demarest: "demarest.com.br",
  mcio: "mciobrasil.org.br",
  craft: "craft.com.br",
  eureciclo: "eureciclo.com.br",
  veritas: "veritas.com",
  pwc: "pwc.com",
  zapps: "zapps.com.br",
  iprocess: "iprocess.com.br",
  trisul: "trisul-sa.com.br",
  pge: "pge.ba.gov.br",
  bunge: "bunge.com.br",
  abinc: "abinc.org.br",
  ibmec: "ibmec.br",
  puc: "pucsp.br"
};

const fallbackIcons = {
  "arrow-right": '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  "badge-check": '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.75z"/><path d="m9 12 2 2 4-4"/>',
  "brain-circuit": '<path d="M12 5a3 3 0 1 0-5.5 1.7A3 3 0 0 0 5 12a3 3 0 0 0 1.5 5.3A3 3 0 1 0 12 19"/><path d="M12 5a3 3 0 1 1 5.5 1.7A3 3 0 0 1 19 12a3 3 0 0 1-1.5 5.3A3 3 0 1 1 12 19"/><path d="M12 5v14"/><path d="M8 9h2"/><path d="M14 9h2"/><path d="M8 15h2"/><path d="M14 15h2"/>',
  "building-2": '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/><path d="M6 12H4a2 2 0 0 0-2 2v8"/><path d="M18 9h2a2 2 0 0 1 2 2v11"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',
  "calendar-days": '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/>',
  "chart-line": '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>',
  "chart-no-axes-combined": '<path d="M12 16v5"/><path d="M16 14v7"/><path d="M20 10v11"/><path d="m22 3-8.5 8.5-5-5L2 13"/>',
  "check-circle-2": '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  "clipboard-check": '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
  "cloud-cog": '<path d="M12 13a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/><path d="M12 10v2"/><path d="M12 20v2"/><path d="m4.9 19.1 1.4-1.4"/><path d="m17.7 12.3 1.4-1.4"/><path d="M2 13.5A5.5 5.5 0 0 1 7.5 8H8a6 6 0 0 1 11.2 2.9A4.5 4.5 0 0 1 19.5 20H18"/>',
  "graduation-cap": '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  "eye": '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  "handshake": '<path d="m11 17 2 2a2.8 2.8 0 0 0 4-4"/><path d="m14 14 2.5 2.5a2.8 2.8 0 0 0 4-4L13 5l-2.5 2.5a2.8 2.8 0 0 1-4-4L8 2"/><path d="m7 11-2 2a2.8 2.8 0 0 0 4 4l2-2"/><path d="M2 7l5-5"/><path d="m22 7-5-5"/>',
  "heart-handshake": '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 12 5a5.5 5.5 0 0 0-10 3.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.07 1.9"/>',
  "instagram": '<rect width="20" height="20" x="2" y="2" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  "leaf": '<path d="M11 20A7 7 0 0 1 4 13c0-7 7-10 16-10 0 9-3 16-10 16Z"/><path d="M4 13c5 0 8-2 10-6"/>',
  "linkedin": '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  "lock-keyhole": '<circle cx="12" cy="16" r="1"/><rect width="18" height="12" x="3" y="10" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/>',
  "map-pin": '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  "menu": '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
  "message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"/>',
  "network": '<circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><path d="M10.4 7.6 6.6 16.4"/><path d="m13.6 7.6 3.8 8.8"/><path d="M8 19h8"/>',
  "play": '<path d="m5 3 14 9-14 9V3z"/>',
  "play-circle": '<circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4V8z"/>',
  "rocket": '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-5 12.9 12.9 0 0 1 8-5 12.9 12.9 0 0 1-5 8 22 22 0 0 1-5 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
  "sparkles": '<path d="m12 3-1.9 5.8L4 11l6.1 2.2L12 19l1.9-5.8L20 11l-6.1-2.2Z"/><path d="M5 3v4"/><path d="M3 5h4"/><path d="M19 17v4"/><path d="M17 19h4"/>',
  "target": '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  "trending-up": '<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>',
  "user-round-check": '<path d="M2 21a8 8 0 0 1 13.3-6"/><circle cx="10" cy="8" r="5"/><path d="m16 19 2 2 4-4"/>',
  "users-round": '<path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 21a8 8 0 0 0-6-7.7"/><path d="M16 3.1a5 5 0 0 1 0 9.8"/>',
  "x": '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  "youtube": '<path d="M2.5 17a24.7 24.7 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.7 24.7 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>'
};

function renderIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  document.querySelectorAll("i[data-lucide]").forEach((node) => {
    const name = node.getAttribute("data-lucide");
    const paths = fallbackIcons[name];
    if (!paths) return;
    node.outerHTML = `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
  });
}

function renderClientCarousel() {
  if (!clientTrack) return;

  const repeatedClients = [...clients, ...clients];
  clientTrack.innerHTML = repeatedClients
    .map(([label, slug, html], index) => {
      const hidden = index >= clients.length ? ' aria-hidden="true"' : "";
      const domain = clientDomains[slug];
      const logo = domain ? `https://logo.clearbit.com/${domain}?size=220` : "";
      const fallback = domain ? `https://www.google.com/s2/favicons?domain=${domain}&sz=128` : "";
      const image = logo
        ? `<img class="client-image" src="${logo}" data-fallback="${fallback}" alt="" loading="eager" decoding="async" onerror="this.onerror=null;this.src=this.dataset.fallback;this.classList.add('is-favicon')" />`
        : "";
      return `<span class="client-logo client-${slug}" role="img" aria-label="${label}"${hidden}>${image}<span class="client-symbol"></span><span class="client-wordmark">${html}</span></span>`;
    })
    .join("");

  window.setTimeout(() => {
    document.querySelectorAll(".client-image").forEach((image) => {
      if (image.complete && image.naturalWidth > 0) return;
      image.src = image.dataset.fallback;
      image.classList.add("is-favicon");
    });
  }, 2400);
}

function formatMetric(value, prefix = "", suffix = "") {
  return `${prefix}${value}${suffix}`;
}

function easeOutCubic(progress) {
  return 1 - Math.pow(1 - progress, 3);
}

function setMetricFinalValues(root) {
  root.querySelectorAll("[data-count-to]").forEach((counter) => {
    const target = Number(counter.dataset.countTo || 0);
    counter.textContent = formatMetric(target, counter.dataset.prefix, counter.dataset.suffix);
  });
}

function animateMetricValue(counter, duration) {
  const target = Number(counter.dataset.countTo || 0);
  const prefix = counter.dataset.prefix || "";
  const suffix = counter.dataset.suffix || "";
  const start = performance.now();

  counter.textContent = formatMetric(0, prefix, suffix);

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const easedProgress = easeOutCubic(progress);
    const currentValue =
      progress < 1 ? Math.min(target - 1, Math.floor(target * easedProgress)) : target;

    counter.textContent = formatMetric(currentValue, prefix, suffix);

    if (progress < 1) {
      window.requestAnimationFrame(update);
      return;
    }

    counter.textContent = formatMetric(target, prefix, suffix);
  }

  window.requestAnimationFrame(update);
}

function initMetricsAnimation() {
  if (!metricsSection) return;

  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const metricItems = metricsSection.querySelectorAll("[data-metric-item]");
  const counters = metricsSection.querySelectorAll("[data-count-to]");
  let hasAnimated = false;

  metricItems.forEach((item, index) => {
    item.style.setProperty("--metric-delay", `${index * 140}ms`);
  });

  function startAnimation() {
    if (hasAnimated) return;
    hasAnimated = true;

    metricsSection.classList.add("is-visible");

    if (reducedMotion) {
      metricsSection.classList.add("is-reduced-motion");
      setMetricFinalValues(metricsSection);
      return;
    }

    counters.forEach((counter, index) => {
      animateMetricValue(counter, 3000 + index * 90);
    });
  }

  if (reducedMotion || !("IntersectionObserver" in window)) {
    startAnimation();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      startAnimation();
      observer.disconnect();
    },
    { threshold: 0.32 }
  );

  observer.observe(metricsSection);
}

function initTimelineAnimation() {
  if (!timelineSection) return;

  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const timelineHead = timelineSection.querySelector("[data-timeline-head]");
  const timelineItems = [...timelineSection.querySelectorAll("[data-timeline-item]")];
  const timelineTargets = [timelineHead, ...timelineItems].filter(Boolean);

  if (reducedMotion || !("IntersectionObserver" in window)) {
    timelineTargets.forEach((target) => target.classList.add("is-visible"));
    timelineSection.classList.add("timeline-line-visible");
    return;
  }

  timelineSection.classList.add("timeline-animated");

  const lineObserver = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      timelineSection.classList.add("timeline-line-visible");
      lineObserver.disconnect();
    },
    {
      rootMargin: "0px 0px -18% 0px",
      threshold: 0.22
    }
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.16
    }
  );

  lineObserver.observe(timelineSection);
  timelineTargets.forEach((target) => observer.observe(target));
}

function initMissionAnimation() {
  if (!missionSection) return;

  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const missionHead = missionSection.querySelector("[data-mission-head]");
  const missionCards = [...missionSection.querySelectorAll("[data-mission-card]")];
  const missionTargets = [missionHead, ...missionCards].filter(Boolean);

  if (reducedMotion || !("IntersectionObserver" in window)) {
    missionTargets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  missionSection.classList.add("is-animated");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.16
    }
  );

  missionTargets.forEach((target) => observer.observe(target));
}

function paintHeader() {
  header.classList.toggle("scrolled", window.scrollY > 16);
}

window.addEventListener("scroll", paintHeader, { passive: true });
paintHeader();

menuButton?.addEventListener("click", () => {
  const open = header.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.innerHTML = open ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
  renderIcons();
});

nav?.addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;
  header.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
  if (menuButton) {
    menuButton.innerHTML = '<i data-lucide="menu"></i>';
  }
  renderIcons();
});

window.addEventListener("DOMContentLoaded", () => {
  renderClientCarousel();
  renderIcons();
  initMetricsAnimation();
  initMissionAnimation();
  initTimelineAnimation();
});
