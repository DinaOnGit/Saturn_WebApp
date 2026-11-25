// topnav.js · Part 2 · Abdullah · Top nav
// Your JavaScript goes here.
//  Get the elements from the HTML
const searchButton = document.getElementById("searchButton");
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");
const searchClose = document.getElementById("searchClose");

const accountButton = document.getElementById("accountButton");
const dropdown = document.getElementById("dropdown");
const disconnectButton = document.getElementById("disconnectButton");

// Show search bar when icon is clicked
function openSearch() {
  searchButton.classList.add("hidden");
  searchBox.classList.remove("hidden");
  searchInput.focus();
}

// Hide search bar and show search icon when X is clicked
function closeSearch() {
  searchInput.value = "";
  searchBox.classList.add("hidden");
  searchButton.classList.remove("hidden");
}

// Open or close the account dropdown
function toggleDropdown(event) {
  event.stopPropagation();
  dropdown.classList.toggle("hidden");
}

// Close dropdown if user clicks anywhere else on the page
function closeDropdownOutside(event) {
  if (!dropdown.contains(event.target)) {
    dropdown.classList.add("hidden");
  }
}

// Disconnect GitHub button
function disconnectGitHub() {
  alert("GitHub disconnected");
  dropdown.classList.add("hidden");
}

// Connect functions to button clicks
searchButton.addEventListener("click", openSearch);
searchClose.addEventListener("click", closeSearch);
accountButton.addEventListener("click", toggleDropdown);
document.addEventListener("click", closeDropdownOutside);
disconnectButton.addEventListener("click", disconnectGitHub);
