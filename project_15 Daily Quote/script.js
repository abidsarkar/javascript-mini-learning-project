const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const share = document.querySelector(".share");
const cpy = document.querySelector(".cpy");
async function getQuote() {
    const api = "https://quotes-api-self.vercel.app/quote";
    // const response = await fetch("https://quotes-api-self.vercel.app/quote");
    try{}
    catch{

    }
    const data = await response.json();
    console.log(response);
    console.log(data);
    console.log(data.quote);
    console.log(data.author);
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
  }

  getQuote();