let value = 0
let personCount = 0
let i = 0
let smileCount = 0

let people = [];



document.getElementById("black").onclick=()=>{document.getElementById("para1").style.color="black"}
document.getElementById("red").onclick=()=>{document.getElementById("para1").style.color="red"}
document.getElementById("green").onclick=()=>{document.getElementById("para1").style.color="green"}
document.getElementById("blue").onclick=()=>{document.getElementById("para1").style.color="blue"}

function addOne(){
    value++;
    document.getElementById("changing").innerHTML = value
}

function update(){
    let userVal = document.getElementById("numInput").value
    value = userVal
    document.getElementById("changing").innerHTML = value
}

document.getElementById("addButton").onclick=addOne

document.getElementById("subInput").onclick=update

function countInstances()
{
    let counter = 0
    let desiredVal = document.getElementById("instances").value
    for (i = 0; i < value.length; i++)
    {
        if (value.substring(i,i+desiredVal.length) == desiredVal)
        {
            counter++
        }
    }
    document.getElementById("instanceCounter").innerHTML = "Number of Instances: " + counter
}

document.getElementById("instInput").onclick=countInstances

class Person {
    constructor(name, height)
    {
        this.name = name
        this.height = height
        personCount++
    }
    population()
    {
        console.log(personCount)
    }
    info()
    {
        return this.name + " " + this.height
    }
}


document.getElementById("person").onclick=createPerson

function getName(){
    return document.getElementById("name").value
}

function getHeight(){
    return document.getElementById("height").value
}

function createPerson(){
    let name = getName()
    let height = getHeight()
    let person = new Person(name, height);
    people.push(person);
    document.getElementById("pplList").innerHTML += people[i].info() + ", "
    i++
    document.getElementById("pop").innerHTML = "Population: " + personCount
}

function buySmiley()
{
    if (value > 9)
    {
        value -= 10
        document.getElementById("smiles").innerHTML += " :) "
        smileCount++
    }
    /*
    else
    {
        document.getElementById("changing").innerHTML = "Cannot Afford Smiley"
    }
    */
    document.getElementById("changing").innerHTML = value
}


document.getElementById("secret").onclick=()=>{setInterval(addOne, 100), value -= 100}

document.getElementById("autobuy").onclick=()=>{setInterval(buySmiley, 100)}

document.getElementById("crash").onclick=()=>{while(true){value++}}

document.getElementById("addSmile").onclick=buySmiley


// document.getElementById("reset").onclick=resetAll

// function resetAll()
// {
//     clearInterval(addInterval)
//     clearInterval(smileInterval)
// }

// document.getElementById("theme").onclick=()=>{document.querySelectorAll("#body").style.backg="white"}
