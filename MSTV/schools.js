var schools=[
"Your Favorite Siouxland Schools",
"West Sioux (IA)",
"Dakota Valley (SD)",
"Sioux City East (IA)",
"Harrisburg (SD)",
"Hinton (IA)",
"Sioux Falls Jefferson (SD)",
"Sioux Falls Lincoln (SD)",
"Sioux City North (IA)",
"O'Gorman (SD)",
"Sioux Center (IA)",
"Sioux Falls Roosevelt (SD)",
"Sergeant Bluff - Luton (IA)",
"Sioux City West (IA)",
"Sioux Falls Washington (SD)",
"The Central Iowa Metro League",

];
var timer;
function school(param){
  clearTimeout(timer);
  document.getElementById("schools-title").style.opacity=0;
timer=setTimeout(function(){
      document.getElementById("schools-title").innerHTML="Covering "+schools[param];
      document.getElementById("schools-title").style.opacity=1;

  },125);

}
