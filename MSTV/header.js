var menuDown = false;
function menu(){
  if(menuDown){
  document.getElementById("header").style.maxHeight="50px";
  document.getElementById("hamburgerFA").className="fa-solid fa-bars"
  }
  else{
    document.getElementById("header").style.maxHeight="300px";
document.getElementById("hamburgerFA").className="fa-solid fa-x"

  }
  menuDown=!menuDown;
}
