# My Portfolio Website

A clean, modern, and responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

✨ **Responsive Design** - Works perfectly on all devices
🎨 **Modern Styling** - Clean and professional appearance
📱 **Smooth Navigation** - Easy navigation between sections
💼 **Project Showcase** - Display your projects with descriptions
🎯 **Skills Section** - Highlight your technical skills
📧 **Contact Form** - Let visitors get in touch with you
⚡ **Fast & Lightweight** - No heavy frameworks needed

## Directory Structure

```
portfolio/
├── index.html      # Main HTML file
├── style.css       # Styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Getting Started

### 1. Open Your Portfolio Locally
Simply open `index.html` in a web browser to view your portfolio.

```bash
# On Windows, you can double-click index.html
# Or open it with a browser
```

### 2. Customize Your Portfolio

#### Update Navigation Brand
In `index.html`, change `MyPortfolio` to your name:
```html
<div class="nav-brand">Your Name</div>
```

#### Update About Section
In `index.html`, replace the about text with your own:
```html
<section id="about" class="about">
    <div class="container">
        <h2>About Me</h2>
        <div class="about-content">
            <div class="about-text">
                <p>Your bio here...</p>
            </div>
        </div>
    </div>
</section>
```

#### Add Your Projects
Edit the `projects` array in `script.js`:

```javascript
const projects = [
    {
        id: 1,
        title: "Your Project Name",
        description: "Brief description of your project",
        tags: ["JavaScript", "React", "CSS"],
        github: "https://github.com/yourprofile/project",
        live: "https://your-project-demo.com",
        emoji: "🌐"  // Change emoji as desired
    },
    // Add more projects...
];
```

#### Update Skills Section
In `index.html`, customize the skills cards:
```html
<div class="skill-card">
    <h3>Your Skill Category</h3>
    <p>List of technologies and skills</p>
</div>
```

#### Update Social Links
In `index.html`, update the footer social links:
```html
<a href="https://github.com/yourprofile" title="GitHub">GitHub</a>
<a href="https://linkedin.com/in/yourprofile" title="LinkedIn">LinkedIn</a>
<a href="https://twitter.com/yourprofile" title="Twitter">Twitter</a>
```

### 3. Deploy Your Portfolio

You have several free options to host your portfolio:

#### Option A: GitHub Pages (Recommended - Free & Easy)
1. Create a GitHub account and repository named `username.github.io`
2. Push your portfolio files to the main branch
3. Your portfolio will be live at `https://username.github.io`

[GitHub Pages Setup Guide](https://pages.github.com/)

#### Option B: Netlify (Free)
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your portfolio folder
3. Your site will be live with a custom domain option

#### Option C: Vercel (Free)
1. Sign up at [vercel.com](https://vercel.com)
2. Import your repository or upload files
3. Automatic deployments with each update

#### Option D: Traditional Web Hosting
Upload your files to any web hosting service using FTP or a file manager.

### 4. Contact Form Setup

The contact form currently displays a success message but doesn't send emails by default.

To enable actual email sending, use one of these services:

**Option 1: Formspree (Easiest)**
1. Go to [formspree.io](https://formspree.io)
2. Sign up and create a form
3. Update the form in `index.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- form fields -->
</form>
```

**Option 2: EmailJS**
1. Sign up at [emailjs.com](https://emailjs.com)
2. Follow their JavaScript integration guide
3. Update `script.js` with your EmailJS configuration

**Option 3: Backend Service**
Create a simple backend to handle emails (Node.js, Python Flask, etc.)

## Tips for Success

- **Keep It Updated** - Regularly add new projects and update skills
- **Use High-Quality Content** - Write clear project descriptions
- **Add Real Links** - Make sure GitHub and live demo links work
- **Mobile-First** - Test on mobile devices before deploying
- **Professional Email** - Use a professional email address in contact form
- **SEO Friendly** - Update the `<title>` and add meta descriptions
- **Load Fast** - Optimize images and keep the site lightweight

## Customization Ideas

- Add a blog/articles section
- Include a resume/CV download button
- Add testimonials from clients
- Create a dark mode toggle
- Add more animations and transitions
- Include a stats dashboard (GitHub contributions, etc.)
- Add a newsletter signup form

## Troubleshooting

**Contact form not working?**
- Check browser console for errors (F12 key)
- Ensure JavaScript is enabled
- Add email service integration (see Contact Form Setup above)

**Styling looks off?**
- Clear browser cache (Ctrl+Shift+Delete)
- Check if style.css is in the same folder as index.html
- Ensure all files are saved properly

**Links not working?**
- Check that href attributes point to correct URLs
- Use absolute URLs for external links

## Resources

- [HTML Tutorial](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Basics](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

## License

Feel free to use this portfolio template for your own profile!

---

**Good luck with your portfolio! Update it regularly and keep building amazing projects! 🚀**
