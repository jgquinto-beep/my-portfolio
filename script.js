// ------------------------------
// Firebase Init
// ------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyCaU1pIFjdpsVfk8ymYyiXfTnK_p74Q9DI",
  authDomain: "my-portfolio-comments.firebaseapp.com",
  projectId: "my-portfolio-comments",
  storageBucket: "my-portfolio-comments.firebasestorage.app",
  messagingSenderId: "420512347766",
  appId: "1:420512347766:web:312a0bb661fecdcdc71157",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ===========================
// PROJECT DATA - EASY TO ADD MORE PROJECTS!
// Just copy and paste a project object and update the details
// ===========================

const projects = [
  {
    id: 1,
    title: "KIS App",
    category: "Flutter Mobile App Development",
    image: "images/kis-app.png",
    description:
      "An online mobile application called KIS-App. Exclusively made for grade 10 students of Kapayapaan integrated school. It is made using a combination of Flutter and Firebase aimed to be easily accesible, managed and developed. You can check it here! https://github.com/jgquinto-beep/KIS-App/releases/latest",
    inspiration:
      "Schools have their own way of managing school work, either by paper or using other software like google classroom. But instead using some software, why not make one specifically tailored for the school needs.",
    tools: ["Visual Studio", "Android Studio", "Kotlin", "Firebase Studio"],
    link: "https://github.com/jgquinto-beep/KIS-App/releases/latest",
  },
  {
    id: 2,
    title: "My Personal Logo",
    category: "Design",
    image: "images/my-logo.png",
    description:
      'My logo shows a simple 8-bit themed character. JDEVZ is my personal gamer tag that I use in every game I play. The slogan is simple and straight forward, "Develop and Play" All in an earthy tone which spells adventure',
    inspiration:
      'I love pixel art that i wanted my logo to be one, not too much, not too simple. My 8-bit logo is inspired my love to pixelated rpg survival games, brown, earthy, something that says "adventure" all over it, which I am really into',
    tools: ["Pixel Art Generator"],
  },
  {
    id: 3,
    title: "LegoMinds",
    category: "Web Development",
    image: "images/legominds.png",
    description:
      "A first time attempt to create a website. Simple LEGO themed website aimed to advertise some LEGO products and practive making and designing useful webpage",
    inspiration:
      "Seeing LEGO as a kids toy, we aimed for a coloful and interactive design. Taking inspiration from LEGO itself, we used solid bright colors to get kids attention and provide a stimulating experience",
    tools: ["Visual Studio", "HTML 5", "CSS"],
    link: "https://jgquinto-beep.github.io/LegomindsV3/",
  },
  {
    id: 4,
    title: "Pizza Ordering System",
    category: "Java Application",
    image: "images/java-pizza.png",
    description:
      "A project made using java ide called Eclipse,the goal is to practice object oriented programming. A pizza ordering system utilizing basic buttons, button triggerss and listeners to compute prices. And output data based on the inputs made on the interface",
    inspiration:
      "For the simplicity of the project, a pizza ordering system provides the easiest way to practice. The design is also simple, that looks like an old interface. Bright red colors and higlighted boarders are used to give better lining a visuals",
    tools: ["Eclipse IDE", "Java"],
  },
  {
    id: 5,
    title: "AGGRO Esports_ Rise as One Event",
    category: "Typography Brand Poster",
    image: "images/typography-poster.png",
    description:
      "The poster shows the name of the esports organization with bold text placed over a blurred stadium background. The atmosphere is bright and filled with lights, suggesting a large crowd and an energetic event. The layout is clean, with the event details clearly listed at the bottom. Font choice is to fit in the E-sports kind of theme",
    inspiration:
      "The design takes cues from live sports posters, using a stadium setting to emphasize scale and excitement. The bold typography was chosen to make the brand name and slogan stand out at first glance. The overall look is meant to be professional and easy to read, while still carrying the feeling of a big national competition.",
    tools: ["Canva"],
  },
  {
    id: 6,
    title: "Social Event Advertising",
    category: "Graphics Designing",
    image: "images/graphic-advertisement.png",
    description:
      "A Facebook page post aimed to gather attention of people and students to attend and participate in an event called TECH WEEK",
    inspiration:
      "In events like TECH WEEK it is important to highlight social gathering and teamwork so I gave it a nice warm colors and exciting announcemtns",
    tools: ["Facebook Page", "Canva"],
    link: "https://www.facebook.com/share/p/14LT8FD11bJ/",
  },
  {
    id: 7,
    title: "Landing Page Design",
    category: "Web Design",
    image: "images/landing-page-techweek.png",
    description:
      "A webdesign project that serves as a landing page for targeted/ interested audiences. This one is for a made up college advertising their event called TECH week",
    inspiration:
      "With this design, I highlighted the whole page using neon blue background and glowing hover buttons. Fit for a techy vibe",
    tools: ["Canva"],
    link: "https://jhonarcel.my.canva.site/landing-page-design",
  },
  {
    id: 8,
    title: "Print Media Proposal",
    category: "Graphics Design",
    image: "images/print-media.png",
    description:
      "A split-style poster design for a prom night event. The left side shows a modern disco vibe with lights and dancing, while the right side highlights a vintage black-and-white theme with a couple dancing outdoors.",
    inspiration:
      "Since its for a dance, i opted to take inspiration where dancing is very romantic. 80s-90s dancing is very popular to all people, so to bring the vibe in the event i used the 80s charm to invite people",
    tools: ["Canva"],
  },
];

// Skills data
const skills = [
  {
    name: "Flutter Mobile App Development",
    level: 95,
    icon: "images/flutter-logo.png",
  },
  {
    name: "Basic Programming",
    level: 70,
    icon: "images/basic-languages-icon.png",
  },
  { name: "Dart Language", level: 95, icon: "images/dart-logo.png" },
  {
    name: "Firebase/Firestore Database",
    level: 95,
    icon: "images/firebase-logo.png",
  },
];
// ===========================
// STATE MANAGEMENT
// ===========================
let currentPage = "home";
let featuredIndex = 0;
let projectsOffset = 0;
let selectedProject = null;

// ===========================
// INITIALIZATION
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initFeaturedCarousel();
  initProjectsCarousel();
  initSkills();
  initContactForm();
  updateFeaturedProject();
  renderProjects();
});

// ===========================
// NAVIGATION
// ===========================
function initNavigation() {
  // Nav links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const page = link.getAttribute("data-page");
      navigateToPage(page);
    });
  });

  // Footer links
  document
    .querySelectorAll(".footer-links button[data-page]")
    .forEach((link) => {
      link.addEventListener("click", () => {
        const page = link.getAttribute("data-page");
        navigateToPage(page);
      });
    });

  // Back button
  document.getElementById("back-btn").addEventListener("click", () => {
    navigateToPage("home");
  });
}

function navigateToPage(page) {
  // Hide all pages
  document.querySelectorAll(".page").forEach((p) => {
    p.classList.remove("active");
  });

  // Show selected page
  document.getElementById(`${page}-page`).classList.add("active");

  // Update nav links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("data-page") === page) {
      link.classList.add("active");
    }
  });

  currentPage = page;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===========================
// FEATURED PROJECT CAROUSEL
// ===========================
function initFeaturedCarousel() {
  document.getElementById("featured-prev").addEventListener("click", () => {
    featuredIndex = (featuredIndex - 1 + projects.length) % projects.length;
    updateFeaturedProject();
  });

  document.getElementById("featured-next").addEventListener("click", () => {
    featuredIndex = (featuredIndex + 1) % projects.length;
    updateFeaturedProject();
  });

  document.getElementById("featured-view-btn").addEventListener("click", () => {
    showProjectDetail(projects[featuredIndex]);
  });
}

function updateFeaturedProject() {
  const project = projects[featuredIndex];

  document.getElementById("featured-image").src = project.image;
  document.getElementById("featured-image").alt = project.title;
  document.getElementById("featured-category").textContent = project.category;
  document.getElementById("featured-title").textContent = project.title;

  // Update dots
  const dotsContainer = document.getElementById("featured-dots");
  dotsContainer.innerHTML = "";
  projects.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.className = `dot ${index === featuredIndex ? "active" : ""}`;
    dot.addEventListener("click", () => {
      featuredIndex = index;
      updateFeaturedProject();
    });
    dotsContainer.appendChild(dot);
  });
}

// ===========================
// ALL PROJECTS CAROUSEL
// ===========================
function initProjectsCarousel() {
  document.getElementById("projects-prev").addEventListener("click", () => {
    if (projectsOffset > 0) {
      projectsOffset--;
      updateProjectsCarousel();
    }
  });

  document.getElementById("projects-next").addEventListener("click", () => {
    const maxOffset = Math.max(0, projects.length - 4);
    if (projectsOffset < maxOffset) {
      projectsOffset++;
      updateProjectsCarousel();
    }
  });
}

function renderProjects() {
  const carousel = document.getElementById("projects-carousel");
  carousel.innerHTML = "";

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
        <div class="project-image-wrapper">
            <img src="${project.image}" alt="${project.title}" class="project-image">
        </div>
        <div class="project-info">
            <p class="project-category">${project.category}</p>
            <h4 class="project-title">${project.title}</h4>
        </div>
        `;
    card.addEventListener("click", () => showProjectDetail(project));
    carousel.appendChild(card);
  });

  updateProjectsCarousel();
  updateProjectsDots();
}

function updateProjectsCarousel() {
  const carousel = document.getElementById("projects-carousel");
  const itemWidth = 25; // 25% width per item
  const gap = 1.5; // 1.5% gap
  const offset = projectsOffset * (itemWidth + gap);
  carousel.style.transform = `translateX(-${offset}%)`;

  // Update button states
  document.getElementById("projects-prev").disabled = projectsOffset === 0;
  document.getElementById("projects-next").disabled =
    projectsOffset >= Math.max(0, projects.length - 4);
}

function updateProjectsDots() {
  const itemsPerView = 4;
  const totalPages = Math.ceil(projects.length / itemsPerView);
  const dotsContainer = document.getElementById("projects-dots");
  dotsContainer.innerHTML = "";

  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement("div");
    dot.className = `dot ${i === projectsOffset ? "active" : ""}`;
    dot.addEventListener("click", () => {
      projectsOffset = i;
      updateProjectsCarousel();
      updateProjectsDots();
    });
    dotsContainer.appendChild(dot);
  }
}

// ===========================
// PROJECT DETAIL PAGE
// ===========================
function showProjectDetail(project) {
  selectedProject = project;

  const detailsContainer = document.getElementById("project-details");
  detailsContainer.innerHTML = `
        <div class="project-detail-grid">
            <div>
                <div class="project-detail-card">
                    <div class="project-detail-header">
                        <div class="detail-icon">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
                            </svg>
                        </div>
                        <h3>Description</h3>
                    </div>
                    <p>${project.description}</p>
                </div>
                <div class="project-detail-card" style="margin-top: 1.5rem;">
                    <div class="project-detail-header">
                        <div class="detail-icon">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                            </svg>
                        </div>
                        <h3>Inspiration</h3>
                    </div>
                    <p>${project.inspiration}</p>
                </div>
            </div>

            <div class="project-main-section">
                <span class="project-badge">${project.category}</span>
                <h1 class="project-main-title">${project.title}</h1>
                <div class="about-image-wrapper">
                    <div class="image-glow"></div>
                    <div class="image-card">
  ${
    project.link
      ? `<a href="${project.link}" target="_blank">
           <img src="${project.image}" alt="${project.title}">
         </a>`
      : `<img src="${project.image}" alt="${project.title}">`
  }
</div>
                </div>
            </div>

            <div>
                <div class="project-detail-card">
                    <div class="project-detail-header">
                        <div class="detail-icon">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                            </svg>
                        </div>
                        <h3>Tools Used</h3>
                    </div>
                    <div class="tools-list">
                        ${project.tools
                          .map(
                            (tool) => `
                            <div class="tool-item">
                                <div class="tool-icon">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                                    </svg>
                                </div>
                                <span>${tool}</span>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            </div>
        </div>
    `;

  navigateToPage("project");
}

// ===========================
// SKILLS SECTION
// ===========================
function initSkills() {
  const skillsGrid = document.getElementById("skills-grid");

  skills.forEach((skill) => {
    const card = document.createElement("div");
    card.className = "skill-card";
    card.innerHTML = `
      <div class="skill-header">
        <div class="skill-info">
          <div class="skill-icon">
            <img src="${skill.icon}" alt="${skill.name} Logo">
          </div>
          <span>${skill.name}</span>
        </div>
        <span class="skill-badge">${skill.level}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" style="width: ${skill.level}%"></div>
      </div>
    `;
    skillsGrid.appendChild(card);
  });
}

// ===========================
// CONTACT FORM
// ===========================
function initContactForm() {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Show success message
    successMessage.classList.remove("hidden");

    // Reset form
    form.reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
      successMessage.classList.add("hidden");
    }, 5000);

    // Scroll to top of form
    successMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

// ------------------------------
// Comments System
// ------------------------------

const commentForm = document.getElementById("commentForm");
const commentsList = document.getElementById("commentsList");

// SUBMIT COMMENT
commentForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("commentName").value.trim();
  const text = document.getElementById("commentText").value.trim();

  if (!name || !text) return;

  // Save to Firestore
  await db.collection("comments").add({
    name: name,
    comment: text,
    createdAt: new Date(),
  });

  commentForm.reset();
});

// LOAD COMMENTS (real-time)
db.collection("comments")
  .orderBy("createdAt", "desc")
  .onSnapshot((snapshot) => {
    commentsList.innerHTML = "";
    snapshot.forEach((doc) => {
      const data = doc.data();

      const div = document.createElement("div");
      div.className = "comment-item";
      div.innerHTML = `
        <p><strong>${data.name}</strong></p>
        <p>${data.comment}</p>
        <hr>
      `;
      commentsList.appendChild(div);
    });
  });
