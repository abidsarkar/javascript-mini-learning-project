const SearchForm = document.getElementById("searchForm");
const SearchBox = document.getElementById("searchBox");
const SearchResult = document.getElementById("searchResult");
const ShowMoreBtn = document.getElementById("showMoreBtn");
let keyword = "birds";
let page = 1;

let key = "your_api_key";
async function searchImage(keyword) {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}&per_page=12`;
  try {
    const response = await fetch(url);
    // console.log(response);
    const data = await response.json();
    // console.log(data.total);
    const warningMessage = document.getElementById("warningMessage");
    if (data.total === 0) {
      warningMessage.style.display = "block";
      SearchBox.classList.add("redGlow");
    }
    SearchBox.addEventListener("input", () => {
      warningMessage.style.display = "none";
      SearchBox.classList.remove("redGlow");
    });
    if (page === 1) {
      SearchResult.innerHTML = "";
    }
    const results = data.results;
    results.forEach((result) => {
      // Create a container for the image and download button
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("img1");
      // Create the image element
      const image = document.createElement("img");
      image.src = result.urls.small;
      image.alt = result.alt_description || "Image";
      // Create the download button
      const downloadBtn = document.createElement("button");
      downloadBtn.classList.add("downloadBtn");
      downloadBtn.innerHTML = '<i class="fa-solid fa-download"></i>'; // Font Awesome icon
      // Download button functionality
      downloadBtn.addEventListener("click", async () => {
        const imageBlob = await fetch(result.urls.regular).then((response) =>
          response.blob()
        );
        const imageURL = URL.createObjectURL(imageBlob);
        const link = document.createElement("a");
        link.href = imageURL;
        link.download = `${keyword}_${result.slug}image.jpg`; // Filename for the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
      // Append image and button to the container
      imageContainer.appendChild(image);
      imageContainer.appendChild(downloadBtn);

      // Append the container to the search results grid
      SearchResult.appendChild(imageContainer);
    });
    ShowMoreBtn.style.display = "block";
  } catch (error) {
    console.error("Error fetching images:", error);
  }
}
SearchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  let value = SearchBox.value;
  searchImage(value);
});

ShowMoreBtn.addEventListener("click", () => {
  page++;
  let value = SearchBox.value;
  searchImage(value);
});
