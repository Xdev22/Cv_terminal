//-----------------------------Test new version----------------------------------------

const commands = [{ command: "help", response: "" }];

//var

// générateur de nombre
function getRandomInt() {
  let i = 0;
  let result = Date.now() + Math.random(+i++).toString();
  result = result.slice(20);
  return "input-" + result;
}

let terminalContent = document.querySelector(".terminal_content");
// console.log(terminalContent);

//-----------------------------NewInput function----------------------------------------

let newInput = () => {
  let id = getRandomInt();

  let div = document.createElement("div");
  //   div.innerHTML = `<input type="text" id="${id}" onchange="recupValue(this.id)"> `;
  div.classList.add("terminal_enter");
  terminalContent.appendChild(div);
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", `${id}`);
  input.setAttribute("onchange", `recupValue(this.id)`);
  //   input.setAttribute("active", "true");
  //   input.focus();

  div.appendChild(input);
  input.focus();

  //   let input = querySelectorAll("div input");
};

newInput();
//---------------------------------------------------------------------

//-----------------------------RecupValue function----------------------------------------

// let input = document.querySelector("input");

let recupValue = (idInput) => {
  let input = document.getElementById(`${idInput}`);
  let inputValue = input.value.toLowerCase();
  console.log(inputValue);
  let p = document.createElement("p");
  p.classList.add("res_console");
  input.setAttribute("disabled", "true");
  if (inputValue === "help") {
    p.innerText = `
    ABOUT       Affiche des informations me concernant          
    `;
    terminalContent.appendChild(p);
  } else {
    p.innerText = `'${input.value}' n’est pas reconnu en tant que commande interne
    ou externe, un programme exécutable ou un fichier de commandes.`;

    terminalContent.appendChild(p);
  }

  newInput();
};

//---------------------------------------------------------------------

//-----------------------------TerminalOnClick function----------------------------------------
let clickFun = () => {
  let input = document.querySelector("input:last-of-type");
  input.focus();
};
terminalContent.addEventListener("click", clickFun);
//---------------------------------------------------------------------

//-----------------------------Agrandir function----------------------------------------
let aggrandirFun = () => {
  let terminal = document.getElementsByClassName("terminal").item(0);
  terminal.classList.toggle("fullScreen");
  if (terminal.classList.contains("fullScreen")) {
    terminal.style.width = "100vw";
    terminal.style.height = "100vh";
  } else {
    terminal.style.width = "";
    terminal.style.height = "";
  }
};

let aggrandir = document.getElementById("aggrandirId");
aggrandir.addEventListener("click", aggrandirFun);
//---------------------------------------------------------------------

//-----------------------------Close function----------------------------------------
let closeFunc = () => {
  let terminal = document.getElementsByClassName("terminal").item(0);
  terminal.style.display = "none";
  setTimeout(() => {
    window.location.reload();
  }, 1000);
};

let closeEl = document.getElementById("closeId");
closeEl.addEventListener("click", closeFunc);
//---------------------------------------------------------------------
