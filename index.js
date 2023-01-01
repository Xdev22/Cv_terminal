import data from "./data.js";
const Commands = data;

//VARIABLES
let terminalContent = document.querySelector(".terminal_content");

// ID GENERATOR FOR INPUTS
function getRandomInt() {
  let i = 0;
  let result = Date.now() + Math.random(+i++).toString();
  result = result.slice(20);
  return "input-" + result;
}

//-----------------------------NewInput function----------------------------------------

let newInput = () => {
  let id = getRandomInt();
  let div = document.createElement("div");
  div.classList.add("terminal_enter");
  terminalContent.appendChild(div);
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", `${id}`);
  //EVENTLISTENER IF ENTER IS PRESSED
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      valueProcessing(input.attributes.id.nodeValue);
    }
  });
  div.appendChild(input);
  input.focus();
};

newInput();
//---------------------------------------------------------------------

//-----------------------------RESPONSE CONSOLE FUNCTION----------------------------------------

let res_consoleFun = (title, description, tbody) => {
  tbody.innerHTML += `<tr class="res_console_ligne">
  <td class="command">${title}</td>
  <td class="info">${description}</td>
  </tr>`;
};

let res_consoleComponent = () => {
  let res_console = document.createElement("div");
  let br = document.createElement("br");
  res_console.classList.add("res_console");
  let table = document.createElement("table");
  res_console.appendChild(table);
  let tbody = document.createElement("tbody");
  table.appendChild(tbody);
  terminalContent.appendChild(res_console);
  terminalContent.appendChild(br);
  return tbody;
};
//---------------------------------------------------------------------

//-----------------------------SearchResult function----------------------------------------

let SearchResult = (userCommand) => {
  //Text if error
  let p = document.createElement("p");
  p.classList.add("res_console");

  //commandObj=== result of searching value.input
  let commandObj = Commands.find((el) => el.command === userCommand);

  if (commandObj !== undefined) {
    let tbody = res_consoleComponent();

    for (let obj of commandObj.infos) {
      res_consoleFun(obj.title, obj.description, tbody);
    }
    newInput();
    //WhiteSpace check
  } else if (!userCommand.trim().length) {
    newInput();
    //clear terminal
  } else if (userCommand === "cls") {
    while (terminalContent.firstChild) {
      terminalContent.removeChild(terminalContent.firstChild);
    }
    newInput();
  } else {
    p.innerText = `'${userCommand}' n’est pas reconnu en tant que commande interne
   ou externe, un programme exécutable ou un fichier de commandes.`;
    terminalContent.appendChild(p);
    terminalContent.appendChild(document.createElement("br"));
    newInput();
  }
};

//---------------------------------------------------------------------

//-----------------------------RecupValue function----------------------------------------

let valueProcessing = (idInput) => {
  let input = document.getElementById(`${idInput}`);
  let inputValue = input.value.toLowerCase();

  input.setAttribute("disabled", "true");

  SearchResult(inputValue);
};
//---------------------------------------------------------------------

//-----------------------------TerminalOnClick function : LastInputFocus----------------------------------------
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
