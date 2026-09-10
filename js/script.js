(() => {
  'use strict';
const introCurtain = document.querySelector('.page-intro-curtain');
const heroTitle = document.querySelector('.hero-title');
const heroKicker = document.querySelector('.hero-kicker--animated');
const navItems = document.querySelectorAll('.nav-item--animated');
let introStarted = false;
const startIntro = () => {
  if (introStarted) return;
  introStarted = true;
  introCurtain?.classList.add('is-opening');
  setTimeout(() => { heroTitle?.classList.add('is-revealed'); setTimeout(() => { heroKicker?.classList.add('is-revealed'); setTimeout(() => { navItems.forEach(item => item.classList.add('is-revealed')); document.getElementById('heroScrollIndicator')?.classList.add('is-revealed'); }, 500); }, 600); }, 250);
};
window.addEventListener('load', startIntro, { once: true });
setTimeout(startIntro, 2000);
let scrollLockCount = 0;
let savedScrollY = 0;
let savedBodyStyles = null;
function lockScroll() {
  if (scrollLockCount === 0) {
    savedScrollY = window.scrollY;
    savedBodyStyles = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right,
      overflow: document.body.style.overflow,
      paddingRight: document.body.style.paddingRight,
    };
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.position = 'fixed';
    document.body.style.top = `${-savedScrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  }
  scrollLockCount++;
}
function unlockScroll() {
  scrollLockCount = Math.max(0, scrollLockCount - 1);
  if (scrollLockCount === 0) {
    document.body.style.position = savedBodyStyles.position;
    document.body.style.top = savedBodyStyles.top;
    document.body.style.left = savedBodyStyles.left;
    document.body.style.right = savedBodyStyles.right;
    document.body.style.overflow = savedBodyStyles.overflow;
    document.body.style.paddingRight = savedBodyStyles.paddingRight;
    window.scrollTo(0, savedScrollY);
  }
}
const pageBlocks = [...document.body.children].filter(
  (el) => !el.matches('.lightbox-overlay, .features-modal, .map-modal, script')
);
function setPageInert(state) {
  pageBlocks.forEach((el) => el.toggleAttribute('inert', state));
}
const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'iframe:not([tabindex="-1"])',
  '[tabindex]:not([tabindex="-1"])'
].join(',');
function trapTabKey(event, container) {
  if (event.key !== 'Tab') return;
  const focusable = [...container.querySelectorAll(FOCUSABLE_SELECTOR)]
    .filter(el => el.getClientRects().length > 0);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}
const photos = [
  {
    src: "assets/photo-1.jpg",
    srcset: "assets/photo-1.jpg 480w, assets/photo-1-800.jpg 800w, assets/photo-1-1200.jpg 1200w",
    sizes: "100vw",
    alt: "Entrée"
  },
  {
    src: "assets/photo-2.jpg",
    srcset: "assets/photo-2.jpg 480w, assets/photo-2-800.jpg 800w, assets/photo-2-1200.jpg 1200w",
    sizes: "100vw",
    alt: "Salon"
  },
  {
    src: "assets/photo-3.jpg",
    srcset: "assets/photo-3.jpg 480w, assets/photo-3-800.jpg 800w, assets/photo-3-1200.jpg 1200w",
    sizes: "100vw",
    alt: "Cuisine"
  },
  {
    src: "assets/photo-4.jpg",
    srcset: "assets/photo-4.jpg 480w, assets/photo-4-800.jpg 800w, assets/photo-4-1200.jpg 1200w",
    sizes: "100vw",
    alt: "Salle à manger"
  },
  {
    src: "assets/photo-5.jpg",
    srcset: "assets/photo-5.jpg 480w, assets/photo-5-800.jpg 800w, assets/photo-5-1200.jpg 1200w",
    sizes: "100vw",
    alt: "Chambre"
  },
  {
    src: "assets/photo-6.jpg",
    srcset: "assets/photo-6.jpg 480w, assets/photo-6-800.jpg 800w, assets/photo-6-1200.jpg 1200w",
    sizes: "100vw",
    alt: "Chambre"
  },
  {
    src: "assets/photo-7.jpg",
    srcset: "assets/photo-7.jpg 480w, assets/photo-7-800.jpg 800w, assets/photo-7-1200.jpg 1200w",
    sizes: "100vw",
    alt: "Chambre"
  },
  {
    src: "assets/photo-8.jpg",
    srcset: "assets/photo-8.jpg 480w, assets/photo-8-800.jpg 800w, assets/photo-8-1200.jpg 1200w",
    sizes: "100vw",
    alt: "Salle de bains"
  },
  {
    src: "assets/photo-9.jpg",
    srcset: "assets/photo-9.jpg 480w, assets/photo-9-800.jpg 800w, assets/photo-9-1200.jpg 1200w",
    sizes: "100vw",
    alt: "Salle d'eau"
  },
  {
    src: "assets/photo-10.jpg",
    srcset: "assets/photo-10.jpg 480w, assets/photo-10-800.jpg 800w, assets/photo-10-1200.jpg 1200w",
    sizes: "100vw",
    alt: "Mezzanine"
  },
  {
    src: "assets/photo-11.jpg",
    srcset: "assets/photo-11.jpg 480w, assets/photo-11-800.jpg 800w, assets/photo-11-1200.jpg 1200w",
    sizes: "100vw",
    alt: "Chambre"
  },
  {
    src: "assets/photo-12.jpg",
    srcset: "assets/photo-12.jpg 480w, assets/photo-12-800.jpg 800w, assets/photo-12-1200.jpg 1200w",
    sizes: "100vw",
    alt: "Chambre"
  },
  {
    src: "assets/photo-13.jpg",
    srcset: "assets/photo-13.jpg 480w, assets/photo-13-800.jpg 800w, assets/photo-13-1200.jpg 1200w",
    sizes: "100vw",
    alt: "Salle de bains"
  },
  {
    src: "assets/photo-14.jpg",
    srcset: "assets/photo-14.jpg 480w, assets/photo-14-800.jpg 800w, assets/photo-14-1200.jpg 1200w",
    sizes: "100vw",
    alt: "Chambre"
  },
  {
    src: "assets/photo-15.jpg",
    srcset: "assets/photo-15.jpg 480w, assets/photo-15-800.jpg 800w, assets/photo-15-1200.jpg 1200w",
    sizes: "100vw",
    alt: "Terrasse"
  },
  {
    src: "assets/photo-16.jpg",
    srcset: "assets/photo-16.jpg 480w, assets/photo-16-800.jpg 800w, assets/photo-16-1200.jpg 1200w",
    sizes: "100vw",
    alt: "Extérieur"
  },
  {
    src: "assets/photo-17.jpg",
    srcset: "assets/photo-17.jpg 480w, assets/photo-17-800.jpg 800w, assets/photo-17-1200.jpg 1200w",
    sizes: "100vw",
    alt: "Terrasse"
  }
];
const lb = document.getElementById('lightbox');
const rail = document.getElementById('lightboxRail');
const thumbEl = document.getElementById('lightboxThumbs');
const counter = document.getElementById('lightboxCounter');
const wrap = document.getElementById('lightboxWrap');
const closeButton = lb.querySelector('[data-lightbox-action="close"]');
let current = 0;
let thumbButtons = [];
let lightboxBuilt = false;
const drag = {
  pointerId: null,
  startX: 0,
  startY: 0,
  dx: 0,
  active: false,
  horizontal: null
};
function buildRail() {
  photos.forEach((photo) => {
    const slide = document.createElement('div');
    slide.className = 'lightbox-slide';
    const img = document.createElement('img');
    img.dataset.src = photo.src;
    if (photo.srcset) {
      img.dataset.srcset = photo.srcset;
    }
    if (photo.sizes) {
      img.dataset.sizes = photo.sizes;
    }
    img.alt = photo.alt || '';
    img.draggable = false;
    img.decoding = 'async';
    slide.appendChild(img);
    rail.appendChild(slide);
  });
}
function ensureSlideImage(index) {
  const normalized = (index + photos.length) % photos.length;
  const image = rail.children[normalized]?.querySelector('img');
  if (!image || image.src) return;
  if (image.dataset.srcset) {
    image.srcset = image.dataset.srcset;
  }
  if (image.dataset.sizes) {
    image.sizes = image.dataset.sizes;
  }
  image.src = image.dataset.src;
  delete image.dataset.src;
  delete image.dataset.srcset;
  delete image.dataset.sizes;
}
function preloadAround(index) {
  ensureSlideImage(index);
  ensureSlideImage(index - 1);
  ensureSlideImage(index + 1);
}
function buildThumbs() {
  photos.forEach((photo, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-label', 'Voir la photo ' + (index + 1));
    const img = document.createElement('img');
    img.src = photo.src.replace(/\.jpg$/i, '-thumb.jpg');
    img.alt = '';
    img.loading = 'lazy';
    button.appendChild(img);
    button.addEventListener('click', () => goTo(index));
    thumbEl.appendChild(button);
  });
  thumbButtons = [...thumbEl.querySelectorAll('button')];
}
function ensureLightboxBuilt() {
  if (lightboxBuilt) return;
  buildRail();
  buildThumbs();
  lightboxBuilt = true;
}
function goTo(index, animate = true, thumbBehavior = 'smooth') {
  current = (index + photos.length) % photos.length;
  preloadAround(current);
  rail.style.transition = animate ? '' : 'none';
  rail.style.transform = `translateX(-${current * 100}%)`;
  counter.textContent = `${current + 1} / ${photos.length}`;
  thumbButtons.forEach((button, i) => {
  const isActive = i === current;
  button.classList.toggle('active', isActive);
  if (isActive) button.setAttribute('aria-current', 'true');
  else button.removeAttribute('aria-current');
});
  if (thumbBehavior) thumbButtons[current]?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: thumbBehavior });
}
let pendingLightboxIndex = 0;
const lightboxDialog = createDialog({
  el: lb,
  closeBtn: closeButton,
  onOpen() {
    ensureLightboxBuilt();
    goTo(pendingLightboxIndex, false, false);
  },
});
function openLightbox(index, trigger) {
  pendingLightboxIndex = index;
  lightboxDialog.open(trigger);
}
const closeLightbox = lightboxDialog.close;
function lightboxNext() { goTo(current + 1); }
function lightboxPrev() { goTo(current - 1); }
document.querySelectorAll('[data-lightbox-index]').forEach(button => {
  button.addEventListener('click', () => openLightbox(Number(button.dataset.lightboxIndex), button));
});
lb.querySelector('[data-lightbox-action="previous"]').addEventListener('click', lightboxPrev);
lb.querySelector('[data-lightbox-action="next"]').addEventListener('click', lightboxNext);
function startDrag(event) {
  if (!lb.classList.contains('open') || event.button !== 0 || drag.active) return;
  drag.pointerId = event.pointerId;
  drag.startX = event.clientX;
  drag.startY = event.clientY;
  drag.dx = 0;
  drag.active = true;
  drag.horizontal = null;
  wrap.setPointerCapture(event.pointerId);
  rail.style.transition = 'none';
}
function moveDrag(event) {
  if (!drag.active || event.pointerId !== drag.pointerId) return;
  const dx = event.clientX - drag.startX;
  const dy = event.clientY - drag.startY;
  if (drag.horizontal === null && Math.max(Math.abs(dx), Math.abs(dy)) > 6) drag.horizontal = Math.abs(dx) >= Math.abs(dy);
  if (!drag.horizontal) return;
  drag.dx = dx;
  wrap.classList.add('dragging');
  rail.style.transform = `translateX(calc(-${current * 100}% + ${dx}px))`;
}
function endDrag(event) {
  if (!drag.active || event.pointerId !== drag.pointerId) return;
  const { horizontal, dx, pointerId } = drag;
  drag.active = false;
  drag.pointerId = null;
  wrap.classList.remove('dragging');
  if (wrap.hasPointerCapture(pointerId)) {
    wrap.releasePointerCapture(pointerId);
  }
  if (horizontal && Math.abs(dx) > 50) {
    dx > 0 ? lightboxPrev() : lightboxNext();
  } else {
    goTo(current);
  }
}
wrap.addEventListener('pointerdown', startDrag);
wrap.addEventListener('pointermove', moveDrag);
wrap.addEventListener('pointerup', endDrag);
wrap.addEventListener('pointercancel', endDrag);
wrap.addEventListener('lostpointercapture', endDrag);
const bg = document.querySelector('.hero-bg');
const heroContent = document.querySelector('.hero-content');
const hero = document.querySelector('.hero');
const indicator = document.getElementById('heroScrollIndicator');
const indicatorMask = indicator?.closest('.hero-scroll-indicator-mask');
const contact = document.querySelector('.contact');
const contactLayer = document.querySelector('.contact .container');
const contactRow = document.querySelector('.contact-row');
const contactTitle = document.querySelector('.contact-row h2');
const contactText = document.querySelector('.contact-row p');
const contactMails = document.querySelector('.contact-row .mails');
let heroHeight = 0;
let heroWillChange = false;
let scrollTicking = false;
let contactInRange = true;
let contactTop = 0;
let contactHeight = 0;
let stableViewportHeight = window.innerHeight;
let lastViewportWidth = window.innerWidth;
if (contact && 'IntersectionObserver' in window) {
  contactInRange = false;
  new IntersectionObserver(
    entries => { contactInRange = entries[0].isIntersecting; },
    { rootMargin: '100% 0px 100% 0px' }
  ).observe(contact);
}
const HERO_PARALLAX_RATIO = 0.6;
const HERO_FADE_SPAN = 1.2;
const INDICATOR_HIDE_AFTER = 40;
const CONTACT_FADE_SPAN = 0.60;
const CONTACT_START_OFFSET = -280;
const CONTACT_PARALLAX_SPEED = 0.45;
const CONTACT_MIN_OPACITY = 0.25;
const CONTACT_TITLE_OFFSET = 0.28;
const CONTACT_TITLE_SPAN = 1 - 0.40;
const CONTACT_TEXT_OFFSET = 0.12;
const CONTACT_TEXT_SPAN = 1 - 0.20;
const CONTACT_MAILS_SPAN = 1 - 0.25;
function measureLayout() {
  heroHeight = hero?.offsetHeight ?? 0;
  if (contact) {
    const scrollBase = scrollLockCount > 0 ? savedScrollY : window.scrollY;
    contactTop = contact.getBoundingClientRect().top + scrollBase;
    contactHeight = contact.offsetHeight;
  }
}
const clamp = (value) => Math.min(1, Math.max(0, value));
function updateScrollEffects() {
  const scrollY = window.scrollY;
let contactViewportTop = null;
if (contactInRange && contact) {
  contactViewportTop = contact.getBoundingClientRect().top;
}
  if (bg && heroContent && heroHeight) {
  if (scrollY < heroHeight) {
    const heroScroll = Math.min(scrollY, heroHeight);
    bg.style.transform = `translate3d(0, ${heroScroll * HERO_PARALLAX_RATIO}px, 0)`;
    heroContent.style.opacity = String(Math.max(0, 1 - heroScroll / (heroHeight * HERO_FADE_SPAN)));
    if (!heroWillChange) {
      bg.style.willChange = 'transform';
      heroWillChange = true;
    }
  } else if (heroWillChange) {
    bg.style.willChange = 'auto';
    heroWillChange = false;
  }
}
  if (indicatorMask) {
    indicatorMask.classList.toggle('hidden', scrollY > INDICATOR_HIDE_AFTER);
  }
    if (contactViewportTop !== null && contactLayer && contactRow) {
  const viewportHeight = stableViewportHeight;
  const contactViewportBottom = contactViewportTop + contactHeight;
  if (contactViewportTop < viewportHeight && contactViewportBottom > 0) {
    const fadeStart = viewportHeight;
    const fadeDistance = viewportHeight * CONTACT_FADE_SPAN;
    const contactProgress = Math.min(
      1,
      Math.max(0, (fadeStart - contactViewportTop) / fadeDistance)
    );
    const parallaxProgress = Math.max(
      0,
      viewportHeight - contactViewportTop
    );
      contactLayer.style.transform = `translate3d(0, ${Math.min(0, CONTACT_START_OFFSET + parallaxProgress * CONTACT_PARALLAX_SPEED)}px, 0)`;
      const titleProgress = clamp((contactProgress - CONTACT_TITLE_OFFSET) / CONTACT_TITLE_SPAN);
      const textProgress = clamp((contactProgress - CONTACT_TEXT_OFFSET) / CONTACT_TEXT_SPAN);
      const mailsProgress = clamp(contactProgress / CONTACT_MAILS_SPAN);
      contactTitle.style.opacity = String(titleProgress);
      contactText.style.opacity = String(textProgress);
      contactMails.style.opacity = String(mailsProgress);
      contact.style.opacity = String(CONTACT_MIN_OPACITY + contactProgress * (1 - CONTACT_MIN_OPACITY));
    }
  }
  scrollTicking = false;
}
function requestScrollUpdate() {
  if (!scrollTicking) { scrollTicking = true; requestAnimationFrame(updateScrollEffects); }
}
measureLayout();
window.addEventListener('scroll', requestScrollUpdate, { passive:true });
window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const widthChanged = width !== lastViewportWidth;
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  if (isMobile && !widthChanged) {
    return;
  }
  lastViewportWidth = width;
  stableViewportHeight = window.innerHeight;
  measureLayout();
  requestScrollUpdate();
}, { passive: true });
window.addEventListener('load', measureLayout, { once: true });
document.fonts.ready.then(() => { measureLayout(); requestScrollUpdate(); });
requestScrollUpdate();
const orderedPhotos = ['.photo-1','.photo-2','.photo-3','.photo-4'].map(selector => document.querySelector(selector));
const staggerDelay = 250;
const imageDelay = 630;
const imageDuration = 770;
const zoomRevealQuery = window.matchMedia('(min-width: 769px)');
const supportsIO = 'IntersectionObserver' in window;
orderedPhotos.forEach((photo) => {
  const image = photo?.querySelector('.reveal-image');
  if (image && supportsIO) {
    image.style.transition = 'none';
    image.style.opacity = 0;
  }
});
function revealPhoto(photo) {
  if (!photo) return;
  photo.classList.add('revealed');
  const image = photo.querySelector('.reveal-image');
  const morePhotos = photo.querySelector('.more-photos');
  if (!image) return;
  setTimeout(() => {
    const zoom = zoomRevealQuery.matches;
if (zoom) {
  image.style.transform = 'scale(1.15)';
  void image.offsetWidth;
  image.style.willChange = 'transform';
  image.style.transition = 'opacity 0ms linear, transform 770ms cubic-bezier(0.65,0,0.35,1)';
} else {
  image.style.transition = 'opacity 0ms linear';
}
requestAnimationFrame(() => {
  image.style.opacity = 1;
  if (zoom) image.style.transform = 'scale(1)';
  morePhotos?.classList.add('more-photos-visible');
});
    setTimeout(() => { image.style.transition = ''; image.style.opacity = ''; image.style.transform = ''; image.style.willChange = 'auto'; }, imageDuration + 50);
  }, imageDelay);
}
let nextAvailableTime = 0;
function queueReveal(photo) { const now = performance.now(); const scheduledAt = Math.max(now, nextAvailableTime); nextAvailableTime = scheduledAt + staggerDelay; setTimeout(() => revealPhoto(photo), scheduledAt - now); }
if (supportsIO) {
  const sharedPhotoObserver = new IntersectionObserver((entries) => {
    entries.filter(entry => entry.isIntersecting)
      .sort((a, b) => orderedPhotos.indexOf(a.target) - orderedPhotos.indexOf(b.target))
      .forEach(entry => {
        queueReveal(entry.target);
        sharedPhotoObserver.unobserve(entry.target);
      });
  }, { threshold: 0, rootMargin: '0px 0px -5% 0px' });
  orderedPhotos.forEach((photo) => photo && sharedPhotoObserver.observe(photo));
} else {
  orderedPhotos.forEach((photo) => revealPhoto(photo));
}
function revealOnce(selector, rootMargin) {
  const element = document.querySelector(selector);
  if (!element) return;
  if (!supportsIO) {
    element.classList.add('is-revealed');
    return;
  }
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        element.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin });
  observer.observe(element);
}
revealOnce('.hero-transition-title', '0px 0px -7% 0px');
revealOnce('.info .grid-container', '0px 0px -16% 0px');
function createDialog({ el, trigger, closeBtn, onOpen, onClose }) {
  let lastFocused = null;
  let generation = 0;
  let activeTrigger = null;
  function open(runtimeTrigger) {
    generation++;
    activeTrigger = runtimeTrigger || trigger || null;
    lastFocused = activeTrigger || document.activeElement;
    lockScroll();
    setPageInert(true);
    el.classList.add('open');
    activeTrigger?.setAttribute('aria-expanded', 'true');
    onOpen?.();
    void el.offsetWidth;
    requestAnimationFrame(() => {
      el.classList.add('visible');
      closeBtn.focus();
    });
  }
  function close() {
    if (!el.classList.contains('open')) return;
    el.classList.remove('visible');
    activeTrigger?.setAttribute('aria-expanded', 'false');
    const gen = generation;
    let finished = false;
    const onTransitionEnd = (event) => {
      if (event.target === el && event.propertyName === 'opacity') finish();
    };
    const finish = () => {
      if (finished || gen !== generation) return;
      finished = true;
      el.removeEventListener('transitionend', onTransitionEnd);
      el.classList.remove('open');
      unlockScroll();
      setPageInert(false);
      activeTrigger = null;
      lastFocused?.focus({ preventScroll: true });
      onClose?.();
    };
    el.addEventListener('transitionend', onTransitionEnd);
    window.setTimeout(finish, 400);
  }
  trigger?.addEventListener('click', () => open(trigger));
  closeBtn.addEventListener('click', close);
  el.addEventListener('click', (event) => {
    if (event.target === el) close();
  });
  return { open, close };
}
const featuresDialog = createDialog({
  el: document.getElementById('featuresModal'),
  trigger: document.getElementById('featuresTrigger'),
  closeBtn: document.getElementById('featuresModalClose'),
});
const mapDialog = createDialog({
  el: document.getElementById('mapModal'),
  trigger: document.getElementById('mapTrigger'),
  closeBtn: document.getElementById('mapModalClose'),
  onOpen() {
    const mapIframe = document.getElementById('mapIframe');
    if (mapIframe?.dataset.src && !mapIframe.src) {
      mapIframe.src = mapIframe.dataset.src;
    }
  },
});
const mapModalEl = document.getElementById('mapModal');
const mapIframeEl = document.getElementById('mapIframe');
const mapModalCloseBtn = document.getElementById('mapModalClose');
window.addEventListener('blur', () => {
  setTimeout(() => {
    if (mapModalEl.classList.contains('open') && document.activeElement === mapIframeEl) {
      mapModalCloseBtn.focus();
    }
  }, 0);
});
const canHover = window.matchMedia('(hover: hover) and (pointer: fine)');
[
  ['.btn-primary, .btn-secondary, .btn-tertiary', 'btn-rolled'],
  ['.lb-btn', 'lb-rolled']
].forEach(function ([selector, className]) {
  document.querySelectorAll(selector).forEach(function (btn) {
    btn.addEventListener('mouseenter', function () {
      if (!canHover.matches) return;
      btn.classList.remove(className);
      void btn.offsetWidth;
      btn.classList.add(className);
    });
  });
});
const dialogRegistry = [
  { el: lb, close: closeLightbox },
  { el: document.getElementById('featuresModal'), close: featuresDialog.close },
  { el: document.getElementById('mapModal'), close: mapDialog.close },
];
document.addEventListener('keydown', (event) => {
  const active = dialogRegistry.find((d) => d.el.classList.contains('open'));
  if (!active) return;
  if (event.key === 'Escape') { active.close(); return; }
  if (active.el === lb) {
    if (event.key === 'ArrowRight') { goTo(current + 1, !event.repeat, 'auto'); return; }
    if (event.key === 'ArrowLeft')  { goTo(current - 1, !event.repeat, 'auto'); return; }
  }
  trapTabKey(event, active.el);
});
})();
const box = document.querySelector('.description-block1');
if (box) {
  const text = box.querySelector('.description-body');
  const btn = box.querySelector('.description-toggle');
  function setExpanded() {
    box.classList.remove('is-collapsed');
    btn.hidden = true;
    btn.setAttribute('aria-expanded', 'true');
    requestAnimationFrame(() => {
      measureLayout();
      requestAnimationFrame(() => {
        requestScrollUpdate();
      });
    });
  }
  function refreshDescriptionToggle() {
    if (btn.hidden) return;
    const wasCollapsed = box.classList.contains('is-collapsed');
    box.classList.remove('is-collapsed');
    const fullHeight = text.scrollHeight;
    box.classList.add('is-collapsed');
    const visibleHeight = text.clientHeight;
    const needsToggle = fullHeight > visibleHeight + 2;
    btn.hidden = !needsToggle;
    if (!needsToggle) {
      box.classList.remove('is-collapsed');
      btn.setAttribute('aria-expanded', 'true');
    } else if (!wasCollapsed) {
      setExpanded();
    }
  }
  btn.addEventListener('click', setExpanded);
  refreshDescriptionToggle();
  window.addEventListener('resize', refreshDescriptionToggle, {
    passive: true
  });
}