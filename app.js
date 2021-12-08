var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);

}

function currentDiv(n) {
    showDivs(slideIndex = n);
}
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    console.log(x.length);
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x[slideIndex - 1].style.display = "block";

}



var slideIndex = 1;
showDivs1(slideIndex);

function plusDivs1(n) {
    showDivs1(slideIndex += n);

}

function currentDiv1(n) {
    showDivs1(slideIndex = n);
}
function showDivs1(n) {
    var i;
    var x = document.getElementsByClassName("mySlides1");
    console.log(x.length);
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x[slideIndex - 1].style.display = "block";

}



var slideIndex = 1;
showDivs2(slideIndex);

function plusDivs2(n) {
    showDivs2(slideIndex += n);

}

function currentDiv2(n) {
    showDivs2(slideIndex = n);
}
function showDivs2(n) {
    var i;
    var x = document.getElementsByClassName("mySlides2");
    console.log(x.length);
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x[slideIndex - 1].style.display = "block";

}




var menulist = document.getElementById("menulist");
       menulist.style.maxHeight = "0px";
       function togglemenu(){
           if(menulist.style.maxHeight == "0px")
           {
               console.log("hii")
               menulist.style.maxHeight = "100px";
           }
           else{
               menulist.style.maxHeight = "0px";

           }
       }


const sections = document.getElementsByClassName("spg4");
const navLi = document.getElementsByClassName("dpg6");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

