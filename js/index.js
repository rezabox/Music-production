const music_player = document.querySelector('.music-player');
const music = document.querySelector('.music');
const play_btn = document.querySelector('.play-btn');
const input_vol = document.querySelector('.volume');
const img2 = document.querySelector('.img2');
const current_time = document.querySelector('.current');
const duration_time = document.querySelector('.duration');
const progress_bar = document.querySelector('.progress-music');
const music_pro= document.querySelector('.music-progress-music');
const next_btn = document.getElementById('next');
const prev_btn = document.getElementById('prev');
const title_music = document.querySelector('.title');
const background = document.querySelector('.background');
const repeat = document.querySelector('.repeat-track');
const RandomIcon = document.querySelector('.random-track');
const songs = ['Dast man nist','Man bahat ghahram','Mo meshki'];
let isPlaying = false;
let isRandom = false;
let songsIndex = 0;
console.log(prev_btn);
loadSong(songs[songsIndex]);
function loadSong(songs){
    title_music.innerHTML = songs;
    music.src = `music/${songs}.mp3`;
    img2.src = `img/${songs}.jpg`;
    background.src = `img/${songs}.jpg`;
}
function randomTrack(){
    isRandom ? pauseSong() : playSong();
}
function playSong(){
    isRandom = true;
    RandomIcon.classList.add('show-random');
}
function pauseSong(){
    isRandom = false;
    RandomIcon.classList.remove('show-random');
}
prev_btn.addEventListener("click", pevSong);
function pevSong(){
    songsIndex--;
    if(songsIndex < 0){
        songsIndex = songs.length - 1;
    }
    loadSong(songs[songsIndex]);
    playSong();
}
next_btn.addEventListener("click", nextSong);
function nextSong(){
    // songsIndex++;
    // if(songsIndex >  songs.length - 1){
    //     songsIndex = 0;
    // }
    if(songsIndex < songs.length - 1 && isRandom === false){
        songsIndex += 1;
    }else if(songsIndex < songs.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * songs.length);
        songsIndex = random_index;
    }else{
        songsIndex = 0;
    }
    loadSong(songs[songsIndex]);
    playSong();
}
function playpauseTrack(){
    isPlaying ? pauseSong() : playSong();
}
function repeatTrack(){
    let song_curr = songs;
    let ind = songsIndex;
    loadSong(song_curr[ind]);
    playSong();
}
function playSong(){
    music.play();
    isPlaying = true;
    img2.classList.add('active');
    play_btn.innerHTML = '||';
}
function pauseSong(){
    music.pause();
    isPlaying = false;
    img2.classList.remove('active');
    play_btn.innerHTML = '▶'
}
input_vol.addEventListener('mousemove', (e)=>{
     music.volume= e.target.value;
})
const currentTime = ()=>{
  let seekPosition = 0;
    if(!isNaN(music.duration)){
        seekPosition = music.currentTime * (100/ music.duration);
        progress_bar.value = seekPosition;
   

    let currentMintes = Math.floor(music.currentTime / 60);
    let currentSecond = Math.floor(music.currentTime - currentMintes * 60);
    let durationMintes = Math.floor(music.duration  / 60);
    let durationSecond = Math.floor(music.duration - durationMintes * 60);
    if(currentMintes < 10) {currentMintes = "0" + currentMintes; }
    if(currentSecond < 10) {currentSecond = "0" + currentSecond; }
    if(durationSecond < 10) {durationSecond = "0" + durationSecond; }
    if(durationMintes < 10) {durationMintes = "0" + durationMintes; }
    current_time.textContent = currentMintes + ":" + currentSecond;
    duration_time.textContent = durationMintes + ":" + durationSecond;
   }
}
music.addEventListener('timeupdate', currentTime);


music.addEventListener('timeupdate', prgressy); 
music.addEventListener('', progressEnd);
function prgressy(){
    const precentage = (music.currentTime / music.duration) * 100;
    progress_bar.style.width = `${precentage}%`;
}
music_pro.addEventListener('click',function(e){
    const progressTime =(e.offsetX / music_pro.offsetWidth) * music.duration;
    music.currentTime = `${progressTime}`; 
})
function progressEnd(){
    songsIndex++;
    if(songsIndex >  songs.length - 1){
        songsIndex = 0;
    }
    loadSong(songs[songsIndex]);
    playSong();
}


