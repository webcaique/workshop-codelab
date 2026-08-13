let count = 0;

const button = document.getElementById("seguir");
const seguidores = document.getElementById("seguidores");
button.addEventListener("click", ()=>{
    count++;
    seguidores.innerText = `${count} seguidores`;
    button.disabled = true;
    
});