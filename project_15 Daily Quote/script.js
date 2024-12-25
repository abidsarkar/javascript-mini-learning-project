const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const share = document.querySelector(".share");

async function getQuote() {
  const api = "https://quotes-api-self.vercel.app/quote";

  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // console.log(response);
    // console.log(data);
    // console.log(data.quote);
    // console.log(data.author);
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
  }  catch (error) {
    console.error("Error fetching weather data:", error);
    quote.textContent = "Failed to fetch quote data. Please try again.";
    author.textContent = "";
  }
}

getQuote();

// copy the quote
const cpy = document.querySelector(".cpy");
cpy.addEventListener('click', async () => {
    try {
      if(quote===''){
        // console.log("unsuccess");
      }
      else{
        await navigator.clipboard.writeText(quote.textContent);
        // console.log("success");
      }
      
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
      // Show error message (optional)
    }
  });