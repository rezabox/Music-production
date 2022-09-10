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
const prev_btn = document.querySelector('.bi-caret-left-fill');
const title_music = document.querySelector('.title');
const background = document.querySelector('.background');
const songs = ['Dast man nist','Man bahat ghahram','Mo meshki'];
const songs_length = 1;

loadSong(songs[songs_length]);
function loadSong(songs){
    title_music.innerHTML = songs;
    music.src = `music/${songs}.mp3`;
    img2.src = `img/${songs}.jpg`;
    background.src = `img/${songs}.jpg`;
}
// prev_btn.addEventListener("click", pevSong);
// function pevSong(){
//     songs_length--;
//     if(songs_length < 0){
//         songs_length = songs.length - 1;
//     }
//     loadSong(songs[songs_length]);
// }



play_btn.addEventListener('click', function(e){
    if(music.paused){
        music.play();
        e.target.textContent = '||';
        img2.classList.add('active');
    }else{
        music.pause();
        e.target.textContent ="▶";
        img2.classList.remove('active');
    }
})
input_vol.addEventListener('mousemove', (e)=>{
     music.volume= e.target.value;
})
const currentTime = ()=>{
    let currentMintes = Math.floor(music.currentTime / 60);
    let currentSecond = Math.floor(music.currentTime - currentMintes * 60);
    let durationMintes = Math.floor(music.duration  / 60);
    let durationSecond = Math.floor(music.duration - durationMintes * 60);
    current_time.innerHTML = `${currentMintes}:${currentSecond < 10 ? "0"+ currentSecond : currentSecond}`;
    duration_time.innerHTML = `${durationMintes}:${durationSecond}`;
}
music.addEventListener('timeupdate', currentTime);


music.addEventListener('timeupdate', ()=>{
    const precentage = (music.currentTime / music.duration) * 100;
    progress_bar.style.width = `${precentage}%`;
})
music_pro.addEventListener('click',function(e){
    const progressTime =(e.offsetX / music_pro.offsetWidth) * music.duration;
    music.currentTime = `${progressTime}`; 
})

