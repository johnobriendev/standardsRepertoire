let rep = JSON.parse(localStorage.getItem("rep")) || [];

// let rep = [
//     // { name: "Embraceable You", composer: "George Gershwin" },
//     // { name: "Lush Life", composer: "Billy Strayhorn" },
//     // { name: "Bemsha Swing", composer: "Thelonious Monk" },
//     // { name: "Naima", composer: "John Coltrane" }
// ];


const display = document.querySelector(".bottom");
const topPart = document.querySelector(".top");
const middlePart = document.querySelector(".middle");

const nameInput = document.querySelector(".standard");
const composerInput = document.querySelector('.composer');
const button = document.querySelector('.button');

const updateName = document.querySelector(".update-name");
const updateComposer = document.querySelector('.update-composer');
const updateAlert = document.querySelector('.update-alert');
const updateSubmit = document.querySelector(".update-btn");

///////FUNCTIONS/////////
const render = () =>{
    display.innerHTML = '';

    rep.forEach((song, index) => {
        const songContainer = document.createElement("div");
        

        const updateButton = document.createElement('button');
        updateButton.classList.add('btn');
        updateButton.innerText = "Update";
        updateButton.addEventListener("click", event =>{
            topPart.classList.toggle("hide");
            middlePart.classList.toggle("hide");
            updateAlert.classList.toggle("hide");
            updateName.value = song.name;
            updateComposer.value = song.composer;
            updateSubmit.setAttribute("updated", index);
        } )


        const deleteButton = document.createElement('button');
        deleteButton.classList.add("btn");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", event =>{
            rep.splice(index,1);
            render();
        })

        
        const newStandard = document.createElement("p");
        newStandard.innerText = `${song.name} by ${song.composer}`;
       
        songContainer.appendChild(newStandard);
        songContainer.appendChild(updateButton);
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

const updateStandard = event =>{
    const updatedIndex = event.target.getAttribute("updated");
    const name = updateName.value;
    const composer = updateComposer.value;
    rep[updatedIndex] = { name, composer };
    render();
    updateName.value = '';
    updateComposer.value = '';
    topPart.classList.toggle("hide");
    middlePart.classList.toggle("hide");
    updateAlert.classList.toggle("hide");
}


render();
updateSubmit.addEventListener("click", updateStandard)
button.addEventListener("click", createStandard);

