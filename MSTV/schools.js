var schools=[
"Your Favorite Siouxland Schools",
"Dakota Valley (SD)",
"Sioux City East (IA)",
"Sioux City North (IA)",
"Sergeant Bluff - Luton (IA)",
"Sioux City West (IA)",
"The Central Iowa Metro League",
"West Sioux (IA)",
"Hinton (IA)",
"Sioux Center (IA)",
"Brandon Valley (SD)",
"Harrisburg (SD)",
"Sioux Falls Jefferson (SD)",
"Sioux Falls Lincoln (SD)",
"O'Gorman (SD)",
"Sioux Falls Roosevelt (SD)",
"Sioux Falls Washington (SD)"




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
