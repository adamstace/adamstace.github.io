# Personal Website

A modern, cyberpunk-inspired personal website with smooth animations and interactive elements. Built with vanilla HTML, CSS, and JavaScript.

## Features

- 🌓 Dark/Light theme toggle with localStorage persistence
- ✨ Animated cursor trail effect
- 🎨 Gradient text and glowing effects
- 📱 Fully responsive design
- 🚀 Smooth scroll animations
- 💫 Interactive profile image with confetti effect
- ⬆️ Back-to-top button

## Customization

### 1. Update Your Information

Edit `index.html` to customize:

- **Name**: Replace "Your Name" with your actual name
- **Logo**: Change "YN" in the nav to your initials
- **Title**: Update "Developer • Designer • Creator" with your roles
- **Bio**: Modify the About section text
- **Projects**: Update the four project cards with your actual projects
- **Contact Links**: Update email, GitHub, LinkedIn, and Twitter URLs

### 2. Add Your Profile Picture

Replace the placeholder in `index.html`:

```html
<!-- Find this section in index.html -->
<div class="profile-placeholder">
    <span>👤</span>
</div>

<!-- Replace with your image -->
<img src="your-photo.jpg" alt="Your Name" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
```

### 3. Customize Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --accent-cyan: #00ffff;      /* Change primary accent color */
    --accent-magenta: #ff00ff;   /* Change secondary accent color */
    /* ... other variables ... */
}
```

## Hosting on GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right, then **New repository**
3. Name your repository: `yourusername.github.io` (replace `yourusername` with your actual GitHub username)
   - Example: If your username is `johndoe`, name it `johndoe.github.io`
4. Make the repository **Public**
5. Click **Create repository**

### Step 2: Initialize Git in Your Project

Open your terminal in the project directory and run:

```bash
git init
git add .
git commit -m "Initial commit: Add personal website"
```

### Step 3: Push to GitHub

Connect your local repository to GitHub and push:

```bash
# Replace 'yourusername' with your GitHub username
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (gear icon)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **Deploy from a branch**
5. Under **Branch**, select **main** and **/ (root)**, then click **Save**

### Step 5: Access Your Website

Your website will be published at: `https://yourusername.github.io`

- It may take a few minutes for the site to go live
- You'll see a green success message in the Pages settings when it's ready

## Making Updates

After making changes to your website:

```bash
git add .
git commit -m "Description of your changes"
git push
```

Changes will automatically deploy to your GitHub Pages site within a few minutes.

## Alternative: Use a Custom Domain

If you own a custom domain:

1. Go to repository **Settings** → **Pages**
2. Under **Custom domain**, enter your domain (e.g., `yourname.com`)
3. Click **Save**
4. In your domain registrar's DNS settings, add:
   - Type: `A`, Name: `@`, Value: GitHub's IP addresses (see [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site))
   - Type: `CNAME`, Name: `www`, Value: `yourusername.github.io`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Feel free to use this template for your own personal website.

## Credits

Design inspired by modern cyberpunk aesthetics and contemporary web design trends.
