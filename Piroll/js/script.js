const anchors = document.querySelectorAll('a[href="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smoth", 
            block: "start"
        })
    })
}

//

function changeItem() {
  document.getElementById('one-two').style.opacity = '1';
}

function rechangeItem() {
  document.getElementById('one-two').style.opacity = '0.5';
}

// Changes radio buttons on checked
function selectRadioOne() {
    document.getElementById('bar-one').style.width = '16px';
    document.getElementById('bar-one').style.height = '16px';
    
    document.getElementById('bar-two').style.width = '8px';
    document.getElementById('bar-two').style.height = '8px';
    
    document.getElementById('bar-three').style.width = '8px';
    document.getElementById('bar-three').style.height = '8px';
}

function selectRadioTwo() {
    document.getElementById('bar-one').style.width = '8px';
    document.getElementById('bar-one').style.height = '8px';
    
    document.getElementById('bar-two').style.width = '16px';
    document.getElementById('bar-two').style.height = '16px';
    
    document.getElementById('bar-three').style.width = '8px';
    document.getElementById('bar-three').style.height = '8px';
}

function selectRadioThree() {
    document.getElementById('bar-one').style.width = '8px';
    document.getElementById('bar-one').style.height = '8px';
    
    document.getElementById('bar-two').style.width = '8px';
    document.getElementById('bar-two').style.height = '8px';
    
    document.getElementById('bar-three').style.width = '16px';
    document.getElementById('bar-three').style.height = '16px';
}















