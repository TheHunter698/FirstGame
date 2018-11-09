//This is the main redirect and where the people get redirected to 

/* 
* Main Circus created by David Bros
* Main circus creates three circus games: hammer, shoot and dank clown   
* The different games appear by toggling and adding html elements dynamically
* Random color is a function that changes the color of the html element P each second.
* EventsButtons defines the onlick events for all the buttons 
*      - For the button 1 it initializes an instance of the WieghtHammer class (hammerTEST.js)
       - For the button2 it initializes an instance of the dankClown class (dankClown.js)
       - For the button3 it initializes an instance of the shootingRange class (shoot.js)
* Append function contais all the dom elements for the mainCircus page + it plays an audio element 
*/



$(document).ready(function(){  
    //Main UI execute

    mainUI();
    
    //Styling and creating the mainUI
    function mainUI(){
        
        //Editing classes and toggles
        $("body #mainDiv").addClass("mainPage");
        $("#clown").toggle();
        $("#hammer").toggle();
        $("#shoot").toggle();

        //Function calling
        append();   
        eventsButtons();
        randomColorP();
        
    }
    

    //Changing the main title color
    function randomColorP(){
            function colorChose(){
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            $("p").css("color", "#"+randomColor);
            }
            //executing every 2 secs,
            var reference = setInterval(colorChose, 1000);
    }


    //Events of the buttons + dom changes for each one
    function eventsButtons(){

        //Mouse effects
        $("button").on("mouseover ", function(){
            $(".fade").css("opacity", "0,1");
            $("body").find("button").css("opacity", "0.1");
            $(this).css("opacity", "1", "!important");
        })

        
        $("button").on("mouseleave", function(){
            $("body").find("button").css("opacity", "1");
            $(this).css("opacity", "1");
        })

        //Dom transitions
        button1.onclick = function(){

            document.getElementById("music").pause();
            $("#startPage").toggle();
            $("#hammer").toggle();
            
            var hammer = new weightHammer(); 
            hammer.setJquery();
            hammer.setOnclicks();
            
        }
        //Calling clown game
        button2.onclick = function(){

            document.getElementById("music").pause();
            $("#startPage").toggle();
            $("#clown").toggle();

            var clown = new dankClown();
            clown.setJquery();
            clown.setOnclicks(clownText, clownAnswers);
            
        }

        button3.onclick = function(){
            document.getElementById("music").pause();
            $("#startPage").toggle();
            $("#shoot").toggle();

            var shoot = new shootingRange();
            shoot.setJquery();
            shoot.setOnclick();
            //shoot.setJquery();
        }
       
       
    }



    //Creating and appending elements for main page
    function append(){
        //What I need to append
        var button1 = document.createElement("button");
        var button2 = document.createElement("button");
        var button3 = document.createElement("button");
        var p = document.createElement("p");
        var audio = document.createElement("audio");

        audio.src="./audios/circusTheme.wav";

        //Text needs appending
        var pTxt = document.createTextNode("Welcome to the Dankest Circus");
        var buttonTxt = document.createTextNode("To the strength test!");
        var button2Txt = document.createTextNode("To the moral test!");
        var button3Txt = document.createTextNode("To the dexerity test!");
        
        //Ids
        audio.id = "music";
        button1.id = "button1";
        button2.id = "button2";
        button3.id = "button3";

        //append rest
        $("#startPage").append(button1, button2, button3, audio);
        $("#mainDiv").append(p);

        //Playing audio
        audio.play();

        //append texts
        $("#button1").append(buttonTxt);
        $("#button2").append(button2Txt);
        $("#button3").append(button3Txt);
        $("p").append(pTxt);
         
        
    }
    
})