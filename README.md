# Vishwajit Hulawale: Portfolio Website

Static portfolio (HTML, CSS, JavaScript). No build step or dependencies.

## Structure
```
index.html
css/style.css
js/main.js
assets/Vishwajit-Hulawale-Resume.pdf   <- replace with your final resume
```

## Run locally
Open `index.html` in a browser, or run `python -m http.server 8000` in this folder and visit http://localhost:8000.

## Deploy on GitHub Pages
1. Create a repository on GitHub. For a root URL (`https://vishwajit491.github.io`) name it `vishwajit491.github.io`; any other name works too and gives `https://vishwajit491.github.io/<repo-name>/`.
2. Upload every file in this folder to the repository root (keep `index.html` at the top level), or push with Git:
   ```
   git init
   git add .
   git commit -m "Add portfolio"
   git branch -M main
   git remote add origin https://github.com/vishwajit491/<repo-name>.git
   git push -u origin main
   ```
3. In the repository go to **Settings > Pages**.
4. Under **Build and deployment**, set Source to **Deploy from a branch**, choose branch `main` and folder `/ (root)`, then **Save**.
5. Wait a minute or two. Your site appears at the URL shown on that page.

## Update your resume
Replace `assets/Vishwajit-Hulawale-Resume.pdf` with the same file name and push again. The uploaded resume still contains template notes and a `[PURSUING]` placeholder, so export a cleaned copy first.

## Edit content
All text is in `index.html`. Skills, projects, education and certifications each have their own section. Add new skills only when you have used them.
