{/* <button type="button" id="js-new-quote" class="new-quote button">
    Generate a new quote
    </button> */}
// REFERENCE TO QUOTE BUTTON IN HTML


const spinner = document.querySelector('#js-spinner');
const twitterButton = document.querySelector('#js-tweet');
const cite = document.querySelector("blockquote cite");
const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);

// const endpoint = ['https://api.whatdoestrumpthink.com/api/v1/quotes/random', 'https://api.quotable.io/quotes/random'];
const endpoint = 'https://api.quotable.io/random';
const num = endpoint.length;


async function getQuote() {
    spinner.classList.remove('hidden');
    newQuoteButton.disabled = true;

    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw Error(response.statusText);
        }

        const json = await response.json();
        // displayQuote(json.message);
        // setTweetButton(json.message);
        displayQuote(json.content);
        console.log(json.author);
        displayAuthor(json.author);
        
    }   catch(err) {
        console.log(err)
        alert('Failed to fetch new quote');
    }   finally {
        newQuoteButton.disabled = false;
        spinner.classList.add('hidden');
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}

function displayAuthor(author) {
    const authorText = document.querySelector('#js-author-text');
    authorText.textContent = author;
}

function setTweetButton(quote) {
    twitterButton.setAttribute('href', `https://twitter.com/share?text=${quote} - Donald Trump`);
}

function randomNum(max) {
    return Math.floor(Math.random() * max);
}


getQuote();
