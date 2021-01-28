function lockScroll(){      
    var mainBody=document.getElementById("main-body")
    mainBody.classList.toggle("lock-scroll");
}

function openSidebar(){
    var sideMenu = document.getElementById("sideMenuCollapse");
    sideMenu.classList.add("showSidebar");
    lockScroll();
}
function closeSidebar() {    
    var sideMenu = document.getElementById("sideMenuCollapse");
    sideMenu.classList.remove("showSidebar");
    lockScroll();
}

