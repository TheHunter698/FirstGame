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
        analise($(".images1")); //F 
        

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

        //Function that creates images (creating 6 images x 3 divs = 18 images)
        function createImagesAndAppend(){
            
            for(var i = 0; i < 19; i++){
                //Creating 3 caches of images
                
                cache[i] = document.createElement("img");
        
                //Creating the src of the images
                cache[i].src = "./images/headPayaso.jpeg";       
            }
            
            putIn();

        }

        //Appending to the 3 divs 6 images
        function putIn(){
            for(var i = 0; i < cache.length; i++){
                
                if( i < 6){
                    
                    divsCache[0].appendChild(cache[i]);
                }
                else if( i >= 6 && i < 12){
                    divsCache[1].appendChild(cache[i]);
                }
                else{
                    divsCache[2].appendChild(cache[i]);
                    
                }
            }
        }
        
        
        //Function to animate the images with a class
        function analise(arr1){
            var times = [200, 700, 1200];
            for(var i = 0; i < arr1.length; i++){
               
                var temporal = arr1[i];
                
                //If it has class1 it will have time 1, otherwise it will have another time (2,3)
                if($(temporal).hasClass("images1")){
                    animateImg();
                    var image1ref = setInterval(function(){animateImg(times[0])}, times[0]);
                }
                else if($(temporal).hasClass("images2")){
                    animateImg();
                    var image2ref = setInterval(function(){animateImg(times[1])}, times[1]);
                }
                else{
                    animateImg();
                    var image3ref = setInterval(function(){animateImg(times[2])}, times[2]);
                }
            }
            
            function animateImg(time){
                $(temporal).css({position: "fixed"}).animate({top: (Math.random()*100).toString()+"%", left: (Math.random()*100).toString()+"%"}, time);
            }
        }

        
       
    }   
}