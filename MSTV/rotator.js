var pages=document.getElementsByClassName("splash-text");
var dots=document.getElementsByClassName("dot");
var images=["url(images/1.jpg)","url(images/2v4.jpg)","url(images/3.jpg)","url(images/4v2.jpg)"];
var rotator=document.getElementById("rotator");
var index=0;
var timer;
goToSlide(0);
function goToSlide (param){
  clearTimeout(timer);


dots[index].style.backgroundColor="#bbb";
dots[index].style.margin="10px";



dots[param].style.backgroundColor="#17478e";
dots[param].style.margin="5px";

rotator.style.backgroundImage=images[param];
pages[index].style.opacity="0";
pages[param].style.opacity="0";

if(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)<700)
{
  dots[index].style.height="15px";
  dots[index].style.width="15px";
  dots[param].style.height="25px";
  dots[param].style.width="25px";
}
else{
dots[index].style.height="30px";
dots[index].style.width="30px";
dots[param].style.height="40px";
dots[param].style.width="40px";
}

setTimeout(function(){
pages[index].style.display="none";
pages[param].style.display="block";
index=param;
},250);

setTimeout(function () {
  pages[param].style.opacity="1";
},275)

timer=setTimeout(rotate, 7000);
}



function rotate(){

  if(index==pages.length-1){
    goToSlide(0);
  }
  else{
    goToSlide(index+1);
  }



}
