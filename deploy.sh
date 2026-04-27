#!/bin/bash

# Avengers Portfolio - GitHub Deployment Script
# For Aditya Mishra - IBM Industry Immersion Program 2026

echo "🦸 AVENGERS PORTFOLIO DEPLOYMENT"
echo "=================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    echo "   Download from: https://git-scm.com/downloads"
    exit 1
fi

echo "✅ Git is installed"
echo ""

# Initialize git if not already done
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git initialized"
else
    echo "✅ Git repository already exists"
fi

# Add all files
echo ""
echo "📝 Adding files to Git..."
git add .

# Commit
echo ""
echo "💾 Creating commit..."
read -p "Enter commit message (or press Enter for default): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Initial commit: Avengers portfolio for IBM Immersion Program"
fi
git commit -m "$commit_msg"

# Check if remote exists
if git remote | grep -q "origin"; then
    echo ""
    echo "✅ Remote 'origin' already exists"
    read -p "Do you want to update it? (y/n): " update_remote
    if [ "$update_remote" = "y" ]; then
        git remote remove origin
        read -p "Enter your GitHub repository URL: " repo_url
        git remote add origin "$repo_url"
    fi
else
    echo ""
    echo "🔗 Setting up GitHub remote..."
    echo "First, create a repository on GitHub:"
    echo "   1. Go to https://github.com/new"
    echo "   2. Name: portfolio (or any name)"
    echo "   3. Keep it Public"
    echo "   4. Don't add README, .gitignore, or license"
    echo "   5. Click 'Create repository'"
    echo ""
    read -p "Enter your GitHub repository URL (e.g., https://github.com/username/portfolio.git): " repo_url
    git remote add origin "$repo_url"
fi

# Set branch to main
echo ""
echo "🌿 Setting branch to main..."
git branch -M main

# Push to GitHub
echo ""
echo "🚀 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ SUCCESS! Your portfolio is now on GitHub!"
    echo ""
    echo "📋 Next Steps:"
    echo "   1. Go to your repository on GitHub"
    echo "   2. Click 'Settings' tab"
    echo "   3. Click 'Pages' in the left sidebar"
    echo "   4. Under 'Source', select 'main' branch"
    echo "   5. Click 'Save'"
    echo "   6. Wait 1-2 minutes for deployment"
    echo ""
    echo "🌐 Your site will be live at:"
    echo "   https://YOUR-USERNAME.github.io/REPO-NAME"
    echo ""
    echo "🦸 Avengers Assemble! Your portfolio is ready!"
else
    echo ""
    echo "❌ Push failed. Common issues:"
    echo "   - Repository doesn't exist on GitHub (create it first)"
    echo "   - Wrong repository URL"
    echo "   - Authentication required (use GitHub Desktop or SSH keys)"
    echo ""
    echo "💡 Try using GitHub Desktop instead:"
    echo "   Download from: https://desktop.github.com/"
fi
