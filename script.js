// ==================== PROJECTS DATA ====================
const projects = [
    {
        id: 1,
        title: "Focus.OS",
        description: "A productivity and workflow management modern web application,built with responsive design and smooth user experience, designed to help users organise tasks, track job applications and maintain focus on high-priority activities.",
        tags: ["Python/Flask", "SQLite", "HTML/CSS"],
        github: "https://github.com/TrevMaps/focusos-webapp",
        live: "https://focusos-webapp.onrender.com",
        detailedDescription: `Key Features

Task Management
• Create, update, and delete daily tasks
• Mark tasks as completed
• Prioritised dashboard showing the top 5 tasks

Job Application Tracker
• Record job applications
• Track application status (Pending, Rejected, Accepted)
• Automatic removal of rejected applications
• Smart workflow when an offer is accepted

AI Productivity Assistant
• Built-in assistant powered by GPT-4
• Responds to user questions and productivity queries
• Integrated text-to-speech responses

Dashboard Interface
• Summary dashboard displaying priority tasks and activity overview
• Designed for quick visibility of important tasks

Technology Stack

Backend
• Python — core application logic
• Flask — web framework handling routing and application structure

Database
• SQLite — lightweight database used for storing tasks and job applications

Frontend
• HTML (Jinja2 templates) — dynamic page rendering
• CSS — user interface styling and layout

AI & Automation
• OpenAI API (GPT-4) — intelligent assistant responses
• pyttsx3 — text-to-speech functionality

System Architecture

FocusOS follows a traditional web application architecture:
• Flask backend manages application logic and routing
• SQLite database stores task and job application data
• Jinja2 templates render dynamic pages for the user interface
• OpenAI API integration provides AI-powered assistant responses
• Text-to-speech module converts assistant responses into audio output

Problem the Project Solves

Many individuals struggle to keep track of daily priorities and job applications simultaneously. FocusOS centralises both workflows into one system, allowing users to manage tasks, track opportunities, and maintain productivity in a structured environment.

What I Learned
• Designing workflow-driven systems
• Structuring a Flask web application
• Managing persistent data using SQLite
• Integrating AI APIs into a web application
• Building simple but functional productivity tools`,
        emoji: "🌐"
    },
    {
        id: 2,
        title: "Future Project-Coming Soon",
        description: "A budgeting and personal finance tracking tool designed to help users monitor spending, organise expenses, and improve financial decision-making through simple visual insights.",
        tags: ["Technology", "Stack"],
        github: "#",
        live: "#",
        emoji: "📱"
    },
    {
        id: 3,
        title: "Future Project-Coming Soon",
        description: "A workflow automation tool designed to simplify repetitive tasks and improve productivity by organising routines, reminders, and task tracking into one streamlined interface.",
        tags: ["Tech Stack"],
        github: "#",
        live: "#",
        emoji: "🚀"
    }
];

// ==================== LOAD PROJECTS ====================
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-image">${project.emoji}</div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}">Code</a>
                    <a href="${project.live}">Live Demo</a>
                    ${project.detailedDescription ? `
                        <div class="detailed-description-container">
                            <span class="detailed-description-link">Detailed Description</span>
                            <div class="tooltip">${project.detailedDescription}</div>
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');
}



// ==================== PROFILE IMAGE HANDLING ====================
function setupProfileImage() {
    const profilePlaceholder = document.getElementById('profileImage');
    const profileImg = document.getElementById('profileImg');
    const placeholderText = document.getElementById('placeholderText');

    // Create a hidden file input
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);

    // Allow clicking on the placeholder to upload an image
    profilePlaceholder.addEventListener('click', () => {
        fileInput.click();
    });

    // Handle file selection
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                profileImg.src = event.target.result;
                profileImg.style.display = 'block';
                placeholderText.style.display = 'none';
                // Store image in localStorage so it persists
                localStorage.setItem('profileImage', event.target.result);
            };
            reader.readAsDataURL(file);
        }
    });

    // Load saved image from localStorage if it exists
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
        profileImg.src = savedImage;
        profileImg.style.display = 'block';
        placeholderText.style.display = 'none';
    }

    // Add cursor pointer to show it's clickable
    profilePlaceholder.style.cursor = 'pointer';
    profilePlaceholder.title = 'Click to upload your profile picture';
}

// ==================== SMOOTH SCROLLING ====================
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    setupProfileImage();
    setupSmoothScroll();
});
