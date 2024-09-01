
for (var i=0;i<7;i++){ 
document.querySelectorAll("button")[i].addEventListener("click",function(){
    var buttonInnerHTML=this.innerHTML;
    ButtonAnimation(buttonInnerHTML);
    switch (buttonInnerHTML){

        case "w":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        
            case "a":
                var kickbass=new Audio("sounds/kick-bass.mp3");
                kickbass.play();
                break;
            
                case "s":
                    var snare=new Audio("sounds/snare.mp3");
                    snare.play();
                    break;
        case "d":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
            
         case "j":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
            case "k":
                var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            
                case "l":
                    var tom4=new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;
                

                
        }
    });


}





addEventListener("keypress",function(event){

var x=event.key;

ButtonAnimation(x);

switch (x){

case "w":
    var crashk=new Audio("sounds/crash.mp3");
    crashk.play();
    break;
case "a":
    var kickbassk=new Audio("sounds/kick-bass.mp3");
    kickbassk.play();
    break;
case "s":
    var snarek=new Audio("sounds/snare.mp3");
    snarek.play();
    break;
case "d":
    var tom1k=new Audio("sounds/tom-1.mp3");
    tom1k.play();
    break;
case "j":
    var tom2k=new Audio("sounds/tom-2.mp3");
    tom2k.play();
    break;
case "k":
    var tom3k=new Audio("sounds/tom-3.mp3");
    tom3k.play();
    break;
case "l":
    var tom4k=new Audio("sounds/tom-4.mp3");
    tom4k.play();
    break;    

}
});


function ButtonAnimation(CurrentKey){
var ActiveButton =document.querySelector("."+CurrentKey);
ActiveButton.classList.add("pressed");
setTimeout(function(){
    ActiveButton.classList.remove("pressed");
},100);
}



