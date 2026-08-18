# CampusPath React App

CampusPath is a simple multi-page student placement application built with React and Next.js.

## Included pages

- **Home** — project overview and calls to action
- **Opportunities** — search, filters, and save buttons
- **Preparation** — interactive progress tracker and checklist
- **About** — project purpose and values
- **Contact** — validated demonstration contact form

## Run in VS Code

Install Node.js 22.13 or newer. Open the extracted folder in VS Code and run:

```bash
npm install
npm run dev
```

Open the local address displayed in the terminal.

## Create a production build

```bash
npm run build
npm start
```

## Deploy with three branches

Open [THREE_BRANCH_DEPLOYMENT.md](THREE_BRANCH_DEPLOYMENT.md) for the complete GitHub and Vercel steps using:

- `development` for daily work
- `staging` for final testing
- `main` for production

## Important notes

- Opportunity data is sample frontend data.
- Saved roles and preparation progress reset after a page refresh.
- The contact form demonstrates validation and a success state; it does not send an email.
