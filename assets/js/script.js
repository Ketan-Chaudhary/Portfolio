// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// navbar toggle
$("#nav-toggle").click(function () {
  $(this).toggleClass("is-active");
  $("ul.nav").toggleClass("show");
});

// visit work
function scrollToSection(sectionId) {
  let targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
}

// form
const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML =
          "Thank you for reaching out! I will get back to you soon.";
      } else {
        console.log(response);
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 7000);
    });

  // reseting the captcha to intial
  if (typeof hcaptcha !== "undefined") {
    hcaptcha.reset();
  }
});


// DOM elements
const projectsGrid = document.getElementById("projects-grid");
const loadMoreBtn = document.getElementById("load-more-btn");

let currentOffset = 0;
const loadLimit = 6;

function renderProjects() {
  const nextOffset = Math.min(currentOffset + loadLimit, projects.length);
  const projectsToAppend = projects.slice(currentOffset, nextOffset);

  projectsToAppend.forEach((project, index) => {
    const projectCard = createProjectCard(project);
    projectsGrid.appendChild(projectCard);
  });
  
  currentOffset = nextOffset;

  if(typeof AOS !== 'undefined') {
      AOS.refresh();
  }

  if (currentOffset >= projects.length) {
    if (loadMoreBtn) loadMoreBtn.style.display = 'none';
  } else {
    if (loadMoreBtn) loadMoreBtn.style.display = 'inline-flex';
  }
}

function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card ui-card";
  card.setAttribute("data-aos", "fade-up");

  card.innerHTML = `
        <div class="project-content">
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.tech
                  .map((tech) => `<span class="tech-tag">${tech}</span>`)
                  .join("")}
            </div>
            <div class="project-links">
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-btn btn-outline">
                    <i class="fab fa-github"></i> Code
                </a>
                ${project.live !== "#" ? `
                <a href="${project.live}" target="_blank" rel="noopener noreferrer" class="project-btn btn-primary">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>` : ""}
            </div>
        </div>
    `;

  return card;
}

// Load More button event listener
if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", () => {
    const originalText = loadMoreBtn.innerHTML;
    loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    loadMoreBtn.disabled = true;

    setTimeout(() => {
      renderProjects();
      loadMoreBtn.innerHTML = originalText;
      loadMoreBtn.disabled = false;
    }, 400); // 400ms delay for smooth loading effect
  });
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("skill-progress")) {
        const width = entry.target.getAttribute("data-width");
        entry.target.style.width = width + "%";
      }
    }
  });
}, observerOptions);

// Observe skill progress bars
document.addEventListener("DOMContentLoaded", () => {
  // Render initial projects
  renderProjects();

  // Observe skill bars for animation
  document.querySelectorAll(".skill-progress").forEach((bar) => {
    observer.observe(bar);
  });

  // Add scroll event for navbar background
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
      navbar.style.background = "rgba(124, 58, 237, 0.9)";
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.1)";
    }
  });
});

// Add some interactive effects
document.querySelectorAll(".tech-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "translateX(10px) scale(1.02)";
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "translateX(0) scale(1)";
  });
});

// Add click effect to buttons
document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("hero-button") ||
    e.target.classList.contains("contact-btn") ||
    e.target.classList.contains("project-btn")
  ) {
    e.target.style.transform = "scale(0.95)";
    setTimeout(() => {
      e.target.style.transform = "scale(1)";
    }, 150);
  }
});
