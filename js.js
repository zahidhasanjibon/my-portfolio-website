let loader = document.getElementById("preloader");
window.addEventListener("load", () => {
  loader.style.display = "none";
});
const senderEmail = document.querySelector("#email");
const senderMsg = document.querySelector("#textarea");
const senderName = document.querySelector("#name");

// for send email
function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "drrakibulislam900@gmail.com",
    Password: "id1313797035",
    To: "drnazrulislam900@gmail.com",
    From: senderEmail.value,
    Subject: "message from portfolio website",
    Body: `Name : ${senderName.value} <br> Email : ${senderEmail.value} <br> message : ${senderMsg.value}`,
  }).then((message) => alert(`message sent successfully`));
}

// for project website hover style and set a link

function projectLink(path) {
  setTimeout(() => {
    let projectImg = document.querySelector(".mfp-img");
    let projectWrapper = document.getElementsByTagName("figure")[0];
    projectWrapper.classList.add("project-main-div");
    let projectDiv = document.createElement("div");
    let previewLink = document.createElement("a");
    previewLink.setAttribute("href", path);
    previewLink.setAttribute("target", "blank");
    previewLink.classList.add("preview-link");
    previewLink.innerHTML = `
     <span>
     <i class="fa-4x bi bi-eye-fill"></i>
     </span>
     <span class="live-demo">
     <i class="fab fa-github"></i> <span>Live Demo</span>
     </span>
     `;
    projectDiv.appendChild(previewLink);
    projectWrapper.appendChild(projectDiv);
    projectDiv.classList.add("project-link");
  }, 1000);
}

$(document).ready(function () {
  $("#profile-ripples").ripples({
    resolution: 512,
    dropRadius: 10,
  });

  function progressbarAnimation() {
    const bars = document.querySelectorAll(".progress-bar");

    bars.forEach(function (bar) {
      let percentage = bar.dataset.percent;
      let tooltip = bar.children[0];
      tooltip.style.opacity = "1";

      tooltip.innerText = "";
      bar.style.width = percentage + "%";
    });
  }

  // progressbar intersection observer

  window.addEventListener("scroll", (e) => {
    let scrollBar = document.documentElement.scrollTop;
    if (scrollBar > 200) {
      progressbarAnimation();
    }
  });

  //counter

  const counters = document.querySelectorAll(".counter");

  function runCounter() {
    counters.forEach((counter) => {
      counter.innerText = 0;

      let target = +counter.dataset.count;

      let step = target / 100;

      let countIt = function () {
        let displayedCount = +counter.innerText;
        if (displayedCount < target) {
          counter.innerText = Math.ceil(displayedCount + step);
          setTimeout(countIt, 1);
        } else {
          counter.innerText = target;
        }
      };

      countIt();
    });
  }

  // counter intersection observer
  let counterSection = document.querySelector(".counter-wrapper");

  let options = {
    rootmargin: "0px 0px -200px 0px",
  };
  let done = 0;
  const sectionObserver = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting && done !== 1) {
      done = 1;
      runCounter();
    }
  }, options);

  sectionObserver.observe(counterSection);

  //image filter

  var $wrapper = $(".portfolio-wrapper");

  //initialize isotope

  $wrapper.isotope({
    filter: ".all",
    layoutMode: "masonry",
    animationOptions: {
      duration: 750,
      easing: "linear",
    },
  });

  let links = document.querySelectorAll(".tabs a");

  links.forEach((link) => {
    let selector = link.dataset.filter;
    link.addEventListener("click", function (e) {
      e.preventDefault();

      $wrapper.isotope({
        filter: selector,
        layoutMode: "masonry",
        animationOptions: {
          duration: 750,
          easing: "linear",
        },
      });

      links.forEach((link) => {
        link.classList.remove("active");
      });

      e.target.classList.add("active");
    });
  });

  // magnify
  $(".magnify").magnificPopup({
    type: "image",

    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
    },
  });

  // slider

  $(".slider").slick({
    arrows: false,
    autoplay: true,
  });

  // preloader
});
