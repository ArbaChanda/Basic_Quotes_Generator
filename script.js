let quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",

    "In the middle of difficulty lies opportunity. - Albert Einstein",

    "Be yourself; everyone else is already taken. - Oscar Wilde",

    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",

    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",

    "Life is what happens when you're busy making other plans. - John Lennon",

    "Believe you can and you're halfway there. - Theodore Roosevelt",

    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",

    "You miss 100% of the shots you don't take. - Wayne Gretzky",

    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",

    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha",

    "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",

    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",

    "It does not matter how slowly you go as long as you do not stop. - Confucius",

    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",

    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",

    "Don't cry because it's over, smile because it happened. - Dr. Seuss",

    "Life is either a daring adventure or nothing at all. - Helen Keller",

    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",

    "The mind is everything. What you think you become. - Buddha"
]

const generateRandomQuote = () => {
    const randomIdx = Math.floor(Math.random()* quotes.length);
    randomQuote = quotes[randomIdx]
    return randomQuote
}

let generateButton = document.querySelector(".btn");
generateButton.addEventListener("click", ()=> {
    const quote = document.querySelector(".board")
    quote.textContent = generateRandomQuote()
})

