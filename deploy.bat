@echo off
echo ========================================
echo   Asian Entertainment Quiz App
echo   GitHub Deployment Helper
echo ========================================
echo.

echo This script will help you deploy to GitHub Pages.
echo.
echo BEFORE RUNNING THIS:
echo 1. Create a GitHub account at github.com
echo 2. Create a new PUBLIC repository
echo 3. Copy the repository URL
echo.

set /p username="Enter your GitHub username: "
set /p reponame="Enter your repository name: "

echo.
echo Setting up remote repository...
git remote add origin https://github.com/%username%/%reponame%.git

echo.
echo Switching to main branch...
git branch -M main

echo.
echo Pushing to GitHub...
git push -u origin main

echo.
echo ========================================
echo   DEPLOYMENT COMPLETE!
echo ========================================
echo.
echo Your app will be available at:
echo https://%username%.github.io/%reponame%/
echo.
echo Next steps:
echo 1. Go to your GitHub repository
echo 2. Click Settings ^> Pages
echo 3. Enable Pages from 'main' branch
echo 4. Wait 5-10 minutes for activation
echo.
echo Your quiz app will then be live!
echo.
pause
