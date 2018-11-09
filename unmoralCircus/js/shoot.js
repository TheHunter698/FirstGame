//Shooting JS, 

//The main objective of the game is to have 3 levels of div that move at a certain velocity,
//Tho the last level is impossible to win unless you do something which is hidden 


var count = 0;


class shootingRange{
    constructor(){


        //Variables I need
       
        this.div1 = document.createElement("div");
        this.div2 = document.createElement("div");
        this.div3 = document.createElement("div");
        this.audio = document.createElement("audio");

        this.audio.src = "./audios/shootMusic.wav";

        this.exitButton = document.createElement("button"); //Shared
        this.exitButtonTxt = document.createTextNode("To the main entrance"); //Shared
        
        //Ids
        this.div1.id = "div1";
        this.div2.id = "div2";
        this.div3.id = "div3";
        this.exitButton.id = "exitButton"; //Shared

       
        this.cacheImgs = [];
        
        //Appending texts
        this.exitButton.append(this.exitButtonTxt);
        
        //Audio 
        this.audio.playbackRate = 1.5;
        this.audio.play();       
       
        
    }
    setOnclick(){

        onClickEvents($(".images1"), $(".images2"), $(".images3"));

        //Onclick events function
        function onClickEvents(arr1, arr2, arr3){

            let holder = document.createElement("p");
            $("#shoot").append(holder);

            for(var i = 0; i < 6; i++){
            
                $(arr1[i]).on("click", function(){  
                    $(this).remove();
                    $("#shoot p").text("Score " + count.toString()+ "/18");
                })
                $(arr2[i]).on("click", function(){
                    count++;
                    $(this).remove()
                    $("#shoot p").text("Score " + count.toString()+ "/18");
                })
                $(arr3[i]).on("click", function(){
                    count++;
                    $(this).remove();
                    $("#shoot p").text("Score " + count.toString()+ "/18");
                })
            }
            //Exit button onclick
            $("#exitButton").on("click", function(){ //Shared
                toggleAll();
            });
        
            function toggleAll(){ //Shared
                $("#startPage").toggle();
                $("#shoot").children().remove();
                $("#mainDiv").addClass("mainPage");
                $("#exitButton").css("top", "100%");
                $("#mainDiv p").toggle();
                $("#shoot").toggle();
            }
    
        }
     
        
    }

    setJquery(){

        var divsCache = [this.div1, this.div2, this.div3];
        var cache = [];
        var cache2 = [];
        var cache3 = [];
        
        $("p").toggle(); //Temporal css
        $("body #mainDiv").removeClass("mainPage"); //Removing class 
        $("#shoot").append(this.div1, this.div2, this.div3, this.exitButton, this.audio); //Append to main 
        createImagesAndAppend(); 
        jqueryClasses();
        animateImgs($(".images1"), $(".images2"), $(".images3")); //F 
        

        //Setting classes for all divs
        function jqueryClasses(){

            $("#div1").children().addClass("images1");
            $("#div2").children().addClass("images1");
            $("#div3").children().addClass("images1");
            $("#div2").children().addClass("images2");
            $("#div3").children().addClass("images3");
    
            $("#div1").addClass("thedivs");
            $("#div2").addClass("thedivs");
            $("#div3").addClass("thedivs");
    
            $("#exitButton").css("top", "90%");
        }

        //Function that creates images
        function createImagesAndAppend(){
            
            for(var i = 0; i < 6; i++){
                //Creating 3 caches of images
                cache[i] = document.createElement("img");
                cache2[i] = document.createElement("img");
                cache3[i] = document.createElement("img");
                
                //Creating the src of the images
                cache[i].src = "./images/headPayaso.jpeg";
                cache2[i].src = "./images/headPayaso.jpeg"; 
                cache3[i].src = "./images/headPayaso.jpeg";
               
                
            }
            
            //Appending to the 3 divs 6 images
            function putIn(){
                for(var i = 0; i < cache.length; i++){
                    divsCache[0].appendChild(cache[i]);
                    divsCache[1].appendChild(cache2[i]);
                    divsCache[2].appendChild(cache3[i]);
                    
                }
            }


            putIn();

            }
    
            //Function to animate the images with a class
            function animateImgs(arr1, arr2, arr3){
            for(var i = 0; i < 6; i++){
                //debugger
                $(arr1[i]).css({position: "fixed"}).animate({top: (Math.random()*100).toString()+"%", left: (Math.random()*30).toString()+"%"}, 100, callback1());
                $(arr2[i]).css({position: "fixed"}).animate({top: (Math.random()*100).toString()+"%", left: (Math.random()*30).toString()+"%"}, 700, callback2()); 
                $(arr3[i]).css({position: "fixed"}).animate({top: (Math.random()*100).toString()+"%", left: (Math.random()*30).toString()+"%"}, 1200, callback3());      
            }
                //Callbacks
                function callback1(){
                    var reference = setInterval(callback, 200);
        
                    function callback(){
                        for(var i = 0; i < 6; i++){
                            $(arr1[i]).css({position: "fixed"}).animate({top: (Math.random()*100).toString()+"%", left: (Math.random()*100).toString()+"%"}, 100)
                        }
                    }
                }
        
                function callback2(){
                    var reference = setInterval(callback, 700);
                    function callback(){
                        for(var i = 0; i < 6; i++){
                            $(arr2[i]).css({position: "fixed"}).animate({top: (Math.random()*100).toString()+"%", left: (Math.random()*90).toString()+"%"}, 700);
                        }
                    }
                }
        
                function callback3(){
                    var reference = setInterval(callback, 1200);
                    function callback(){
                        for(var i = 0; i < 6; i++){
                        $(arr3[i]).css({position: "fixed"}).animate({top: (Math.random()*100).toString()+"%", left: (Math.random()*80).toString()+"%"}, 1200);      
                    }
                    }
                }
            }
    }
}