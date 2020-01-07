/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array with object literal
***/
let quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        source: "Walt Disney",
        citation: "Unknown",
        year: ""
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        source: "Nelson Mandela",
        citation: "Unknown",
        year: ""
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        source: "Steve Jobs",
        citation: "Speech",
        year: 2005
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        source: "Eleanor Roosevelt",
        citation: "Unknown",
        year: ""
    },
    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        source: "Oprh Winfrey",
        citation: "Unknown",
        year: ""
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        source: "James Cameron",
        citation: "Unknown",
        year: ""
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        source: "Allen Saunders",
        citation: "Publication",
        year: 1957
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else.",
        source: "Margaret Mead",
        citation: "Unknown",
        year: ""
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        ource: "Elanor Roosevelt",
        citation: "Unknown",
        year: ""
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        source: "Benjamin Franklin",
        citation: "Unknown",
        year: ""
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        source: "Aristotle",
        citation: "Unknown",
        year: ""
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        source: "Ralph Waldo Emerson",
        citation: "Unknown",
        year: ""
    },
    {
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        source: "Robert Louis Stevenson",
        citation: "Unknown",
        year: ""
    },
    {
        quote: "Be like water making its way through cracks. Do not be assertive, but adjust to the object, " +
            "and you shall find a way around or through it. If nothing within you stays rigid, outward things will disclose themselves. " +
            "Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup. You put water into a bottle " +
            "and it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can flow or it can crash. Be water, my friend.",
        source: "Bruce Lee",
        citation: "Publication",
        year: 2000
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        source: "Maya Angelou",
        citation: "Unknown",
        year: ""
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        source: "Abraham Lincoln",
        citation: "Unknown",
        year: ""
    },
    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        source: "Babe Ruth",
        citation: "Unknown",
        year: ""
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        source: "Thomas A. Edison",
        citation: "Unknown",
        year: ""
    },
    {
        quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        source: "Dr. Seuss",
        citation: "Unknown",
        year: ""
    },
    {
        quote: "The only impossible journey is the one you never begin.",
        source: "Tony Robbins",
        citation: "Speech",
        year: ""
    },
    {
        quote: "Life is a journey that must be traveled no matter how bad the roads and accommodations.",
        source: "Oliver Goldsmith",
        citation: "Unknown",
        year: ""
    }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote(quoteArray)
{
    // generate a random number between 0 and the last index in the array parameter
    let randomNum = Math.floor(Math.random() * (quoteArray.length - 0) + 0);
    // use the random number and box notation to grab a random item from the quotes array & return the random item
    return quoteArray[randomNum];
}

/***
 * `printQuote` function
***/
function printQuote()
{
   // create a variable that calls the getRandomQuote() function
   let quotation = getRandomQuote(quotes);

   // create a variable that initiates your HTML string & add the two default quote and source property
   let text = "";
   text += '<p class="quote">' + quotation.quote + '</p>';
   text += '<p class="source">' + quotation.source + '</p>';

   // conditional statement to add a citation and year if NOT null
   if (quotes.citation !== null)
   {
        text += '<span class="citation">' + quotation.citation + '</span>';
   }
   if (quotes.year !== null)
   {
    text += '<span class="year">' + quotation.year + '</span>';
   }

   // close HTML tag
   text += '</p>'; 

   // set innerHTML of .quote-box to complete HTML string
   document.getElementById('quote-box').innerHTML = text;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
