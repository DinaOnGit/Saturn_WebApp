// signin.js · Part 1 · Tai · Sign-in and its states
// Your JavaScript goes here.
const modalSignin = document.getElementById("modal-signin");      // the <dialog>
const gitBtn = document.getElementById("github-signin");
const anonBtn = document.getElementById("anonymous-signin");
const signInActions = document.querySelector(".signin_actions");
const viewUsername = document.getElementById("view-username");
const backToOptions = document.getElementById("back-to-choose");

const input = document.getElementById("github-username");
const field = document.querySelector(".username__field");
const findMe = document.getElementById("find-me");
const findMeLabel = findMe.querySelector(".username__submit-label");
const findMeSpinner = findMe.querySelector(".username__spinner");
const usernameNote = document.getElementById("username-note");

const profileBox = document.getElementById("profile");
const profileAvatar = document.getElementById("profile-avatar");
const profileName = document.getElementById("profile-name");
const profileHandle = document.getElementById("profile-handle");
const notMeBtn = document.getElementById("not-me");
const enterBtn = document.getElementById("enter-saturn");
const userNameInsert = document.getElementById("user-name-insert");

let foundProfile = null;   // the account from the last successful lookup
let isSignedIn = false;    // replace with your real session check


// ---------- Modal ----------
function openSignin() {
  if (!modalSignin.open) modalSignin.showModal();
}

function closeSignin() {
  if (modalSignin.open) modalSignin.close();
}

// Make sign-in required: the Esc key can't close the dialog.
modalSignin.addEventListener("cancel", (event) => event.preventDefault());

function emitSignIn(detail) {
  document.dispatchEvent(new CustomEvent("saturn:signin", { detail }));
}

// When a sign-in succeeds, close the modal.
document.addEventListener("saturn:signin", (event) => {
  isSignedIn = true;
  console.log("Signed in:", event.detail);   // connect your real session logic here
  closeSignin();
});

// Show the modal on load only if the user isn't signed in yet.
if (!isSignedIn) openSignin();

// ---------- UI helpers ----------
function setNote(message, isError) {
  usernameNote.textContent = message || usernameNote.dataset.default;
  usernameNote.classList.toggle("is-error", Boolean(isError));
  field.classList.toggle("is-error", Boolean(isError));
}

function setFinding(isFinding) {
  findMe.disabled = isFinding;
  findMeSpinner.hidden = !isFinding;
  findMeLabel.textContent = isFinding ? "Finding…" : "Find me";
}

function showProfile(user) {
  foundProfile = {
    login: user.login,
    name: user.name || user.login,
    avatarUrl: user.avatar_url,
  };

  profileAvatar.src = foundProfile.avatarUrl;
  profileName.textContent = foundProfile.name;
  profileHandle.textContent = `@${foundProfile.login}`;
  userNameInsert.textContent = foundProfile.name.split(" ")[0];   // "Enter Saturn as Jane"

  usernameNote.hidden = true;
  profileBox.hidden = false;
  enterBtn.hidden = false;       // shown only when a user was found
}

function hideProfile() {
  foundProfile = null;
  profileBox.hidden = true;
  enterBtn.hidden = true;
  usernameNote.hidden = false;
}

// ---------- GitHub lookup ----------
const url = (username) => `https://api.github.com/users/${encodeURIComponent(username)}`;

async function findGitUsers() {
  const userInput = input.value.trim().replace(/^@/, "");
  if (!userInput) return;

  hideProfile();             // clear any previous result
  setNote("");
  setFinding(true);

  try {
    const response = await fetch(url(userInput), {
      headers: { Accept: "application/vnd.github+json" },
    });

    if (response.status === 404) {
      setNote(`We couldn't find "${userInput}" on GitHub.`, true);
    } else if (response.status === 403 || response.status === 429) {
      setNote("GitHub is rate-limiting us. Try again in a few minutes.", true);
    } else if (!response.ok) {
      setNote("Something went wrong. Please try again.", true);
    } else {
      showProfile(await response.json());
    }
  } catch (error) {
    console.error(error.message);
    setNote("Couldn't reach GitHub. Check your connection.", true);
  } finally {
    setFinding(false);
  }
}

// ---------- Switching screens ----------
function showUsername() {
  signInActions.hidden = true;
  viewUsername.hidden = false;
  input.focus();
}

function showChoose() {
  viewUsername.hidden = true;
  signInActions.hidden = false;
  hideProfile();
  input.value = "";
  setNote("");
  gitBtn.focus();
}

// ---------- Events ----------
gitBtn.addEventListener("click", showUsername);
backToOptions.addEventListener("click", showChoose);
anonBtn.addEventListener("click", () => emitSignIn({ method: "anonymous" }));

viewUsername.addEventListener("submit", (e) => {
  e.preventDefault();        // stop the page reloading
  findGitUsers();
});

// Typing a different name makes the old result invalid.
input.addEventListener("input", () => {
  setNote("");
  if (foundProfile) hideProfile();
});

notMeBtn.addEventListener("click", () => {
  hideProfile();
  input.value = "";
  setNote("");
  input.focus();
});

enterBtn.addEventListener("click", () => {
  if (foundProfile) emitSignIn({ method: "github", profile: foundProfile });
});