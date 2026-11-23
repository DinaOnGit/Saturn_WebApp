// signin.js · Part 1 · Tai · Sign-in and its states
// Your JavaScript goes here.
const gitBtn = document.getElementById('github-signin');
const anonBtn = document.getElementById('anonymous-signin');
const viewUsername = document.getElementById('view-username');
const backToOptions = document.getElementById("back-to-choose");
const signInActions = document.querySelector('.signin_actions');
const input = document.getElementById('github-username');
const findMe = document.getElementById("find-me");
const findMeLabel = findMe.querySelector(".username__submit-label");
const findMeSpinner = findMe.querySelector(".username__spinner");
//find profile
const profileBox = document.getElementById("profile");
const profileAvatar = document.getElementById("profile-avatar");
const profileName = document.getElementById("profile-name");
const profileHandle = document.getElementById("profile-handle");
const enterBtn = document.getElementById("enter-saturn");

const url = () =>  `https://api.github.com/users/${username}`
const username = null;

async function findGitUsers()  {
    try{
        const response = await fetch(url());
        if(!response.ok){
            throw new Error("user not found");
        }

        const user = await response.json();
        console.log(user);

    }catch(error){
        console.error(error.message);
    }
} 

findGitUsers(username)

function showUsername() {
    signInActions.hidden = true;
    viewUsername.hidden = false;
    input.focus();
}
  
function showChoose() {
    viewUsername.hidden = true;
    signInActions.hidden = false;
    gitBtn.focus();
}

function setFinding(isFinding) {
    findMe.disabled = isFinding;
    findMeSpinner.hidden = !isFinding;
    findMeLabel.textContent = isFinding ? "Finding…" : "Find me";


}

  
gitBtn.addEventListener('click', showUsername);
backToOptions.addEventListener('click', showChoose);
findMe.addEventListener('click', setFinding);