let characters = ['img/mario (1).png', 'img/peach(1).png', 'img/yoshi(1).png', 'img/toad(1).png', 'img/bwsmush(1).png']
let bowserHp = 300;
let marioHp = 200;
let peachHp = 100;
let yoshiHp = 80;
let luigiHp = 140;
let myDiv = document.getElementById("app")
let bowserStr = 30;
let marioStr = 20;
let peachStr = 20;
let yoshiStr = 25;
let luigiStr = 20;
let toadReg = 100;
let bowserShroomReg = 100;
let selectedCharacter = ""
let bossImg = 'img/bowser (1).png'
let boss = "Bowser"
let html = ""
let currentName = ""
let currentHealth = ""
let currentStrength = ""
let currentImgsrc = ""
characterSelect();
updateView();
//View
function updateView(){

myDiv.innerHTML = /*HTML*/ `
<h1>${boss}</h1>
<img src="${bossImg}">
<div>hp: ${bowserHp}</div>
<div>${html}</div>

`;
}

function characterSelect(){
html = /*HTML*/`
<div onclick="saveCharacter('mario', characters[0], marioHp, marioStr )">
<h2>mario</h2>
<img src="${characters[0]}">
</div>


`;
}
function saveCharacter(name, imgsrc, health, strength){
currentName = name
currentHealth = health
currentStrength = strength
currentImgsrc = imgsrc
choosenCharacter()
} 
function choosenCharacter(){
html = /*HTML*/`
<h1>${currentName}</h1>
<img src="${currentImgsrc}">
<div>hp: ${currentHealth}</div>
<div>str: ${currentStrength}</div>
<button onclick="heroesCombat()">Fight</button>



`;
updateView()
}
function heroesCombat(){
    
    
    
}
function bowserCombat(){




}
    















































