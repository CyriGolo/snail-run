let race = document.getElementById('race');
const colorNames = [
  "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure",
  "beige", "bisque", "black", "blanchedalmond", "blue",
  "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse",
  "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson",
  "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray",
  "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange",
  "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue",
  "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue",
  "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen",
  "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod",
  "gray", "green", "greenyellow", "honeydew", "hotpink",
  "indianred", "indigo", "ivory", "khaki", "lavender",
  "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral",
  "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink",
  "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue",
  "lightyellow", "lime", "limegreen", "linen", "magenta",
  "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple",
  "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred",
  "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite",
  "navy", "oldlace", "olive", "olivedrab", "orange",
  "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise",
  "palevioletred", "papayawhip", "peachpuff", "peru", "pink",
  "plum", "powderblue", "purple", "red", "rosybrown",
  "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen",
  "seashell", "sienna", "silver", "skyblue", "slateblue",
  "slategray", "snow", "springgreen", "steelblue", "tan",
  "teal", "thistle", "tomato", "turquoise", "violet",
  "wheat", "white", "whitesmoke", "yellow", "yellowgreen"
];

function nbPlayers() {
  const nbPlayer = prompt('Quel est le nombre de joueur(s) ?')

  if(isNaN(nbPlayer) == false && nbPlayer > 1 && nbPlayer <= 10) {
    createPlayers(parseInt(nbPlayer))
  } else {
    alert('Merci de remplir un nombre valide et supérieur à 1')
    nbPlayers()
  }
}

function createPlayers(nb) {
  for(let i = 1; i < nb + 1;) {
    let nameJ = prompt("Nom du joueur " + i + " ?")
    if(nameJ != "") {
      let colorJ = prompt("Couleur du joueur " + i + " ? (en anglais)")
      if(colorNames.includes(colorJ)) {
        let article = document.createElement('article')
        let player = document.createElement('div')
        let para = document.createElement('p')
        player.className = "player";
        race.appendChild(article)
        article.appendChild(player)
        article.appendChild(para)
        para.textContent = nameJ.toUpperCase();
        let svgPath = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="' + colorJ + '" d="M425.5 74.313c-8.895 0-16.35 6.21-18.25 14.53c-8.593 3.7-15.195 10.617-19.03 18.813c-5.254 11.223-6.848 24.648-7.158 39.313c-.525 24.904 2.99 53.73 4.532 79.03c-1.782 14.666-4.867 28.518-9.063 41.406c2.84 17.934 3.39 36.487.94 55.188c-5.017 38.286-36.52 61.134-70.22 67.937c-31.048 6.27-65.312.42-87.656-19.405c-34.752 22.61-76.646 28.578-112.406 16.594c-42.048 16.248-74.53 38.826-87.626 61.436H341.25c103.105 0 137.952-107.888 111.406-225.53c-.018.023-.044.038-.062.06c-5.71-40.853.98-70.45 14.906-88.905a18.627 18.627 0 0 0 6.25 1.095c10.333 0 18.688-8.386 18.688-18.72c0-10.332-8.355-18.718-18.688-18.718c-10.333 0-18.72 8.386-18.72 18.72c0 1.017.095 1.994.25 2.968c-21.242 25.165-28.854 65.708-19.25 117.906c-10.296 4.836-21.152 2.878-31.436-6.75c-1.286-28.002-5.364-59.27-4.844-83.905c.283-13.405 2.07-24.72 5.375-31.78c2.1-4.49 4.222-7.344 7.47-9.032c3.355 3.196 7.904 5.187 12.905 5.187c10.333 0 18.688-8.386 18.688-18.72c0-10.332-8.355-18.718-18.688-18.718M193.344 106.25c-2.196-.01-4.398.036-6.594.125c-35.143 1.42-70.142 15.475-99.063 41.25c-56.73 50.558-59.43 144.59-9.187 201.125c38.648 38.3 106.856 34.79 151.5-9.844c37.712-37.61 40.61-94.977 8.78-127c-22.1-22.23-60.996-24.817-85.843 1.188c-5.534 5.79-8.98 16.02-8.906 26.906c.076 10.887 3.653 22.003 9.532 29.063c3.593 4.313 10.625 8.476 18.5 10.468c4.687 1.187 9.596 1.58 14.094 1.25c13.195-.228 26.156-9.01 26.156-26.624c0-15.72-10.332-24.428-21.937-26.28c7.773-.697 14.783.618 20.594 3.81c8.51 4.678 13.69 12.944 15.468 21.533c3.52 16.995-5.478 37.125-25.407 43.343l.032.062c-.162.06-.337.067-.5.125c-.046.014-.078.05-.125.063c-10.572 3.753-22.202 3.567-32.968.843c-10.977-2.776-21.238-8.167-28.282-16.625c-9.418-11.306-13.744-26.222-13.844-40.874c-.1-14.652 4.01-29.453 14.062-39.97c32.03-33.52 83.263-31 112.625-1.467c39.98 40.22 35.282 109.352-8.843 153.374v.03c-2.627 2.627-5.384 5.056-8.156 7.438c17.017 12.7 44.022 17.605 68.532 12.657c28.256-5.706 51.524-22.667 55.375-52.064c9.492-72.455-34.215-147.342-72.25-179.25c-27.663-23.21-60.402-34.506-93.343-34.656z"/></svg>';
        player.style.background = 'url("data:image/svg+xml;charset=utf8,' + encodeURIComponent(svgPath) + '") center center no-repeat';
        i++
      } else {
        alert('Merci de rentrer une couleur valide.')
      }
    } else {
      alert('Merci de remplir un nom valide.')
    }
  }
  start()
}

function start() {
  let players = document.querySelectorAll(".player");
  for(let i = 0; i<players.length; i++){
    players[i].style.marginLeft = "1px"
  } 
  let run = setInterval(() => {
    for(let i = 0; i<players.length; i++) {
      let rdm = Math.floor(Math.random()*15)
      players[i].style.marginLeft = parseInt(players[i].style.marginLeft) + rdm + "px";
      if(players[i].offsetLeft >= document.querySelector(".line").offsetLeft) {
        clearInterval(run)
        document.querySelector('h1').textContent = document.querySelectorAll('p')[i].textContent;
        setInterval(createConfetti, 200);
        setTimeout(() => {
          document.querySelector('#win').style.opacity = "100";
          race.style.filter = "blur(10px)";
        }, 2000);
      }
    }
  }, 50);
}

function createConfetti() {
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  if (Math.random() < 0.5) {
    confetti.classList.add('gold');
  }

  // Position initiale aléatoire sur la largeur de la fenêtre
  confetti.style.left = Math.random() * window.innerWidth + 'px';
  confetti.style.animationDuration = Math.random() * 2 + 1 + 's';

  document.body.appendChild(confetti);

  confetti.addEventListener('animationend', () => {
    document.body.removeChild(confetti);
  });
}

nbPlayers()