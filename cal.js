                     
                            // Darkmode on off js

var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src ="sun-img.png"
}else{
    icon.src="moon-img.png";
}
};
                             
                               
                               