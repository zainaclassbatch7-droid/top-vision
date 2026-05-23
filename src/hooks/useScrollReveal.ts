import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const SELECTORS = [
      '.scroll-reveal',
      '.scroll-reveal-left',
      '.scroll-reveal-right',
      '.scroll-reveal-scale',
    ].join(', ');

    const revealEl = (el: Element) => {
      const htmlEl = el as HTMLElement;
      if (htmlEl.classList.contains('revealed')) return;

      const delay = htmlEl.dataset.delay;
      if (delay) htmlEl.style.transitionDelay = `${delay}ms`;

      htmlEl.classList.add('revealed');

      if (htmlEl.dataset.count) {
        animateCounter(htmlEl, parseInt(htmlEl.dataset.count, 10));
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealEl(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
    );

    const attachObserver = () => {
      const elements = document.querySelectorAll(SELECTORS);
      elements.forEach((el) => {
        // If already in viewport (e.g. first sections), reveal immediately
        const rect = el.getBoundingClientRect();
        const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (inViewport) {
          revealEl(el);
        } else {
          observer.observe(el);
        }
      });
    };

    // Run immediately + after short delay to catch dynamically mounted elements
    attachObserver();
    const t1 = setTimeout(attachObserver, 200);

    // Safety net: reveal ALL remaining hidden elements after 2s
    const t2 = setTimeout(() => {
      document.querySelectorAll(SELECTORS).forEach(revealEl);
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
}

function animateCounter(el: HTMLElement, target: number) {
  const duration = 1600;
  const suffix = el.dataset.suffix || '';
  const start = performance.now();

  const step = (now: number) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}
