import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const input = document.getElementById("inputField");
const boto = document.getElementById("afegir");
const lista = document.getElementById("llista");

const appSettings = {
    databaseURL: "https://lista-de-tareas-142a0-default-rtdb.europe-west1.firebasedatabase.app/"
}
const app = initializeApp(appSettings);
const baseDades = getDatabase(app);
const tasks = ref(baseDades, "tareas");


boto.addEventListener("click", function () {
    push(tasks, input.value)
    clearScreen();

})

function addElement(e) {
    lista.innerHTML += `<li>${e}</li>`;
}

function clearScreen() {
    input.value = ""
}

onValue(tasks, function (snapshot) {
    let resultats = Object.values(snapshot.val())
    for (let i = 0; i < resultats.length; i++) {
        let current = resultats[i]
        addElement(current)
    }
})
function clearList(){
    lista.innerHTML=""
}

