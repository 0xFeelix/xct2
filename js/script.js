/*Typing script*/
var app = document.getElementById('typing');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Developer')
    .pauseFor(100)
    .deleteAll()
    .typeString('www.por')
    .pauseFor(700)
    .deleteChars(3)
    .typeString('popcorn.com')
    .pauseFor(100)
    .start();


/*Sidebar*/
$('.menu-bar-btn').on('click', function (e) {
  e.preventDefault();
  $('.menu-content').toggleClass('menu-active');

})
