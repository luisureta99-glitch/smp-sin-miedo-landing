(function () {
  "use strict";

  // Attribution: which street poster QR brought this visitor in (?a=seguridad, ?a=casa, etc.)
  var params = new URLSearchParams(window.location.search);
  var entryPoint = params.get("a");
  if (entryPoint) {
    try { sessionStorage.setItem("qr_entry_point", entryPoint); } catch (e) {}
    if (window.dataLayer) {
      window.dataLayer.push({ event: "qr_entry", qr_source: entryPoint });
    }
  }

  // Share CTAs: native share sheet on mobile, clipboard copy fallback on desktop
  document.querySelectorAll("[data-share]").forEach(function (el) {
    el.addEventListener("click", function (evt) {
      evt.preventDefault();
      var section = el.closest("section[id]");
      var url = window.location.origin + window.location.pathname + "#" + (section ? section.id : "");

      if (navigator.share) {
        navigator.share({ url: url, title: document.title }).catch(function () {});
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(function () {
          var original = el.textContent;
          el.textContent = "Enlace copiado";
          setTimeout(function () { el.textContent = original; }, 1800);
        });
      }
    });
  });

  // Scroll-reveal: fade/slide each block in as it enters the viewport
  var animated = document.querySelectorAll("[data-animate]");
  if ("IntersectionObserver" in window && animated.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    animated.forEach(function (el) { observer.observe(el); });
  } else {
    animated.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // "Así estamos en la calle" — render activity cards from ACTIVIDADES (js/actividades-data.js)
  var actividadContainer = document.getElementById("actividad-cards");
  if (actividadContainer && window.ACTIVIDADES) {
    var MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

    function formatFecha(iso) {
      var parts = iso.split("-");
      var d = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
      return d.getDate() + " " + MESES[d.getMonth()];
    }

    ACTIVIDADES.forEach(function (item) {
      var card = document.createElement("article");
      card.className = "activity-card";
      card.innerHTML =
        '<div class="activity-card__photo"><img src="' + item.foto + '" alt="" loading="lazy"></div>' +
        '<div class="activity-card__body">' +
        '<time class="activity-card__date">' + formatFecha(item.fecha) + "</time>" +
        '<p class="activity-card__text"></p>' +
        '<a class="activity-card__link" target="_blank" rel="noopener">Ver más</a>' +
        "</div>";
      card.querySelector(".activity-card__text").textContent = item.texto;
      var link = card.querySelector(".activity-card__link");
      link.href = item.link;
      actividadContainer.appendChild(card);
    });
  }

  // Highlight the nav pill matching the section currently in view
  var navLinks = document.querySelectorAll(".block-nav a");
  var sections = Array.prototype.slice
    .call(navLinks)
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var navObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = document.querySelector('.block-nav a[href="#' + entry.target.id + '"]');
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach(function (a) { a.classList.remove("is-active"); });
            link.classList.add("is-active");
          }
        });
      },
      { threshold: 0, rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach(function (s) { navObserver.observe(s); });
  }
})();
