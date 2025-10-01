export async function loadMovies() {
  const res = await fetch("db.json");
  const data = await res.json();
  renderMovies(data);
}

function renderMovies(data) {
  const current = document.getElementById("currentlyWatching");
  data.currentlyWatching.forEach((movie) => {
    const img = document.createElement("img");
    img.src = movie.image_url;
    img.alt = movie.title;
    img.classList.add("movie-card");
    current.appendChild(img);
  });
  const previous = document.getElementById("previouslyWatched");
  data.previouslyWatched.forEach((movie) => {
    const img = document.createElement("img");
    img.src = movie.image_url;
    img.alt = movie.title;
    img.classList.add("movie-card");
    previous.appendChild(img);
  });
  const suggested = document.getElementById("suggestedMovies");
  data.results.forEach((movie) => {
    const img = document.createElement("img");
    img.src = movie.image_url;
    img.alt = movie.title;
    img.classList.add("movie-card");
    suggested.appendChild(img);
  });
}

const API_KEY = "VEeE5Lye8xN9Wxmxq1VwQmcCbKsDIMc2xwUxgKE8";
const BASE_URL = "https://api.watchmode.com/v1";

export async function searchMovies(query) {
  try {
    const searchType = 1;
    const url = `${BASE_URL}/autocomplete-search/?apiKey=${API_KEY}&search_value=${encodeURIComponent(
      query
    )}&search_type=${searchType}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data.results || []; // Watchmode returns an array under "title_results"
  } catch (error) {
    console.error("Search error:", error);
    return [];
  }
}
