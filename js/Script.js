
// function display()
// {
var str = document.querySelector('.mga');
var str1 = document.querySelector('.mba');
var str2 = document.querySelector('.mca');


// var ovr = document.querySelector('div.overlay');

    // var mga= document.getElementsByClassName('mga');
    // var mba= document.getElementsByClassName('mba');
    var ovr= document.getElementsByClassName('overlay');


str.addEventListener('mouseover', function(e) {
    e.preventDefault();

    // ovr[0].style.display = 'none';
    ovr[0].style.transition = "all 1s ease-in-out";

    ovr[0].style.transform = 'scale(1)';

})
str.addEventListener('mouseout', function(e) {
    e.preventDefault();

    // ovr[0].style.display = 'block';
    ovr[0].style.transition = "all 1s ease-in-out";
    ovr[0].style.transform = 'scale(0)';

})
    str1.addEventListener('mouseover', function(e) {
        e.preventDefault();

        ovr[1].style.transition = "all 1s ease-in-out";
        ovr[1].style.transform = 'scale(1)';

    })
str1.addEventListener('mouseout', function(e) {
    e.preventDefault();

    // ovr[0].style.display = 'block';
    ovr[1].style.transition = "all 1s ease-in-out";
    ovr[1].style.transform = 'scale(0)';

})

str2.addEventListener('mouseover', function(e) {
    e.preventDefault();

    ovr[2].style.transition = "all 1s ease-in-out";
    ovr[2].style.transform = 'scale(1)';

})
str2.addEventListener('mouseout', function(e) {
    e.preventDefault();

    // ovr[0].style.display = 'block';
    ovr[2].style.transition = "all 1s ease-in-out";
    ovr[2].style.transform = 'scale(0)';

})


// }
