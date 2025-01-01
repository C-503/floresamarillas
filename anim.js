// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "i modeun geon uyeoni anya", time: 3 },
  { text: "geunyang geunyang naui neukkimeuro", time: 7 },
  { text: "on sesang-i eojewan dalla", time: 10 },
  { text: "geunyang geunyang neoui gippeumeuro", time: 14 },
  { text: "niga nal bulleosseul ttae", time: 18 },
  { text: "naneun neoui kkocheuro", time: 20 },
  { text: "gidaryeotdeon geotcheoreom", time: 21 },
  { text: "urin siridorok pieo", time: 24 },
  { text: "eojjeomyeon ujuui seomni", time: 25 },
  { text: "geunyang geuraetdeon geoya", time: 27 },
  { text: "You know, I know", time: 29 },
  { text: "neoneun na naneun neo", time: 31 },
  { text: "seolleneun mankeum mani duryeowo", time: 32 },
  { text: "unmyeong-i uril jakku jiltuhaeseo", time: 36 },
  { text: "neomankeum nado mani museowo", time: 40 },
  { text: "When you see me", time: 43 },
  { text: "When you touch me", time: 45 },
  { text: "ujuga uril wihae umjigyeosseo", time: 47 },
  { text: "jogeumui eogeunnamjocha eopseosseo", time: 51 },
  { text: "neowa nae haengbogeun yejeongdwaetdeon geol", time: 54 },
  { text: "Cause you love me", time: 58 },
  { text: "And I love you", time: 59 },
  { text: "neon nae pureun gompang-i", time: 61 },
  { text: "nal guwonhae jun", time: 66 },
  { text: "naye cheonsa", time: 69 },
  { text: "naye sesang", time: 72 },
  { text: "nan ne samsaek goyang-i", time: 76 },
  { text: "neol mannareo on", time: 81 },
  { text: "Love me now", time: 83 },
  { text: "Touch me now", time: 87 },
  { text: "Just let me love you", time: 91 },
  { text: "Just let me love you", time: 98 },
  { text: "ujuga cheoeum saenggyeonasseul ttaebuteo", time: 106 },
  { text: "modeun geon jeonghaejin geoyeosseo", time: 110 },
  { text: "Just let me love you", time: 113 },
  { text: "neon nae pureun gompang-i", time: 135 },
  { text: "nal guwonhae jun", time: 140 },
  { text: "naye cheonsa", time: 142 },
  { text: "naye sesang", time: 146 },
  { text: "nan ne samsaek goyang-i", time: 149 },
  { text: "neol mannareo on", time: 155 },
  { text: "Love me now", time: 157 },
  { text: "Touch me now", time: 161 },
  { text: "Just let me love you", time: 165 },
  { text: "Just let me love you", time: 172 },
  { text: "ujuga cheoeum saenggyeonasseul ttaebuteo", time: 180 },
  { text: "modeun geon jeonghaejin geoyeosseo", time: 183 },
  { text: "Just let me love you", time: 187 },
  { text: "Let me love", time: 192 },
  { text: "Let me love you", time: 193 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 9
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
