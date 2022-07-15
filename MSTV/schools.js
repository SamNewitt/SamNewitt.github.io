var schools=[
"Your Favorite Siouxland Schools",
"Dakota Valley (SD)",
"Sioux City East (IA)",
"Sioux City North (IA)",
"Sergeant Bluff - Luton (IA)",
"Sioux City West (IA)",
"West Sioux (IA)",
"Hinton (IA)",
"Sioux Center (IA)",
"Harrisburg (SD)",
"Sioux Falls Jefferson (SD)",
"Sioux Falls Lincoln (SD)",
"O'Gorman (SD)",
"Sioux Falls Roosevelt (SD)",
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
