const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const progressBar = document.getElementById('progress');
const loopBtn = document.getElementById('loop-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const track = document.getElementById('selection');
const track_img = document.getElementById('track-img');
const artistName = document.getElementById('artistName');
const prev_btn = document.getElementById('prev-btn');
const next_btn = document.getElementById('next-btn');

let isLooping = false;
let isShuffling = false;

track.addEventListener('change',()=>{
let currentTrack=track.value;

if(currentTrack=="Talha Anjum"){
audio.src="./audio/KAUNTALHA.mp3"    
audio.setAttribute("autoplay",true)
track_img.src="./img/kaunn.jpeg"
track_img.setAttribute("style","object-fit:cover;")
playIcon.style.display = 'none';
pauseIcon.style.display = 'block';
artistName.innerHTML="KAUN TALHA"
let range =progressBar.value
// alert(range)

let currentSon=audio.src;
if(currentSon=="http://127.0.0.1:5500/audio/KAUNTALHA.mp3" && range==100){
        audio.src="./audio/SECRETS.mp3"
        artistName.innerHTML="SECRETS"
        track_img.src="./img/talha-anjum-open-letter.webp"
    } 
   else if(currentSon=="http://127.0.0.1:5500/audio/SECRETS.mp3" && range==100){
        audio.src="./audio/AGENCY.mp3"
        artistName.innerHTML="AGENCY"
                track_img.src="./img/maxresdefault.jpg"
            } 
            else if(currentSon=="http://127.0.0.1:5500/audio/AGENCY.mp3" && range==100){
        audio.src="./audio/AFSANAY.mp3"
        artistName.innerHTML="AFSANAY"
        track_img.src="./img/asf.jpg"
    } 
    else if(currentSon=="http://127.0.0.1:5500/audio/AFSANAY.mp3" && range==100){
        audio.src="./audio/ME%20AND%20YOU.mp3"
        artistName.innerHTML="ME & YOU"
        track_img.src="./img/me.jpg"
    } 
    else if(currentSon=="http://127.0.0.1:5500/audio/ME%20AND%20YOU.mp3" && range==100){
        audio.src="./audio/COME_THROUGH.mp3"
        artistName.innerHTML="COME THROUGH"
        track_img.src="./img/come.jpg"
    } 
    else if(currentSon=="http://127.0.0.1:5500/audio/COME_THROUGH.mp3" && range==100){
        audio.src="./audio/TWOTONE.mp3"
        artistName.innerHTML="TWO TONE"
        track_img.src="./img/twot.jpg"
    } 
    else if(currentSon=="http://127.0.0.1:5500/audio/TWOTONE.mp3" && range==100){
        audio.src="./audio/KAUNTALHA.mp3"
        artistName.innerHTML="KAUN TALHA"
        track_img.src="./img/kaunn.jpeg"
    }



next_btn.addEventListener('click',()=>{
let currentSong=audio.src;
if(currentSong=="http://127.0.0.1:5500/audio/KAUNTALHA.mp3"){
        audio.src="./audio/SECRETS.mp3"
        artistName.innerHTML="SECRETS"
        track_img.src="./img/talha-anjum-open-letter.webp"
    } 
   else if(currentSong=="http://127.0.0.1:5500/audio/SECRETS.mp3"){
        audio.src="./audio/AGENCY.mp3"
        artistName.innerHTML="AGENCY"
                track_img.src="./img/maxresdefault.jpg"
            } 
            else if(currentSong=="http://127.0.0.1:5500/audio/AGENCY.mp3"){
        audio.src="./audio/AFSANAY.mp3"
        artistName.innerHTML="AFSANAY"
        track_img.src="./img/asf.jpg"
    } 
    else if(currentSong=="http://127.0.0.1:5500/audio/AFSANAY.mp3"){
        audio.src="./audio/ME%20AND%20YOU.mp3"
        artistName.innerHTML="ME & YOU"
        track_img.src="./img/me.jpg"
    } 
    else if(currentSong=="http://127.0.0.1:5500/audio/ME%20AND%20YOU.mp3"){
        audio.src="./audio/COME_THROUGH.mp3"
        artistName.innerHTML="COME THROUGH"
        track_img.src="./img/come.jpg"
    } 
    else if(currentSong=="http://127.0.0.1:5500/audio/COME_THROUGH.mp3"){
        audio.src="./audio/TWOTONE.mp3"
        artistName.innerHTML="TWO TONE"
        track_img.src="./img/twot.jpg"
    } 
    else if(currentSong=="http://127.0.0.1:5500/audio/TWOTONE.mp3"){
        audio.src="./audio/KAUNTALHA.mp3"
        artistName.innerHTML="KAUN TALHA"
        track_img.src="./img/kaunn.jpeg"
    } 
})

prev_btn.addEventListener('click',()=>{
    let currentSong=audio.src;
    if(currentSong=="http://127.0.0.1:5500/audio/KAUNTALHA.mp3"){
        audio.src="./audio/TWOTONE.mp3"
        artistName.innerHTML="TWO TONE"
        track_img.src="./img/twot.jpg"
    } 
    else if(currentSong=="http://127.0.0.1:5500/audio/SECRETS.mp3"){
        audio.src="./audio/KAUNTALHA.mp3"
        artistName.innerHTML="KAUN TALHA"
        track_img.src="./img/kaunn.jpeg"
    } 
    else if(currentSong=="http://127.0.0.1:5500/audio/AGENCY.mp3"){
        audio.src="./audio/SECRETS.mp3"
        artistName.innerHTML="SECRETS"
        track_img.src="./img/talha-anjum-open-letter.webp"
    } 
    else if(currentSong=="http://127.0.0.1:5500/audio/AFSANAY.mp3"){
        audio.src="./audio/AGENCY.mp3"
        artistName.innerHTML="AGENCY"
        track_img.src="./img/maxresdefault.jpg"
    } 
    else if(currentSong=="http://127.0.0.1:5500/audio/ME%20AND%20YOU.mp3"){
        audio.src="./audio/AFSANAY.mp3"
        artistName.innerHTML="AFSANAY"
        track_img.src="./img/asf.jpg"
    } 
    else if(currentSong=="http://127.0.0.1:5500/audio/COME_THROUGH.mp3"){
        audio.src="./audio/ME%20AND%20YOU.mp3"
        artistName.innerHTML="ME & YOU"
        track_img.src="./img/me.jpg"
    } 
    else if(currentSong=="http://127.0.0.1:5500/audio/TWOTONE.mp3"){
        audio.src="./audio/COME_THROUGH.mp3"
        artistName.innerHTML="COME THROUGH"
        track_img.src="./img/come.jpg"
} 
})

}
else if(currentTrack=="Yo Yo Honey Singh"){
audio.src="./audio/MILLIONAIRE.mp3"    
audio.setAttribute("autoplay",true)
track_img.src="./img/honeysingh.jpg"
track_img.setAttribute("style","object-fit:cover;")
playIcon.style.display = 'none';
pauseIcon.style.display = 'block';
artistName.innerHTML="MILLIONAIRE"

next_btn.addEventListener('click',()=>{
    let currentSong=audio.src;
    // alert(currentSong)
    if(currentSong=="http://127.0.0.1:5500/audio/MILLIONAIRE.mp3"){
        audio.src="./audio/JATTMEHKMA.mp3"
        artistName.innerHTML="JATT MEHKMA"
        track_img.src="./img/jat.jpg"
    } 
    else if(currentSong=="http://127.0.0.1:5500/audio/JATTMEHKMA.mp3"){
        audio.src="./audio/VIGDIYANHEERAN.mp3"
        artistName.innerHTML="VIGDIYAN HEERAN"
        track_img.src="./img/vig.jpg"
    } 
    else if(currentSong=="http://127.0.0.1:5500/audio/VIGDIYANHEERAN.mp3"){
        audio.src="./audio/BLUEEYES.mp3"
        artistName.innerHTML="BLUE EYES"
        track_img.src="./img/blu.jpg"
    } 
    else if(currentSong=="http://127.0.0.1:5500/audio/BLUEEYES.mp3"){
        audio.src="./audio/MILLIONAIRE.mp3"
        artistName.innerHTML="MILLIONAIRE"
        track_img.src="./img/honeysingh.jpg"
    }  
})

prev_btn.addEventListener('click',()=>{
    let currentSong=audio.src;
    if(currentSong=="http://127.0.0.1:5500/audio/MILLIONAIRE.mp3"){
        audio.src="./audio/BLUEEYES.mp3"
        artistName.innerHTML="BLUE EYES"
        track_img.src="./img/blu.jpg"
    } 
    else if(currentSong=="http://127.0.0.1:5500/audio/JATTMEHKMA.mp3"){
        audio.src="./audio/MILLIONAIRE.mp3"
        artistName.innerHTML="MILLIONAIRE"
        track_img.src="./img/honeysingh.jpg"
    } 
    else if(currentSong=="http://127.0.0.1:5500/audio/VIGDIYANHEERAN.mp3"){
        audio.src="./audio/JATTMEHKMA.mp3"
        artistName.innerHTML="JATT MEHKMA"
        track_img.src="./img/jat.jpg"
    } 
    else if(currentSong=="http://127.0.0.1:5500/audio/BLUEEYES.mp3"){
        audio.src="./audio/VIGDIYANHEERAN.mp3"
        artistName.innerHTML="VIGDIYAN HEERAN"
        track_img.src="./img/vig.jpg"
} 
})

}
else if(currentTrack=="xxxTentacion"){
audio.src="./audio/HOPE.mp3"    
audio.setAttribute("autoplay",true)
track_img.src="./img/hope.jpg"
track_img.setAttribute("style","object-fit:cover;")
playIcon.style.display = 'none';
pauseIcon.style.display = 'block';
artistName.innerHTML="HOPE"

next_btn.addEventListener('click',()=>{
    let currentSong=audio.src;
    // alert(currentSong)
    if(currentSong=="http://127.0.0.1:5500/audio/HOPE.mp3"){
        audio.src="./audio/KILL ME.mp3"
        artistName.innerHTML="KILL ME"
    track_img.src="./img/xxxTentacion.jpg"
} 
else if(currentSong=="http://127.0.0.1:5500/audio/KILL%20ME.mp3"){
    audio.src="./audio/LOOK AT ME.mp3"
        artistName.innerHTML="LOOK AT ME"
        track_img.src="./img/lk.jpeg"
    } 
    else if(currentSong=="http://127.0.0.1:5500/audio/LOOK%20AT%20ME.mp3"){
        audio.src="./audio/MOONLIGHT.mp3"
        artistName.innerHTML="MOONLIGHT"
        track_img.src="./img/mon.jpg"
    } 
    else if(currentSong=="http://127.0.0.1:5500/audio/MOONLIGHT.mp3"){
        audio.src="./audio/SAD.mp3"
        artistName.innerHTML="SAD"
        track_img.src="./img/sad.jpg"
    } 
    else if(currentSong=="http://127.0.0.1:5500/audio/SAD.mp3"){
        audio.src="./audio/HOPE.mp3"
        artistName.innerHTML="HOPE"
        track_img.src="./img/hope.jpg"
    } 
})

prev_btn.addEventListener('click',()=>{
    let currentSong=audio.src;
    if(currentSong=="http://127.0.0.1:5500/audio/HOPE.mp3"){
        audio.src="./audio/SAD.mp3"
        artistName.innerHTML="SAD"
        track_img.src="./img/sad.jpg"
    } 
    else if(currentSong=="http://127.0.0.1:5500/audio/SAD.mp3"){
        audio.src="./audio/MOONLIGHT.mp3"
        artistName.innerHTML="MOONLIGHT"
        track_img.src="./img/mon.jpg"
    } 
    else if(currentSong=="http://127.0.0.1:5500/audio/MOONLIGHT.mp3"){
        audio.src="./audio/LOOK AT ME.mp3"
        artistName.innerHTML="LOOK AT ME"
        track_img.src="./img/lk.jpeg"
    } 
    else if(currentSong=="http://127.0.0.1:5500/audio/LOOK%20AT%20ME.mp3"){
        audio.src="./audio/KILL ME.mp3"
        artistName.innerHTML="KILL ME"
        track_img.src="./img/xxxTentacion.jpg"
    } 
    else if(currentSong=="http://127.0.0.1:5500/audio/KILL%20ME.mp3"){
        audio.src="./audio/HOPE.mp3"
        artistName.innerHTML="HOPE"
        track_img.src="./img/hope.jpg"
    } 
})

}
else if(currentTrack=="Popular Songs"){
audio.src="./audio/WAVY.mp3"    
audio.setAttribute("autoplay",true)
track_img.src="./img/Wavykaranaujla.jpeg"
track_img.setAttribute("style","object-fit:cover;")
playIcon.style.display = 'none';
pauseIcon.style.display = 'block';
artistName.innerHTML="WAVY"

next_btn.addEventListener('click',()=>{
    let currentSong=audio.src;
    // alert(currentSong)
    if(currentSong=="http://127.0.0.1:5500/audio/WAVY.mp3"){
        audio.src="./audio/RENEGADE.mp3"
        artistName.innerHTML="RENEGADE"
        track_img.src="./img/aaryanshahrenegade.png"
    } 
    else if(currentSong=="http://127.0.0.1:5500/audio/RENEGADE.mp3"){
        audio.src="./audio/OSAHIB.mp3"
        artistName.innerHTML="O SAHIB"
        track_img.src="./img/O-Sahib.jpg"
    } 
    else if(currentSong=="http://127.0.0.1:5500/audio/OSAHIB.mp3"){
        audio.src="./audio/BIGDAWGS.mp3"
        artistName.innerHTML="BIG DAWGS"
        track_img.src="./img/BIGDAWGS.jpg"
    } 
    else if(currentSong=="http://127.0.0.1:5500/audio/BIGDAWGS.mp3"){
        audio.src="./audio/ECSTACY.mp3"
        artistName.innerHTML="ECSTACY"
        track_img.src="./img/ECSTACY.jpeg"
    } 
    else if(currentSong=="http://127.0.0.1:5500/audio/ECSTACY.mp3"){
        audio.src="./audio/WAVY.mp3"
        artistName.innerHTML="WAVY"
        track_img.src="./img/Wavykaranaujla.jpeg"
    } 
})

prev_btn.addEventListener('click',()=>{
let currentSong=audio.src;
if(currentSong=="http://127.0.0.1:5500/audio/OSAHIB.mp3"){
    audio.src="./audio/RENEGADE.mp3"
    artistName.innerHTML="RENEGADE"
    track_img.src="./img/aaryanshahrenegade.png"
} 
else if(currentSong=="http://127.0.0.1:5500/audio/BIGDAWGS.mp3"){
    audio.src="./audio/OSAHIB.mp3"
    artistName.innerHTML="O SAHIB"
    track_img.src="./img/O-Sahib.jpg"
} 
else if(currentSong=="http://127.0.0.1:5500/audio/ECSTACY.mp3"){
    audio.src="./audio/BIGDAWGS.mp3"
    artistName.innerHTML="BIG DAWGS"
    track_img.src="./img/BIGDAWGS.jpg"
} 
else if(currentSong=="http://127.0.0.1:5500/audio/WAVY.mp3"){
    audio.src="./audio/ECSTACY.mp3"
    artistName.innerHTML="ECSTACY"
    track_img.src="./img/ECSTACY.jpeg"
} 
else if(currentSong=="http://127.0.0.1:5500/audio/RENEGADE.mp3"){
    audio.src="./audio/WAVY.mp3"
    artistName.innerHTML="WAVY"
    track_img.src="./img/Wavykaranaujla.jpeg"
} 
})

}
  








})

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    } else {
        audio.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    }
});

// Update progress bar as the song plays
audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100 || 0;
    progressBar.value = progress;
});

// Seek when progress bar is adjusted
progressBar.addEventListener('input', () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

// Loop functionality
loopBtn.addEventListener('click', () => {
    isLooping = !isLooping;
    audio.loop = isLooping;
    loopBtn.classList.toggle('active', isLooping);
});

// Shuffle functionality
shuffleBtn.addEventListener('click', () => {
    isShuffling = !isShuffling;
    shuffleBtn.classList.toggle('active', isShuffling);
    // Shuffle logic will go here in the future
});



const iconBtns = document.querySelectorAll('.icon-btn');

// Loop through each button and add the click event listener
iconBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Add the "clicked" class to trigger the animation
        btn.classList.add('clicked');

        // Remove the "clicked" class after the animation is complete (300ms)
        setTimeout(() => {
            btn.classList.remove('clicked');
        }, 300); // Duration of the animation
    });
});






