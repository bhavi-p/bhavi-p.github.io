var j=0;
var i = document.getElementById("menu").childNodes;
function expand(){
    if (j==0) {
        document.getElementById("add").style.transform = 'rotate(45deg)';
        document.getElementById("menu").style.transform= 'scale(1)';
        i[1].style.transform='translateY(-160px)';
        i[3].style.transform='translate(140px,-80px)';
        i[5].style.transform='translate(140px,80px)';
        i[7].style.transform='translateY(160px)';
        i[9].style.transform='translate(-140px,80px)';
        i[11].style.transform='translate(-140px,-80px)';
        j=1;
    }else{
        document.getElementById("add").style.transform = 'rotate(0deg)';
        document.getElementById("menu").style.transform= 'scale(0.9)';
        i[1].style.transform='translateY(0)';
        i[3].style.transform='translate(0)';
        i[5].style.transform='translate(0)';
        i[7].style.transform='translateY(0)';
        i[9].style.transform='translate(0)';
        i[11].style.transform='translate(0)';
        j=0;
    }
}

// Scroll to Top
//Get the button:
scrollbutton = document.getElementById("scrollBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollbutton.style.display = "block";
  } else {
    scrollbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Redirect to tab from 
redirect = (tabID) => {
    document.getElementById(tabID).click();
}

// Select tab content item
function selectItem(e) {
    removerBorder();
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border');
    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add show class
    tabContentItem.classList.add('show');
}

function removerBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow () {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));