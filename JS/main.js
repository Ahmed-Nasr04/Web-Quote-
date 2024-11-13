const arrayOfQuotes = [
  {
    author: "Marilyn Monroe",
    quote: `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`,
  },
  {
    author: "Frank Zappa",
    quote:"So many books, so little time.",
  },
  { author: "Albert Einstein", 
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." },
  {
    author: "Marcus Tullius Cicero",
    quote: "A room without books is like a body without a soul.",
  },
  {
    author: "William W. Purkey",
    quote:`You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.`,
  },
  {
    author: "Elbert Hubbard",
    quote: "Do not take life too seriously. You will not get out alive.",
  },
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Elbert Hubbard",
    quote: "A friend is someone who knows all about you and still loves you.",
  },
];

function generateQuote() {
  const random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
  document.getElementById(
    "quote"
  ).innerHTML = `\"${arrayOfQuotes[random].quote}\"`;
  document.getElementById(
    "authorQuote"
  ).innerHTML = `--${arrayOfQuotes[random].author}`;
}
