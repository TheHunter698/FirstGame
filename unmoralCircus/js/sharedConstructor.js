/* Early development of general contructor, may or may not work */ 

class game{
    //General constructor for everything
    constructor(){
        //Variables all games share + its ids
        this.exitButton = document.createElement("button"); //Shared
        this.exitButton = document.createTextNode("To the main entrance");
        
        //Text appends
        this.exitButton.append(this.exitButtonTxt);
       

        //Ids
        this.exitButton.id = "exitButton";

        //Shared functionality for mainDiv
        $("body #mainDiv").removeClass("mainPage");
    }

    /*Hammer main method*/
    hammerMinigame(){

        
        jqueryThings();
        callbacks();

        /*Hammer sub methods*/
        
            this.audio = document.createElement("audio");
            this.img = document.createElement("img");
            this.buttonAction = document.createElement("button");
            this.buttonActionTxt = document.createTextNode("");
            this.divSpan = document.createElement("div");
            this.checkbox = document.createElement("input");

            //Ids
            this.checkbox.id = "secret";
            this.img.id = "imagen";
            this.audio.id = "music";
            this.buttonAction.id = "actionAnimation";
            this.divSpan.id = "animatedDiv";
    
        

        function jqueryThings(){
            
            $("#hammer").append(this.audio, this.canvasHolder, this.exitButton,this.checkbox, this.img, this.divSpan,this.buttonAction);

            //Playing the audio
            $("audio").attr('src', './audios/hammerMusic.wav');
            this.audio.play();

            //Jquery Styles (which will be inside css)
            $("#imagen").attr("src", "./images/hammerDefinitive.png");
            $("#hammer").addClass("hammerClass");
            $("#secret").attr("type", "checkbox");
            $("body #mainDiv").removeClass("mainPage");
        }

        function callbacks(){
            //Exit button + animations
            $("#exitButton").on("click", function(){ //Shared
                toggleAll();
            });  
            
            $("#actionAnimation").on("click", function(){
                 
                if($("#secret").is(":checked")){
                    //Prove that I READ THE FUCKING MANUAL -->
                    $("#animatedDiv").animate({top: "15%"}, "slow", function(){
                        var audio2 = document.createElement("audio");
                        audio2.id = "bellsSound";
                        $("#hammer").append(audio2);
                        $("#bellsSound").attr("src", "./audios/bellSound.wav");
                        $("#music")[0].pause();
                        audio2.play();
                    })
                } //This works
                else{
                    var random = Math.random()*39;
                    var percent = 59 - random;
                    random = percent.toString();
    
                    $("#animatedDiv").animate({top: random+"%"}, "slow", function(){
                        $("#animatedDiv").animate({top: "59%"}, "slow", function(){
                            console.log("Nice try bro, try again");
                        });
                    })
                }
            });
    
        }
        /*Toggle sub method */
        var toggleAll = function(){ //Shared
            $("#startPage").toggle();
            $("#hammer").children().remove();
            $("#hammer").toggle();
            $("body #mainDiv").addClass("mainPage");
        }

    }

    dankJokerMinigame(){

        variables();
        jqueryThings(clownText, clownAnswers);



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
    

        function variables(){

            //Variables I need
            this.buttonTellJoke = document.createElement("button");
            this.buttonText = document.createTextNode("Tell me a Joke u clown!");
            this.buttonTellAnswer = document.createElement("button");
            this.buttonTellAnswerText = document.createTextNode("I don't know");
            this.jokeHolder = document.createElement("div");
            this.jokeHolderText = document.createTextNode("The clown will tell a joke");

            //Appending Texts
            this.buttonTellJoke.append(this.buttonText);
            this.buttonTellAnswer.append(this.buttonTellAnswerText);
            this.jokeHolder.append(this.jokeHolderText);
            
            //Ids
            this.jokeHolder.id = "jokeHolder";
        }
        
        function jqueryThings(arr1, arr2){
            //Appending to main div
            $("#clown").append(this.jokeHolder, this.buttonTellJoke, this.buttonTellAnswer, this.buttonExit); //Shared with respective ID 
    
            //Onclick events owned by dankclown 
            //This should be its own function and have the arguments in the same page since its only used by dankClown
            this.buttonTellJoke.onclick = function(){
                var random = Math.floor(Math.random()*array1.length);
                jokes = random;
                console.log(random);
                console.log(jokes);
                $("#jokeHolder").text(array1[random]);
                
            };
            
            this.buttonTellAnswer.onclick = function(){
                var audioElement = document.createElement("audio");
                $("#jokeHolder").text(array2[jokes]);
                audioElement.setAttribute('src', './audios/Badum-tss.wav'); 
                audioElement.play();
            };

            this.buttonExit.onclick = function(){ //Shared 
                $("body #mainDiv").addClass("mainPage");
                $("#clown").toggle();
                toggleAll();
            };
        }

    }

    shootMinigame(){

    }
}