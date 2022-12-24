// Remember to import the data and Dog class!
import Dog from "./Dog.js"
import {dogs} from "./data.js"
let currentProfile = new Dog(dogs[0]);

document.getElementById("like-btn").addEventListener('click', ()=>{
    console.log('liked')
    getNewProfile();
})
document.getElementById("reject-btn").addEventListener('click', ()=>{
    console.log('rejected')
})

const render = () => document.querySelector('.profile').innerHTML = currentProfile.getDogHtml(); 
render();

const getNewProfile = () => {
    if(dogs.length){
        dogs.shift()
        currentProfile = new Dog(dogs[0]);
        setTimeout(render, 1000);
    }
    
}
