let rep = JSON.parse(localStorage.getItem("rep")) || [];

// let rep = [
//     // { name: "Embraceable You", composer: "George Gershwin" },
//     // { name: "Lush Life", composer: "Billy Strayhorn" },
//     // { name: "Bemsha Swing", composer: "Thelonious Monk" },
//     // { name: "Naima", composer: "John Coltrane" }
// ];


const display = document.querySelector(".bottom");

const nameInput = document.querySelector(".standard");
const composerInput = document.querySelector('.composer');
const button = document.querySelector('.button');

///////FUNCTIONS/////////
const render = () =>{
    display.innerHTML = '';

    rep.forEach((song, index) => {
        const songContainer = document.createElement("div");
        songContainer.classList.add("container");
        
        const deleteButton = document.createElement('button');
        deleteButton.classList.add("delete-btn");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", event =>{
            rep.splice(index,1);
            
            render();
        })

        
        
        const newStandard = document.createElement("h3");
        newStandard.innerText = `${song.name} by ${song.composer}`;
       
        songContainer.appendChild(newStandard);
        songContainer.appendChild(deleteButton);
       
        display.appendChild(songContainer);
        
    })
    localStorage.setItem("rep", JSON.stringify(rep));
}

const createStandard = () =>{
    const name = nameInput.value;
    const composer = composerInput.value;
    const newStandard = { name, composer };
    rep.push(newStandard);
    localStorage.setItem("rep", JSON.stringify(rep));
    render();
    nameInput.value = "";
    composerInput.value = "";

}

render();
button.addEventListener("click", createStandard);

