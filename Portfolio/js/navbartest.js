var navbar = document.getElementsByClassName('navbar')
var navSec = document.getElementById('myNavbar')
var menu = document.getElementsByClassName('home-li')
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        if (navSec.style.position == 'fixed') return
        console.log(1)
        navSec.style.position = 'fixed'
        navbar[0].style.background = '#1F2D3D'
        navbar[0].style.boxShadow = '0 1px 3px rgb(0 0 0 / 11%)'
        navSec.style.animation = 'appearance 1s ease normal'
        for (let i = 0; i < menu.length; i++) {
            
        }
    } else {

        navSec.style.animation = ''
        for (let i = 0; i < menu.length; i++) {
            menu[i].style.color = ''

        }
        navbar[0].style.background = none
        navbar[0].style.width = '100%'
        navbar[0].style.boxShadow = '0'
    }
})


consoleText(['Frontend Devoloper', 'Web Devoloper'], 'text',['#e54b4b','#e54b4b']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}