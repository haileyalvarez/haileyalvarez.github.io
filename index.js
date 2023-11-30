let img = document.getElementById("slideshow");
let buttonHome = document.getElementById("home");
let buttonPrj = document.getElementById("projects");
let buttonBlog = document.getElementById("blog");
let buttonAbout = document.getElementById("about");
let aboutpg = document.getElementsByName("about.html");
let imgArray = [
    "images/env.jpg",
    "images/hand.jpg",
    "images/person.jpg",
    "images/pyramid.jpg",
];
let imgIndex = 0;

// function actHome(){
//     buttonHome.style.fontSize = '35px';
// }
// function actHomeOG(){
//     buttonHome.style.fontSize = '30px';
// }

function actPrj(){
    alert("inside project button");
    //link to projects
}
function actBlog(){
    alert("inside blog button");
    //link to projects
}
// function actAbout(){
//     alert("inside about button");
//     //link to projects
//     window.open('about.html');
// }
function Show(){
    img.setAttribute("src",imgArray[imgIndex]);
    imgArray ++;
    if (imgIndex<=imgArray.length){
        imgArray = 0;
    }
    $
};

buttonHome.onmouseover = function(){
    actHome();
};
buttonHome.onmouseleave = function(){
    actHomeOG();
}

buttonPrj.onclick = function(){
    actPrj();
};
buttonBlog.onclick = function(){
    actBlog();
};
// buttonAbout.onclick = function(){
//     actAbout();
// };
// img.onclick = function(){
//     Show();
// };