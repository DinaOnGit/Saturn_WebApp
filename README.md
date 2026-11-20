# Saturn_WebApp

A twitter-like app made by students at Hyper Island, FED28.

Saturn is our class feed for the Hyper Chirp API: sign in with GitHub or post anonymously, read the class feed, launch posts, like them and filter by #tags. Demo: **Fri 11 Dec 2026**.

## Who builds what

| Part | Who | Section in `index.html` | Files |
|---|---|---|---|
| 1 · Sign-in and its states | Tai | `<section id="signin">` | `css/signin.css`, `js/signin.js` |
| 2 · Top nav | Abdullah | `<header id="topnav">` | `css/topnav.css`, `js/topnav.js` |
| 3 · Post box, posts and new posts | Faryal | `<section id="postbox">`, `<section id="posts">` | `css/postbox.css`, `js/postbox.js`, `css/posts.css`, `js/posts.js` |
| 4 · Top tags and the feed states | Dina | `<section id="top-tags">`, `<section id="feed-state">` | `css/tags.css`, `js/tags.js`, `css/feed.css`, `js/feed.js` |
| Shared | Everyone | `<head>` | `css/base.css` |

In `index.html`, each section has a comment with your name above it. Write your HTML between your own comments only. Your CSS and media queries go in your own CSS file, and your JavaScript in your own JS file.

## Folder structure

```
Saturn_WebApp/
├── index.html      one shared page, a section for each person
├── README.md
├── css/
│   ├── base.css    shared: :root tokens, basics, the starry background
│   ├── signin.css  Tai
│   ├── topnav.css  Abdullah
│   ├── postbox.css Faryal
│   ├── posts.css   Faryal
│   ├── tags.css    Dina
│   └── feed.css    Dina
├── js/             same names as the CSS files
└── images/         see "Assets" below
```

## Run it

1. Open the `Saturn_WebApp` folder in VS Code (**File → Open Folder…**).
2. Install the **Live Server** extension.
3. Click `index.html`, then **Go Live** in the bottom right. The page reloads every time you save.

## Assets

Everything is in `images/`. Use them with `<img src="images/…" alt="">`.

| File | What it is | Who uses it |
|---|---|---|
| `saturn-stars.svg` | Starry background tile (already set up in `base.css`) | Everyone |
| `saturn-logo.svg` | Saturn logo, also the favicon | Tai, Abdullah |
| `saturn-loader.svg` | Animated planet loader ("Loading the class feed…", "Finding…") | Dina, Tai |
| `icon-github.svg` | GitHub icon (dark, for the orange button) | Tai |
| `icon-anonymous.svg` | Icon for "Post anonymously" | Tai |
| `avatar-anonymous.svg` | Photo for Anonymous | Abdullah, Faryal |
| `icon-search.svg` | Search icon | Abdullah |
| `icon-like.svg` | Like, not liked yet | Faryal |
| `icon-like-on.svg` | Like, liked (orange) | Faryal |
| `icon-rocket.svg` | Rocket for Launch | Faryal |
| `sample-avatar-jane.jpg`, `-maja`, `-noor`, `-amira` | Sample profile photos (Pexels, free to use) | Faryal, Abdullah |

### Mood emojis

The API's `sentiment` field. Copy and paste these:

| Emoji | sentiment | Meaning |
|---|---|---|
| 😊 | `Positive` | joy, enthusiasm |
| 😐 | `Neutral` | factual, informative |
| 😤 | `Negative` | frustration |
| 🤪 | `Chaotic` | deadline panic |

### Colours (from Figma)

| Name | Hex | Use |
|---|---|---|
| surface/space | `#0B0E13` | page background |
| surface/card | `#12161D` | panels and cards |
| border/default | `#232A35` | panel edges |
| text/primary | `#E9EDF2` | headings, names |
| text/muted | `#8B95A3` | @handle, time, counts |
| accent/orange | `#F6A672` | main actions, likes |
| accent/purple | `#B79CFF` | #FED28, focus ring |
| accent/green | `#74CF96` | Feed online, new posts |
| accent/blue | `#7DC0E8` | other tags |
| status/error | `#F29AAE` | errors |

All of them are already in `css/base.css` as variables, with spacing, radius and text styles. Use them like `color: var(--text-muted);` or `font: var(--type-05-name);`, never raw hex values.

## Working with Git

Everyone works on their own branch and opens a pull request into `main`.

**First time:** clone the repo (VS Code: ⇧⌘P → **Git: Clone** → `https://github.com/DinaOnGit/Saturn_WebApp.git`).

**Start your branch:**

```bash
git switch main
git pull
git switch -c tai/signin
```

Branch names: `tai/signin`, `abdullah/topnav`, `faryal/posts`, `dina/tags-feed`.

**Save and share your work:**

```bash
git add .
git commit -m "Sign-in: add the welcome card"
git push -u origin tai/signin
```

Then open a pull request on GitHub and ask a teammate to look at it before merging.

**Get everyone else's work** (each morning):

```bash
git switch main
git pull
git switch tai/signin
git merge main
```

## Team rules

- Sign-in has two ways in: Connect your GitHub, or Post anonymously.
- A tag has 5 characters at most, in capitals: `#FED28`, `#HELP`, `#GIT`.
- Top tags today shows 3 tags at most: `#FED28` plus the 2 busiest.
- Desktop shows Top tags as the orbit card; tablet and phone show tag pills under the post box.
- "Feed online" disappears on phone.
- Breakpoints: `@media (max-width: 999px)` tablet, `@media (max-width: 639px)` phone.
- Only edit your own section and files. Changes to `base.css` and the `<head>` are agreed together.
- Every API call follows the lesson: `async`/`await`, check `response.ok`, `try`/`catch`/`finally`, and `textContent` for anything from the API.

## API cheat sheet

Hyper Chirp: `https://hyperchirp.vercel.app`

| Call | What it does | Who |
|---|---|---|
| `GET /api/chirps?limit=10` | Latest posts: `author_name`, `author_avatar`, `content`, `tag`, `likes`, `sentiment`, `is_anonymous`, `created_at` | Dina |
| `POST /api/chirps` | New post as JSON: `author_name`, `content`, optional `tag`, `sentiment`, `is_anonymous` | Faryal |
| `POST /api/chirps/{id}/like` | Adds one like (there is no unlike call) | Faryal |
| `GET /api/chirps?tag=FED28` | Only posts with that tag | Dina |
| `GET /api/chirps?search=fetch` | Posts whose text matches | Abdullah |
| `GET https://api.github.com/users/{username}` | `name`, `login`, `avatar_url`; 404 when the user doesn't exist (60 lookups an hour) | Tai |

## Links

- Figma: https://www.figma.com/design/Hzs0J7b7mb54IQt1WeAd8m/Saturn
- Who builds what: https://claude.ai/artifact/88Xq1kod9mtucphM8YfAcq
- Live prototype: https://claude.ai/artifact/TaVYqAZN7uEuM4wXxScvns
- Lesson: https://hyper.strandqvist.studio/classes/apis/rest-data/#rest-apis-and-data
