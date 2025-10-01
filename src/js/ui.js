export function renderSearchResults(results) {
  const container = document.getElementById("searchResults");
  container.innerHTML = "";

  if (results.length === 0) {
    container.innerHTML = "<p>No results found.</p>";
    return;
  }

  results.forEach((movie) => {
    const div = document.createElement("div");
    div.classList.add("movie-card");
    div.innerHTML = `
      <img src="${movie.image_url}" alt="${movie.name}">
      <p>${movie.name}</p>
    `;
    container.appendChild(div);
  });
}
