// ===========================
// GitHub API Integration
// ===========================

const GITHUB_USERNAME = 'Noam-Diamant';
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

// Featured/pinned repositories (update these with your preferred repos)
const FEATURED_REPOS = [
    'NLP-CV-classification-project',
    'Mint-Gender-Prediction-ML',
    'FASHION-MNIST-CALSSIFICATION',
    'FVS'
];

// Language colors (GitHub's color scheme)
const LANGUAGE_COLORS = {
    'JavaScript': '#f1e05a',
    'Python': '#3572A5',
    'Java': '#b07219',
    'C++': '#f34b7d',
    'C': '#555555',
    'TypeScript': '#2b7489',
    'Go': '#00ADD8',
    'Rust': '#dea584',
    'Ruby': '#701516',
    'PHP': '#4F5D95',
    'Swift': '#ffac45',
    'Kotlin': '#F18E33',
    'R': '#198CE7',
    'Shell': '#89e051',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'Jupyter Notebook': '#DA5B0B',
    'MATLAB': '#e16737'
};

// Fetch and display projects
async function fetchGitHubProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    const loadingState = document.getElementById('projects-loading');
    const errorState = document.getElementById('projects-error');
    
    try {
        const response = await fetch(GITHUB_API_URL + '?sort=updated&per_page=100');
        
        if (!response.ok) {
            throw new Error(`GitHub API returned ${response.status}`);
        }
        
        const repos = await response.json();
        
        // Filter out forks and sort by update date
        const filteredRepos = repos
            .filter(repo => !repo.fork)
            .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
        
        // Hide loading state
        loadingState.style.display = 'none';
        
        if (filteredRepos.length === 0) {
            errorState.style.display = 'block';
            return;
        }
        
        // Display projects
        displayProjects(filteredRepos);
        
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        loadingState.style.display = 'none';
        errorState.style.display = 'block';
    }
}

// Display projects in the grid
function displayProjects(repos) {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';
    
    // Limit to top 9 repos
    const displayRepos = repos.slice(0, 9);
    
    displayRepos.forEach((repo, index) => {
        const isFeatured = FEATURED_REPOS.includes(repo.name);
        const projectCard = createProjectCard(repo, isFeatured);
        projectsGrid.appendChild(projectCard);
        
        // Trigger animation after a slight delay
        setTimeout(() => {
            projectCard.classList.add('revealed');
        }, index * 100);
    });
}

// Create a project card element
function createProjectCard(repo, isFeatured = false) {
    const card = document.createElement('div');
    card.className = `project-card${isFeatured ? ' featured' : ''}`;
    
    const language = repo.language || 'Unknown';
    const languageColor = LANGUAGE_COLORS[language] || '#8e92ab';
    const description = repo.description || 'No description provided.';
    const stars = repo.stargazers_count || 0;
    const forks = repo.forks_count || 0;
    const lastUpdated = formatDate(repo.pushed_at);
    
    card.innerHTML = `
        <div class="project-header">
            <div>
                <h3 class="project-title">${repo.name}</h3>
            </div>
            <div class="project-icon">
                <i class="fas fa-folder-open"></i>
            </div>
        </div>
        
        <p class="project-description">${description}</p>
        
        <div class="project-footer">
            <div class="project-tech">
                <span class="tech-badge" style="border-left: 3px solid ${languageColor}">
                    ${language}
                </span>
            </div>
            
            <div class="project-stats">
                ${stars > 0 ? `<span><i class="fas fa-star"></i> ${stars}</span>` : ''}
                ${forks > 0 ? `<span><i class="fas fa-code-branch"></i> ${forks}</span>` : ''}
            </div>
        </div>
        
        <div class="project-links">
            <a href="${repo.html_url}" target="_blank" rel="noopener" class="project-link">
                View on GitHub <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    `;
    
    return card;
}

// Format date to readable format
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
        return 'Updated today';
    } else if (diffDays === 1) {
        return 'Updated yesterday';
    } else if (diffDays < 30) {
        return `Updated ${diffDays} days ago`;
    } else if (diffDays < 365) {
        const months = Math.floor(diffDays / 30);
        return `Updated ${months} ${months === 1 ? 'month' : 'months'} ago`;
    } else {
        const years = Math.floor(diffDays / 365);
        return `Updated ${years} ${years === 1 ? 'year' : 'years'} ago`;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    fetchGitHubProjects();
});

// Add hover effects to cards
document.addEventListener('mousemove', function(e) {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Add click ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Console Easter Egg
console.log(`
%c
  _   _                         ____  _                             _   
 | \\ | | ___   __ _ _ __ ___   |  _ \\(_) __ _ _ __ ___   __ _ _ __ | |_ 
 |  \\| |/ _ \\ / _\` | '_ \` _ \\  | | | | |/ _\` | '_ \` _ \\ / _\` | '_ \\| __|
 | |\\  | (_) | (_| | | | | | | | |_| | | (_| | | | | | | (_| | | | | |_ 
 |_| \\_|\\___/ \\__,_|_| |_| |_| |____/|_|\\__,_|_| |_| |_|\\__,_|_| |_|\\__|
                                                                          
`, 'color: #667eea; font-weight: bold;');

console.log('%cHey there! 👋', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Check out the repository on GitHub!', 'color: #b4b7c9; font-size: 14px;');
console.log('%chttps://github.com/Noam-Diamant', 'color: #667eea; font-size: 14px;');
