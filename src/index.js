let videoJson = [{
    "title": "Kristen Wiig, Steve Carell In 'Despicable Me 3' First Trailer",
    "file": "https://s3.amazonaws.com/dev.content.origin/video/83a2ce54baaba0404072a3d4997d56db9b098e93_480.mp4",
    "description": "Gru's long lost twin (Drew) will emerge and there will be a theme of sibling rivalry. This is the first trailer for 'Despicable Me 3' in HD. Definitely enjoy it.",
    "thumbnail": "https://src.trvdp.com/images/83a2ce54baaba0404072a3d4997d56db9b098e93_1.png"
},
{
    "title": "Summer'",
    "file": "https://dev-exercise.s3.amazonaws.com/bensound-summer.mp3",
    "description": "Soft electronic dance royalty free music track. This track has a chill-out mood perfect for presentations, youtube videos, commercials and more.",
    "thumbnail": "https://dev-exercise.s3.amazonaws.com/summer.jpg"
},
{
    "title": "All Time Classic 'Iron Man'",
    "file": "https://s3.amazonaws.com/dev.content.origin/video/a2f1d3d56d0417ecddf4188e5ca71415e32b5458_480.mp4",
    "description": "For this week's all time classic we'll be looking at 'Iron Man'.",
    "thumbnail": "https://src.trvdp.com/images/a2f1d3d56d0417ecddf4188e5ca71415e32b5458_1.png"
},
{
    "title": "Deadpool 2 (Clean Trailer)",
    "file": "https://s3.amazonaws.com/dev.content.origin/video/40a63832ad27cfe34a642c1cc81f81aaffe4aa87_480.mp4",
    "description": "After surviving a near fatal bovine attack, a disfigured cafeteria chef (Wade Wilson) struggles to fulfill his dream of becoming Mayberry's hottest bartender while also learning to cope with his lost sense of taste. Searching to regain his spice for life, as well as a flux capacitor, Wade must battle ninjas, the yakuza, and a pack of sexually aggressive canines, as he journeys around the world to discover the importance of family, friendship, and flavor - finding a new taste for adventure and earning the coveted coffee mug title of World's Best Lover.",
    "thumbnail": "https://src.trvdp.com/images/40a63832ad27cfe34a642c1cc81f81aaffe4aa87_1.png"
},
{
    "title": "Review of ‘Super Mario Odyssey’",
    "file": "https://s3.amazonaws.com/dev.content.origin/video/f7be24937aa0664ebd85bc2515eec930705d8ff0_480.mp4",
    "description": "In the era of 3D video games, the Mario franchise set a benchmark for platformers with adventures full of clever details, exciting moments, and well-designed mechanics. Super Mario Odyssey continues the tradition on the Nintendo Switch with a bright, colorful entry that recaptures much of the fun gameplay that makes Mario endearing. But while the title suggests a daring, adventurous journey, the game itself is much more conservative than the medium-defining Mario games of past generations.",
    "thumbnail": "https://src.trvdp.com/images/f7be24937aa0664ebd85bc2515eec930705d8ff0_1.png"
},
{
    "title": "5b584b3fd1f8ed9cdc0a9fc697ca9f6ac8f1c117",
    "file": "https://s3.amazonaws.com/dev.content.origin/video/5b584b3fd1f8ed9cdc0a9fc697ca9f6ac8f1c117_480.mp4",
    "description": "Nintendo has revealed that popular multiplayer game Rocket League is coming to the Nintendo Switch before Black Friday. According to Psyonix, the Nintendo Switch port of Rocket League launches November 14th on the Nintendo eShop. The version made for Nintendo's newest console includes exclusive Battle-Cars and other special features. Rocket League first release in 2015 for the PlayStation 4 and Windows PC.",
    "thumbnail": "https://src.trvdp.com/images/5b584b3fd1f8ed9cdc0a9fc697ca9f6ac8f1c117_1.png"
},
{
    "title": "Lightsaber Display In London",
    "file": "https://s3.amazonaws.com/dev.content.origin/video/32e7e7499bf524e9771156c512dcb1737a48b989_480.mp4",
    "description": "To mark the release of Star Wars The Last Jedi Disney had two martial arts experts delighting Londoners with a spectacular lightsaber due. Shania West is a trained stunt fighter. Anton Simpson-Tidy is a world champion martial arts athlete. They were given Lightsabers to train with for a week before staging the duel on London’s Southbank. Star Wars: The Last Jedi is written and directed by Rian Johnson and produced by Kathleen Kennedy and Ram Bergman. J.J.",
    "thumbnail": "https://src.trvdp.com/images/32e7e7499bf524e9771156c512dcb1737a48b989_1.png"
},
{
    "title": "World of Warcraft - Battle for Azeroth",
    "file": "https://s3.amazonaws.com/dev.content.origin/video/c915b75f0d46cf50fced43e1093a708c9ad55644_480.mp4",
    "description": "World of Warcraft - Battle for Azeroth",
    "thumbnail": "https://src.trvdp.com/images/c915b75f0d46cf50fced43e1093a708c9ad55644_1.jpg"
}
]
const videoElement = document.getElementById("video");
const playpause = document.getElementById('playpause');
const next = document.getElementById('next');
const back = document.getElementById('back');
const normal = document.getElementById('normal');
const shuffle = document.getElementById('shuffle');
let videoOrder = [0, 1, 2, 3, 4, 5, 6, 7];
let currentVideo = 0;
buildList()
play_pause()
document.getElementById(0).classList.add('selectedVideo')

function buildList() {
    let currentList = document.getElementById("dynamic-list");
    currentList.innerHTML = ''
    for (let i = 0; i < videoOrder.length; i++) {
        let newListItem = document.createElement("li");
        newListItem.setAttribute("id", videoOrder[i]);
        let title = document.createElement('h3');
        title.innerHTML = videoJson[videoOrder[i]].title;
        title.classList.add('videoText')
        let description = document.createElement('p');
        description.innerHTML = videoJson[videoOrder[i]].description;
        description.classList.add('videoText')
        let thumbnail = document.createElement('img');
        thumbnail.setAttribute('src', videoJson[videoOrder[i]].thumbnail);
        thumbnail.classList.add('videoImg')
        newListItem.append(title, thumbnail, description);
        currentList.appendChild(newListItem);
    }
}
function addSourceToVideo(src, type) {
    if (videoElement.childElementCount > 0) {
        videoElement.firstChild.setAttribute('src', src)
    } else {
        var source = document.createElement('source');
        source.src = src;
        source.type = type;
        videoElement.appendChild(source);
    }
    videoElement.load();
}

playpause.addEventListener('click', function (e) {
    if (videoElement.paused || videoElement.ended) {
        videoElement.play();
        playpause.innerHTML = 'pause'
    } else {
        videoElement.pause();
        playpause.innerHTML = 'play'
    }
});

next.addEventListener('click', function (e) {
    changeVideoSrc('next')
});

back.addEventListener('click', function (e) {
    changeVideoSrc('back')
});

function changeVideoSrc(direction) {
    let c = document.getElementById(currentVideo);
    c.classList.remove("selectedVideo");
    let index = videoOrder.indexOf(currentVideo);
    if (direction == "back") {
        currentVideo = videoOrder[index - 1] % videoJson.length;
    } else {
        currentVideo = videoOrder[index + 1] % videoJson.length;
    }
    c = document.getElementById(currentVideo);
    c.classList.add("selectedVideo");
    videoElement.pause()
    videoElement.firstChild.setAttribute('src', videoJson[currentVideo].file);
    videoElement.load();
    videoElement.play();
    playpause.innerHTML = 'pause'

}
normal.addEventListener('click', function (e) {
    normal.classList.add('selectedMode')
    shuffle.classList.remove('selectedMode')
    videoOrder = [0, 1, 2, 3, 4, 5, 6, 7];
    buildList()
});
shuffle.addEventListener('click', function (e) {
    shuffle.classList.add('selectedMode')
    normal.classList.remove('selectedMode')
    videoOrder = videoOrder.sort(() => Math.random() - 0.5);
    console.log(videoOrder)
    buildList()
});

function play_pause() {
    if (!videoElement.hasChildNodes()) {
        addSourceToVideo(videoJson[currentVideo].file, 'video/mp4');
    }
}
