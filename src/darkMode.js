function darkMode(){
    var element = document.body;
    let h = document.querySelector("ul");
    let l = document.querySelector("li a");
    element.classList.toggle("content-light");
    h.style.backgroundColor = "#282424";
    l.style.color = "#fff";
    l.classList.remove("lightModeH");
    l.classList.add("darkModeH");
    document.getElementById("light-mode").style.display = "block";
    document.getElementById("dark-mode").style.display = "none";
}