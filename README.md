# Ticket Scan

Compare ticket prices across multiple platforms and find the best deals on concerts, sports, and events.

## Project Structure

```
├── index.js          # Backend API server (Node.js/Express)
├── package.json      # Backend dependencies
├── .env.example      # Environment variables template
└── web/              # Frontend (Next.js)
    ├── src/
    ├── package.json
    └── ...
```

## Deployment

- **Backend (API)**: Railway - deploys from root `/`
- **Frontend (Web)**: Vercel - deploys from `/web`

## Setup

### Backend

```bash
npm install
cp .env.example .env
# Fill in your API keys in .env
npm start
```

### Frontend

```bash
cd web
npm install
npm run dev
```

## API Keys Required

- **Ticketmaster**: https://developer.ticketmaster.com/
- **SeatGeek**: https://seatgeek.com/account/develop
- **StubHub**: https://developer.stubhub.com/

## Live URLs

- Frontend: https://ticketscan.io
- API: https://tickethawk-api-production.up.railway.app
