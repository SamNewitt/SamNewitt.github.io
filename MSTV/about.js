//make people hight shorter
//#bio container display switch from none to flex
var peopleContainer=document.getElementById("people");
var people=document.getElementsByClassName("person");
var bio=document.getElementById("bio");
var bioContainer=document.getElementById("bio-container");

function openBio (param){
  if (param==0){
  peopleContainer.style.height="auto";
  bioContainer.style.opacity="0";

  setTimeout(function(){
  bioContainer.style.display="none";
  },500);
  }
  else{
bio.innerHTML=people[param-1].innerHTML;
bioContainer.style.display="flex";

setTimeout(function(){
bioContainer.style.opacity="1";
},10);



setTimeout(function(){
  peopleContainer.style.height="85vh";
},500);
  }
}
