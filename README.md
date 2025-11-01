# Noam Diamant - Personal Portfolio Website

A modern, animated portfolio website showcasing my machine learning projects and research. This site features dynamic content that automatically updates from GitHub, stunning particle animations, and smooth scroll effects.

## 🌟 Features

- **Dynamic Project Loading**: Automatically fetches and displays projects from GitHub API
- **Particle Animation**: Eye-catching animated background with interactive particles
- **Smooth Animations**: 3D transforms and scroll-reveal effects using Intersection Observer
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with gradient accents and smooth transitions
- **No Build Process**: Pure vanilla HTML/CSS/JavaScript - no compilation needed

## 📁 Project Structure

```
.
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main styles and layout
│   └── animations.css     # Animation styles
├── js/
│   ├── main.js            # GitHub API integration
│   └── animations.js      # Scroll animations and effects
├── assets/                # Images and icons (optional)
└── README.md             # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid, Flexbox, and CSS Variables
- **Vanilla JavaScript**: No frameworks - pure ES6+
- **Particles.js**: Interactive particle background
- **Font Awesome**: Icons
- **Google Fonts**: Inter and JetBrains Mono fonts
- **GitHub API**: Dynamic project loading

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🎨 Customization

### Update Personal Information

Edit `index.html` to update:
- Name and title in the hero section
- About me description and skills
- Contact information

### Customize Featured Projects

In `js/main.js`, update the `FEATURED_REPOS` array:
```javascript
const FEATURED_REPOS = [
    'your-repo-name-1',
    'your-repo-name-2',
    'your-repo-name-3'
];
```

### Change Color Scheme

Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... other colors */
}
```

### Modify Particle Animation

Edit particle configuration in `js/animations.js` in the `initParticles()` function.

### Add Your Photo

The site automatically uses your GitHub profile picture. To use a custom photo:

1. Add your image to the `assets/` folder
2. Update the image source in `index.html`:
```html
<img id="profile-photo" src="assets/your-photo.jpg" alt="Noam Diamant">
```

## 📝 License

This project is open source and available for personal use. Feel free to fork and customize it for your own portfolio!

## 📧 Contact

- **GitHub**: [@Noam-Diamant](https://github.com/Noam-Diamant)
- **LinkedIn**: [Noam Diamant](https://www.linkedin.com/in/noam-diamant-6429b321b/)

---

Built with ❤️ and passion for Machine Learning | © 2025 Noam Diamant
