let myButton = document.getElementById("group");
let myHeader = document.getElementById("header");
let myListHeader = document.getElementById("list");
let cssAfter = window.getComputedStyle(myListHeader, '::after');


window.onscroll = function () {
    if (window.pageYOffset >= 500) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
    if (window.pageYOffset >= 200) {
        myHeader.style.backgroundColor = "rgb(245 158 11 / 88%)";
        myHeader.style.padding = "10px 0";
        myListHeader.style.setProperty('--afterBack', 'white');
    } else {
        myHeader.style.background ="none";
        myListHeader.style.setProperty('--afterBack', '#f59e0b');
    }
};

// هاي علشان لما يضغط يطلعه لفوق
myButton.onclick = function () {
    window.scrollTo(0, 0);
}