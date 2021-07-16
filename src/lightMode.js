// cat....

function lightMode(){
    var element = document.body;
    let h = document.querySelector("ul");
    let l = document.querySelector("li a");
    element.classList.toggle("content-light");
    h.style.backgroundColor = "#fff";
    l.style.color = "#000000";
    l.classList.remove("darkModeH");
    l.classList.add("lightModeH");
    document.getElementById("light-mode").style.display = "none";
    document.getElementById("dark-mode").style.display = "block";
}
