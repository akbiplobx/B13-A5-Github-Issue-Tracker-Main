// login function start
function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if (user === "admin" && pass === "admin123") {    
        window.location.href = "main.html"; 
    } else {
        alert("Wrong username or password. Try again");
    }
}
// login function end
// ================================================================================
const container = document.getElementById("cardContainer");
let allIssues = [];

// API load
fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
  .then(res => res.json())
  .then(data => {

    allIssues = data.data; // API থেকে issues
    displayCards(allIssues);
    setActive("allBtn");
  }); 
//   ======================

function displayCards(cards){

  container.innerHTML = "";

  cards.forEach(card => {

    const div = document.createElement("div");

    // --------------------popup-------------
    div.onclick = () => openModal(card); 
    div.className = "cursor-pointer";
    // ---------------------------------------
      const statusImg = card.status === "open" 
      ? "./image/Open-Status.png"
      : "./image/Closed-Status.png";

    const statusColor = card.status === "closed"
      ? "bg-purple-400"
      : "bg-emerald-400";

    div.innerHTML = `
    <div class="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">

       <div class="h-1 w-full ${statusColor} rounded-t-lg"></div>
    <div class="p-4 flex flex-col flex-grow">
    

        <div class="flex justify-between items-start mb-2">
          <div class="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 text-xs">
            <img src="${statusImg}" alt="">
          </div>

          <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-red-50 text-red-500 uppercase">
            ${card.priority}
          </span>
        </div>

        <h3 class="text-sm font-bold text-gray-800 leading-tight mb-1">
          ${card.title}
        </h3>

        <p class="text-xs text-gray-500 line-clamp-2 mb-3">
          ${card.description}
        </p>
        <div class="flex flex-wrap gap-1 mb-4">
        <span class="flex items-center gap-1 px-1.5 py-0.5 rounded bg-red-50 text-red-500 text-[9px] font-bold border border-red-100">
          <i class="fa-solid fa-bug text-[8px]"></i> BUG
        </span>
        <span class="flex items-center gap-1 px-1.5 py-0.5 rounded bg-orange-50 text-orange-400 text-[9px] font-bold border border-orange-100">
          <i class="fa-solid fa-circle-info text-[8px]"></i> HELP WANTED
        </span>
      </div>
       <hr class="h-px bg-gray-200 border-0 ">
        <div class="mt-auto pt-2 border-t border-gray-50 text-[10px] text-gray-400">
          <p>#${card.id} by ${card.author}</p>
          <p>${card.createdAt}</p>
        </div>

      </div>
    </div>
    `;

    container.appendChild(div);

  });
}

// btn active
const buttons = document.querySelectorAll(".btn");
function setActive(btnId){
  buttons.forEach(btn => btn.classList.remove("active-btn"));
  document.getElementById(btnId).classList.add("active-btn");
}

// button functions

function showAll(){
  setActive("allBtn");
  displayCards(allIssues);
}

function showOpen(){
  setActive("openBtn");
  const filtered = allIssues.filter(card => card.status === "open");
  displayCards(filtered);
}

function showClosed(){
  setActive("closedBtn");
  const filtered = allIssues.filter(card => card.status === "closed");
  displayCards(filtered);
}
// ==================================
function openModal(card) {
  const modalContent = document.getElementById("modal-content");
  
  modalContent.innerHTML = `
    <h1 class="text-3xl font-bold text-slate-800 mb-2">${card.title}</h1>
    
    <div class="flex items-center gap-3 mb-6">
      <span class="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm capitalize">${card.status}</span>
      <p class="text-slate-500 text-sm">Opened by <span class="font-semibold">${card.author}</span> • ${card.createdAt}</p>
    </div>

    <div class="flex gap-2 mb-6">
      <span class="bg-red-50 text-red-500 px-3 py-1 rounded border border-red-100 text-xs font-bold uppercase">🐞 BUG</span>
      <span class="bg-orange-50 text-orange-400 px-3 py-1 rounded border border-orange-100 text-xs font-bold uppercase">💡 HELP WANTED</span>
    </div>

    <p class="text-slate-600 mb-8 leading-relaxed">
      ${card.description}
    </p>

    <div class="bg-slate-50 p-6 rounded-xl flex justify-between items-center">
      <div>
        <p class="text-slate-400 text-xs mb-1 ">Assignee:</p>
        <p class="font-bold text-slate-800">${card.author}</p>
      </div>
      <div class="text-right">
        <p class="text-slate-400 text-xs mb-1 ">Priority:</p>
        <span class="bg-red-500 text-white px-4 py-1 rounded-4xl text-xs font-bold uppercase">${card.priority}</span>
      </div>
    </div>
  `;

 
  document.getElementById("issue_modal").showModal();
}