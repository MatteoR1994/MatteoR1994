function myFunction() {
    let prop = document.getElementById("nav-menu-div").style.display;
    if (prop === "none") {
        document.getElementById("nav-menu-div").style.display = "block";
    } else {
        document.getElementById("nav-menu-div").style.display = "none";
    }
  // document.getElementById("nav-menu-div").style.display = "block";
}