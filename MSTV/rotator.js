var pages=document.getElementsByClassName("splash-text");
var dots=document.getElementsByClassName("dot");
var images=["url(images/1.jpg)","url(images/2.jpg)","url(images/3.jpg)","url(images/4.jpg)"];
var rotator=document.getElementById("rotator");
var index=0;
goToSlide(0);

function goToSlide (param){

 dots[index].style.height="30px";
dots[index].style.width="30px";
dots[index].style.backgroundColor="#bbb";
dots[index].style.margin="10px";
index=param;
dots[index].style.height="40px";
dots[index].style.width="40px";
dots[index].style.backgroundColor="#17478e";
dots[index].style.margin="5px";

rotator.style.backgroundImage=images[index];

}
