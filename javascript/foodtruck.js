let myButton = document.getElementById("group");

window.onscroll = function () {
    if (window.pageYOffset >= 500) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
};

// هاي علشان لما يضغط يطلعه لفوق
myButton.onclick = function () {
    window.scrollTo(0, 0);
}