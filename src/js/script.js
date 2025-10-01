import { loadMovies, searchMovies } from "./api.js";
import { renderSearchResults } from "./ui.js";

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

loadMovies();

document.addEventListener("click", (e) => {
  if (searchBtn.contains(e.target)) {
    searchResults.style.display = "block";
  }
});

document.addEventListener("click", (e) => {
  if (!searchInput.contains(e.target) && !searchBtn.contains(e.target)) {
    searchResults.style.display = "none";
  }
});

document.getElementById("searchBtn").addEventListener("click", async () => {
  const query = document.getElementById("searchInput").value.trim();
  if (query) {
    const results = await searchMovies(query);
    renderSearchResults(results);
  }
});

document
  .getElementById("searchInput")
  .addEventListener("keypress", async (e) => {
    if (e.key === "Enter") {
      document.getElementById("searchBtn").click();
    }
  });
