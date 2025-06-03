// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update navigation active state on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// GitHub Projects Loader
async function loadGitHubProjects() {
    const username = 'Noam-Diamant';
    const projectsContainer = document.getElementById('projects-grid');
    
    // Featured projects with custom descriptions
    const featuredProjects = [
        {
            name: 'nostrbounties',
            customDescription: 'A React/TypeScript application for finding and posting bounties on the Nostr network. Features modern UI with Bitcoin integration and real-time updates.',
            techs: ['TypeScript', 'React', 'Nostr', 'Bitcoin']
        },
        {
            name: 'SAELens Contributions',
            customDescription: 'Contributing to SAELens, a library for training sparse autoencoders and analyzing their learned features. Focus on test data metrics and training improvements.',
            techs: ['Python', 'PyTorch', 'AI Interpretability', 'Sparse Autoencoders'],
            isContribution: true,
            repoUrl: 'https://github.com/jbloomAus/SAELens'
        },
        {
            name: 'Dictionary Learning Research',
            customDescription: 'Research contributions to dictionary learning frameworks for AI interpretability. Working on sparse autoencoder training optimization and failure analysis.',
            techs: ['Python', 'Machine Learning', 'AI Safety', 'Research'],
            isContribution: true,
            repoUrl: 'https://github.com/saprmarks/dictionary_learning'
        }
    ];

    try {
        // Try to load actual GitHub repos first
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
        
        if (response.ok) {
            const repos = await response.json();
            const validRepos = repos.filter(repo => 
                !repo.fork && 
                repo.name !== 'Noam-Diamant' && 
                repo.size > 0
            );

            // Combine actual repos with featured projects
            const allProjects = [...featuredProjects];
            
            // Add actual repos that aren't already featured
            validRepos.forEach(repo => {
                if (!featuredProjects.some(fp => fp.name === repo.name)) {
                    allProjects.push({
                        name: repo.name,
                        description: repo.description || 'Open source project',
                        techs: repo.language ? [repo.language] : ['Code'],
                        repoUrl: repo.html_url,
                        stars: repo.stargazers_count
                    });
                }
            });

            renderProjects(allProjects.slice(0, 6)); // Show top 6 projects
        } else {
            // Fallback to featured projects only
            renderProjects(featuredProjects);
        }
    } catch (error) {
        console.log('Loading featured projects as fallback...');
        renderProjects(featuredProjects);
    }
}

function renderProjects(projects) {
    const projectsContainer = document.getElementById('projects-grid');
    
    if (projects.length === 0) {
        projectsContainer.innerHTML = `
            <div class="project-card">
                <h3>🚀 Projects Coming Soon</h3>
                <p>I'm currently working on exciting AI/ML projects. Check back soon for updates!</p>
                <div class="project-links">
                    <a href="https://github.com/Noam-Diamant" class="project-link" target="_blank">
                        <i class="fab fa-github"></i> View GitHub
                    </a>
                </div>
            </div>
        `;
        return;
    }

    projectsContainer.innerHTML = projects.map(project => `
        <div class="project-card">
            <h3>${project.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h3>
            <p>${project.customDescription || project.description || 'An exciting project in development.'}</p>
            <div class="project-tech">
                ${(project.techs || ['Code']).map(tech => 
                    `<span class="tech-tag">${tech}</span>`
                ).join('')}
            </div>
            <div class="project-links">
                ${project.repoUrl ? `
                    <a href="${project.repoUrl}" class="project-link" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i> 
                        ${project.isContribution ? 'View Contributions' : 'View Code'}
                    </a>
                ` : `
                    <a href="https://github.com/Noam-Diamant/${project.name}" class="project-link" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i> View Code
                    </a>
                `}
                ${project.stars ? `
                    <span class="project-stars">
                        <i class="fas fa-star"></i> ${project.stars}
                    </span>
                ` : ''}
            </div>
        </div>
    `).join('');
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
        }
    });
}, observerOptions);

// Observe sections for animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Load projects
    loadGitHubProjects();
});

// Typing effect for hero section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, speed);
}

// Add typing effect to hero title (optional enhancement)
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 500);
    }
});

// Form validation and email functionality (if contact form is added later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
document.addEventListener('DOMContentLoaded', () => {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #2563eb;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
    `;
    
    scrollButton.addEventListener('click', scrollToTop);
    document.body.appendChild(scrollButton);
    
    // Show/hide scroll button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.visibility = 'visible';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.visibility = 'hidden';
        }
    });
});

// Theme toggle functionality (for future enhancement)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('darkTheme', document.body.classList.contains('dark-theme'));
}

// Load saved theme preference
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('darkTheme');
    if (savedTheme === 'true') {
        document.body.classList.add('dark-theme');
    }
});