# Noam Diamant - Personal Website

A modern, responsive personal website showcasing AI/ML projects and research contributions.

## 🌟 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Dynamic Projects**: Automatically loads projects from GitHub API
- **Fast Loading**: Optimized performance with minimal dependencies
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🚀 Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **Vanilla JavaScript**: Dynamic content loading and interactions
- **Font Awesome**: Beautiful icons
- **Google Fonts**: Inter font family for modern typography

## 📁 Project Structure

```
noam-personal-website/
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🌐 Live Demo

Once deployed, your website will be available at: `https://Noam-Diamant.github.io`

## 📦 Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click "New Repository"
3. Name it `Noam-Diamant.github.io` (replace with your actual username)
4. Make it **Public**
5. Don't initialize with README (we already have files)

### Step 2: Upload Your Files

#### Option A: Using Git Command Line

```bash
# Navigate to your project folder
cd path/to/noam-personal-website

# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial website setup"

# Add your GitHub repository as origin
git remote add origin https://github.com/Noam-Diamant/Noam-Diamant.github.io.git

# Push to GitHub
git push -u origin main
```

#### Option B: Using GitHub Web Interface

1. Go to your new repository on GitHub
2. Click "uploading an existing file"
3. Drag and drop all files (`index.html`, `styles.css`, `script.js`, `README.md`)
4. Add commit message: "Initial website setup"
5. Click "Commit changes"

### Step 3: Enable GitHub Pages

1. Go to your repository settings
2. Scroll down to "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"

### Step 4: Access Your Website

Your website will be live at: `https://Noam-Diamant.github.io`

It may take a few minutes for the first deployment to complete.

## 🎨 Customization

### Personal Information

Edit `index.html` to update:
- Your name and title
- About section content
- Contact information
- LinkedIn and GitHub links

### Projects

The website automatically loads projects from your GitHub profile. Featured projects are defined in `script.js`:

```javascript
const featuredProjects = [
    {
        name: 'your-project-name',
        customDescription: 'Your project description',
        techs: ['Technology', 'Stack']
    }
];
```

### Colors and Styling

Modify `styles.css` to change:
- Color scheme (search for color values like `#2563eb`)
- Fonts and typography
- Layout and spacing
- Animations and effects

### Content Sections

Update sections in `index.html`:
- Hero section text
- About me content
- Skills and technologies
- Contact methods

## 🛠️ Development

To work on the website locally:

1. Open `index.html` in a web browser
2. Make changes to HTML, CSS, or JavaScript
3. Refresh the browser to see updates
4. Commit and push changes to update the live site

### Local Development Server (Optional)

For a better development experience:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP (if available)
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 📱 Mobile Optimization

The website is fully responsive and includes:
- Mobile-friendly navigation menu
- Touch-optimized buttons and links
- Responsive typography and spacing
- Optimized images and layouts

## 🔧 Troubleshooting

### Website Not Loading

1. Check repository name is `YourUsername.github.io`
2. Ensure repository is public
3. Verify GitHub Pages is enabled in settings
4. Wait 5-10 minutes for initial deployment

### Projects Not Loading

1. Check GitHub username in `script.js` is correct
2. Ensure your GitHub repositories are public
3. Check browser console for API errors

### Styling Issues

1. Verify all file names are correct and lowercase
2. Check that CSS and JS files are in the same directory
3. Validate HTML and CSS syntax

## 📈 Performance

The website is optimized for performance:
- Minimal external dependencies
- Compressed and optimized CSS
- Efficient JavaScript with proper loading
- Responsive images and layouts

## 🔄 Updates

To update your website:

1. Make changes to your local files
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update website content"
   git push
   ```
3. Changes will be live within a few minutes

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements, consider sharing them back!

## 📞 Support

If you need help with deployment or customization, feel free to:
- Open an issue on GitHub
- Contact via email: noamd1234@gmail.com
- Connect on LinkedIn

---

**Built with ❤️ and deployed on GitHub Pages**