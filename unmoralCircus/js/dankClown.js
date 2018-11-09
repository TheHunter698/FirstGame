//The clown is supposed to make jokes and give 3 answers as result
//those 3 being incorrect and him telling the dank part as
//his own answer 

/*Needs of the clown
    - 3 appearing answers as div, clickable 
    - Fading effects
    - ability to choose a random joke in an array of jokes and without reusing
    - ability to display 3 options as clickable for each joke
    - ability to transition to the next or last "attraction"
    - ability to change states of the clown for every iteration of the button


*/
//THIS WORKS


var clownText = ["What was David Bowie's last hit.",
        "Did you hear about the blind prostitute?",
        "How many Emo kids does it take to screw in a lightbulb",
        "How many men does it take to open a beer?",
        "Wha do you call an It teacher who touches up his students?",
        "How do you call a teenage boy who doesn't masturbate?",
        "What is. the difference between acne and a catholic priest",
        "What's does Donal Trump's hair and a thong have in common?",
        "What is the difference between Michael Jackson and a grocery bag?",
        "What do you call a little boy with no arms and no legs?", 
        "What's better than a baby in one room?",
        "Why do jews have big noses?", 
        "What's  the difference between a Jew and Harry Potter?",
        "What is a pedophile's favorite part of Halloween?",
        "What's the difference between dollars and Jews?",
        " What's white and fourteen inches long? ", 
        "What do you get when corssing an Italian with a gorilla?",
        "What do you get when you cross a black man and a spanish?",
        "What did the pedophile say when he was released from prison? ",
        "What's white on top and black on bottom?", 
        "What do rednecks do in Halloween?", 
        "What do you call three dogs and a blackbird?",
        "Why do female black widow spiders kill their males after mating?",
        "What's the best way to kill a man?",
        "How many mexicans does it take to change a light bulb?",
        "What's got 90 balls and makes women sweat?",
        "What's the difference between a jew and santa?",
        "Why did usa lose the chess match?",
        "What's the difference between a muslim girl and a computer?",
        "Why is communism good?",
        "What's the difference between ET and an Illegal immigrant?",
    ];
    
var clownAnswers = ["Probably Heroin.", 
       "Well you got to hand it to her.","None, cause the would seat in the darkness an cry",
       "None, they all sit in the dark and cry.",
        "A PDF File.", 
        "A liar", 
        "Acne usually comes on a boys face after he turns 12",
        "They both barely cover the asshole.",
        "One is made of plastic and is dangerous for children to play with. The other is used to carry groceries",
        "Names", 
        "One baby in 5 rooms", 
        "Because air is free", 
        "He can escape the chamber",
        "Free delivery.", 
        "I'd give a shit if I lost 6 million dollars.",
        "Nothing.","A retarded gorilla.",
        "A person who's too lazy to steal.", 
        "I feel like a kid again.", 
        "US Culture.",
        "Pump kin!", 
        "The Spice Grils",
        "To stop the snorting before it starts",
        "Put a naked woman and a six-pack in front of him. Then tell him to pick only one.",
        "Juan",
        "Bingo.",
        "Santa goes DOWN the chimney.",
        "Because they already lost two towers. ",
        "No matter how hot the computer gets, it will not explode. ",
        "It cures obesity",
        "ET learned how to speak English and wanted to go home. "
    
    ]

var jokes = 0;


class dankClown{
    constructor(){
        
        //Variables I need
        this.buttonTellJoke = document.createElement("button");
        this.buttonText = document.createTextNode("Tell me a Joke u clown!");
        this.buttonTellAnswer = document.createElement("button");
        this.buttonTellAnswerText = document.createTextNode("Reveal the answer");
        this.jokeHolder = document.createElement("div");
        this.jokeHolderText = document.createTextNode("The clown will tell a joke");
        this.buttonExit = document.createElement("button"); //Shared
        this.buttonExitTxt = document.createTextNode("To the main entrance"); //Shared
        this.p = document.createElement("p");
        
        //Appending Texts
        this.buttonTellJoke.append(this.buttonText);
        this.buttonTellAnswer.append(this.buttonTellAnswerText);
        this.jokeHolder.append(this.jokeHolderText);
        this.buttonExit.append(this.buttonExitTxt);

        //Ids
        this.jokeHolder.id = "jokeHolder";
        this.buttonExit.id = "exitButton"; //Shared
        this.buttonTellAnswer.id = "answerButton";
        this.buttonTellJoke.id = "jokeButton";
        this.p.id = "PP"; /*<- Im tired plsS */
        this.buttonTellAnswer.class = "buttons";
        this.buttonTellJoke.class = "buttons";

       
    }
    
    setJquery(){

        $("#PP").text("Dont laugh...");
          
        $("#mainDiv").removeClass("mainPage");
        $("#mainDiv p").toggle();
        //Appending to main div
        $("#clown").append(this.jokeHolder, this.buttonTellJoke, this.buttonTellAnswer, this.buttonExit, this.p); //Shared with respective ID 
  
        $("#exitButton").css({top: "88%", left: "48%"});
    }

    setOnclicks(array1, array2){
        
        //Onclick events owned by dankclown 
        this.buttonTellJoke.onclick = function(){
            var random = Math.floor(Math.random()*array1.length);
            jokes = random;
            $("#jokeHolder").text(array1[random]);
            
        };

        this.buttonTellAnswer.onclick = function(){
            var audioElement = document.createElement("audio");
            $("#jokeHolder").text(array2[jokes]);
            audioElement.setAttribute('src', './audios/Badum-tss.wav'); 
            audioElement.play();
        };

        this.buttonExit.onclick = function(){ //Shared 
            toggleAll();
        };

        function toggleAll(){ //Shared
            $("body #mainDiv").addClass("mainPage");
            $("#startPage").toggle();
            $("#clown").children().remove();
            $("#clown").toggle();
            $("#mainDiv p").toggle(); 
        }

    }
   
}







