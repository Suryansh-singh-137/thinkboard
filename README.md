# NotesApp

A full-stack note-taking application built with:

- Backend: Node.js, Express, MongoDB (Mongoose), Upstash rate limiting
- Frontend: React + Vite + Tailwind + DaisyUI

## Project structure

- `backend/` - Express API for notes with rate limiting and MongoDB
- `frontend/vite-project/` - React app for creating, reading, updating, deleting notes

## Requirements

- Node.js 18+ (or latest LTS)
- MongoDB connection URI (Atlas or local)
- Upstash Redis account (for request rate limiting) [optional but recommended]

## Environment variables

### backend/.env

- `PORT` (e.g. 5000)
- `MONGO_URL` (MongoDB connection string)
- `UPSTASH_REDIS_REST_URL` (Upstash REST URL)
- `UPSTASH_REDIS_REST_TOKEN` (Upstash token)

Example:

```
PORT=5000
MONGO_URL=mongodb+srv://user:pass@cluster.example.com/mydb
UPSTASH_REDIS_REST_URL=https://us1-stable-12345.upstash.io
UPSTASH_REDIS_REST_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxx
```

## Setup

1. Clone repo

```bash
git clone <repo-url>
cd notesapp
```

2. Backend install & run

```bash
cd backend
npm install
npm run dev
```

3. Frontend install & run

```bash
cd ../frontend/vite-project
npm install
npm run dev
```

4. Open frontend URL shown by Vite (usually `http://localhost:5173`)

## Backend API

Base URL: `http://localhost:<PORT>/api/notes`

### Endpoints

- `GET /api/notes` - get all notes
- `GET /api/notes/:id` - get note by ID
- `POST /api/notes` - create note (body: `{ title, content }`)
- `PUT /api/notes/:id` - update note (body: `{ title, content }`)
- `DELETE /api/notes/:id` - delete note

### Notes model

- `title`: String (required)
- `content`: String (required)
- `createdAt`, `updatedAt`: timestamps

## Rate limiting

Implemented in `backend/middleware/rateLimiter.js` using Upstash `slidingWindow(100, "60 s")`.

- On too many requests, responds with status 429 and message `Too many requests, please try again later.`

## Development tips

- For backend debug: check server logs and MongoDB connection log
- For frontend issue: inspect browser console and network calls to `/api/notes`

## Production build

1. `cd frontend/vite-project`
2. `npm run build`

Then serve static output from `dist` using any static server or integrate into backend by serving `dist` folder.

## TODO / improvements

- Add tests for backend endpoints
- Use centralized config + validation (e.g. Joi/zod)
- Add authentication/authorization
- Add more advanced search/filtering
