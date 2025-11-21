// ===========================
// PROJECT DATA - EASY TO ADD MORE PROJECTS!
// Just copy and paste a project object and update the details
// ===========================
const projects = [
    {
        id: 1,
        title: 'KIS App',
        category: 'Flutter Mobile App Development',
        image: "images/kis-app.png",
        description: 'An online mobile application called KIS-App. Exclusively made for grade 10 students of Kapayapaan integrated school. It is made using a combination of Flutter and Firebase aimed to be easily accesible, managed and developed.',
        inspiration: 'Schools have their own way of managing school work, either by paper or using other software like google classroom. But instead using some software, why not make one specifically tailored for the school needs.',
        tools: ['Visual Studio', 'Android Studio', 'Kotlin', 'Firebase Studio']
    },
    {
        id: 2,
        title: 'Mobile Banking App',
        category: 'Mobile App',
        image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYzMzg1MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        description: 'A modern mobile banking application focusing on simplicity and security. Features include instant transfers, bill payments, expense tracking, and investment management all in one seamless experience.',
        inspiration: 'Created after observing how traditional banking apps often overwhelm users with features. I focused on creating a minimal interface that makes common tasks accessible within 2-3 taps.',
        tools: ['Figma', 'Sketch', 'Framer', 'Swift']
    },
    {
        id: 3,
        title: 'Brand Identity System',
        category: 'Branding',
        image: 'https://images.unsplash.com/photo-1762365189058-7be5b07e038b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwbW9ja3VwfGVufDF8fHx8MTc2MzMzMDQzMXww&ixlib=rb-4.1.0&q=80&w=1080',
        description: 'A complete brand identity system including logo design, color palette, typography, and brand guidelines. This project establishes a cohesive visual language across all touchpoints.',
        inspiration: 'The client wanted a modern, approachable brand that would resonate with millennials while maintaining professional credibility. I explored minimalist design principles and contemporary color theory.',
        tools: ['Illustrator', 'Photoshop', 'InDesign', 'Figma']
    },
    {
        id: 4,
        title: 'Creative Studio Website',
        category: 'Web Design',
        image: 'https://images.unsplash.com/photo-1740059021917-425431914689?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpZ2l0YWwlMjBkZXNpZ258ZW58MXx8fHwxNzYzNDM2MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        description: 'A bold, interactive website for a creative studio showcasing their portfolio and services. Features smooth animations, parallax scrolling, and an immersive user experience.',
        inspiration: 'Inspired by the studio\'s creative energy and collaborative spirit. I wanted to create a digital space that feels as dynamic and inspiring as their physical studio.',
        tools: ['Figma', 'After Effects', 'Webflow', 'Three.js']
    },
    {
        id: 5,
        title: 'Fitness Tracking App',
        category: 'Mobile App',
        image: 'https://images.unsplash.com/photo-1762768767074-e491f1eebdfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MzcwODkwMnww&ixlib=rb-4.1.0&q=80&w=1080',
        description: 'A comprehensive fitness app that helps users track workouts, set goals, and monitor progress. Features include custom workout plans, nutrition tracking, and social challenges.',
        inspiration: 'Designed to motivate users through gamification and social features, making fitness tracking engaging and fun.',
        tools: ['Figma', 'Principle', 'React Native', 'Firebase']
    },
    {
        id: 6,
        title: 'Social Media Platform',
        category: 'Web Design',
        image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRlc2lnbnxlbnwxfHx8fDE3NjM3MDMwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        description: 'A modern social platform focused on creative professionals. Features include portfolio sharing, collaboration tools, and networking capabilities.',
        inspiration: 'Built for the creative community to showcase work and connect with like-minded professionals in a distraction-free environment.',
        tools: ['Sketch', 'Figma', 'Vue.js', 'Node.js']
    },
    {
        id: 7,
        title: 'Restaurant Booking System',
        category: 'Web Design',
        image: 'https://images.unsplash.com/photo-1708335583165-57aa131a4969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwd2Vic2l0ZXxlbnwxfHx8fDE3NjM2NjAxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
        description: 'An elegant booking system for fine dining establishments. Features include real-time availability, menu previews, and special requests handling.',
        inspiration: 'Designed to capture the ambiance and sophistication of high-end dining experiences through elegant visuals and smooth interactions.',
        tools: ['Figma', 'Adobe XD', 'React', 'Stripe']
    },
    {
        id: 8,
        title: 'Music Streaming Interface',
        category: 'Mobile App',
        image: 'https://images.unsplash.com/photo-1615640848864-21d95c1dc365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHBsYXllciUyMGFwcHxlbnwxfHx8fDE3NjM3MTE1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        description: 'A sleek music player with personalized playlists, discovery features, and social listening. Designed for music lovers who want more than just playback.',
        inspiration: 'Focused on creating an immersive audio experience with beautiful album art displays and intuitive gesture controls.',
        tools: ['Sketch', 'Principle', 'Swift', 'Kotlin']
    }
];

// Skills data
const skills = [
    { name: 'Flutter Mobile App Development', level: 95, icon: "images/flutter-logo.png" },
    { name: 'Basic Programming', level: 80, icon: "images/basic-languages-icon.png" },
    { name: 'Dart Language', level: 95, icon: "images/dart-logo.png" },
    { name: 'Firebase/Firestore Database', level: 95, icon: "images/firebase-logo.png" }
];
// ===========================
// STATE MANAGEMENT
// ===========================
let currentPage = 'home';
let featuredIndex = 0;
let projectsOffset = 0;
let selectedProject = null;

// ===========================
// INITIALIZATION
// ===========================
document.addEventListener('DOMContentLoaded', () => {
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
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const page = link.getAttribute('data-page');
            navigateToPage(page);
        });
    });

    // Footer links
    document.querySelectorAll('.footer-links button[data-page]').forEach(link => {
        link.addEventListener('click', () => {
            const page = link.getAttribute('data-page');
            navigateToPage(page);
        });
    });

    // Back button
    document.getElementById('back-btn').addEventListener('click', () => {
        navigateToPage('home');
    });
}

function navigateToPage(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });

    // Show selected page
    document.getElementById(`${page}-page`).classList.add('active');

    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        }
    });

    currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===========================
// FEATURED PROJECT CAROUSEL
// ===========================
function initFeaturedCarousel() {
    document.getElementById('featured-prev').addEventListener('click', () => {
        featuredIndex = (featuredIndex - 1 + projects.length) % projects.length;
        updateFeaturedProject();
    });

    document.getElementById('featured-next').addEventListener('click', () => {
        featuredIndex = (featuredIndex + 1) % projects.length;
        updateFeaturedProject();
    });

    document.getElementById('featured-view-btn').addEventListener('click', () => {
        showProjectDetail(projects[featuredIndex]);
    });
}

function updateFeaturedProject() {
    const project = projects[featuredIndex];

    document.getElementById('featured-image').src = project.image;
    document.getElementById('featured-image').alt = project.title;
    document.getElementById('featured-category').textContent = project.category;
    document.getElementById('featured-title').textContent = project.title;

    // Update dots
    const dotsContainer = document.getElementById('featured-dots');
    dotsContainer.innerHTML = '';
    projects.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `dot ${index === featuredIndex ? 'active' : ''}`;
        dot.addEventListener('click', () => {
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
    document.getElementById('projects-prev').addEventListener('click', () => {
        if (projectsOffset > 0) {
            projectsOffset--;
            updateProjectsCarousel();
        }
    });

    document.getElementById('projects-next').addEventListener('click', () => {
        const maxOffset = Math.max(0, projects.length - 4);
        if (projectsOffset < maxOffset) {
            projectsOffset++;
            updateProjectsCarousel();
        }
    });
}

function renderProjects() {
    const carousel = document.getElementById('projects-carousel');
    carousel.innerHTML = '';

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="project-image-wrapper">
                <img src="${project.image}" alt="${project.title}" class="project-image">
            </div>
            <div class="project-info">
                <p class="project-category">${project.category}</p>
                <p class="project-title">${project.title}</p>
            </div>
        `;
        card.addEventListener('click', () => showProjectDetail(project));
        carousel.appendChild(card);
    });

    updateProjectsCarousel();
    updateProjectsDots();
}

function updateProjectsCarousel() {
    const carousel = document.getElementById('projects-carousel');
    const itemWidth = 25; // 25% width per item
    const gap = 1.5; // 1.5% gap
    const offset = projectsOffset * (itemWidth + gap);
    carousel.style.transform = `translateX(-${offset}%)`;

    // Update button states
    document.getElementById('projects-prev').disabled = projectsOffset === 0;
    document.getElementById('projects-next').disabled = projectsOffset >= Math.max(0, projects.length - 4);
}

function updateProjectsDots() {
    const itemsPerView = 4;
    const totalPages = Math.ceil(projects.length / itemsPerView);
    const dotsContainer = document.getElementById('projects-dots');
    dotsContainer.innerHTML = '';

    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('div');
        dot.className = `dot ${i === projectsOffset ? 'active' : ''}`;
        dot.addEventListener('click', () => {
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

    const detailsContainer = document.getElementById('project-details');
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
                        <img src="${project.image}" alt="${project.title}">
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
                        ${project.tools.map(tool => `
                            <div class="tool-item">
                                <div class="tool-icon">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                                    </svg>
                                </div>
                                <span>${tool}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;

    navigateToPage('project');
}

// ===========================
// SKILLS SECTION
// ===========================
function initSkills() {
  const skillsGrid = document.getElementById('skills-grid');

  skills.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'skill-card';
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
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Show success message
        successMessage.classList.remove('hidden');

        // Reset form
        form.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 5000);

        // Scroll to top of form
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}
