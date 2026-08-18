# Deploy CampusPath with 3 branches

This project uses three Git branches:

| Branch | Purpose | Vercel environment |
| --- | --- | --- |
| `development` | Daily coding and testing | Preview |
| `staging` | Final testing before release | Preview |
| `main` | Stable public version | Production |

## 1. Run the project on your computer

Install Node.js 22 or newer. Open the extracted project folder in VS Code, then open **Terminal > New Terminal** and run:

```bash
npm install
npm run dev
```

Open the local link shown in the terminal.

## 2. Create an empty GitHub repository

1. Sign in to GitHub.
2. Select **New repository**.
3. Name it `campuspath-react-app`.
4. Do not add a README, .gitignore, or license because this project already contains files.
5. Select **Create repository**.

## 3. Upload the project and create the branches

In the VS Code terminal, run these commands. Replace `YOUR_USERNAME` with your GitHub username:

```bash
git init
git add .
git commit -m "Create CampusPath React application"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/campuspath-react-app.git
git push -u origin main

git checkout -b staging
git push -u origin staging

git checkout -b development
git push -u origin development
```

You will now have `development`, `staging`, and `main` on GitHub.

## 4. Deploy the three branches on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Select **Add New > Project**.
3. Import the `campuspath-react-app` repository.
4. Vercel should identify the project as **Next.js**.
5. Keep the default settings and select **Deploy**.
6. Open the project in Vercel, then go to **Settings > Git**.
7. Make sure the Production Branch is `main`.

Vercel automatically creates:

- A production deployment when code is pushed to `main`.
- A separate preview deployment when code is pushed to `staging`.
- A separate preview deployment when code is pushed to `development`.

To find a branch URL, open **Deployments** in Vercel and select the deployment for that branch.

## 5. Recommended working flow

Make normal changes in `development`:

```bash
git checkout development
git add .
git commit -m "Describe your change"
git push
```

When the change works, move it to `staging`:

```bash
git checkout staging
git merge development
git push
```

After final testing, release it to `main`:

```bash
git checkout main
git merge staging
git push
```

## Optional: give fixed names to all three deployments

Vercel gives permanent production URLs automatically, while preview URLs may have generated names. If you need fixed names such as `campuspath-dev`, `campuspath-staging`, and `campuspath`, create three Vercel projects connected to the same GitHub repository and set a different Production Branch for each project.
