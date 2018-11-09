//Construct with the hammer attraction.
//Update 06/11/2018 - Works, needs construct optimization for variable/methods
class weightHammer{

    constructor(){
        //Append the css styles I need as a removable feature

        
        //Functions I need.
        function toggleAll(){ //Shared
            $("#startPage").toggle();
            $("#hammer").children().remove();
        }

        //Variables I need
        this.exitButton = document.createElement("button"); //Shared
        this.exitButtonTxt = document.createTextNode("To the main entrance"); //Shared

        this.audio = document.createElement("audio");
        this.img = document.createElement("img");
        this.buttonAction = document.createElement("button");
        this.buttonActionTxt = document.createTextNode("");
        this.divSpan = document.createElement("div");
        this.checkbox = document.createElement("input");

        //Text appends
        this.exitButton.append(this.exitButtonTxt);
        this.buttonAction.append(this.buttonActionTxt);
        
        //ids
        this.exitButton.id = "exitButton" //Shared
        this.checkbox.id = "secret";
        this.img.id = "imagen";
        this.audio.id = "music";
        this.buttonAction.id = "actionAnimation";
        this.divSpan.id = "animatedDiv";
        
    
        //Appending into the main div
        $("#hammer").append(this.audio, this.canvasHolder, this.exitButton,this.checkbox, this.img, this.divSpan,this.buttonAction);

        //Playing the audio
        $("audio").attr('src', './audios/hammerMusic.wav');
        this.audio.play();

        //Jquery Styles (which will be inside css)
        $("#imagen").attr("src", "./images/hammerDefinitive.png");
        $("#hammer").addClass("hammerClass");
        $("#secret").attr("type", "checkbox");
        $("body #mainDiv").removeClass("mainPage");

        //Callback Functions
        $("#exitButton").on("click", function(){ //Shared
            toggleAll();
            $("body #mainDiv").addClass("mainPage");
            $("#hammer").toggle();
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
   

}

