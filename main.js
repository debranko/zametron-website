/* =========================================================
   Zametron - main.js
   Premium interactive behaviors
   ========================================================= */

(function () {
  'use strict';

  /* ---------------------------------------------------------
     Loading Screen
     --------------------------------------------------------- */
  window.addEventListener('load', function () {
    var loader = document.querySelector('.loader');
    if (loader) {
      setTimeout(function () {
        loader.classList.add('loaded');
      }, 800);
    }
  });

  /* ---------------------------------------------------------
     Particle Canvas Background
     --------------------------------------------------------- */
  function initParticles() {
    var canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    var particles = [];
    var particleCount = 60;
    var mouseX = -1000;
    var mouseY = -1000;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    for (var i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.3 + 0.1
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(242, 140, 40, ' + p.alpha + ')';
        ctx.fill();

        /* Draw lines between nearby particles */
        for (var j = i + 1; j < particles.length; j++) {
          var p2 = particles[j];
          var dx = p.x - p2.x;
          var dy = p.y - p2.y;
          var dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = 'rgba(242, 140, 40, ' + (0.06 * (1 - dist / 120)) + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        /* Mouse interaction */
        var mDx = p.x - mouseX;
        var mDy = p.y - mouseY;
        var mDist = Math.sqrt(mDx * mDx + mDy * mDy);
        if (mDist < 150) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius + 1, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(242, 140, 40, ' + (0.3 * (1 - mDist / 150)) + ')';
          ctx.fill();
        }
      }

      requestAnimationFrame(draw);
    }
    draw();
  }

  /* ---------------------------------------------------------
     Cursor Glow
     --------------------------------------------------------- */
  function initCursorGlow() {
    var glow = document.querySelector('.cursor-glow');
    if (!glow) return;

    /* Only enable on non-touch devices */
    if ('ontouchstart' in window) {
      glow.style.display = 'none';
      return;
    }

    document.addEventListener('mousemove', function (e) {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
  }

  /* ---------------------------------------------------------
     Glass Card Mouse Tracking (for glow effect)
     --------------------------------------------------------- */
  function initGlassTracking() {
    var glassCards = document.querySelectorAll('.glass');

    glassCards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = ((e.clientX - rect.left) / rect.width) * 100;
        var y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', x + '%');
        card.style.setProperty('--mouse-y', y + '%');
      });
    });
  }

  /* ---------------------------------------------------------
     Navigation Scroll Behavior
     --------------------------------------------------------- */
  function initNav() {
    var nav = document.querySelector('.nav');
    if (!nav) return;

    function onScroll() {
      if (window.scrollY > 30) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* Mobile toggle */
    var toggle = document.querySelector('.nav__toggle');
    var mobile = document.querySelector('.nav__mobile');
    if (toggle && mobile) {
      toggle.addEventListener('click', function () {
        var isOpen = mobile.classList.toggle('open');
        toggle.classList.toggle('open', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });

      /* Close mobile menu on link click */
      mobile.querySelectorAll('.nav__link, .nav__cta').forEach(function (link) {
        link.addEventListener('click', function () {
          mobile.classList.remove('open');
          toggle.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
      });
    }
  }

  /* ---------------------------------------------------------
     Scroll-Triggered Reveals (IntersectionObserver)
     --------------------------------------------------------- */
  function initReveals() {
    var reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      });

      reveals.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      /* Fallback: show everything */
      reveals.forEach(function (el) {
        el.classList.add('visible');
      });
    }
  }

  /* ---------------------------------------------------------
     Animated Number Counters
     --------------------------------------------------------- */
  function initCounters() {
    var counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    var animated = new Set();

    function animateCounter(el) {
      if (animated.has(el)) return;
      animated.add(el);

      var target = parseInt(el.getAttribute('data-count'), 10);
      var suffix = el.getAttribute('data-suffix') || '';
      var duration = 2000;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        /* Ease out quart */
        var eased = 1 - Math.pow(1 - progress, 4);
        var current = Math.floor(eased * target);
        el.textContent = current + suffix;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target + suffix;
        }
      }

      requestAnimationFrame(step);
    }

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.3
      });

      counters.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      counters.forEach(animateCounter);
    }
  }

  /* ---------------------------------------------------------
     Hero Parallax
     --------------------------------------------------------- */
  function initParallax() {
    var heroBg = document.querySelector('.hero__bg img, .mini-hero__bg img');
    if (!heroBg) return;

    function onScroll() {
      var scrolled = window.scrollY;
      var speed = 0.3;
      heroBg.style.transform = 'translateY(' + (scrolled * speed) + 'px) scale(1.1)';
    }

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------------------------------------------------------
     Hero Word-by-Word Reveal
     --------------------------------------------------------- */
  function initWordReveal() {
    var titleEl = document.querySelector('.hero__title');
    if (!titleEl) return;

    var words = titleEl.querySelectorAll('.word');
    words.forEach(function (word, i) {
      word.style.animationDelay = (0.7 + i * 0.12) + 's';
    });
  }

  /* ---------------------------------------------------------
     Smooth Anchor Scrolling
     --------------------------------------------------------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var targetId = link.getAttribute('href');
        if (targetId === '#') return;
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ---------------------------------------------------------
     Contact Form Handler (visual only)
     --------------------------------------------------------- */
  function initContactForm() {
    var form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('.btn');
      if (btn) {
        var original = btn.textContent;
        btn.textContent = 'Message Sent';
        btn.style.background = '#00B4D8';
        setTimeout(function () {
          btn.textContent = original;
          btn.style.background = '';
          form.reset();
        }, 3000);
      }
    });
  }

  /* ---------------------------------------------------------
     Init All
     --------------------------------------------------------- */
  function init() {
    initParticles();
    initCursorGlow();
    initNav();
    initReveals();
    initCounters();
    initParallax();
    initWordReveal();
    initGlassTracking();
    initSmoothScroll();
    initContactForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
