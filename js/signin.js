// signin.js · Part 1 · Tai · Sign-in and its states
// Your JavaScript goes here.
const gitBtn = document.getElementById('github-signin');
const anonBtn = document.getElementById('anonymous-signin');
const viewUsername = document.getElementById('view-username');
const backToOptions = document.getElementById("back-to-choose");
const signInActions = document.querySelector('.signin_actions');
const input = document.getElementById('github-username');


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
  
gitBtn.addEventListener('click', showUsername);
backToOptions.addEventListener('click', showChoose);