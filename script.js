let body = document.querySelector("body");
let button = document.querySelector("button");
let JokeBlock = document.createElement("p");
document.body.appendChild(JokeBlock);
JokeBlock.classList.add("joke");
let EmojiBlock = document.createElement("p");
document.body.appendChild(EmojiBlock);
EmojiBlock.style.display = "";



function ErrJoke() {
    JokeBlock.style.display = "block";
    EmojiBlock.textContent = emojis[ Math.floor(Math.random() * emojis.length)];
    EmojiBlock.style.display = "block";
    JokeBlock.textContent = "Ууууупс! Что-то пошло не так!";
}

button.addEventListener("click", () => {
    fetch("https://api.chucknorris.io/jokes/random/")
    .then (res => res.json())
    .then ((data) => {
    JokeBlock.textContent = data.value;
    JokeBlock.style.display = "block";
    EmojiBlock.textContent = emojis[ Math.floor(Math.random() * emojis.length)];
    EmojiBlock.style.display = "block";
    return JokeBlock.textContent;})
    .catch((err) => ErrJoke())
}
)
