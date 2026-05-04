# Rajab — Portfolio

A soft, dreamy portfolio built with React. Matcha & pink color theme.

---

## 🚀 Getting Started

### Install dependencies
```bash
npm install
```

### Run locally
```bash
npm start
```
Opens at `http://localhost:3000`

---

## 🖼️ Adding Your Logo

1. Drop your logo file into `src/assets/` (e.g. `logo.png` or `logo.svg`)
2. Open `src/components/Navbar.js`
3. Uncomment this line at the top:
   ```js
   // import logo from '../assets/logo.png';
   ```
4. Replace the logo text block with:
   ```jsx
   <img src={logo} alt="Rajab logo" className="navbar__logo-img" />
   ```

---

## ✏️ Customizing Your Content

| What               | Where                              |
|--------------------|------------------------------------|
| Your projects      | `src/data/projects.js`             |
| About info         | `src/pages/About.js`               |
| Experience entries | `src/pages/Experience.js`          |
| Skills list        | `src/pages/Skills.js`              |
| Contact links      | `src/pages/Contact.js`             |
| GitHub URL (navbar)| `src/components/Navbar.js`         |
| Colors / theme     | `src/index.css` (CSS variables)    |

---

## 🌍 Deploy to GitHub Pages

### 1. Update homepage in `package.json`
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/rajab-portfolio"
```

### 2. Install gh-pages (if not already)
```bash
npm install --save-dev gh-pages
```

### 3. Deploy
```bash
npm run deploy
```

This builds the project and pushes it to the `gh-pages` branch automatically.

### 4. Enable GitHub Pages
- Go to your repo → **Settings** → **Pages**
- Set source branch to `gh-pages`
- Your site will be live in a minute or two ✨

---

## 📬 Wiring Up the Contact Form

In `src/pages/Contact.js`, replace the `handleSubmit` function with your preferred service:

**Option A — Formspree (easiest, free):**
```js
const handleSubmit = async () => {
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });
  setSent(true);
};
```

**Option B — EmailJS:** see https://www.emailjs.com/docs/

---

## 🗂️ Project Structure

```
src/
├── assets/          ← put your logo here
├── components/
│   ├── Navbar.js
│   └── Navbar.css
├── data/
│   └── projects.js  ← edit your projects here
├── pages/
│   ├── Home.js / .css
│   ├── About.js / .css
│   ├── Experience.js / .css
│   ├── Skills.js / .css
│   ├── Projects.js / .css
│   ├── ProjectDetail.js / .css
│   └── Contact.js / .css
├── App.js
├── index.js
└── index.css        ← global styles & CSS variables
```
