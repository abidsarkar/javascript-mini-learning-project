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
    const warningMessage = document.getElementById('warningMessage');
    if(data.total===0){
      warningMessage.style.display = 'block';
      SearchBox.classList.add('redGlow');
    }
    SearchBox.addEventListener('input', () => {
      warningMessage.style.display = 'none';
      SearchBox.classList.remove('redGlow');
    });
    if(page === 1){
        SearchResult.innerHTML = "";
    }
    const results = data.results;
    results.map((result) => {
      const image = document.createElement("img");
      image.src = result.urls.small;
      const imageLink = document.createElement("a");
      imageLink.href = result.links.html;
      imageLink.target = "_blank";
      imageLink.appendChild(image);
      SearchResult.appendChild(imageLink);
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
