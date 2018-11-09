//Main page javascript

//Shared buttons for all files

/* var colors = {
    
    colorChose: function(){
        var random = Math.floor(Math.random()*16777215).toString(16)
        this.finalColor =  "#"+random;
        
    },

    cancelEffect: clearInterval(this.reference),

    reference: setInterval(this.colorChose, 2000),
    finalColor: this.reference,

}
*/
//We present the circus  
$(document).ready(function(){

    var p = document.createElement("p");
    var audio = document.createElement("audio");
    var button = document.createElement("button");
  
    //ids
    button.id = "enterButton";
    p.id = "title";
    audio.id = "introAudio";
    
    
    //Button Onclick you enter the circus + stop the music 
     button.onclick = function(){
        audio.pause();
        window.open("./mainCircus.html", '_self');
    }

    button.addEventListener("mouseover", function(){
        $(".fade").css("opacity", "0.1");
    })
    button.addEventListener("mouseleave", function(){
        $(".fade").css("opacity", "1");
    })
   
    
    //Audio play disabled atm
   

    $("#mainDiv").append(p);
    $("#mainDiv").append(button);

    function colorChose(){
        //Random number transformed into a sexagesimal (omg he said sexs)
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        var bckColor = Math.floor(Math.random()*16777215).toString(16);
        $("p").css("color", "#"+randomColor);
        $("#enterButton").css("border", "2px solid "+"#"+randomColor);
        $("#enterButton").css("background-color", "#"+bckColor);
    };
    //executing every 2 secs,
    var reference = setInterval(colorChose, 1000);
    

    audio.setAttribute('src', './audios/wb.wav');
    //disabled music
    audio.play();
    
    $("#enterButton").text("ENTER TO THE REALM OF JOKES");
    $("p").css("color", "red");
    $("p").text("Wellcome to the Inmoral Circus.");
    $("p").css("position", "absolute");
  

})

    






