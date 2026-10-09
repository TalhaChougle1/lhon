/* ============================================================
   LEO HANDS OF NURTURE — app.js v4
   ============================================================ */

(function () {
  'use strict';

  /* ─── Reduced motion ─── */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ─── Utilities ─── */
  function throttle(fn, wait) {
    let last = 0;
    return function (...args) {
      const now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, args); }
    };
  }

  function debounce(fn, wait) {
    let timer;
    return function (...args) { clearTimeout(timer); timer = setTimeout(() => fn.apply(this, args), wait); };
  }

  const $  = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => [...(ctx || document).querySelectorAll(sel)];

  /* Content supplied later can be added here without changing page markup. */
  const siteData = {
    overallStats: {
      participantsReached: null,
      eventsCompleted: null,
      volunteersInvolved: null,
      communitiesReached: null,
    },
    pillars: [
      {
        number: '01',
        id: 'childhood-cancer',
        name: 'Childhood Cancer',
        description: 'We support the needs of children and families affected by childhood cancer.',
        image: null,
      },
      {
        number: '02',
        id: 'diabetes',
        name: 'Diabetes',
        description: 'We work to reduce the prevalence of diabetes and improve quality of life for people living with diabetes.',
        image: null,
      },
      {
        number: '03',
        id: 'disaster-relief',
        name: 'Disaster Relief',
        description: 'We help meet immediate needs and provide long-term support for communities affected by natural disasters.',
        image: null,
      },
      {
        number: '04',
        id: 'environment',
        name: 'Environment',
        description: 'We find ways to protect the environment, creating healthier communities and a more sustainable world.',
        image: null,
      },
      {
        number: '05',
        id: 'humanitarian',
        name: 'Humanitarian',
        description: 'We identify crucial needs and provide humanitarian aid where it is needed most.',
        image: 'assets/images/IMG_4507.jpg',
        alt: 'Volunteers assisting community members during an outreach activity',
        imagePosition: 'center 42%',
      },
      {
        number: '06',
        id: 'hunger',
        name: 'Hunger',
        description: 'We work to improve food security and access to nutritious food to help alleviate hunger.',
        image: null,
      },
      {
        number: '07',
        id: 'vision',
        name: 'Vision',
        description: 'We help prevent avoidable blindness and improve quality of life for people who are blind or visually impaired.',
        image: 'assets/images/IMG_4521.jpg',
        alt: 'Eyeglasses handover during a Gift of Sight community service activity',
        imagePosition: 'center 38%',
      },
      {
        number: '08',
        id: 'youth',
        name: 'Youth',
        description: 'We support young people so they can make positive choices, lead healthy and productive lives, and become the next generation of service leaders.',
        image: null,
      },
    ],
    teamDepartments: [
      {
        id: 'executive',
        number: '01',
        name: 'EXECUTIVE TEAM',
        description: 'Guiding the overarching strategic vision, partnerships, and core operations of Leo Hands of Nurture in Makassar.',
        members: [
          {
            id: 'intan-soetrisno',
            name: 'Nur Mani Intan Soetrisno',
            age: 16,
            department: 'Executive Team',
            image: 'assets/team/intan-soetrisno.jpg',
            imagePosition: 'center 20%',
            quote: 'To be able to bring service to people in need is honestly such a privilege. Because what’s the point of having something good if you can’t use it to do some good too?',
            instagram: {
              handle: '@intannsoe',
              url: 'https://www.instagram.com/intannsoe/'
            },
            linkedin: null,
            substack: null,
            isLeader: false
          },
          {
            id: 'arwendy-arifin',
            name: 'Arwendy Arifin',
            age: 17,
            department: 'Executive Team',
            image: 'assets/team/arwendy-arifin.jpg',
            imagePosition: 'center 15%',
            quote: 'Smile and be wild',
            instagram: {
              handle: '@apacihehe',
              url: 'https://www.instagram.com/apacihehe/'
            },
            linkedin: null,
            substack: null,
            isLeader: false
          },
          {
            id: 'edith-hoeijaya',
            name: 'Edith Hoeijaya',
            age: 17,
            department: 'Executive Team',
            image: 'assets/team/edith-hoeijaya.jpg',
            imagePosition: 'center 20%',
            quote: 'We may not be able to help everyone, but we can help someone',
            instagram: {
              handle: '@edith_hoeijaya',
              url: 'https://www.instagram.com/edith_hoeijaya/'
            },
            linkedin: null,
            substack: {
              publication: 'Interlinia Publication',
              handle: '@edith hoeijaya',
              url: null
            },
            isLeader: false
          },
          {
            id: 'nur-aqilah-zahrah',
            name: 'Nur Aqilah Zahrah A.',
            age: 16,
            department: 'Executive Team',
            image: 'assets/team/nur-aqilah-zahrah.jpg',
            imagePosition: 'center 25%',
            quote: 'Service to others is the rent you pay for your room here on Earth. — Muhammad Ali',
            instagram: {
              handle: '@nurz_ahraaa',
              url: 'https://www.instagram.com/nurz_ahraaa/'
            },
            linkedin: null,
            substack: null,
            isLeader: false
          },
          {
            id: 'chayla',
            name: 'Chayla',
            age: null,
            department: 'Executive Team',
            image: null,
            quote: null,
            instagram: null,
            linkedin: null,
            substack: null,
            isLeader: false
          }
        ]
      },
      {
        id: 'social-media',
        number: '02',
        name: 'SOCIAL MEDIA TEAM',
        description: 'Documenting community stories, elevating youth voices, and shaping digital storytelling across Makassar and beyond.',
        members: [
          {
            id: 'fiona-gauw',
            name: 'Fiona Gauw',
            age: 16,
            department: 'Social Media Team',
            image: 'assets/team/fiona-gauw.jpg',
            imagePosition: 'center 20%',
            quote: null,
            instagram: null,
            linkedin: null,
            substack: null,
            isLeader: false
          },
          {
            id: 'clarence',
            name: 'Clarence',
            age: null,
            department: 'Social Media Team',
            image: null,
            quote: null,
            instagram: null,
            linkedin: null,
            substack: null,
            isLeader: false
          },
          {
            id: 'rebecca',
            name: 'Rebecca',
            age: null,
            department: 'Social Media Team',
            image: null,
            quote: null,
            instagram: null,
            linkedin: null,
            substack: null,
            isLeader: false
          }
        ]
      },
      {
        id: 'human-resource',
        number: '03',
        name: 'HUMAN RESOURCE TEAM',
        description: 'Fostering member development, volunteer coordination, and building an inclusive, purpose-driven community culture.',
        members: [
          {
            id: 'felix-wilbert-gosal',
            name: 'Felix Wilbert Gosal',
            age: 18,
            department: 'Human Resource Team',
            image: 'assets/team/felix-wilbert-gosal.jpg',
            imagePosition: 'center 20%',
            quote: 'Stop at nothing',
            instagram: null,
            linkedin: null,
            substack: null,
            isLeader: false
          },
          {
            id: 'richard-ernestan-kusuma',
            name: 'Richard Ernestan Kusuma',
            age: 16,
            department: 'Human Resource Team',
            image: 'assets/team/richard-ernestan-kusuma.jpg',
            imagePosition: 'center 18%',
            quote: 'Action is the foundational key to all success.',
            instagram: {
              handle: 'Instagram',
              url: 'https://shorturl.at/9vWtM'
            },
            linkedin: {
              handle: 'LinkedIn Profile',
              url: 'https://www.linkedin.com/in/richard-ernestan-kusuma-89a9b439/'
            },
            substack: null,
            isLeader: false
          },
          {
            id: 'kevin-aprilio',
            name: 'Kevin Aprilio',
            age: 17,
            department: 'Human Resource Team',
            image: 'assets/team/Kevin-Aprilio.png',
            imagePosition: '53% 43%',
            quote: 'Don’t chase after a dream, they are not criminals.',
            instagram: {
              handle: '@kevin.apr18',
              url: 'https://instagram.com/kevin.apr18'
            },
            linkedin: null,
            substack: null,
            isLeader: false
          }
        ]
      }
    ],
    teamCategories: ['EXECUTIVE TEAM', 'SOCIAL MEDIA TEAM', 'HUMAN RESOURCE TEAM'],
    teamMembers: [],
    events: [
      {
        id: 'clearer-vision-brighter-futures',
        title: 'Clearer Vision, Brighter Futures',
        date: '28 June 2026',
        category: 'HEALTH',
        description: 'Free comprehensive eye examination and prescription glasses distribution for community members and youth across Makassar.',
        image: 'assets/images/IMG_4504.jpg',
        location: 'Makassar, South Sulawesi, Indonesia',
        statistics: {
          'Participants Reached': '877',
          'Prescription Glasses Distributed': 'Verified',
          'Community Volunteers': 'Active',
        },
        gallery: [
          { src: 'assets/images/IMG_4477.jpg', caption: 'Briefing & Community Engagement' },
          { src: 'assets/images/IMG_4486.jpg', caption: 'Participant Intake & Registration' },
          { src: 'assets/images/IMG_4492.jpg', caption: 'Eye Screening & Refraction Testing' },
          { src: 'assets/images/IMG_4495.jpg', caption: 'Near-Vision Reading Assessment' },
          { src: 'assets/images/IMG_4521.jpg', caption: 'Gift of Sight Eyeglasses Handover' },
        ],
      },
      {
        id: 'event-details-to-be-provided',
        title: 'English Literacy Sessions',
        date: 'Ongoing Program',
        category: 'EDUCATION',
        description: 'Regular English learning and literacy sessions for children in underserved schools and orphanages in Makassar.',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=85',
        location: 'Makassar, South Sulawesi, Indonesia',
        statistics: {},
        gallery: [
          { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700&q=80', caption: 'Children learning English with volunteers' },
        ],
      },
      {
        id: 'event-details-to-be-provided',
        title: 'Orphanage Support & Community Visits',
        date: 'Ongoing Program',
        category: 'COMMUNITY',
        description: 'Regular visits, donations, and hands-on activities bringing joy, mentorship, and essentials to local orphanages.',
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=85',
        location: 'Makassar, South Sulawesi, Indonesia',
        statistics: {},
        gallery: [
          { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&q=80', caption: 'Volunteers spending time with children' },
        ],
      },
      {
        id: 'event-details-to-be-provided',
        title: '[EVENT TITLE TO BE PROVIDED]',
        date: '[EVENT DATE TO BE PROVIDED]',
        category: 'EVENT',
        description: '[Event description, location, and verified results will be added when official information is provided.]',
        image: null,
        location: null,
        statistics: {},
        gallery: [],
      },
    ],
  };

  function resolveAssetPath(p) {
    if (!p) return p;
    const isSubdir = window.location.pathname.includes('/events/');
    return (isSubdir && p.startsWith('assets/')) ? '../' + p : p;
  }

  function getCauseIconSvg(id) {
    switch (id) {
      case 'childhood-cancer':
        return `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" class="cause-svg" aria-hidden="true">
          <path d="M24 6 C20 16 14 26 12 36 C10 42 16 44 20 40 L24 35 L28 40 C32 44 38 42 36 36 C34 26 28 16 24 6 Z" stroke-linejoin="round"/>
          <circle cx="24" cy="20" r="3.5" fill="currentColor" stroke="none" opacity="0.35"/>
        </svg>`;
      case 'diabetes':
        return `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" class="cause-svg" aria-hidden="true">
          <circle cx="24" cy="24" r="16" stroke-width="3.5"/>
          <path d="M24 15 C24 15 18 23 18 27 C18 30.3 20.7 33 24 33 C27.3 33 30 30.3 30 27 C30 23 24 15 24 15 Z" fill="currentColor" stroke="none" opacity="0.35"/>
        </svg>`;
      case 'disaster-relief':
        return `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" class="cause-svg" aria-hidden="true">
          <path d="M24 6 L38 12 V24 C38 33 24 42 24 42 C24 42 10 33 10 24 V12 L24 6 Z" stroke-linejoin="round"/>
          <path d="M24 17 V31 M17 24 H31" stroke-linecap="round"/>
        </svg>`;
      case 'environment':
        return `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" class="cause-svg" aria-hidden="true">
          <path d="M14 36 C14 36 12 22 26 10 C26 10 38 10 38 22 C38 36 24 38 14 36 Z" stroke-linejoin="round"/>
          <path d="M14 36 C22 30 26 22 30 16" stroke-linecap="round"/>
          <path d="M23 25 C28 26 31 28 34 32" stroke-linecap="round"/>
        </svg>`;
      case 'hunger':
        return `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" class="cause-svg" aria-hidden="true">
          <path d="M10 24 C10 32 16 38 24 38 C32 38 38 32 38 24 H10 Z" stroke-linejoin="round"/>
          <path d="M24 38 V42 M16 42 H32" stroke-linecap="round"/>
          <path d="M17 16 C17 16 20 18 20 21 M24 11 C24 11 27 14 27 21 M31 16 C31 16 34 18 34 21" stroke-linecap="round"/>
        </svg>`;
      case 'youth':
        return `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" class="cause-svg" aria-hidden="true">
          <polygon points="24,7 28.8,17 39.8,18.6 31.9,26.3 33.8,37.2 24,32 14.2,37.2 16.1,26.3 8.2,18.6 19.2,17" stroke-linejoin="round"/>
          <circle cx="24" cy="22" r="3" fill="currentColor" stroke="none" opacity="0.35"/>
        </svg>`;
      default:
        return `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" class="cause-svg" aria-hidden="true">
          <circle cx="24" cy="24" r="16"/>
        </svg>`;
    }
  }

  function renderPillars() {
    const grid = $('#pillar-grid');
    if (!grid) return;
    grid.innerHTML = siteData.pillars.map(pillar => `
      <article class="wwd-card" tabindex="0" role="button" aria-haspopup="dialog" aria-expanded="false" aria-label="View details for cause ${pillar.number}: ${pillar.name}" data-pillar-id="${pillar.id}">
        <div class="wwd-card-number" aria-hidden="true">${pillar.number}</div>
        <div class="wwd-card-image ${pillar.image ? '' : 'wwd-card-graphic-wrap'}" aria-hidden="true">
          ${pillar.image ? `
            <img src="${resolveAssetPath(pillar.image)}" alt="${pillar.alt || pillar.name}" loading="eager" style="${pillar.imagePosition ? `object-position: ${pillar.imagePosition};` : ''}" />
          ` : `
            <div class="wwd-cause-graphic cause-${pillar.id}">
              ${getCauseIconSvg(pillar.id)}
              <span class="wwd-cause-badge">${pillar.name}</span>
            </div>
          `}
        </div>
        <div class="wwd-card-content">
          <h3 class="wwd-card-title">${pillar.name}</h3>
          <p>${pillar.description}</p>
          <span class="wwd-arrow" aria-hidden="true">→</span>
        </div>
      </article>
    `).join('');
  }

  function initCauseModal() {
    const section   = $('#what-we-do');
    const grid      = $('#pillar-grid');
    const overlay   = $('#cause-modal-overlay');
    const backdrop  = $('#cause-modal-backdrop');
    const dialog    = $('#cause-modal-dialog');
    const leftStage = $('#cause-modal-left-stage');
    const modalBody = $('#cause-modal-body');
    const closeBtn  = $('#cause-modal-close');
    if (!grid || !overlay || !backdrop || !dialog || !modalBody || !leftStage) return;

    let lastFocusedElement = null;
    let isTransitioning = false;
    let isOpen = false;
    let currentSelectedCard = null;
    let cleanupTimeout = null;

    function openCauseModal(pillarId) {
      if (isOpen) return;
      const pillar = siteData.pillars.find(p => p.id === pillarId);
      const cards = $$('.wwd-card', grid);
      const selectedIndex = cards.findIndex(c => c.dataset.pillarId === pillarId);
      if (!pillar || selectedIndex === -1) return;

      const selectedCard = cards[selectedIndex];
      currentSelectedCard = selectedCard;
      lastFocusedElement = (document.activeElement && document.activeElement !== document.body)
        ? document.activeElement
        : selectedCard;

      if (lastFocusedElement && lastFocusedElement.setAttribute) {
        lastFocusedElement.setAttribute('aria-expanded', 'true');
      }

      clearTimeout(cleanupTimeout);
      isTransitioning = true;
      isOpen = true;

      // 1. Capture original bounding rects of all 8 cards in viewport space
      const originalRects = cards.map(c => c.getBoundingClientRect());
      const selectedRect = originalRects[selectedIndex];
      const isMobile = window.innerWidth <= 960;

      // 2. Populate Cause Details on the Right
      modalBody.innerHTML = `
        <div class="cause-modal-body-container">
          <div class="cause-modal-meta">
            <span class="cause-modal-num-badge">CAUSE ${pillar.number}</span>
            <span class="cause-modal-tag">LIONS GLOBAL CAUSE</span>
          </div>
          <h2 id="cause-modal-title" class="cause-modal-title display-headline">${pillar.name}</h2>
          <div class="cause-modal-divider"></div>
          <p class="cause-modal-desc">${pillar.description}</p>
          <div class="cause-modal-pillar-highlight">
            <div class="cause-highlight-item">
              <span class="cause-highlight-label">PILLAR NO.</span>
              <span class="cause-highlight-val">${pillar.number} OF 08</span>
            </div>
            <div class="cause-highlight-item">
              <span class="cause-highlight-label">SCOPE</span>
              <span class="cause-highlight-val">GLOBAL &amp; LOCAL</span>
            </div>
            <div class="cause-highlight-item">
              <span class="cause-highlight-label">ACTION</span>
              <span class="cause-highlight-val">YOUTH-LED</span>
            </div>
          </div>
          <div class="cause-modal-actions">
            <a href="#collaborate" class="cause-modal-cta-btn" id="cause-modal-support-btn">SUPPORT THIS CAUSE →</a>
            <button type="button" class="cause-modal-close-btn" id="cause-modal-dismiss-btn" aria-label="Close cause details">CLOSE</button>
          </div>
        </div>
      `;

      const dismissBtn = $('#cause-modal-dismiss-btn', modalBody);
      if (dismissBtn) dismissBtn.addEventListener('click', closeModal);

      const supportBtn = $('#cause-modal-support-btn', modalBody);
      if (supportBtn) {
        supportBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const target = document.querySelector('#collaborate');
          closeModal({ restoreFocus: false });
          if (target) {
            requestAnimationFrame(() => {
              smoothScrollTo(target);
            });
            setTimeout(() => {
              const firstInput = target.querySelector('#field-name');
              if (firstInput) {
                firstInput.focus({ preventScroll: true });
              } else {
                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
              }
            }, prefersReducedMotion ? 50 : 650);
          }
        });
      }

      // Unhide overlay & backdrop to measure stage layout
      backdrop.removeAttribute('hidden');
      overlay.removeAttribute('hidden');
      if (section) section.classList.add('cause-detail-active');
      document.documentElement.classList.add('cause-detail-active');
      document.body.classList.add('cause-detail-active');
      document.body.style.overflow = 'hidden';

      // 3. Compute target coordinates for the selected card and stacked cards on the LEFT
      const stageRect = leftStage.getBoundingClientRect();
      const cardW = selectedRect.width;
      const cardH = selectedRect.height;

      let targetCenterX, targetCenterY, targetScale;

      if (!isMobile) {
        // Desktop: Left 48% column stage
        targetCenterX = stageRect.left + stageRect.width / 2;
        targetCenterY = stageRect.top + stageRect.height / 2;
        const maxScaleW = (stageRect.width * 0.76) / cardW;
        const maxScaleH = (stageRect.height * 0.88) / cardH;
        targetScale = Math.min(maxScaleW, maxScaleH, 1.85);
      } else {
        // Mobile: Stacked layout above details
        targetCenterX = stageRect.left + stageRect.width / 2;
        targetCenterY = stageRect.top + stageRect.height * 0.48;
        targetScale = Math.min((stageRect.width * 0.88) / cardW, (stageRect.height * 0.82) / cardH, 1.05);
      }

      if (prefersReducedMotion) {
        backdrop.classList.add('open');
        overlay.classList.add('open');
        cards.forEach((c, i) => {
          if (i === selectedIndex) {
            c.classList.add('is-selected');
          } else {
            c.classList.add('is-stacked');
          }
        });
        isTransitioning = false;
        if (closeBtn) closeBtn.focus();
        return;
      }

      const selInitCenterX = selectedRect.left + cardW / 2;
      const selInitCenterY = selectedRect.top + cardH / 2;
      const selDx = targetCenterX - selInitCenterX;
      const selDy = targetCenterY - selInitCenterY;

      // Sort surrounding cards by distance from selected card for natural staggered motion
      const surrounding = cards
        .map((c, i) => {
          if (i === selectedIndex) return null;
          const rect = originalRects[i];
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dist = Math.hypot(cx - selInitCenterX, cy - selInitCenterY);
          return { card: c, index: i, rect, cx, cy, dist };
        })
        .filter(Boolean)
        .sort((a, b) => a.dist - b.dist);

      // 4. Animate Selected Card to the LEFT column with prominent elevation
      selectedCard.classList.add('is-animating', 'is-selected');
      selectedCard.style.zIndex = '2200';
      selectedCard.style.transition = 'transform 750ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 750ms cubic-bezier(0.22, 1, 0.36, 1), border-color 750ms ease';
      selectedCard.style.transform = `translate3d(${selDx}px, ${selDy}px, 0) scale(${targetScale})`;
      selectedCard.style.boxShadow = '0 32px 70px -10px rgba(13, 27, 62, 0.28), 0 16px 32px -6px rgba(13, 27, 62, 0.16)';
      selectedCard.style.borderColor = 'var(--campaign-blue)';

      // 5. Animate surrounding 7 cards inward behind selected card on the LEFT with staggered delays
      surrounding.forEach((item, rank) => {
        const { card, cx, cy } = item;
        card.classList.add('is-animating', 'is-stacked');
        card.style.zIndex = `${2150 - rank}`;
        card.style.pointerEvents = 'none';

        const offsetIndex = rank - 3;
        const stackOffsetX = !isMobile ? offsetIndex * 12 : offsetIndex * 4;
        const stackOffsetY = !isMobile ? Math.abs(offsetIndex) * 6 - 8 : (rank + 1) * 3;
        const depthScale = targetScale * (0.94 - rank * 0.012);

        const cardDx = (targetCenterX + stackOffsetX) - cx;
        const cardDy = (targetCenterY + stackOffsetY) - cy;

        const delay = Math.round(25 + rank * 30);

        card.style.transition = `transform 750ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, opacity 750ms ease ${delay}ms, box-shadow 750ms ease ${delay}ms`;
        card.style.transform = `translate3d(${cardDx}px, ${cardDy}px, 0) scale(${depthScale})`;
        card.style.opacity = `${Math.max(0.65, 0.88 - rank * 0.04)}`;
        card.style.boxShadow = '0 12px 28px rgba(13, 27, 62, 0.10)';
      });

      // 6. Reveal backdrop and slide details dialog in from the RIGHT
      requestAnimationFrame(() => {
        backdrop.classList.add('open');
        overlay.classList.add('open');
      });

      // 7. Transition completion
      cleanupTimeout = setTimeout(() => {
        isTransitioning = false;
        if (closeBtn) closeBtn.focus();
      }, 820);
    }

    function closeModal(options) {
      if (!isOpen) return;
      const restoreFocus = options && typeof options.restoreFocus === 'boolean' ? options.restoreFocus : true;
      clearTimeout(cleanupTimeout);
      isTransitioning = true;
      isOpen = false;

      const cards = $$('.wwd-card', grid);

      // Release body & html scroll locks immediately so page can scroll smoothly
      document.body.style.overflow = '';
      document.documentElement.classList.remove('cause-detail-active');
      document.body.classList.remove('cause-detail-active');
      backdrop.style.pointerEvents = 'none';
      overlay.style.pointerEvents = 'none';

      if (prefersReducedMotion) {
        backdrop.classList.remove('open');
        overlay.classList.remove('open');
        backdrop.setAttribute('hidden', '');
        overlay.setAttribute('hidden', '');
        backdrop.style.pointerEvents = '';
        overlay.style.pointerEvents = '';
        if (section) section.classList.remove('cause-detail-active');
        cards.forEach(c => {
          c.classList.remove('is-selected', 'is-stacked', 'is-animating');
          c.removeAttribute('style');
        });
        if (lastFocusedElement) {
          if (lastFocusedElement.setAttribute) lastFocusedElement.setAttribute('aria-expanded', 'false');
          if (restoreFocus) lastFocusedElement.focus();
        }
        isTransitioning = false;
        currentSelectedCard = null;
        return;
      }

      // 1. Details panel animates out to the RIGHT, backdrop fades out
      backdrop.classList.remove('open');
      overlay.classList.remove('open');
      if (section) section.classList.remove('cause-detail-active');

      // 2. Coordinated reverse animation:
      // Selected card moves back to exact original grid location
      // Surrounding cards animate outward from behind selected card
      setTimeout(() => {
        if (currentSelectedCard) {
          currentSelectedCard.style.transition = 'transform 680ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 680ms cubic-bezier(0.22, 1, 0.36, 1), border-color 680ms ease';
          currentSelectedCard.style.transform = 'translate3d(0, 0, 0) scale(1)';
          currentSelectedCard.style.boxShadow = '';
          currentSelectedCard.style.borderColor = '';
        }

        const otherCards = cards.filter(c => c !== currentSelectedCard);
        otherCards.forEach((card, rank) => {
          const reverseDelay = Math.round(rank * 25);
          card.style.transition = `transform 650ms cubic-bezier(0.22, 1, 0.36, 1) ${reverseDelay}ms, opacity 650ms ease ${reverseDelay}ms, box-shadow 650ms ease ${reverseDelay}ms`;
          card.style.transform = 'translate3d(0, 0, 0) scale(1)';
          card.style.opacity = '1';
          card.style.boxShadow = '';
        });
      }, 60);

      // 3. Complete cleanup when transition finishes
      cleanupTimeout = setTimeout(() => {
        backdrop.setAttribute('hidden', '');
        overlay.setAttribute('hidden', '');
        backdrop.style.pointerEvents = '';
        overlay.style.pointerEvents = '';
        document.body.style.overflow = '';
        document.documentElement.classList.remove('cause-detail-active');
        document.body.classList.remove('cause-detail-active');

        cards.forEach(card => {
          card.classList.remove('is-selected', 'is-stacked', 'is-animating');
          card.removeAttribute('style');
        });

        if (lastFocusedElement) {
          if (lastFocusedElement.setAttribute) {
            lastFocusedElement.setAttribute('aria-expanded', 'false');
          }
          if (restoreFocus) {
            lastFocusedElement.focus();
          }
        }

        isTransitioning = false;
        currentSelectedCard = null;
      }, 780);
    }

    // Grid Click & Keyboard Handlers
    if (grid) {
      grid.addEventListener('click', e => {
        const card = e.target.closest('.wwd-card');
        if (!card) return;
        const pillarId = card.dataset.pillarId;
        if (pillarId) openCauseModal(pillarId);
      });

      grid.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          const card = e.target.closest('.wwd-card');
          if (!card) return;
          e.preventDefault();
          const pillarId = card.dataset.pillarId;
          if (pillarId) openCauseModal(pillarId);
        }
      });
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    });

    dialog.addEventListener('keydown', e => {
      if (e.key !== 'Tab') return;
      const focusable = dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });

    // Handle viewport resize safely
    window.addEventListener('resize', debounce(() => {
      if (isOpen && !isTransitioning) {
        closeModal();
      }
    }, 200));
  }

  function renderEventTimeline() {
    const timeline = $('#event-timeline');
    if (!timeline) return;
    const isSubdir = window.location.pathname.includes('/events/');
    const basePath = isSubdir ? '' : 'events/';

    timeline.innerHTML = siteData.events.map((event, index) => {
      const isRight = index % 2 === 1;
      const sideClass = isRight ? 'timeline-side-right' : 'timeline-side-left';

      const cardHtml = `
        <div class="timeline-event-card">
          <div class="timeline-image-wrap ${event.image ? '' : 'timeline-image-placeholder'}" aria-hidden="true">
            ${event.image ? `
              <img src="${resolveAssetPath(event.image)}" alt="${event.title}" loading="eager" />
            ` : `
              <div class="timeline-placeholder-content">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="timeline-placeholder-icon" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <path d="M21 15l-5-5L5 21"/>
                </svg>
                <span>EVENT IMAGE TO BE PROVIDED</span>
              </div>
            `}
          </div>
          <div class="timeline-card-content">
            <div class="timeline-card-meta">
              <span class="timeline-category-tag">${event.category || 'EVENT'}</span>
              <span class="timeline-card-date-inline">${event.date}</span>
            </div>
            <h3 class="timeline-event-title">${event.title}</h3>
            <p class="timeline-event-desc">${event.description}</p>
            <div class="timeline-card-bottom">
              <a class="timeline-cta-btn" href="${basePath}${event.id}.html">VIEW EVENT <span class="cta-arrow" aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      `;

      const dateHtml = `
        <div class="timeline-date-display">
          <span class="timeline-date-primary">${event.date}</span>
          ${event.location ? `<span class="timeline-location-tag">📍 ${event.location.split(',')[0]}</span>` : ''}
        </div>
      `;

      return `
        <article class="timeline-row ${sideClass}" data-index="${index}">
          <div class="timeline-col-left ${isRight ? 'timeline-date-col' : 'timeline-card-col'}">
            ${isRight ? dateHtml : cardHtml}
          </div>
          <div class="timeline-col-center">
            <div class="timeline-node" aria-hidden="true">
              <span class="timeline-node-dot"></span>
            </div>
          </div>
          <div class="timeline-col-right ${isRight ? 'timeline-card-col' : 'timeline-date-col'}">
            ${isRight ? cardHtml : dateHtml}
          </div>
        </article>
      `;
    }).join('');
  }

  function renderMemberCard(member, isFeatured = false) {
    const hasPhoto = Boolean(member.image);
    const photoHtml = hasPhoto
      ? `<div class="team-card-avatar-wrap">
           <div class="team-avatar-circle">
             <img src="${member.image}" alt="${member.name}" class="team-card-avatar-img" loading="lazy" style="${member.imagePosition ? `object-position: ${member.imagePosition};` : ''}" />
           </div>
         </div>`
      : `<div class="team-card-avatar-wrap">
           <div class="team-avatar-circle team-avatar-placeholder" aria-label="Photo coming soon">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="placeholder-avatar-svg" aria-hidden="true">
               <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
             </svg>
             <span class="placeholder-avatar-text">COMING SOON</span>
           </div>
         </div>`;

    const agePill = member.age ? `<span class="team-pill team-age-pill">${member.age} YRS</span>` : '';
    const deptPill = member.department ? `<span class="team-pill team-dept-pill">${member.department}</span>` : '';
    
    const quoteHtml = member.quote
      ? `<blockquote class="team-card-quote"><p>“${member.quote}”</p></blockquote>`
      : '';

    let socialHtml = '';
    const socials = [];
    if (member.instagram) {
      socials.push(`
        <a href="${member.instagram.url}" target="_blank" rel="noopener noreferrer" class="team-social-badge" title="Instagram: ${member.instagram.handle}" onclick="event.stopPropagation();" aria-label="${member.name} on Instagram">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="social-icon-svg" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
          </svg>
          <span>${member.instagram.handle}</span>
        </a>
      `);
    }
    if (member.linkedin) {
      socials.push(`
        <a href="${member.linkedin.url}" target="_blank" rel="noopener noreferrer" class="team-social-badge" title="LinkedIn Profile" onclick="event.stopPropagation();" aria-label="${member.name} on LinkedIn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="social-icon-svg" aria-hidden="true">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
          <span>${member.linkedin.handle || 'LinkedIn'}</span>
        </a>
      `);
    }
    if (member.substack) {
      socials.push(`
        <span class="team-social-badge team-substack-badge" title="Substack: ${member.substack.publication}" onclick="event.stopPropagation();">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="social-icon-svg" aria-hidden="true">
            <path d="M4 4h16v3H4zM4 9h16v3H4zM4 14l8 6 8-6v6H4z"/>
          </svg>
          <span>${member.substack.handle || member.substack.publication}</span>
        </span>
      `);
    }
    if (socials.length) {
      socialHtml = `<div class="team-card-socials-row">${socials.join('')}</div>`;
    }

    return `
      <article class="team-profile-card ${isFeatured ? 'team-card-featured' : ''} ${hasPhoto ? 'has-portrait' : 'is-placeholder-card'}" data-member-id="${member.id}" tabindex="0" role="button" aria-haspopup="dialog" aria-label="View profile of ${member.name}">
        <div class="team-card-top">
          ${photoHtml}
        </div>
        <div class="team-card-main">
          <div class="team-card-pills-row">
            ${deptPill}
            ${agePill}
          </div>
          <h3 class="team-profile-name">${member.name}</h3>
          ${quoteHtml}
          ${socialHtml}
          <div class="team-card-hover-action">
            <span class="team-view-text">VIEW PROFILE <span class="action-arrow" aria-hidden="true">→</span></span>
          </div>
        </div>
      </article>
    `;
  }

  function renderTeamDirectory() {
    const directory = $('#team-directory-content');
    if (!directory) return;

    directory.innerHTML = siteData.teamDepartments.map((dept, deptIndex) => {
      const leaders = dept.members.filter(m => m.isLeader);
      const members = dept.members.filter(m => !m.isLeader);

      let layoutHtml = '';
      if (leaders.length > 0) {
        layoutHtml = `
          <div class="team-leadership-row">
            <div class="team-leadership-grid">
              ${leaders.map(m => renderMemberCard(m, true)).join('')}
            </div>
          </div>
          ${members.length > 0 ? `
            <div class="team-members-wrapper">
              <div class="team-members-grid ${dept.id === 'executive' ? 'team-grid-executive' : ''}">
                ${members.map(m => renderMemberCard(m, false)).join('')}
              </div>
            </div>
          ` : ''}
        `;
      } else {
        layoutHtml = `
          <div class="team-members-wrapper">
            <div class="team-members-grid ${dept.id === 'executive' ? 'team-grid-executive' : ''}">
              ${members.map(m => renderMemberCard(m, false)).join('')}
            </div>
          </div>
        `;
      }

      return `
        <section class="team-department-block" id="dept-${dept.id}" aria-labelledby="dept-heading-${dept.id}">
          <div class="team-dept-header">
            <div class="team-dept-label-wrap">
              <span class="section-label">${dept.number} — ${dept.name}</span>
            </div>
            <h2 id="dept-heading-${dept.id}" class="team-dept-title display-headline">${dept.name}</h2>
            <p class="team-dept-intro">${dept.description}</p>
          </div>
          ${layoutHtml}
        </section>
      `;
    }).join('');

    initTeamModal();
  }

  function initTeamModal() {
    const overlay = $('#team-modal-overlay');
    const modalBody = $('#team-modal-body');
    const closeBtn = $('#team-modal-close');
    const backdrop = $('#team-modal-backdrop');
    if (!overlay || !modalBody) return;

    let lastFocusedElement = null;

    function openModalForMember(memberId) {
      let foundMember = null;
      for (const dept of siteData.teamDepartments) {
        const m = dept.members.find(item => item.id === memberId);
        if (m) { foundMember = m; break; }
      }
      if (!foundMember) return;

      lastFocusedElement = document.activeElement;

      const hasPhoto = Boolean(foundMember.image);
      const photoHtml = hasPhoto
        ? `<div class="modal-portrait-circle">
             <img src="${foundMember.image}" alt="${foundMember.name}" class="modal-portrait-img" style="${foundMember.imagePosition ? `object-position: ${foundMember.imagePosition};` : ''}" />
           </div>`
        : `<div class="modal-portrait-circle modal-portrait-placeholder" aria-label="Photo coming soon">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="modal-placeholder-svg" aria-hidden="true">
               <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
             </svg>
             <span class="modal-placeholder-tag">PHOTO COMING SOON</span>
           </div>`;

      let socialsHtml = '';
      const socialButtons = [];
      if (foundMember.instagram) {
        socialButtons.push(`
          <a href="${foundMember.instagram.url}" target="_blank" rel="noopener noreferrer" class="btn-primary modal-action-btn" aria-label="Follow ${foundMember.name} on Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="modal-btn-svg" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
            <span>Instagram → ${foundMember.instagram.handle}</span>
          </a>
        `);
      }
      if (foundMember.linkedin) {
        socialButtons.push(`
          <a href="${foundMember.linkedin.url}" target="_blank" rel="noopener noreferrer" class="btn-outline-light modal-action-btn" aria-label="Connect with ${foundMember.name} on LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="modal-btn-svg" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            <span>LinkedIn Profile →</span>
          </a>
        `);
      }
      if (foundMember.substack) {
        socialButtons.push(`
          <div class="modal-substack-info">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="modal-btn-svg" aria-hidden="true">
              <path d="M4 4h16v3H4zM4 9h16v3H4zM4 14l8 6 8-6v6H4z"/>
            </svg>
            <span class="substack-text"><strong>${foundMember.substack.publication}</strong> ${foundMember.substack.handle ? `(${foundMember.substack.handle})` : ''}</span>
          </div>
        `);
      }

      if (socialButtons.length) {
        socialsHtml = `<div class="modal-socials-container">${socialButtons.join('')}</div>`;
      }

      modalBody.innerHTML = `
        <div class="modal-profile-layout">
          <div class="modal-avatar-column">
            ${photoHtml}
          </div>
          <div class="modal-details-column">
            <div class="modal-pills-row">
              ${foundMember.department ? `<span class="modal-pill modal-dept-pill">${foundMember.department}</span>` : ''}
              ${foundMember.age ? `<span class="modal-pill modal-age-pill">${foundMember.age} YEARS OLD</span>` : ''}
            </div>
            <h2 id="team-modal-name" class="modal-member-fullname display-headline">${foundMember.name}</h2>
            ${foundMember.quote ? `
              <div class="modal-quote-box">
                <span class="modal-quote-mark" aria-hidden="true">“</span>
                <blockquote class="modal-quote-content">
                  <p>${foundMember.quote}</p>
                </blockquote>
              </div>
            ` : ''}
            ${socialsHtml}
          </div>
        </div>
      `;

      overlay.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          overlay.classList.add('open');
        });
      });

      if (closeBtn) setTimeout(() => closeBtn.focus(), 60);
    }

    function closeModal() {
      if (!overlay || overlay.hasAttribute('hidden')) return;
      overlay.classList.remove('open');
      setTimeout(() => {
        overlay.setAttribute('hidden', '');
        document.body.style.overflow = '';
        if (lastFocusedElement) {
          lastFocusedElement.focus();
        }
      }, 320);
    }

    const cards = $$('.team-profile-card', $('#team-directory-content'));
    cards.forEach(card => {
      const memberId = card.dataset.memberId;
      card.addEventListener('click', () => openModalForMember(memberId));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModalForMember(memberId);
        }
      });
    });

    if (closeBtn) closeBtn.onclick = closeModal;
    if (backdrop) backdrop.onclick = closeModal;
    overlay.onclick = e => {
      if (e.target === overlay || e.target === backdrop) closeModal();
    };

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !overlay.hasAttribute('hidden')) {
        closeModal();
      }
    });
  }

  function renderEventDetail() {
    const content = $('#event-detail-content');
    const eventId = document.body.dataset.eventId;
    if (!content || !eventId) return;
    const event = siteData.events.find(item => item.id === eventId) || siteData.events[0];
    const stats = Object.entries(event.statistics || {}).filter(([, value]) => value !== null && value !== undefined && value !== '');
    
    let galleryHtml = '';
    if (event.gallery && event.gallery.length) {
      galleryHtml = `
        <section class="event-gallery" aria-labelledby="event-gallery-heading">
          <div class="section-label">EVENT GALLERY</div>
          <h2 id="event-gallery-heading" class="display-headline">PHOTOS FROM THE FIELD</h2>
          <div class="event-gallery-grid">
            ${event.gallery.map(img => {
              const src = resolveAssetPath(typeof img === 'string' ? img : img.src);
              const caption = typeof img === 'object' && img.caption ? img.caption : event.title;
              return `
                <div class="event-gallery-item" data-caption="${caption}" data-cat="${event.category || 'EVENT'}" data-date="${event.date}" tabindex="0" role="button" aria-label="View photo: ${caption}">
                  <img src="${src}" alt="${caption}" loading="lazy" />
                  <span class="event-gallery-caption">${caption}</span>
                </div>
              `;
            }).join('')}
          </div>
        </section>
      `;
    } else {
      galleryHtml = `
        <section class="event-gallery" aria-labelledby="event-gallery-heading">
          <div class="section-label">EVENT GALLERY</div>
          <h2 id="event-gallery-heading" class="display-headline">EVENT GALLERY</h2>
          <p class="event-gallery-placeholder">Photos and additional event documentation will be added here once official event media is provided.</p>
        </section>
      `;
    }

    content.innerHTML = `
      <div class="section-label">EVENT DETAIL</div>
      <h1 id="event-detail-title" class="display-headline">${event.title}</h1>
      <div class="event-meta">
        <span>📅 ${event.date}</span>
        ${event.location ? `<span>📍 ${event.location}</span>` : '<span>📍 LOCATION TO BE PROVIDED</span>'}
        ${event.category ? `<span>🏷️ ${event.category}</span>` : ''}
      </div>
      <div class="event-detail-layout">
        <div class="event-main-image ${event.image ? '' : 'timeline-image-placeholder'}">
          ${event.image ? `<img src="${resolveAssetPath(event.image)}" alt="${event.title}" loading="eager" style="object-fit: cover; object-position: center 35%;" />` : `<span>EVENT IMAGE<br/>TO BE PROVIDED</span>`}
        </div>
        <div class="event-detail-copy">
          <h2 class="event-copy-heading">ABOUT THE EVENT</h2>
          <p>${event.description}</p>
          <div class="event-impact-block">
            <h2 class="event-impact-title">EVENT IMPACT</h2>
            ${stats.length ? `
              <div class="event-stats">
                ${stats.map(([label, value]) => `
                  <div class="event-stat-box">
                    <strong>${value}</strong>
                    <span>${label}</span>
                  </div>
                `).join('')}
              </div>
            ` : `
              <p class="event-pending">Event-specific statistics will be added when verified information is provided.</p>
            `}
          </div>
        </div>
      </div>
      ${galleryHtml}
    `;
  }

  renderPillars();
  renderEventTimeline();
  renderTeamDirectory();
  renderEventDetail();
  initCauseModal();

  /* ─── Smooth scroll (accounts for fixed nav height) ─── */
  function smoothScrollTo(el) {
    if (!el) return;
    const nav = $('#site-header');
    const offset = nav ? nav.offsetHeight + 16 : 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }

  /* ============================================================
     MOBILE MENU — defined at outer scope so all code can call it
     ============================================================ */
  const hamburger       = $('#nav-hamburger');
  const mobileMenu      = $('#mobile-menu');
  const mobileOverlay   = $('#mobile-menu-overlay');
  const mobileMenuClose = $('#mobile-menu-close');
  let   menuOpen        = false;

  function openMobileMenu() {
    if (!mobileMenu || !mobileOverlay || menuOpen) return;
    menuOpen = true;
    mobileOverlay.removeAttribute('hidden');
    /* Double rAF gives browser time to paint before CSS transition kicks in */
    requestAnimationFrame(() => requestAnimationFrame(() => mobileMenu.classList.add('open')));
    if (hamburger) hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    const firstLink = mobileMenu.querySelector('.mobile-nav-link');
    if (firstLink) setTimeout(() => firstLink.focus(), 60);
  }

  function closeMobileMenu() {
    if (!mobileMenu || !mobileOverlay || !menuOpen) return;
    menuOpen = false;
    mobileMenu.classList.remove('open');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    setTimeout(() => mobileOverlay.setAttribute('hidden', ''), 420);
  }

  if (hamburger)       hamburger.addEventListener('click', openMobileMenu);
  if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMobileMenu);
  if (mobileOverlay)   mobileOverlay.addEventListener('click', closeMobileMenu);
  if (mobileMenu) {
    mobileMenu.addEventListener('keydown', e => {
      if (e.key === 'Escape') { closeMobileMenu(); if (hamburger) hamburger.focus(); }
    });
  }

  /* ============================================================
     INTRO SCREEN
     ============================================================ */
  (function initIntro() {
    const intro  = $('#intro-screen');
    const skipBtn = $('#intro-skip');
    if (!intro) return;

    function dismiss() {
      intro.classList.add('fade-out');
      document.body.style.overflow = '';
      setTimeout(revealHeroLines, 200);
      setTimeout(() => intro.classList.add('done'), 750);
    }

    const delay = prefersReducedMotion ? 0 : 1900;
    const autoTimer = setTimeout(dismiss, delay);
    if (skipBtn) skipBtn.addEventListener('click', () => { clearTimeout(autoTimer); dismiss(); });

    document.body.style.overflow = 'hidden';
  })();

  /* ============================================================
     HERO HEADLINE REVEAL
     ============================================================ */
  function revealHeroLines() {
    $$('.hero-line').forEach((line, i) => {
      if (prefersReducedMotion) { line.classList.add('revealed'); return; }
      setTimeout(() => line.classList.add('revealed'), i * 90);
    });
  }

  if (prefersReducedMotion) revealHeroLines();

  /* ============================================================
     NAVIGATION — sticky header + active link + anchor scrolling
     ============================================================ */
  (function initNav() {
    const siteHeader = $('#site-header');
    if (!siteHeader) return;

    const isInnerPage = document.body.classList.contains('inner-page');

    /* Sticky background */
    const onScroll = throttle(() => {
      if (isInnerPage) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.toggle('scrolled', window.scrollY > 40);
      }
    }, 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* Delegate ALL anchor clicks for smooth scroll */
    document.addEventListener('click', e => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      closeMobileMenu();
      smoothScrollTo(target);
    });

    /* Active nav state via IntersectionObserver */
    const sections  = $$('section[id]');
    const navLinks  = $$('.nav-links a');
    if (!sections.length || !navLinks.length) return;

    const linkMap = {};
    navLinks.forEach(l => { const h = l.getAttribute('href'); if (h) linkMap[h] = l; });

    function setActive(id) {
      const scrolled = siteHeader.classList.contains('scrolled');
      navLinks.forEach(l => { l.classList.remove('nav-active'); l.style.color = ''; });
      const active = linkMap[`#${id}`];
      if (active) {
        active.classList.add('nav-active');
        active.style.color = scrolled ? 'var(--campaign-blue)' : 'var(--white)';
      }
    }

    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-10% 0px -70% 0px', threshold: 0 });

    sections.forEach(s => sectionObserver.observe(s));
  })();

  /* ============================================================
     HERO CURSOR PARALLAX
     ============================================================ */
  (function initHeroParallax() {
    if (prefersReducedMotion) return;
    const hero = $('.section-hero');
    if (!hero) return;
    const els = $$('[data-parallax]', hero);
    const sparks = $$('.sparkle', hero);
    if (!els.length) return;

    let mx = 0, my = 0, raf = null;
    function apply() {
      const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
      const dx = mx - cx, dy = my - cy;
      els.forEach(el => {
        const s = parseFloat(el.dataset.parallax) || 0.05;
        el.style.transform = `translate(${dx * s}px, ${dy * s}px)`;
      });
      sparks.forEach((sp, i) => {
        const s = 0.015 + i * 0.006;
        sp.style.transform = `translate(${dx * s}px, ${dy * s}px)`;
      });
      raf = null;
    }
    document.addEventListener('mousemove', e => {
      if (window.innerWidth <= 768) return;
      mx = e.clientX; my = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    }, { passive: true });
  })();

  /* ============================================================
     SCROLL PARALLAX — hero background shapes
     ============================================================ */
  (function initScrollParallax() {
    if (prefersReducedMotion) return;
    const shapes = $$('.hero-shape');
    if (!shapes.length) return;
    window.addEventListener('scroll', throttle(() => {
      const sy = window.scrollY;
      shapes.forEach((s, i) => { s.style.transform = `translateY(${sy * (i + 1) * 0.07}px)`; });
    }, 16), { passive: true });
  })();

  /* ============================================================
     INITIATIVES — desktop tab panels
     ============================================================ */
  (function initInitiatives() {
    const tabs   = $$('.init-tab');
    const panels = $$('.init-panel');
    if (!tabs.length || !panels.length) return;

    function activate(tab) {
      const targetId = tab.getAttribute('aria-controls');

      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      panels.forEach(panel => {
        if (panel.id === targetId) {
          /* Show: set display first, then fade in */
          panel.removeAttribute('hidden');
          panel.style.display = 'grid';
          panel.style.opacity = '0';
          panel.classList.add('active');
          requestAnimationFrame(() => requestAnimationFrame(() => { panel.style.opacity = '1'; }));
        } else {
          panel.classList.remove('active');
          panel.style.opacity = '0';
          setTimeout(() => {
            if (!panel.classList.contains('active')) {
              panel.setAttribute('hidden', '');
              panel.style.display = '';
              panel.style.opacity = '';
            }
          }, 380);
        }
      });
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', () => activate(tab));
      tab.addEventListener('keydown', e => {
        const list = tabs;
        const idx  = list.indexOf(tab);
        let next   = null;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
          e.preventDefault(); next = list[(idx + 1) % list.length];
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
          e.preventDefault(); next = list[(idx - 1 + list.length) % list.length];
        }
        if (next) { next.focus(); activate(next); }
      });
    });
  })();

  /* ============================================================
     ACCORDION — mobile initiatives
     ============================================================ */
  (function initAccordion() {
    const headers = $$('.acc-header');
    if (!headers.length) return;

    headers.forEach(header => {
      header.addEventListener('click', () => {
        const expanded = header.getAttribute('aria-expanded') === 'true';
        const bodyEl   = document.getElementById(header.getAttribute('aria-controls'));

        if (expanded) {
          header.setAttribute('aria-expanded', 'false');
          if (bodyEl) bodyEl.setAttribute('hidden', '');
        } else {
          /* Collapse all others */
          headers.forEach(h => {
            if (h === header) return;
            h.setAttribute('aria-expanded', 'false');
            const b = document.getElementById(h.getAttribute('aria-controls'));
            if (b) b.setAttribute('hidden', '');
          });
          header.setAttribute('aria-expanded', 'true');
          if (bodyEl) bodyEl.removeAttribute('hidden');
        }
      });
    });
  })();

  /* ============================================================
     ACTIVITY FILTER
     ============================================================ */
  (function initFilter() {
    const filterBtns = $$('.filter-btn');
    const cards      = $$('.today-card');
    if (!filterBtns.length || !cards.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        filterBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        cards.forEach(card => {
          const match = filter === 'all' || card.dataset.category === filter;
          if (match) {
            card.style.display = '';
            /* Remove fade class after display is restored */
            requestAnimationFrame(() => requestAnimationFrame(() => card.classList.remove('fade-out')));
          } else {
            card.classList.add('fade-out');
            setTimeout(() => {
              if (card.classList.contains('fade-out')) card.style.display = 'none';
            }, 320);
          }
        });
      });
    });
  })();

  /* ============================================================
     GALLERY + LIGHTBOX
     ============================================================ */
  (function initGallery() {
    const items     = $$('.gallery-item, .event-gallery-item');
    const lightbox  = $('#lightbox');
    const lbOverlay = $('#lightbox-overlay');
    const lbImg     = $('#lightbox-img');
    const lbCap     = $('#lightbox-caption');
    const lbCat     = $('#lightbox-cat');
    const lbDate    = $('#lightbox-date');
    const lbClose   = $('#lightbox-close');
    const lbPrev    = $('#lightbox-prev');
    const lbNext    = $('#lightbox-next');

    if (!lightbox || !items.length) return;

    let current = 0;
    let touchX  = 0;

    lbImg.style.transition = 'opacity 0.18s ease';

    function getData(item) {
      const img = item.querySelector('img');
      return {
        src:     img ? img.src : '',
        alt:     img ? img.alt : '',
        caption: item.dataset.caption || (img ? img.alt : ''),
        cat:     item.dataset.cat  || '',
        date:    item.dataset.date || '',
      };
    }

    function openLightbox(idx) {
      current = idx;
      const d = getData(items[idx]);
      lbImg.src = d.src; lbImg.alt = d.alt;
      lbCap.textContent  = d.caption;
      lbCat.textContent  = d.cat;
      lbDate.textContent = d.date;
      lightbox.removeAttribute('hidden');
      lbOverlay.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
      lbClose.focus();
    }

    function closeLightbox() {
      lightbox.setAttribute('hidden', '');
      lbOverlay.setAttribute('hidden', '');
      document.body.style.overflow = '';
      const item = items[current];
      if (item) item.focus();
    }

    function navigate(dir) {
      current = (current + dir + items.length) % items.length;
      const d = getData(items[current]);
      lbImg.style.opacity = '0';
      setTimeout(() => {
        lbImg.src = d.src; lbImg.alt = d.alt;
        lbCap.textContent  = d.caption;
        lbCat.textContent  = d.cat;
        lbDate.textContent = d.date;
        lbImg.style.opacity = '1';
      }, 180);
    }

    items.forEach((item, idx) => {
      item.addEventListener('click',   () => openLightbox(idx));
      item.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(idx); }
      });
    });

    lbClose   && lbClose.addEventListener('click', closeLightbox);
    lbOverlay && lbOverlay.addEventListener('click', closeLightbox);
    lbPrev    && lbPrev.addEventListener('click', () => navigate(-1));
    lbNext    && lbNext.addEventListener('click', () => navigate(1));

    document.addEventListener('keydown', e => {
      if (lightbox.hasAttribute('hidden')) return;
      if (e.key === 'Escape')     closeLightbox();
      if (e.key === 'ArrowLeft')  navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    });

    /* Touch swipe */
    lightbox.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
    lightbox.addEventListener('touchend',   e => {
      const dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 48) navigate(dx < 0 ? 1 : -1);
    }, { passive: true });
  })();

  /* ============================================================
     IMPACT COUNTERS
     ============================================================ */
  (function initCounters() {
    const els = $$('[data-target]');
    if (!els.length) return;

    function animateCount(el, target) {
      if (prefersReducedMotion) { el.textContent = target.toLocaleString(); return; }
      const duration = 1800;
      const start    = performance.now();
      function step(now) {
        const p = Math.min((now - start) / duration, 1);
        const e = 1 - Math.pow(1 - p, 3); /* ease-out cubic */
        el.textContent = Math.round(e * target).toLocaleString();
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target.toLocaleString();
      }
      requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.dataset.counted === 'false') {
          entry.target.dataset.counted = 'true';
          animateCount(entry.target, parseInt(entry.target.dataset.target, 10));
        }
      });
    }, { threshold: 0.2 });

    els.forEach(el => observer.observe(el));
  })();

  /* ============================================================
     SCROLL REVEAL
     ============================================================ */
  (function initReveal() {
    if (prefersReducedMotion) {
      $$('.reveal, .reveal-left, .reveal-right').forEach(el => el.classList.add('in-view'));
      return;
    }

    const targets = [
      { sel: '.about-grid > *',          cls: 'reveal' },
      { sel: '.impact-stats-grid > *',   cls: 'reveal' },
      { sel: '.today-card',              cls: 'reveal' },
      { sel: '.story-card',              cls: 'reveal' },
      { sel: '.team-card',               cls: 'reveal' },
      { sel: '.team-face',               cls: 'reveal' },
      { sel: '.collab-text-col',         cls: 'reveal-left' },
      { sel: '.collab-form-col',         cls: 'reveal-right' },
      { sel: '.network-inner',           cls: 'reveal' },
      { sel: '.impact-hero-stat',        cls: 'reveal' },
      { sel: '.story-grid > *',          cls: 'reveal' },
    ];

    targets.forEach(({ sel, cls }) => {
      $$(sel).forEach((el, i) => {
        if (el.classList.contains('reveal') ||
            el.classList.contains('reveal-left') ||
            el.classList.contains('reveal-right')) return;
        el.classList.add(cls);
        el.style.transitionDelay = `${Math.min(i * 0.07, 0.42)}s`;
      });
    });

    const revealObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    $$('.reveal, .reveal-left, .reveal-right').forEach(el => revealObs.observe(el));
  })();

  /* ============================================================
     STORY MODALS
     ============================================================ */
  (function initStoryModals() {
    const storyBtns = $$('button.story-read-more[data-story]');
    if (!storyBtns.length) return;

    let lastFocused = null;

    function openModal(storyId) {
      const overlay = $(`#story-modal-${storyId}`);
      if (!overlay) return;
      lastFocused = document.activeElement;

      /* Remove hidden attribute FIRST so element gets display:flex */
      overlay.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';

      /* Now trigger opacity transition */
      requestAnimationFrame(() => requestAnimationFrame(() => overlay.classList.add('open')));

      const closeBtn = overlay.querySelector('.story-modal-close');
      if (closeBtn) setTimeout(() => closeBtn.focus(), 60);
    }

    function closeModal(overlay) {
      if (!overlay) return;
      overlay.classList.remove('open');
      setTimeout(() => {
        overlay.setAttribute('hidden', '');
        document.body.style.overflow = '';
        if (lastFocused) lastFocused.focus();
      }, 360);
    }

    storyBtns.forEach(btn => {
      btn.addEventListener('click', () => openModal(btn.dataset.story));
    });

    $$('.story-modal-overlay').forEach(overlay => {
      const closeBtn = overlay.querySelector('.story-modal-close');
      if (closeBtn) closeBtn.addEventListener('click', () => closeModal(overlay));
      overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(overlay); });
      overlay.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(overlay); });
    });

    $$('.story-modal-cta a').forEach(link => {
      link.addEventListener('click', () => {
        const open = $('.story-modal-overlay.open');
        if (open) closeModal(open);
      });
    });
  })();

  /* ============================================================
     CONTACT FORM — validation + success/error state
     ============================================================ */
  (function initForm() {
    const form       = $('#collab-form');
    const successMsg = $('#form-success');
    const submitBtn  = $('#form-submit-btn');
    if (!form) return;

    const fields = [
      { id: 'field-name',    errId: 'error-name',    test: v => v.trim().length > 0,                msg: 'Please enter your name.' },
      { id: 'field-email',   errId: 'error-email',   test: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()), msg: 'Please enter a valid email address.' },
      { id: 'field-message', errId: 'error-message', test: v => v.trim().length > 0,                msg: 'Please enter a message.' },
    ];

    /* Live-clear errors as user types */
    fields.forEach(({ id, errId }) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('input', () => {
        el.classList.remove('error');
        const errEl = document.getElementById(errId);
        if (errEl) { errEl.textContent = ''; errEl.classList.remove('visible'); }
      });
    });

    function showErr(id, errId, msg) {
      const f = document.getElementById(id);
      const e = document.getElementById(errId);
      if (f) f.classList.add('error');
      if (e) { e.textContent = msg; e.classList.add('visible'); }
    }

    form.addEventListener('submit', e => {
      e.preventDefault();
      let valid = true;

      fields.forEach(({ id, errId, test, msg }) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (!test(el.value)) {
          showErr(id, errId, msg);
          valid = false;
        }
      });

      if (!valid) {
        const first = form.querySelector('.form-input.error');
        if (first) first.focus();
        return;
      }

      if (submitBtn) { submitBtn.textContent = 'SENDING…'; submitBtn.disabled = true; }

      /* Simulated send — replace with real fetch('/api/contact', ...) when backend is ready */
      setTimeout(() => {
        if (submitBtn) submitBtn.style.display = 'none';
        if (successMsg) {
          successMsg.removeAttribute('hidden');
          successMsg.focus();
        }
        form.reset();
      }, 1100);
    });
  })();

  /* ============================================================
     MOBILE — hide floating hero photos on very small screens
     ============================================================ */
  (function fixMobileHero() {
    const fix = () => {
      const hide = window.innerWidth <= 480;
      $$('.float-photo').forEach(fp => { fp.style.display = hide ? 'none' : ''; });
    };
    fix();
    window.addEventListener('resize', debounce(fix, 200));
  })();

  /* ============================================================
     LAZY LOADING FALLBACK
     ============================================================ */
  if (!('loading' in HTMLImageElement.prototype)) {
    $$('img[loading="lazy"]').forEach(img => img.removeAttribute('loading'));
  }

  /* ============================================================
     MARQUEE — CSS-driven; JS handles reduced-motion only
     ============================================================ */
  (function handleMarquee() {
    if (!prefersReducedMotion) return;
    $$('.marquee-track').forEach(t => { t.style.animation = 'none'; t.style.transform = 'none'; });
    $$('.marquee-content[aria-hidden="true"]').forEach(el => { el.style.display = 'none'; });
    $$('.marquee-content').forEach(el => { el.style.flexWrap = 'wrap'; });
  })();

  /* ============================================================
     CONSOLE BRANDING
     ============================================================ */
  console.log('%cLEO HANDS OF NURTURE', 'font-family:Georgia,serif;font-size:18px;font-weight:bold;color:#1565c0;');
  console.log('%cYouth-Led · Volunteer-Driven · Real Change · Makassar, Indonesia', 'font-family:monospace;color:#00b4d8;');

})();
