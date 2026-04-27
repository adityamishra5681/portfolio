# GitHub Setup Guide

## Quick Start - Push to GitHub

### Step 1: Initialize Git Repository

```bash
# Navigate to your project folder
cd path/to/your/portfolio

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Avengers-themed portfolio for IBM Immersion Program"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **+** icon (top right) → **New repository**
3. Repository name: `portfolio` (or any name you prefer)
4. Description: "Avengers-themed portfolio for IBM Industry Immersion Program 2025"
5. Keep it **Public**
6. **DO NOT** initialize with README (we already have one)
7. Click **Create repository**

### Step 3: Connect and Push

```bash
# Add GitHub as remote origin
git remote add origin https://github.com/adityamishra5681/portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for deployment
7. Your site will be live at: `https://adityamishra5681.github.io/portfolio`

---

## Alternative: Using GitHub Desktop

### Step 1: Download GitHub Desktop
- Download from: https://desktop.github.com/
- Install and sign in with your GitHub account

### Step 2: Add Repository
1. Click **File** → **Add Local Repository**
2. Choose your portfolio folder
3. Click **Create Repository** if prompted

### Step 3: Publish
1. Click **Publish repository** button
2. Name: `portfolio`
3. Description: "Avengers-themed portfolio for IBM Immersion Program"
4. Uncheck "Keep this code private"
5. Click **Publish repository**

### Step 4: Enable GitHub Pages
- Follow Step 4 from the Quick Start guide above

---

## Future Updates

When you make changes to your portfolio:

```bash
# Check what changed
git status

# Add all changes
git add .

# Commit with a message
git commit -m "Update: describe what you changed"

# Push to GitHub
git push
```

Your GitHub Pages site will automatically update within 1-2 minutes!

---

## Troubleshooting

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/adityamishra5681/portfolio.git
```

### Error: "failed to push"
```bash
# Pull first, then push
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Error: "Permission denied"
- Make sure you're logged into GitHub
- Check your GitHub username in the URL
- You may need to set up SSH keys or use a personal access token

---

## Custom Domain (Optional)

If you want a custom domain like `adityamishra.com`:

1. Buy a domain from Namecheap, GoDaddy, etc.
2. In your repository, create a file named `CNAME`
3. Add your domain: `adityamishra.com`
4. In your domain registrar, add these DNS records:
   - Type: `A`, Host: `@`, Value: `185.199.108.153`
   - Type: `A`, Host: `@`, Value: `185.199.109.153`
   - Type: `A`, Host: `@`, Value: `185.199.110.153`
   - Type: `A`, Host: `@`, Value: `185.199.111.153`
   - Type: `CNAME`, Host: `www`, Value: `adityamishra5681.github.io`

---

## Need Help?

- GitHub Docs: https://docs.github.com/en/pages
- GitHub Pages Guide: https://pages.github.com/
- Contact: adityamishra5681@gmail.com

---

**Good luck with your IBM Industry Immersion Program! 🚀**
