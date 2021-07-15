'use strict';
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
        document.body.classList = 'dark-theme';
        
    }
    else {
        this.textContent = "Light";
        document.body.classList = 'light-theme';
    }

    console.log('current class name: ' + className);
});