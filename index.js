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
  const start = () => {
    text_enter_input.focus = true;
    Refresh();
    window.addEventListener("keydown", (event) => {
      if (finished) {
        return;
      }
      chars_inputted.push(event.key);
      try {
        if (event.key == text[current_char].toLowerCase()) {
          current_char++;
          Refresh();
        }
      } catch {
        if (event.key == text[current_char]) {
          current_char++;
          Refresh();
        }
      }
    });
  };

  const Refresh = async (finished = false) => {
    if (!finished) {
      if (current_char >= text.length) {
        end_time = new Date();
        const taken = (end_time - start_time) / 1000;
        loading_text.textContent = `Well done, you have finished.\nCompleted in: ${taken}'s`;
        window.removeEventListener("keydown", () => {});
        typing_text_box.innerHTML = "Click 'Start' to start playing...";

        finished = true;
      } else {
        finished = false;
        let temp_string = "";
        const text_div = document.createElement(`span`);
        for (const char_index in text) {
          if (char_index == current_char) {
            temp_string += `<span class="cursor_virtual">|</span>${text[char_index]}`;
          } else if (char_index < current_char) {
            temp_string += `<span class="green_text">${text[char_index]}</span>`;
          } else {
            temp_string += text[char_index];
          }
        }
        typing_text_box.innerHTML = temp_string;
      }
    } else {
      typing_text_box.innerHTML = "Click 'Start' to start playing...";
    }
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
