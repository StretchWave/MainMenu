function NavOpen()
{
    document.body.classList.toggle("nav-open");
    document.getElementById("MenuBarOpen").style.display = "none";
}
function NavClose()
{
    document.body.classList.toggle("nav-open");
    document.getElementById("MenuBarOpen").style.display = "block";
}
function scrollToDiv(divId) {
    NavClose();
    var div = document.getElementById(divId);
    div.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  
  
  
  

