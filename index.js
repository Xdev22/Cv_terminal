//-----------------------------Test new version----------------------------------------

const Commands = [
  {
    command: "help",
    response: [
      "<pre>ABOUT             Affiche des informations me concernant </pre>",
      "<pre>EXPERIENCES       Affiche mes experiences professionnelles</pre>",
      "<pre>HELP              Affiche les commandes spécifiques</pre>",
      "<pre>PROJECT           Affiche la liste de mes projets</pre>",
    ],
  },
  {
    command: "about",
    response: [
      "<pre> NAME           RAYAN</pre>",
      "<pre> STACK          FULLSTACK</pre>",
      "<pre> FAVORITE STACK BACKEND</pre>",
      "<pre> FRAMEWORKS     REACT,NODE,EXPRESS,NEST</pre>",
      "<pre> LANGAGE        JavaScript,TypeScript, Python(en cours)</pre>",
    ],
  },
];

let commandsList = [];

let commands = Commands.forEach((command) => {
  commandsList.push(command.command);
});

console.log(commandsList);

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
  input.setAttribute("onchange", `valueProcessing(this.id)`);
  //   input.setAttribute("active", "true");
  //   input.focus();

  div.appendChild(input);
  input.focus();

  //   let input = querySelectorAll("div input");
};

newInput();
//---------------------------------------------------------------------

//-----------------------------SearchResult function----------------------------------------

let SearchResult = (userCommand) => {
  let commandObj = Commands.find((el) => el.command === userCommand);
  let p = document.createElement("p");
  p.classList.add("res_console");

  if (commandObj !== undefined) {
    let div = document.createElement("div");
    div.innerHTML = commandObj.response.join("");
    terminalContent.appendChild(div);
  } else {
    p.innerText = `'${userCommand}' n’est pas reconnu en tant que commande interne
    ou externe, un programme exécutable ou un fichier de commandes.`;
    terminalContent.appendChild(p);
  }
  newInput();
};

//---------------------------------------------------------------------

//-----------------------------RecupValue function----------------------------------------

// let input = document.querySelector("input");

let valueProcessing = (idInput) => {
  let input = document.getElementById(`${idInput}`);
  let inputValue = input.value.toLowerCase();
  // console.log(inputValue);
  // let p = document.createElement("p");
  // p.classList.add("res_console");
  input.setAttribute("disabled", "true");

  SearchResult(inputValue);

  // if (SearchResult() === ) {
  // p.innerText = `
  // ABOUT       Affiche des informations me concernant
  // `;

  //   terminalContent.appendChild(p);
  // } else {
  //   p.innerText = `'${input.value}' n’est pas reconnu en tant que commande interne
  //   ou externe, un programme exécutable ou un fichier de commandes.`;

  //   terminalContent.appendChild(p);
  // }
};

//-----------------------------TerminalOnClick function LastInputFocus----------------------------------------
let clickFun = () => {
  let inputs = document.getElementsByTagName("input");
  let lastInputIndex = inputs.length - 1;
  let lastInput = inputs.item(lastInputIndex);
  lastInput.focus();
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
