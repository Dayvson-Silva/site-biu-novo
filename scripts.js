const button = document.getElementById('playaudio')
const buttonMulher = document.getElementById('playaudio-mulher');
const buttonFilho = document.getElementById('playaudio-filho');

const audio = document.getElementById('audio')
const audioMulher = document.getElementById('audio-mulher')
const audioFilho = document.getElementById('audio-filho')

button.addEventListener('click', function(){
    audio.play('audio');
});

buttonMulher.addEventListener('click', function(){
    audioMulher.play('audio-mulher');
});

buttonFilho.addEventListener('click', function(){
    audioFilho.play('audio-filho');
});








