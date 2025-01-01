// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "i modeun geon uyeoni anya", time: 2 },
  { text: "geunyang geunyang naui neukkimeuro", time: 5 },
  { text: "on sesang-i eojewan dalla", time: 9 },
  { text: "geunyang geunyang neoui gippeumeuro", time: 12 },
  { text: "niga nal bulleosseul ttae", time: 16 },
  { text: "naneun neoui kkocheuro", time: 18 },
  { text: "gidaryeotdeon geotcheoreom", time: 19 },
  { text: "urin siridorok pieo", time: 22 },
  { text: "eojjeomyeon ujuui seomni", time: 23 },
  { text: "geunyang geuraetdeon geoya", time: 25 },
  { text: "You know, I know", time: 27 },
  { text: "neoneun na naneun neo", time: 29 },
  { text: "seolleneun mankeum mani duryeowo", time: 30 },
  { text: "unmyeong-i uril jakku jiltuhaeseo", time: 34 },
  { text: "neomankeum nado mani museowo", time: 38 },
  { text: "When you see me", time: 41 },
  { text: "When you touch me", time: 43 },
  { text: "ujuga uril wihae umjigyeosseo", time: 45 },
  { text: "jogeumui eogeunnamjocha eopseosseo", time: 49 },
  { text: "neowa nae haengbogeun yejeongdwaetdeon geol", time: 52 },
  { text: "Cause you love me", time: 56 },
  { text: "And I love you", time: 57 },
  { text: "neon nae pureun gompang-i", time: 59 },
  { text: "nal guwonhae jun", time: 64 },
  { text: "naye cheonsa", time: 67 },
  { text: "naye sesang", time: 70 },
  { text: "nan ne samsaek goyang-i", time: 74 },
  { text: "neol mannareo on", time: 79 },
  { text: "Love me now", time: 81 },
  { text: "Touch me now", time: 85 },
  { text: "Just let me love you", time: 89 },
  { text: "Just let me love you", time: 96 },
  { text: "ujuga cheoeum saenggyeonasseul ttaebuteo", time: 104 },
  { text: "modeun geon jeonghaejin geoyeosseo", time: 108 },
  { text: "Just let me love you", time: 111 },
  { text: "neon nae pureun gompang-i", time: 133 },
  { text: "nal guwonhae jun", time: 138 },
  { text: "naye cheonsa", time: 140 },
  { text: "naye sesang", time: 144 },
  { text: "nan ne samsaek goyang-i", time: 147 },
  { text: "neol mannareo on", time: 153 },
  { text: "Love me now", time: 155 },
  { text: "Touch me now", time: 159 },
  { text: "Just let me love you", time: 163 },
  { text: "Just let me love you", time: 170 },
  { text: "ujuga cheoeum saenggyeonasseul ttaebuteo", time: 178 },
  { text: "modeun geon jeonghaejin geoyeosseo", time: 181 },
  { text: "Just let me love you", time: 185 },
  { text: "Let me love", time: 190 },
  { text: "Let me love you", time: 191 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 3
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
