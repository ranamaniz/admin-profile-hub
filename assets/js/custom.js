function closeSidebar() {    
    var sideMenu = document.getElementById("sideMenuCollapse");
    sideMenu.classList.remove("show");
}

function lockScroll(){  
    console.log("jello")
    var mainBody=document.getElementById("main-body")
    mainBody.classList.toggle("lock-scroll");
}