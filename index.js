// let slideImg = document.getElementById('slide');
let buttonHome = document.getElementById("home");
let buttonPrj = document.getElementById("projects");
let buttonBlog = document.getElementById("blog");
let buttonAbout = document.getElementById("about");
let aboutpg = document.getElementsByName("about.html");

function actPrj(){
    alert("inside project button");
    //link to projects
}
function actBlog(){
    alert("inside blog button");
    //link to projects
};
$('.slide_inner').slick({
  infinite: true,
  fade:true,
  // autoplay:true,
  // speed: 1000,
  arrows: true,
  adaptiveHeight: true
});


buttonPrj.onclick = function(){
    actPrj();
};
buttonBlog.onclick = function(){
    actBlog();
};
