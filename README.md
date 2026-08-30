# William Buechele — personal site

Static React portfolio for [williambuechele.com](https://williambuechele.com).

Technical Support Engineer focused on cloud, DNS, and Kubernetes. AWS Certified Cloud Practitioner.

## Local development

```bash
npm install
npm start
```

The Vite dev server runs at [http://localhost:3000](http://localhost:3000).

```bash
npm run build
```

Production files go to `build/` (same output folder as the old Create React App setup).

```bash
npm run preview
```

serves that production build locally.

## Deploy note

The live site is hosted on Amazon S3 + CloudFront (`williambuechele.com` 302s to `www`). This public repo has no deploy Action and no AWS credentials. The last GitHub push before this rebuild was 2021; the live site was updated later from a private or local workflow.

After merge, deploy by syncing the `build/` folder to the existing S3 bucket and invalidating CloudFront. CloudFront should keep serving `index.html` for unknown paths so client routes (`/skills`, `/portfolio`, `/contact`, and the 404 page) work.

The GitHub Action in this repo only runs `npm ci` and `npm run build`. It does not require secrets.

## Pages

- Home — name, TSE/cloud headline, featured projects, certs, contact CTAs
- Skills — support, AWS, Kubernetes/IaC, React
- Portfolio — NSTP, TaskTest, Secure Edge Analytics
- Certifications / Experience — work history, certs, BYU-Idaho, languages
- Contact — email, LinkedIn, GitHub, site
