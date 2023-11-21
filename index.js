let img = document.getElementById("slide");
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

function actHome(){
    alert("inside home button");
    //link to homepage
}

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
function slideShow(){
    alert("inside slide");
    img.setAttribute("src",imgArray[imgIndex]);
    imgArray ++;
    alert("added to program");
    if (imgIndex<=imgArray.length){
        imgArray = 0;
        alert("added index");
    }
};

buttonHome.onclick = function(){
    actHome();
};

buttonPrj.onclick = function(){
    actPrj();
};
buttonBlog.onclick = function(){
    actBlog();
};
// buttonAbout.onclick = function(){
//     actAbout();
// };
img.onclick = function(){
    slideShow();
};