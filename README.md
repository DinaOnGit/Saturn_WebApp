<p align="center">
  <img src="images/saturn-logo.svg" alt="Saturn logo" width="88">
</p>

<h1 align="center">Saturn</h1>

<p align="center">
  <b>The class feed of tomorrow.</b><br>
  A twitter-like app made by students at Hyper Island, FED28.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML-12161D?style=flat-square&logo=html5&logoColor=F6A672" alt="HTML">
  <img src="https://img.shields.io/badge/CSS-12161D?style=flat-square&logo=css&logoColor=B79CFF" alt="CSS">
  <img src="https://img.shields.io/badge/JavaScript-12161D?style=flat-square&logo=javascript&logoColor=74CF96" alt="JavaScript">
  <img src="https://img.shields.io/badge/API-Hyper%20Chirp-12161D?style=flat-square&labelColor=232A35" alt="Hyper Chirp API">
  <img src="https://img.shields.io/badge/Demo-Fri%2011%20Dec%202026-F6A672?style=flat-square&labelColor=232A35" alt="Demo Fri 11 Dec 2026">
</p>

<p align="center">
  <a href="https://www.figma.com/design/Hzs0J7b7mb54IQt1WeAd8m/Saturn">Figma</a> ·
  <a href="https://claude.ai/artifact/TaVYqAZN7uEuM4wXxScvns">Live prototype</a> ·
  <a href="https://claude.ai/artifact/88Xq1kod9mtucphM8YfAcq">Who builds what</a> ·
  <a href="https://hyper.strandqvist.studio/classes/apis/rest-data/#rest-apis-and-data">Lesson</a>
</p>

---

## ✨ What Saturn does

- **Sign in** with your GitHub username, or post anonymously
- **Read the class feed** from the Hyper Chirp API
- **Launch posts** with a mood and a #tag (5 characters at most)
- **Like posts** with a little planet
- **Filter by #tags** from the Top tags orbit (desktop) or tag pills (tablet and phone)

## 👩‍🚀 The crew

| Who          | Part                          | Section in `index.html`     | Files                                                   |
| ------------ | ----------------------------- | --------------------------- | ------------------------------------------------------- |
| **Tai**      | Sign-in and its states        | `#signin`                   | `signin.css` · `signin.js`                              |
| **Abdullah** | Top nav                       | `#topnav`                   | `topnav.css` · `topnav.js`                              |
| **Faryal**   | Post box, posts and new posts | `#postbox` · `#posts`       | `postbox.css` · `postbox.js` · `posts.css` · `posts.js` |
| **Dina**     | Top tags and the feed states  | `#top-tags` · `#feed-state` | `tags.css` · `tags.js` · `feed.css` · `feed.js`         |
| Everyone     | Shared, change together       | `<head>`                    | `base.css`                                              |

Write your HTML between your own comments in `index.html`, and your CSS, media queries and JavaScript in your own files.

## 🚀 Getting started

1. Clone the repo: VS Code → ⇧⌘P → **Git: Clone** → `https://github.com/DinaOnGit/Saturn_WebApp.git`
2. Install the **Live Server** extension in VS Code.
3. Open `index.html` and click **Go Live**. You should see the starry background.

## 🗂 Project structure

```
Saturn_WebApp/
├── index.html      one shared page, a section for each person
├── css/
│   ├── base.css    shared: tokens, body, starry background
│   └── signin.css · topnav.css · postbox.css · posts.css · tags.css · feed.css
├── js/             signin.js · topnav.js · postbox.js · posts.js · tags.js · feed.js
└── images/         logo, loader, icons, star tile, sample photos
```

## 🌿 Working with Git

Each person works on their own branch and opens a pull request into `main`. One teammate approves before it's merged.

| Who      | Branch            |
| -------- | ----------------- |
| Tai      | `tai/signin`      |
| Abdullah | `abdullah/topnav` |
| Faryal   | `faryal/posts`    |
| Dina     | `dina/tags-feed`  |

```bash
# start your branch
git switch main
git pull
git switch -c tai/signin

# save and share your work
git add .
git commit -m "Sign-in: add the welcome card"
git push -u origin tai/signin

# get everyone else's work (each morning)
git switch main
git pull
git switch tai/signin
git merge main
```

Write `Closes #<issue number>` in your pull request so your card moves to Done when it's merged.

## 📏 Team rules

- Two ways in: **Connect your GitHub** or **Post anonymously**
- Tags have **5 characters at most**, in capitals: `#FED28` `#HELP` `#GIT`
- **Top tags today** shows 3 tags at most: `#FED28` plus the 2 busiest
- Desktop shows the orbit card; tablet and phone show **tag pills** under the post box
- **"Feed online"** disappears on phone
- Use the tokens from `base.css`, like `var(--accent-orange)`, never raw hex values
- Breakpoints: `@media (max-width: 999px)` tablet · `@media (max-width: 639px)` phone
- Every API call follows the lesson: `async`/`await`, check `response.ok`, `try`/`catch`/`finally`, `textContent` for API data

## 🎨 Assets

All in `images/`. Use them with `<img src="images/…" alt="">`.

| File                                     | What it is                                     |
| ---------------------------------------- | ---------------------------------------------- |
| `saturn-stars.svg`                       | Starry background tile (already in `base.css`) |
| `saturn-logo.svg`                        | Logo and favicon                               |
| `saturn-loader.svg`                      | Animated planet loader                         |
| `icon-github.svg` · `icon-anonymous.svg` | Sign-in choices                                |
| `icon-search.svg`                        | Search                                         |
| `avatar-anonymous.svg`                   | Photo for Anonymous                            |
| `icon-like.svg` · `icon-like-on.svg`     | Like, not liked and liked                      |
| `icon-rocket.svg`                        | Launch                                         |
| `sample-avatar-*.jpg`                    | Sample photos (Pexels, free to use)            |

**Moods** (the API's `sentiment`): 😊 `Positive` · 😐 `Neutral` · 😤 `Negative` · 🤪 `Chaotic`

## 🛰 API cheat sheet

Base URL: `https://hyperchirp.vercel.app`

| Call                                          | What it does                                                           | Who      |
| --------------------------------------------- | ---------------------------------------------------------------------- | -------- |
| `GET /api/chirps?limit=10`                    | Latest posts                                                           | Dina     |
| `GET /api/chirps?tag=FED28`                   | Posts with that tag                                                    | Dina     |
| `GET /api/chirps?search=fetch`                | Posts whose text matches                                               | Abdullah |
| `POST /api/chirps`                            | New post: `author_name`, `content`, `tag`, `sentiment`, `is_anonymous` | Faryal   |
| `POST /api/chirps/{id}/like`                  | Adds one like (no unlike)                                              | Faryal   |
| `GET https://api.github.com/users/{username}` | `name`, `login`, `avatar_url` · 404 if not found                       | Tai      |

## 📄 License

[MIT](LICENSE)
