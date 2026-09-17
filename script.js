(function () {
  "use strict";

  var header = document.getElementById("header");
  var menuButton = document.querySelector(".menu-button");
  var mobileNav = document.getElementById("mobile-nav");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  function updateHeader() {
    header.classList.toggle("scrolled", window.scrollY > 24);
  }

  function closeMenu() {
    if (!menuButton || !mobileNav) return;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
    mobileNav.classList.remove("open");
    document.body.classList.remove("menu-open");
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  if (menuButton && mobileNav) {
    menuButton.addEventListener("click", function () {
      var open = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!open));
      menuButton.setAttribute("aria-label", open ? "Abrir menu" : "Fechar menu");
      mobileNav.classList.toggle("open", !open);
      document.body.classList.toggle("menu-open", !open);
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });

    var desktopMedia = window.matchMedia("(min-width: 981px)");
    var handleDesktopChange = function (event) {
      if (event.matches) closeMenu();
    };
    if (desktopMedia.addEventListener) {
      desktopMedia.addEventListener("change", handleDesktopChange);
    } else {
      desktopMedia.addListener(handleDesktopChange);
    }
  }

  document.querySelectorAll(".faq-item button").forEach(function (button) {
    button.addEventListener("click", function () {
      var item = button.closest(".faq-item");
      var isOpen = item.classList.contains("open");

      document.querySelectorAll(".faq-item.open").forEach(function (openItem) {
        openItem.classList.remove("open");
        openItem.querySelector("button").setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  var methodCards = document.querySelectorAll(".method-card");
  function activateMethodCard(card) {
    methodCards.forEach(function (item) {
      var active = item === card;
      item.classList.toggle("is-active", active);
      item.querySelector("button").setAttribute("aria-expanded", String(active));
    });
  }

  methodCards.forEach(function (card) {
    var button = card.querySelector("button");
    button.addEventListener("click", function () { activateMethodCard(card); });
    button.addEventListener("focus", function () { activateMethodCard(card); });
    card.addEventListener("pointerenter", function (event) {
      if (event.pointerType !== "touch") activateMethodCard(card);
    });
  });

  var stageTabs = Array.from(document.querySelectorAll(".stage-tabs [role='tab']"));
  var stagePanels = Array.from(document.querySelectorAll(".stage-panel"));
  var stageCounter = document.querySelector(".stage-controls b");
  var stageIndex = 0;

  function activateStage(index, moveFocus) {
    stageIndex = (index + stageTabs.length) % stageTabs.length;
    stageTabs.forEach(function (tab, currentIndex) {
      var active = currentIndex === stageIndex;
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
      stagePanels[currentIndex].hidden = !active;
      stagePanels[currentIndex].classList.toggle("is-active", active);
    });
    stageCounter.textContent = String(stageIndex + 1).padStart(2, "0");
    if (moveFocus) stageTabs[stageIndex].focus();
    if (window.gsap) {
      gsap.fromTo(stagePanels[stageIndex], { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: .55, ease: "power3.out" });
    }
  }

  stageTabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () { activateStage(index, false); });
    tab.addEventListener("pointerenter", function (event) {
      if (event.pointerType !== "touch") activateStage(index, false);
    });
    tab.addEventListener("keydown", function (event) {
      if (event.key === "ArrowRight") { event.preventDefault(); activateStage(stageIndex + 1, true); }
      if (event.key === "ArrowLeft") { event.preventDefault(); activateStage(stageIndex - 1, true); }
      if (event.key === "Home") { event.preventDefault(); activateStage(0, true); }
      if (event.key === "End") { event.preventDefault(); activateStage(stageTabs.length - 1, true); }
    });
  });

  document.querySelector(".stage-prev").addEventListener("click", function () { activateStage(stageIndex - 1, false); });
  document.querySelector(".stage-next").addEventListener("click", function () { activateStage(stageIndex + 1, false); });

  (function initProofCarousel() {
    var viewport = document.getElementById("proofViewport");
    if (!viewport) return;
    var track = viewport.querySelector(".proof-track");
    var slides = track.children;
    var prevBtn = document.getElementById("proofPrev");
    var nextBtn = document.getElementById("proofNext");
    var countEl = document.getElementById("proofCount");
    var count = slides.length;
    var index = 0;
    var gap = 18;
    var timer = null;
    var visible = true;
    var hovered = false;
    var focused = false;
    var swiping = false;

    function render() {
      track.style.transform = "translateX(" + (-(viewport.clientWidth + gap) * index) + "px)";
      if (countEl) countEl.textContent = ("0" + (index + 1)).slice(-2) + " — " + ("0" + count).slice(-2);
    }
    function go(to) {
      index = (to + count) % count;
      render();
    }
    function next() { go(index + 1); }
    function prev() { go(index - 1); }

    if (prevBtn) prevBtn.addEventListener("click", prev);
    if (nextBtn) nextBtn.addEventListener("click", next);

    var startX = 0;
    viewport.addEventListener("touchstart", function (event) {
      swiping = true;
      startX = event.changedTouches[0].clientX;
    }, { passive: true });
    viewport.addEventListener("touchend", function (event) {
      if (!swiping) return;
      swiping = false;
      var dx = event.changedTouches[0].clientX - startX;
      if (dx < -40) next();
      else if (dx > 40) prev();
    }, { passive: true });

    function pause() {
      if (timer) { clearInterval(timer); timer = null; }
    }
    function play() {
      if (reduceMotion || !visible || hovered || focused) return;
      if (!timer) timer = setInterval(next, 3200);
    }

    viewport.addEventListener("mouseenter", function () { hovered = true; pause(); });
    viewport.addEventListener("mouseleave", function () { hovered = false; play(); });
    viewport.addEventListener("focusin", function () { focused = true; pause(); });
    viewport.addEventListener("focusout", function () { focused = false; play(); });

    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        if (visible) play(); else pause();
      }, { threshold: 0.25 });
      io.observe(viewport);
    }

    window.addEventListener("resize", render);
    render();
  })();

  if (reduceMotion) {
    var reduceTimeline = document.querySelector(".process-timeline");
    if (reduceTimeline) {
      var reduceSteps = Array.prototype.slice.call(reduceTimeline.querySelectorAll(".process-flow > li"));
      var reduceActive = -1;
      function updateReduceStepper() {
        var cy = window.innerHeight / 2;
        var cTops = reduceSteps.map(function (step) {
          return step.querySelector(".step-circle").getBoundingClientRect().top;
        });
        var last = reduceSteps.length - 1;
        var span = cTops[last] - cTops[0] || 1;
        var u = (cy - cTops[0]) / span;
        if (u < 0) u = 0; else if (u > 1) u = 1;
        var idx = Math.round(u * last);
        if (idx !== reduceActive) {
          reduceActive = idx;
          reduceSteps.forEach(function (s, k) { s.classList.toggle("step--active", k === idx); });
        }
      }
      updateReduceStepper();
      window.addEventListener("scroll", updateReduceStepper, { passive: true });
      window.addEventListener("resize", updateReduceStepper);
    }
    return;
  }

  var lenis;
  if (window.Lenis && finePointer) {
    lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.15
    });

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (event) {
        var selector = link.getAttribute("href");
        if (!selector || selector === "#") return;
        var target = document.querySelector(selector);
        if (target) {
          event.preventDefault();
          lenis.scrollTo(target, { offset: -74 });
          closeMenu();
        }
      });
    });
  }

  if (!window.gsap || !window.ScrollTrigger) {
    if (lenis) {
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  if (lenis) {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  gsap.utils.toArray("[data-reveal]").forEach(function (element) {
    gsap.from(element, {
      y: 34,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 88%",
        once: true
      }
    });
  });

  var timelineEl = document.querySelector(".process-timeline");
  if (timelineEl) {
    var flowOl = timelineEl.querySelector(".process-flow");
    var steps = Array.prototype.slice.call(flowOl.children);
    var trackLine = timelineEl.querySelector(".track-line");
    var trackFill = timelineEl.querySelector(".track-fill");
    var marker = timelineEl.querySelector(".marker");
    var markerNum = marker.querySelector(".marker-num");
    var numLabels = steps.map(function (_, i) { return ("0" + (i + 1)).slice(-2); });
    var activeIndex = 0;
    var resizeTimer = null;

    function setStepsActive(i) {
      steps.forEach(function (step, idx) { step.classList.toggle("step--active", idx === i); });
    }

    function setActive(i, animate) {
      activeIndex = i;
      setStepsActive(i);
      if (animate) {
        gsap.killTweensOf(markerNum);
        gsap.set(markerNum, { autoAlpha: 1, y: 0 });
        if (markerNum.textContent !== numLabels[i]) {
          gsap.timeline()
            .to(markerNum, { autoAlpha: 0, y: -6, duration: 0.1, ease: "power2.out" })
            .add(function () { markerNum.textContent = numLabels[i]; })
            .to(markerNum, { autoAlpha: 1, y: 0, duration: 0.18, ease: "power3.out" });
        }
        gsap.killTweensOf(marker, "scale");
        gsap.fromTo(marker, { scale: 1 }, { scale: 1.05, duration: 0.15, delay: 0.42, yoyo: true, repeat: 1, ease: "power2.out" });
      } else {
        markerNum.textContent = numLabels[i];
      }
    }

    function computeStepper(cy) {
      var last = steps.length - 1;
      var cTops = [];
      var cHeights = [];
      for (var i = 0; i < steps.length; i++) {
        var r = steps[i].querySelector(".step-circle").getBoundingClientRect();
        cTops.push(r.top + window.scrollY);
        cHeights.push(r.height);
      }
      var span = cTops[last] - cTops[0] || 1;
      var u = (cy - cTops[0]) / span;
      if (u < 0) u = 0; else if (u > 1) u = 1;
      u *= last;
      var seg = Math.floor(u);
      var f = u - seg;
      var y = cTops[seg] + (seg < last ? (cTops[seg + 1] - cTops[seg]) * f : 0);
      return { idx: Math.round(u), y: y, r: cHeights[seg] / 2 };
    }

    function trackStepper(animate) {
      var cy = window.scrollY + window.innerHeight / 2;
      var s = computeStepper(cy);
      if (animate) {
        if (s.idx !== activeIndex) setActive(s.idx, true);
      } else {
        setActive(s.idx, false);
      }
      var tlTop = timelineEl.getBoundingClientRect().top + window.scrollY;
      var trackTop = trackLine.getBoundingClientRect().top + window.scrollY;
      var targetY = s.y - tlTop;
      var targetFill = s.y + s.r - trackTop;
      if (targetFill < 0) targetFill = 0;
      if (animate) {
        gsap.to(marker, { y: targetY, duration: 0.4, ease: "power2.out", overwrite: true });
        gsap.to(trackFill, { height: targetFill, duration: 0.4, ease: "power2.out", overwrite: true });
      } else {
        gsap.set(marker, { y: targetY });
        gsap.set(trackFill, { height: targetFill });
      }
    }

    function createProgressTrigger() {
      ScrollTrigger.create({
        trigger: flowOl,
        start: "top center",
        end: "bottom center",
        onUpdate: function () { trackStepper(true); }
      });
    }

    trackStepper(false);
    createProgressTrigger();

    function refreshMeasures() {
      trackStepper(false);
      ScrollTrigger.refresh();
    }
    function debounceRefresh() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(refreshMeasures, 150);
    }
    window.addEventListener("resize", debounceRefresh);
    window.addEventListener("load", debounceRefresh);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(debounceRefresh);
    }
    Array.prototype.forEach.call(document.images, function (img) {
      if (!img.complete) img.addEventListener("load", debounceRefresh);
    });
  }

  gsap.to(".manifesto-second", {
    clipPath: "inset(-0.2em 0% -0.12em 0)",
    ease: "none",
    scrollTrigger: {
      trigger: ".manifesto",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.65
    }
  });

  gsap.to(".manifesto-first", {
    color: "#bba7bb",
    y: -12,
    ease: "none",
    scrollTrigger: {
      trigger: ".manifesto",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.65
    }
  });

  gsap.utils.toArray(".phase-visual img, .about-image img").forEach(function (element) {
    gsap.fromTo(element, { yPercent: -2 }, {
      yPercent: 2,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });

  gsap.from(".method-card", {
    y: 45,
    opacity: 0,
    stagger: 0.09,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: { trigger: ".method-cards", start: "top 82%", once: true }
  });
})();
