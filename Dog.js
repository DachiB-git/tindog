// Create the Dog class here
class Dog {
    constructor(data){
       Object.assign(this,data);
    }
    getDogHtml(){
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this;
        return `<div class="profile-inner">
                <img class="profile-image"src="${avatar}"/>
                <div class="profile-details">
                    <h1>${name}, ${age}</h1>
                    <p class="profile-bio">${bio}</p>
                </div>
                </div>
            `
    }
}
export default Dog;