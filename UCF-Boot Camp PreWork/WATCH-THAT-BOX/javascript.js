//When Button1 is clicked ...

document.getElementById("button1").addEventListener("click", function(){
    // Box size increases.
    document.getElementById("box").style.height = "500px"; })

// When Button2 is clicked...

document.getElementById("button2").addEventListener("click", function(){
    // Box changes to blue
    document.getElementById("box").style.backgroundColor = "blue";})

//When Button3 is clicked...

    document.getElementById("button3").addEventListener("click", function(){
        // Box Fades
        document.getElementById("box").style.opacity = ".05" ;})

 // When button4 is clicked ...

        document.getElementById("button4").addEventListener("click", function(){
     
        // Box reset 
       document.getElementById("box").style="height:150px; width:150px; background-color:orange; margin:25px";})