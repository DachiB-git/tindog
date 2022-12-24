// Remember to import the data and Dog class!
import Dog from "./Dog.js"
import {dogs} from "./data.js"
let currentProfile = new Dog(dogs.shift());

document.getElementById("like-btn").addEventListener('click', function(){
    if(!currentProfile.isSwiped){
        getNewProfile(this.dataset.reaction);
    }
    
})
document.getElementById("reject-btn").addEventListener('click', function(){
    if(!currentProfile.isSwiped){
        getNewProfile(this.dataset.reaction);
    }
    
})

const render = () => {
    document.querySelector('.profile').innerHTML = currentProfile.getDogHtml();
} 
render();

const getReactionLocation = reactionString => {
    currentProfile.isSwiped = true;
    currentProfile.isLiked = reactionString === 'like' ? true : false;
    return reactionString === 'like' ? './images/badge-like.png' : './images/badge-nope.png'

}
const getReactionHtml = reactionString => {
    return `<img class="reaction" src="${getReactionLocation(reactionString)}"/>`
}
const renderReaction = reactionString => {
    document.querySelector(".profile").innerHTML += getReactionHtml(reactionString);
    
}
const getNewProfile = (reaction) => {
        renderReaction(reaction);
        if (dogs.length > 0) {
            console.log(dogs.length)
            currentProfile = new Dog(dogs.shift());
            setTimeout(render, 1000);
    
        }
        
}
