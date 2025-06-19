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

// Project data
const projects = [
  {
    id: 1,
    title: "Unified Digit Recognition API",
    description:
      "Production-grade digit recognition system for Western & Devanagari digits using microservices with Flask, TensorFlow, and Docker.",
    image: "assets/imgs/project2.jpg",
    tech: [
      "Flask",
      "TensorFlow",
      "Docker",
      "Docker Compose",
      "Docker Swarm",
      "Nginx",
      "AWS EC2",
    ],
    github: "https://github.com/Bit-Nest/UnifiedApi",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "AgriHealthAnalyzer",
    description:
      "Crop disease detection platform using Plant.id API. Full-stack Dockerized app with Jenkins-based CI/CD.",
    image: "assets/imgs/project2.jpg",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Multer",
      "Axios",
      "Docker",
      "Jenkins",
    ],
    github: "https://github.com/Ketan-Chaudhary/AgriHealthAnalyzer",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "S3 Form Uploader",
    description:
      "A full-stack app for uploading form data and images, storing them in AWS RDS and S3. Deployed on EC2.",
    image: "assets/imgs/project2.jpg",
    tech: ["React", "Vite", "Node.js", "AWS S3", "AWS RDS", "EC2"],
    github: "https://github.com/Ketan-Chaudhary/S3FormUploader",
    live: "#",
    featured: true,
  },
  {
    id: 4,
    title: "AWS VPC Infra with Terraform",
    description:
      "Automated VPC infrastructure setup using Terraform on AWS (EC2, S3, ALB).",
    image: "assets/imgs/project2.jpg",
    tech: ["Terraform", "AWS", "EC2", "VPC"],
    github:
      "https://github.com/Ketan-Chaudhary/AWS-VPC-Infrastructure-using-Terraform",
    live: "#",
    featured: true,
  },
  {
    id: 5,
    title: "Milk Testing API",
    description:
      "React + Flask-based milk quality testing and tracking web platform.",
    image: "assets/imgs/project2.jpg",
    tech: ["React", "Flask", "Python"],
    github: "https://github.com/Ketan-Chaudhary/MilkTestingApi",
    live: "#",
    featured: true,
  },
  {
    id: 6,
    title: "DigitSnap",
    description:
      "Advanced digit recognition system detecting full numbers using CNN and OpenCV.",
    image: "assets/imgs/project2.jpg",
    tech: ["Flask", "CNN", "TensorFlow", "OpenCV"],
    github: "https://github.com/Bit-Nest/DigitSnap",
    live: "#",
    featured: true,
  },
  {
    id: 7,
    title: "Devanagari Digit Recognition",
    description:
      "Flask app to predict handwritten Devanagari digits using deep learning.",
    image: "assets/imgs/project2.jpg",
    tech: ["Flask", "Keras", "TensorFlow"],
    github: "https://github.com/Bit-Nest/Devanagari-Digit-Recognition",
    live: "#",
    featured: false,
  },
  {
    id: 8,
    title: "Go Load Balancer",
    description:
      "Round-robin HTTP load balancer in Go using reverse proxy and health checks.",
    image: "assets/imgs/project2.jpg",
    tech: ["GoLang", "HTTP", "Reverse Proxy"],
    github: "https://github.com/Ketan-Chaudhary/go-LoadBalancer",
    live: "#",
    featured: true,
  },
  {
    id: 9,
    title: "Go Domain Email Checker",
    description:
      "Go CLI tool to audit MX, SPF, and DMARC records for email domains.",
    image: "assets/imgs/project2.jpg",
    tech: ["GoLang", "DNS", "CLI"],
    github:
      "https://github.com/Ketan-Chaudhary/go-Domain-Email-Security-Checker",
    live: "#",
    featured: false,
  },
  {
    id: 10,
    title: "Go ORM API (GORM)",
    description:
      "REST API in GoLang using GORM with CRUD operations and MySQL.",
    image: "assets/imgs/project2.jpg",
    tech: ["GoLang", "GORM", "MySQL"],
    github: "https://github.com/Ketan-Chaudhary/go-ORM-GORM",
    live: "#",
    featured: false,
  },
  {
    id: 11,
    title: "CRUD API GoLang",
    description:
      "Basic CRUD app in Go using Gorilla Mux to manage movie entries.",
    image: "assets/imgs/project2.jpg",
    tech: ["GoLang", "REST", "Mux"],
    github: "https://github.com/Ketan-Chaudhary/CRUDApiGoLang",
    live: "#",
    featured: false,
  },
  {
    id: 12,
    title: "Shortify",
    description:
      "Java MVC app that shortens long URLs and handles redirection efficiently.",
    image: "assets/imgs/project2.jpg",
    tech: ["Java", "MVC"],
    github: "https://github.com/Ketan-Chaudhary/Shortify",
    live: "#",
    featured: false,
  },
  {
    id: 13,
    title: "BookStore",
    description:
      "MERN stack-based bookstore with authentication, role-based access, and responsive design.",
    image: "assets/imgs/project2.jpg",
    tech: ["React", "Node.js", "MongoDB", "Vite", "Express"],
    github: "https://github.com/Ketan-Chaudhary/BookStore",
    live: "#",
    featured: false,
  },
  {
    id: 14,
    title: "Academic Writing Platform",
    description:
      "Modern platform for academic research and writing help with email form integration.",
    image: "assets/imgs/project2.jpg",
    tech: ["Next.js", "Tailwind CSS", "Web3Forms"],
    github: "https://github.com/Ketan-Chaudhary/academic-writing-platform",
    live: "https://academic-writing-platform.vercel.app/",
    featured: false,
  },
  {
    id: 15,
    title: "Real Estate Website",
    description:
      "Responsive frontend for property listings with animation using Framer Motion.",
    image: "assets/imgs/project2.jpg",
    tech: ["React", "Framer Motion", "Vite"],
    github: "https://github.com/Ketan-Chaudhary/Real-Estate",
    live: "https://real-estate-homzi.vercel.app/",
    featured: false,
  },
  {
    id: 16,
    title: "Weather App",
    description:
      "React-based weather dashboard using OpenWeatherMap API to display live conditions.",
    image: "assets/imgs/project2.jpg",
    tech: ["React", "OpenWeather API"],
    github: "https://github.com/Ketan-Chaudhary/Weather-App",
    live: "https://weather-app-ten-peach-45.vercel.app/",
    featured: false,
  },
  {
    id: 17,
    title: "Milk Testing Mobile App",
    description:
      "React Native app to record and analyze milk parameters in the field.",
    image: "assets/imgs/project2.jpg",
    tech: ["React Native", "Mobile"],
    github: "https://github.com/Ketan-Chaudhary/MilkTestingMobileApplication",
    live: "#",
    featured: false,
  },
  {
    id: 18,
    title: "PX to REM Converter",
    description:
      "NPM CLI + API tool that converts px values to rem using PostCSS.",
    image: "assets/imgs/project2.jpg",
    tech: ["Node.js", "PostCSS", "CLI"],
    github: "https://github.com/Ketan-Chaudhary/px-to-rem-converter",
    live: "#",
    featured: false,
  },
];

// DOM elements
const projectsGrid = document.getElementById("projects-grid");
const filterButtons = document.querySelectorAll(".filter-btn");

// Project filtering
let currentFilter = "all";

function renderProjects(filter = "all") {
  let filteredProjects = projects;

  if (filter === "featured") {
    filteredProjects = projects.filter((project) => project.featured);
  } else if (filter === "other") {
    filteredProjects = projects.filter((project) => !project.featured);
  }

  projectsGrid.innerHTML = "";

  filteredProjects.forEach((project, index) => {
    const projectCard = createProjectCard(project);
    projectsGrid.appendChild(projectCard);

    // Animate cards in
    setTimeout(() => {
      projectCard.classList.add("visible");
    }, index * 100);
  });
}

function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
            ${
              project.featured
                ? '<div class="featured-badge">Featured</div>'
                : ""
            }
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.tech
                  .map((tech) => `<span class="tech-tag">${tech}</span>`)
                  .join("")}
            </div>
            <div class="project-links">
                <a href="${project.github}" class="project-btn btn-outline">
                    <i class="fab fa-github"></i>
                    Code
                </a>
                <a href="${project.live}" class="project-btn btn-primary">
                    <i class="fas fa-external-link-alt"></i>
                    Live Demo
                </a>
            </div>
        </div>
    `;

  return card;
}

// Filter button event listeners
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    // Add active class to clicked button
    button.classList.add("active");

    // Get filter value and render projects
    const filter = button.getAttribute("data-filter");
    currentFilter = filter;
    renderProjects(filter);
  });
});

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
