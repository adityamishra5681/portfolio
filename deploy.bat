@echo off
REM Avengers Portfolio - GitHub Deployment Script (Windows)
REM For Aditya Mishra - IBM Industry Immersion Program 2025

echo.
echo ========================================
echo   AVENGERS PORTFOLIO DEPLOYMENT
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Git is not installed!
    echo Please download and install Git from: https://git-scm.com/downloads
    pause
    exit /b 1
)

echo [OK] Git is installed
echo.

REM Initialize git if not already done
if not exist .git (
    echo [STEP 1] Initializing Git repository...
    git init
    echo [OK] Git initialized
) else (
    echo [OK] Git repository already exists
)

echo.
echo [STEP 2] Adding files to Git...
git add .

echo.
echo [STEP 3] Creating commit...
set /p commit_msg="Enter commit message (or press Enter for default): "
if "%commit_msg%"=="" set commit_msg=Initial commit: Avengers portfolio for IBM Immersion Program
git commit -m "%commit_msg%"

echo.
echo [STEP 4] Setting up GitHub remote...
echo.
echo IMPORTANT: First create a repository on GitHub:
echo   1. Go to https://github.com/new
echo   2. Repository name: portfolio (or any name)
echo   3. Keep it Public
echo   4. Don't add README, .gitignore, or license
echo   5. Click 'Create repository'
echo.
set /p repo_url="Enter your GitHub repository URL: "

git remote remove origin >nul 2>&1
git remote add origin %repo_url%

echo.
echo [STEP 5] Setting branch to main...
git branch -M main

echo.
echo [STEP 6] Pushing to GitHub...
git push -u origin main

if errorlevel 1 (
    echo.
    echo [ERROR] Push failed!
    echo.
    echo Common issues:
    echo   - Repository doesn't exist on GitHub (create it first)
    echo   - Wrong repository URL
    echo   - Authentication required
    echo.
    echo Try using GitHub Desktop instead:
    echo   Download from: https://desktop.github.com/
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   SUCCESS! Portfolio is on GitHub!
echo ========================================
echo.
echo Next Steps:
echo   1. Go to your repository on GitHub
echo   2. Click 'Settings' tab
echo   3. Click 'Pages' in the left sidebar
echo   4. Under 'Source', select 'main' branch
echo   5. Click 'Save'
echo   6. Wait 1-2 minutes for deployment
echo.
echo Your site will be live at:
echo   https://YOUR-USERNAME.github.io/REPO-NAME
echo.
echo Avengers Assemble! Your portfolio is ready!
echo.
pause
