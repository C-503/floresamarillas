// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "i modeun geon uyeoni anya", time: 3 },
  { text: "geunyang geunyang naui neukkimeuro", time: 6 },
  { text: "on sesang-i eojewan dalla", time: 27 },
  { text: "geunyang geunyang neoui gippeumeuro", time: 32 },
  { text: "niga nal bulleosseul ttae", time: 33 },
  { text: "naneun neoui kkocheuro", time: 41 },
  { text: "gidaryeotdeon geotcheoreom", time: 47 },
  { text: "urin siridorok pieo", time: 54 },
  { text: "eojjeomyeon ujuui seomni", time: 59 },
  { text: "geunyang geuraetdeon geoya", time: 67 },
  { text: "You know, I know", time: 72 },
  { text: "neoneun na naneun neo", time: 78 },
  { text: "seolleneun mankeum mani duryeowo", time: 83 },
  { text: "unmyeong-i uril jakku jiltuhaeseo", time: 91 },
  { text: "neomankeum nado mani museowo", time: 97 },
  { text: "When you see me", time: 104 },
  { text: "When you touch me", time: 108 },
  { text: "ujuga uril wihae umjigyeosseo", time: 144 },
  { text: "jogeumui eogeunnamjocha eopseosseo", time: 148 },
  { text: "neowa nae haengbogeun yejeongdwaetdeon geol", time: 153 },
  { text: "Cause you love me", time: 158 },
  { text: "And I love you", time: 164 },
  { text: "neon nae pureun gompang-i", time: 169 },
  { text: "nal guwonhae jun", time: 176 },
  { text: "naui cheonsa", time: 183 },
  { text: "naui sesang", time: 188 },
  { text: "nan ne samsaek goyang-i", time: 140 },
  { text: "neol mannareo on", time: 78 },
  { text: "Love me now", time: 83 },
  { text: "Touch me now", time: 91 },
  { text: "Just let me love you", time: 97 },
  { text: "(Let me love, let me love you)", time: 104 },
  { text: "Just let me love you", time: 108 },
  { text: "(Let me love, let me love you)", time: 144 },
  { text: "ujuga cheoeum saenggyeonasseul ttaebuteo", time: 148 },
  { text: "modeun geon jeonghaejin geoyeosseo", time: 153 },
  { text: "Just let me love you", time: 158 },
  { text: "(Let me love, love)", time: 164 },
  { text: "(Let me love, love)", time: 169 },
  { text: "Let me love", time: 176 },
  { text: "Let me love you", time: 183 },
  { text: "Let me love", time: 188 },
  { text: "Let me love you", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
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
