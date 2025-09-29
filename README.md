# Samir Ranjan Bhol — Website (v4, IBM-inspired)

**Fresh homepage** (photo + name + "Gothenburg, Sweden"), left-rail nav, company logos, About from docx, Skills with bars, Credly badges (no dates), Contact icons + working email form.

## Run locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

If you see config/lint warnings, they are safe to ignore. For a clean install on Windows:
```bat
rmdir /s /q node_modules
del package-lock.json
npm install
npm run dev
```

## Contact form (email)
Create `.env.local`:
```
SMTP_HOST=smtp.mail.me.com
SMTP_PORT=587
SMTP_USER=samirrbhol82@icloud.com
SMTP_PASS=<your app-specific password>
TO_EMAIL=samirrbhol82@icloud.com
```

## Deploy on Vercel (Git-based)
```bash
git init
git add .
git commit -m "feat: v4 fresh home + badges API + contact icons"
git branch -M main
git remote add origin https://github.com/<your-username>/samir-website-v4.git
git push -u origin main
```
Then in **vercel.com → New Project → Import Git Repository**:
- Framework: **Next.js** (auto)
- Environment Variables: add the SMTP vars above
- Deploy
