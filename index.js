

//initializing variables
let songIndex = 0
var masterPlay = document.getElementById('masterPlay')
var audioElement = new Audio('songs/1.mp3');
var progressBar = document.getElementById('progressBar')
var gif = document.getElementById('gif');
var songItems = Array.from(document.getElementsByClassName('songItems'))
var songItemsPlay = Array.from(document.getElementsByClassName('songItemsPlay'))
var next = document.getElementById('next')
var previous = document.getElementById('previous')

let songs = [

    { songName: 'Chal Ghar Chlen - Malang', filePath: 'songs/1.mp3', coverPath: 'images/malang.jpg' },
    { songName: 'Aabaad Barbaad - Ludo', filePath: 'songs/2.mp3', coverPath: 'images/malang.jpg' },
    { songName: 'Khamoshiyan - Khamoshiyan', filePath: 'songs/3.mp3', coverPath: 'images/malang.jpg' },
    { songName: 'Kusu Kusu Satyameva Jayate 2', filePath: 'songs/4.mp3', coverPath: 'images/malang.jpg' },
    { songName: 'Meri Jaan Gangubai Kathiawadi', filePath: 'songs/5.mp3', coverPath: 'images/malang.jpg' },
    { songName: 'O Sajna - Table No. 21', filePath: 'songs/6.mp3', coverPath: 'images/malang.jpg' },
    { songName: 'Phir Na Milen Kabhi - Malang ', filePath: 'songs/7.mp3', coverPath: 'images/malang.jpg' },
    { songName: 'Srivalli Pushpa', filePath: 'songs/8.mp3', coverPath: 'images/malang.jpg' }

]

songItems.forEach((element, i) => {
    
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songTitle')[0].innerText = songs[i].songName;
    // element.getElementsByClassName('songTime')[0].innerText = audioElement.currentTime;
    



})




//masterPlay eventListerer
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0
    }
})

// timeupdate eventListener
//seekbar

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
})

progressBar.addEventListener('change', () => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100
})

const makeAllPlay = () => {
    songItemsPlay.forEach((element) => {
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })
}

const makeAllPause=()=>{
    songItemsPlay.forEach((element) => {
        element.classList.add('fa-circle-pause')
        element.classList.remove('fa-circle-play')
    })
}


songItemsPlay.forEach((element) => {
    element.addEventListener('click', (e) => {
        if (audioElement.paused) {

            makeAllPlay();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
        }
        else{
            audioElement.pause();
            makeAllPause
            songIndex = parseInt(e.target.id);
            e.target.classList.add('fa-circle-play');
            e.target.classList.remove('fa-circle-pause');
            audioElement.currentTime = 0;
            gif.style.opacity = 0
            masterPlay.classList.add('fa-circle-play');
            masterPlay.classList.remove('fa-circle-pause');
        }

    })
})

next.addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 0

})


previous.addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 0

})