// let noDrum = document.querySelectorAll('.drum')
// for (let i = 0; i <noDrum.length; i++) {
//     noDrum[i].addEventListener("click",function() {
//         let buinner = this.innerHTML;
//         makesound(buinner)
//         buttonAnimation(buinner);
//     })
// }
let noDrum=document.getElementById('mydrum');
noDrum.addEventListener("click",(e)=>{
        let buinner=e.target.innerHTML;
        makesound(buinner);
        buttonAnimation(buinner);
   
})

let makesound=(key)=>{
    switch(key){
        case "w":
            let tom1= new Audio("sound/tom-1.mp3");
            tom1.play();
            break
        case "a":
            let tom2= new Audio("sound/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3= new Audio("sound/tom-3.mp3");
            tom3.play();
            break
        case "d":
            let tom4= new Audio("sound/tom-4.mp3");
            tom4.play();
            break
        case "j":
            let crash= new Audio("sound/crash.mp3");
            crash.play();
            break
        case "k":
            let kick= new Audio("sound/kick-bass.mp3");
            kick.play();
            break
        case "l":
            let snare= new Audio("sound/snare.mp3");
            snare.play();
            break
        default:
            alert("wrong key pressed")
            break




    }   
}

function buttonAnimation(key){
var actButton=document.querySelector(`.${key}`);
actButton.classList.add("pressed");

setTimeout(function()
{
    actButton.classList.remove("pressed");

},1000);
}