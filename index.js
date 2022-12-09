const sample_text = [
  "This is a sample text. Sample text, hmmph, oh yeah.",
  "This is a really cool website, I hope you enjoy your stay :).",
  `gleeful story," said D'Angelo Johnson, who was born and raised in Bakersfield, Calif. Mr. Johnson grew up in the Bay Area, where he learned cooking; at the restaurant he opened K-Mart, where he worked as a sales clerk.`,
  `fire and destruction of the land (the desert). You have the ability to do it on your turn (in a way that grants you extra life, and also that lets the enemy land on you). It is usually more effective if you have a fast lane, and it can be difficult to get the enemy to be careful enough to use your speed to get the most out of your lane if your lane isn't very good and you want someone playing a lot of different characters.`,
  "this is some text.",
];

const start_btn = document.querySelector(".start_btn");
const text_enter_input = document.querySelector("#text_enter_input");
start_btn.addEventListener("click", () => {
  text_enter_input.readOnly = true;
  if (text_enter_input.value == "") {
    StartGame(sample_text[Math.floor(Math.random() * sample_text.length)]);
  } else {
    StartGame(text_enter_input.value);
  }
});

function StartGame(game_text) {
  const text = game_text;
  let current_char = 0;
  const chars_inputted = [];
  let finished = false;
  const user_input_text = "";
  const correct_text = "";

  const start = () => {
    text_enter_input.focus = true;
    Refresh();
    window.addEventListener("keydown", (event) => {
      user_input_text += `${event.key}`;
      Refresh();
    });
  };

  const Refresh = () => {
    let temp_string = "";
    for (let i = 0; i < user_input_text; i++) {
      // loop through already typed text, comparing characters
    }
    for (let i = user_input_text.length; i < text.length - 1; i++) {
      // loop through rest of string to write, printing it out
      if (i == current_char) {
        temp_string += `<span class="cursor_virtual">|</span>${text[i]}`;
      } else if (i < current_char) {
        temp_string += `<span class="green_text">${text[i]}</span>`;
      } else {
        temp_string += text[i];
      }
    }
    typing_text_box.innerHTML = temp_string;
  };

  const loading_text = document.querySelector(".loading_text");
  const typing_text_box = document.querySelector(".typing_text_box");
  typing_text_box.textContent = game_text;
  let start_time;
  let end_time;

  setTimeout(() => {
    loading_text.textContent = "3...";
  }, 50);
  setTimeout(() => {
    loading_text.textContent = "2...";
  }, 1000);
  setTimeout(() => {
    loading_text.textContent = "1...";
  }, 2000);
  setTimeout(() => {
    loading_text.textContent = "Type!";
    start_time = new Date();
    start();
  }, 3000);
}
