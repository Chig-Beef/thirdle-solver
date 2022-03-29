function reform() {
  window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
    //console.log(event.key);
    switch (event.key) {
      case "a":
        guess("A");
        break;
      case "b":
        guess("B");
        break;
      case "c":
        guess("C");
        break;
      case "d":
        guess("D");
        break;
      case "e":
        guess("E");
        break;
      case "f":
        guess("F");
        break;
      case "g":
        guess("G");
        break;
      case "h":
        guess("H");
        break;
      case "i":
        guess("I");
        break;
      case "j":
        guess("J");
        break;
      case "k":
        guess("K");
        break;
      case "l":
        guess("L");
        break;
      case "m":
        guess("M");
        break;
      case "n":
        guess("N");
        break;
      case "o":
        guess("O");
        break;
      case "p":
        guess("P");
        break;
      case "q":
        guess("Q");
        break;
      case "r":
        guess("R");
        break;
      case "s":
        guess("S");
        break;
      case "t":
        guess("T");
        break;
      case "u":
        guess("U");
        break;
      case "v":
        guess("V");
        break;
      case "w":
        guess("W");
        break;
      case "x":
        guess("X");
        break;
      case "y":
        guess("Y");
        break;
      case "z":
        guess("Z");
        break;
      case "Backspace":
        guess("Backspace");
        break;
      case "Enter":
        guess("Enter");
        break;
      case " ":
        guess(" ");
        break;
      case "Alt":
        redo();
        break;
      default:
        //console.log(event.key);
        return;
    }
    event.preventDefault();
    }, true);
  }

function guess(guess) {
  if (guess === "Backspace") {
    guesses[pos-1] = "";
    pos -= 1;
    if (pos < 0) {
      pos = 0;
    }
  }

  else if (guess === "Enter") {
    get_letters();

    possibles = calc_words(usables, definites);
    possibles = kull_words(possibles);

    console.log(possibles);

    return;
  }
  else {
    if (guesses[2] === ""){
      guesses[pos] = guess;
      pos++;
      if (pos > 3) {
        pos -= 1;
      }
    }
  }
}

function mousePressed() {
  if (mouseY > 40 && mouseY < 260) {
    if (mouseX > 40 && mouseX < 305) {
      for (n=0; n<26; n++) {
        if (mouseX > 40+45*(n%6) && mouseX < 80+45*(n%6)) {
          if (mouseY > 40+45*Math.floor(n/6) && mouseY < 80+45*Math.floor(n/6)) {
            letters[n]++;
            if (letters[n] > 2) {
              letters[n] = 0;
            }
            break;
          }
        }
      }
    }
  }
}

function redo() {
  guesses = ["", "", ""];
  tiles = [0, 0, 0];
  pos = 0;
  letters = [];
  for (i=0; i<26; i++) {
    letters.push(0);
  }
  out = "";
  possibles = [];
}

function color_stroke(r, g, b) {
  fill(r, g, b);
  stroke(r, g, b);
}

function draw_letters() {
  for (n=0; n<26; n++) {
    if (letters[n] === 0){
      fill(215, 215, 215);
      stroke(200, 200, 200);
    }
    else if (letters[n] === 1) {
      fill(100, 100, 100);
      stroke(128, 128, 128);
    }
    else if (letters[n] === 2) {
      fill(200, 200, 12);
      stroke(255, 255, 0);
    }
    else if (letters[n] === 3) {
      fill(12, 200, 12);
      stroke(0, 255, 0);
    }
    rect(40+45*(n%6), 40+45*Math.floor(n/6), 40, 40);
    color_stroke(0, 0, 0);
    text(String.fromCharCode(n+65), 47+45*(n%6), 72+45*Math.floor(n/6));
  }
}

function get_letters() {
  usables = [];
  definites = [];
  for (let i = 0; i < 26; i++) {
    if (letters[i] === 0 || letters[i] === 2) {
      usables.push(keys[i]);
      if (letters[i] === 2) {
        definites.push(keys[i]);
      }
    }
  }
}

function calc_words(maybe, defin) {
  let new_arr = [];
  let new_word;
  let allowed;
  for (let i = 0; i < maybe.length; i++) {
    for (let j = 0; j < maybe.length; j++) {
      for (let k = 0; k < maybe.length; k++) {
        allowed = true;
        new_word = maybe[i] + maybe[j] + maybe[k];
        for (let l = 0; l < defin.length; l++) {
          if (!new_word.includes(defin[l])) {
            allowed = false;
          }
        }
        if (allowed) {
          new_arr.push(new_word);
        }
      }
    }
  }
  return new_arr;
}

function kull_words(possibles) {
  let new_arr = []
  for (let i=0; i < possibles.length; i++) {
    let allowed = false;
    if (words.includes(possibles[i])) {
      allowed = true;
      for (let j = 0; j < 3; j++) {
        if (guesses[j] != "" && guesses[j] != " ") {
          if (possibles[i][j] != guesses[j]) {
            allowed = false;
          }
        }
      }
      if (allowed) {
        new_arr.push(possibles[i]);
      }
    }
  }
  return new_arr;
}
