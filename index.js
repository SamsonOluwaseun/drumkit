

// Detect Mouse screen press
var numberOfDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfDrumButtons;i++){   
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       var buttonInnerHTML=this.innerHTML;
       //what to do when click is detected.
       makesound(buttonInnerHTML);
       }
       )};
        
        
// Detect Keyboard Press
document.addEventListener("keydown", function(event){
        makesound(event.key)
    })

function makesound(key){
        switch (key) {
            case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
                break;
            case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
                break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                    break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                    break;
            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                    break;
            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                    break;
            case "l":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                    break;
           default:
               console.log(buttonInnerHTML)
               break;
        }
    }


   /*
   function(){ alert("I got click") } is called an anonymos function

function add(num1, num2) {
        return num1 + num2;
         }
function subtract(num1, num2) {
         return num1 - num2;
        }
         
function multiply(num1, num2) {
         return num1 * num2;
        }
         
function divide(num1, num2) {
        return num1 / num2;
         }
         
function calculator(num1, num2, operator) {
        return operator(num1, num2);
         }*/