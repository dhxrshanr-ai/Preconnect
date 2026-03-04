# 🌐 Social Media App

A full-stack mini social media platform built with **Express.js** and **SQLite**, featuring user profiles, posts with image uploads, comments, likes, and a follow system — all rendered as a single-page application.

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.x-000000?logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-3-003B57?logo=sqlite&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-blue)

---

## ✨ Features

- **🔐 Authentication** — Register, login, logout with session-based auth and bcrypt password hashing
- **📝 Posts** — Create, view, and delete posts with optional image uploads (JPEG, PNG, GIF, WebP)
- **💬 Comments** — Add and delete comments on any post
- **❤️ Likes** — Like / unlike posts with real-time like counts
- **👥 Follow System** — Follow / unfollow users with follower & following lists
- **📰 Feed** — Personalized feed showing posts from followed users and yourself
- **🔍 User Search** — Discover and search for other users
- **👤 Profiles** — View and edit user profiles (display name, bio, avatar)

---

## 🛠️ Tech Stack

| Layer      | Technology                                           |
| ---------- | ---------------------------------------------------- |
| **Server** | [Express.js 5](https://expressjs.com/)               |
| **Database** | [SQLite](https://www.sqlite.org/) via [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) |
| **Auth**   | [bcryptjs](https://github.com/dcodeIO/bcrypt.js) + [express-session](https://github.com/expressjs/session) |
| **Uploads** | [Multer](https://github.com/expressjs/multer) (max 5 MB) |
| **Frontend** | Vanilla HTML, CSS & JavaScript (SPA)               |

---

## 📁 Project Structure

```
social-media/
├── public/              # Frontend (static files)
│   ├── index.html       # Main SPA entry point
│   ├── css/
│   │   └── style.css    # Styling
│   └── js/
│       ├── app.js       # Core app logic & routing
│       └── pages.js     # Page rendering functions
├── routes/              # API route handlers
│   ├── auth.js          # Register / Login / Logout
│   ├── posts.js         # CRUD posts, likes
│   ├── comments.js      # Add / delete comments
│   └── users.js         # Profiles, follow, search
├── uploads/             # User-uploaded images (git-ignored)
├── db.js                # Database setup & schema
├── server.js            # Express server entry point
├── package.json
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/social-media.git
cd social-media

# Install dependencies
npm install

# Start the server
npm start
```

The app will be running at **http://localhost:3000** 🎉

---

## 📡 API Endpoints

### Auth

| Method | Endpoint          | Description              |
| ------ | ----------------- | ------------------------ |
| POST   | `/api/auth/register` | Register a new user   |
| POST   | `/api/auth/login`    | Login                 |
| POST   | `/api/auth/logout`   | Logout                |
| GET    | `/api/auth/me`       | Get current user      |

### Posts

| Method | Endpoint               | Description                    |
| ------ | ---------------------- | ------------------------------ |
| POST   | `/api/posts`           | Create a post (with image)     |
| GET    | `/api/posts/feed`      | Get personalized feed          |
| GET    | `/api/posts/:id`       | Get single post with comments  |
| GET    | `/api/posts/user/:userId` | Get posts by a specific user |
| DELETE | `/api/posts/:id`       | Delete a post                  |
| POST   | `/api/posts/:id/like`  | Like a post                    |
| DELETE | `/api/posts/:id/like`  | Unlike a post                  |

### Comments

| Method | Endpoint                          | Description        |
| ------ | --------------------------------- | ------------------ |
| POST   | `/api/posts/:postId/comments`     | Add a comment      |
| DELETE | `/api/comments/:id`               | Delete a comment   |

### Users

| Method | Endpoint                   | Description                 |
| ------ | -------------------------- | --------------------------- |
| GET    | `/api/users`               | List / search users         |
| GET    | `/api/users/:id`           | Get user profile            |
| PUT    | `/api/users/:id`           | Update profile              |
| POST   | `/api/users/:id/follow`    | Follow a user               |
| DELETE | `/api/users/:id/follow`    | Unfollow a user             |
| GET    | `/api/users/:id/followers` | Get followers list          |
| GET    | `/api/users/:id/following` | Get following list          |

---

## 🗄️ Database Schema

The app uses five tables with foreign key relationships:

```
users ──┬── posts ──┬── comments
        │           └── likes
        └── follows
```

- **users** — id, username, email, password_hash, display_name, bio, avatar
- **posts** — id, user_id, content, image, created_at
- **comments** — id, post_id, user_id, content, created_at
- **likes** — id, post_id, user_id *(unique per user per post)*
- **follows** — id, follower_id, following_id *(unique pair)*

---

## ⚙️ Configuration

| Variable | Default | Description |
| -------- | ------- | ----------- |
| `PORT`   | `3000`  | Server port (set via environment variable) |

---

## 📄 License

This project is licensed under the **ISC License**.
