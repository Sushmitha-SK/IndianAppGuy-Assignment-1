async function fetchQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching quote:", error);
    }
}
async function displayQuote() {
    const quoteData = await fetchQuote();
    document.getElementById('quote').textContent = quoteData.content;
    document.getElementById('author').textContent = "- " + quoteData.author;
}
document.getElementById('generate-btn').addEventListener('click', displayQuote);
displayQuote();
