
var drumButtons=document.querySelectorAll(".drum").length;
console.log(drumButtons);
for(var i=0;i<drumButtons;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var value=this.innerHTML;
      makeSound(value);
      btnAnimation(value);
  });
}

document.addEventListener("keydown", function(e){
  makeSound(e.key);
  btnAnimation(e.key);
    });

function makeSound(key){
  switch(key){
      case "w":
        var sound=new Audio("sounds/tom-1.mp3");
        sound.play();
        break;

      case "a":
        var sound=new Audio("sounds/tom-1.mp3");
        sound.play();
        break;

      case "s":
        var sound=new Audio("sounds/tom-2.mp3");
        sound.play();
        break;

      case "d":
          var sound=new Audio("sounds/tom-3.mp3");
          sound.play();
          break;

      case "j":
            var sound=new Audio("sounds/snare.mp3");
            sound.play();
            break;

      case "k":
              var sound=new Audio("sounds/crash.mp3");
              sound.play();
              break;

      case "l":
                var sound=new Audio("sounds/kick-bass.mp3");
                sound.play();
                break;
      default:
          console.log(innerHTML);
  }
}

function btnAnimation(key){
  var activeButton = document.querySelector("."+key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}
