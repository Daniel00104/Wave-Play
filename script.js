/* =========================================
   SONG DATA
========================================= */

const songs = [

    {
        title: "Blind",
        artist: "Anendlessocean",
        album: "Blind",
        duration: "0:00",
        src: "music/Anendlessocean_-_Blind_CeeNaija.com_.mp3",
        image: "images/Anendlessocean-Blind.webp"
    },

    {
        title: "Hallelujah",
        artist: "Beecan Media",
        album: "Hallelujah",
        duration: "0:00",
        src: "music/Beecan_Media_-_Hallelujah_CeeNaija.com_.mp3",
        image: "images/Omemma.jpg"
    },

    {
        title: "Jireh",
        artist: "Cory Asbury, Naomi Raine",
        album: "Jireh",
        duration: "0:00",
        src: "music/Cory_Asbury_Naomi_Raine_-_Jireh_CeeNaija.com_.mp3",
        image: "images/Naomi-Raine-God-Will-Work-It-Out.jpg"
    },

    {
        title: "Eze Yoyo",
        artist: "David Jones, David Eze",
        album: "Eze Yoyo",
        duration: "0:00",
        src: "music/David_Jones_David_-_Eze_yoyo_CeeNaija.com_.mp3",
        image: "images/David-Jones-David-Eze-Yoyo.webp"
    },

    {
        title: "I Surrender",
        artist: "Hillsong Worship",
        album: "I Surrender",
        duration: "0:00",
        src: "music/I-Surrender-Hillsong-Worship-CEENAIJA.COM_.mp3",
        image: "images/I-SURRENDER-HILLSONG-scaled.webp"
    },

    {
        title: "Pile (Gospel Version)",
        artist: "Mauvais Djo",
        album: "Pile (Gospel Version)",
        duration: "0:00",
        src: "music/Mauvais_Djo_-_Pile_Gospel_Version__CeeNaija.com_.mp3",
        image: "images/Mauvais-Djo-Pile-Gospel-Version.webp"
    },

    {
        title: "Too Many Reasons",
        artist: "Mercy Chinwo",
        album: "Too Many Reasons",
        duration: "0:00",
        src: "music/Mercy_Chinwo_-_Too_Many_Reasons_CeeNaija.com_.mp3",
        image: "images/Mercy-Chinwo-Too-Many-Reasons-1.webp"
    },

    {
        title: "Your Love",
        artist: "Moses Bliss feat. Chandler Moore",
        album: "Your Love",
        duration: "0:00",
        src: "music/Moses_Bliss_-_Your_Love_Ft_Chandler_Moore_CeeNaija.com_.mp3",
        image: "images/Moses-Bliss-Your-Love.webp"
    },

    {
        title: "Be Glad",
        artist: "Naomi Raine",
        album: "Be Glad",
        duration: "0:00",
        src: "music/Naomi_Raine_-_Be_Glad_CeeNaija.com_.mp3",
        image: "images/Naomi-Raine-Be-Glad.webp"
    },

    {
        title: "God Will Work It Out",
        artist: "Naomi Raine",
        album: "God Will Work It Out",
        duration: "0:00",
        src: "music/Naomi_Raine_-_God_Will_Work_It_Out_CeeNaija.com_.mp3",
        image: "images/Naomi-Raine-God-Will-Work-It-Out.jpg"
    },

    {
        title: "Omemma",
        artist: "Minister GUC",
        album: "Omemma",
        duration: "0:00",
        src: "music/omemma.mp3",
        image: "images/Omemma.jpg"
    },

    {
        title: "Open Up",
        artist: "Dunsin Oyekan",
        album: "Open Up",
        duration: "0:00",
        src: "music/OPEN-UP-Dunsin-Oyekan-2.mp3",
        image: "images/dunsin-open-up-scaled.webp"
    },

    {
        title: "Holy Forever",
        artist: "Phil Wickham",
        album: "Holy Forever",
        duration: "0:00",
        src: "music/Phil_Wickham_-_Holy_Forever_CeeNaija.com_.mp3",
        image: "images/Phil-Wickham-Holy-Forever.webp"
    },

    {
        title: "Maisha Yangu (My Daddy, My Daddy)",
        artist: "Sunmisola Agbebi, Bola",
        album: "Maisha Yangu",
        duration: "0:00",
        src: "music/Sunmisola_Agbebi_-_Maisha_Yangu_Bola_Swahili_Version_My_Daddy_My_Daddy_CeeNaija.com_.mp3",
        image: "images/Sunmisola-Agbebi-Maisha-Yangu-Bola-Swahili-Version-My-Daddy-My-Daddy.webp"
    },

    {
        title: "Mighty Name of Jesus (Live)",
        artist: "The Belonging Co feat. Hope Darst",
        album: "Mighty Name of Jesus",
        duration: "0:00",
        src: "music/The-Belonging-Co-feat-Hope-Darst-Mighty-Name-of-Jesus-Live-(CeeNaija.com).mp3",
        image: "images/Phil-Wickham-Holy-Forever.webp"
    },

    {
        title: "Testament of Love",
        artist: "Ugee Royalty",
        album: "Testament of Love",
        duration: "0:00",
        src: "music/Ugee_Royalty_-_Testament_Of_Love_CeeNaija.com_.mp3",
        image: "images/Moses-Bliss-Your-Love.webp"
    },

    {
        title: "On Fire (Fresh Fire Medley)",
        artist: "Victoria Orenze",
        album: "On Fire",
        duration: "0:00",
        src: "music/Victoria_Orenze_-_On_Fire_Fresh_Fire_Medley_CeeNaija.com_.mp3",
        image: "images/Victoria-Orenze-On-Fire-Fresh-Fire-Medley.webp"
    }

];


/* =========================================
   ELEMENTS
========================================= */

const audio =
    document.getElementById("audioPlayer");

const playBtn =
    document.getElementById("playBtn");

const previousBtn =
    document.getElementById("previousBtn");

const nextBtn =
    document.getElementById("nextBtn");

const shuffleBtn =
    document.getElementById("shuffleBtn");

const repeatBtn =
    document.getElementById("repeatBtn");

const progressBar =
    document.getElementById("progressBar");

const currentTime =
    document.getElementById("currentTime");

const duration =
    document.getElementById("duration");

const volumeBar =
    document.getElementById("volumeBar");

const volumeBtn =
    document.getElementById("volumeBtn");

const playerImage =
    document.getElementById("playerImage");

const playerTitle =
    document.getElementById("playerTitle");

const playerArtist =
    document.getElementById("playerArtist");

const playerFavorite =
    document.getElementById("playerFavorite");

const songList =
    document.getElementById("songList");

const searchInput =
    document.getElementById("searchInput");

const clearSearch =
    document.getElementById("clearSearch");

const songCount =
    document.getElementById("songCount");

const queuePanel =
    document.getElementById("queuePanel");

const queueBtn =
    document.getElementById("queueBtn");

const closeQueue =
    document.getElementById("closeQueue");

const queueList =
    document.getElementById("queueList");

const queueCount =
    document.getElementById("queueCount");

const menuBtn =
    document.getElementById("menuBtn");

const sidebar =
    document.getElementById("sidebar");

const overlay =
    document.getElementById("overlay");

const heroPlay =
    document.getElementById("heroPlay");

const soundcloudLink =
    document.getElementById("soundcloudLink");

fetch("soundcloud.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not load SoundCloud configuration");
        }

        return response.json();
    })
    .then(config => {
        if (config.url && soundcloudLink) {
            soundcloudLink.href = config.url;
        }
    })
    .catch(() => {});


/* =========================================
   STATE
========================================= */

let currentIndex = 0;

let isPlaying = false;

let isShuffle = false;

let isRepeat = false;

let favorites = [];

let filteredSongs = [...songs];

let recentlyPlayed = [];

let activeView = "all";


/* =========================================
   LOAD SONG
========================================= */

function loadSong(index) {

    currentIndex = index;

    recentlyPlayed = [
        index,
        ...recentlyPlayed.filter(
            playedIndex => playedIndex !== index
        )
    ];

    const song = songs[index];

    audio.src = song.src;

    playerImage.src = song.image;

    playerTitle.textContent =
        song.title;

    playerArtist.textContent =
        song.artist;

    duration.textContent =
        song.duration;

    progressBar.value = 0;

    currentTime.textContent =
        "0:00";

    updateFavoriteButton();

    renderSongs();

    renderQueue();

}


/* =========================================
   PLAY
========================================= */

function playSong() {

    audio.play()
        .then(() => {

            isPlaying = true;

            updatePlayButton();

            renderSongs();

        })
        .catch(error => {

            console.log(error);

        });

}


/* =========================================
   PAUSE
========================================= */

function pauseSong() {

    audio.pause();

    isPlaying = false;

    updatePlayButton();

    renderSongs();

}


/* =========================================
   TOGGLE PLAY
========================================= */

function togglePlay() {

    if (isPlaying) {

        pauseSong();

    } else {

        playSong();

    }

}


/* =========================================
   UPDATE PLAY BUTTON
========================================= */

function updatePlayButton() {

    if (isPlaying) {

        playBtn.innerHTML =
            '<i class="fa-solid fa-pause"></i>';

    } else {

        playBtn.innerHTML =
            '<i class="fa-solid fa-play"></i>';

    }

}


/* =========================================
   NEXT
========================================= */

function nextSong() {

    if (isShuffle) {

        let randomIndex;

        do {

            randomIndex =
                Math.floor(
                    Math.random() *
                    songs.length
                );

        } while (
            randomIndex === currentIndex &&
            songs.length > 1
        );

        currentIndex = randomIndex;

    } else {

        currentIndex++;

        if (currentIndex >= songs.length) {

            currentIndex = 0;

        }

    }

    loadSong(currentIndex);

    playSong();

}


/* =========================================
   PREVIOUS
========================================= */

function previousSong() {

    if (audio.currentTime > 3) {

        audio.currentTime = 0;

        return;

    }

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex =
            songs.length - 1;

    }

    loadSong(currentIndex);

    playSong();

}


/* =========================================
   FORMAT TIME
========================================= */

function formatTime(time) {

    if (isNaN(time)) {

        return "0:00";

    }

    const minutes =
        Math.floor(time / 60);

    const seconds =
        Math.floor(time % 60);

    return `${minutes}:${seconds
        .toString()
        .padStart(2, "0")}`;

}


/* =========================================
   AUDIO PROGRESS
========================================= */

audio.addEventListener(
    "timeupdate",
    () => {

        if (!audio.duration) return;

        const progress =
            (audio.currentTime /
            audio.duration) * 100;

        progressBar.value =
            progress;

        currentTime.textContent =
            formatTime(
                audio.currentTime
            );

        duration.textContent =
            formatTime(
                audio.duration
            );

    }
);

audio.addEventListener(
    "loadedmetadata",
    () => {

        const song = songs[currentIndex];

        song.duration = formatTime(audio.duration);

        duration.textContent = song.duration;

        renderSongs();

        renderQueue();

    }
);


/* =========================================
   SEEK
========================================= */

progressBar.addEventListener(
    "input",
    () => {

        if (!audio.duration) return;

        audio.currentTime =
            (progressBar.value / 100) *
            audio.duration;

    }
);


/* =========================================
   SONG ENDED
========================================= */

audio.addEventListener(
    "ended",
    () => {

        if (isRepeat) {

            audio.currentTime = 0;

            playSong();

        } else {

            nextSong();

        }

    }
);


/* =========================================
   VOLUME
========================================= */

audio.volume = 1;


volumeBar.addEventListener(
    "input",
    () => {

        audio.volume =
            volumeBar.value;

        updateVolumeIcon();

    }
);


function updateVolumeIcon() {

    if (audio.volume === 0) {

        volumeBtn.innerHTML =
            '<i class="fa-solid fa-volume-xmark"></i>';

    }

    else if (audio.volume < 0.5) {

        volumeBtn.innerHTML =
            '<i class="fa-solid fa-volume-low"></i>';

    }

    else {

        volumeBtn.innerHTML =
            '<i class="fa-solid fa-volume-high"></i>';

    }

}


volumeBtn.addEventListener(
    "click",
    () => {

        if (audio.volume > 0) {

            audio.dataset.previousVolume =
                audio.volume;

            audio.volume = 0;

            volumeBar.value = 0;

        }

        else {

            const previous =
                Number(
                    audio.dataset.previousVolume
                ) || 1;

            audio.volume =
                previous;

            volumeBar.value =
                previous;

        }

        updateVolumeIcon();

    }
);


/* =========================================
   SHUFFLE
========================================= */

shuffleBtn.addEventListener(
    "click",
    () => {

        isShuffle =
            !isShuffle;

        shuffleBtn.classList.toggle(
            "active",
            isShuffle
        );

    }
);


/* =========================================
   REPEAT
========================================= */

repeatBtn.addEventListener(
    "click",
    () => {

        isRepeat =
            !isRepeat;

        repeatBtn.classList.toggle(
            "active",
            isRepeat
        );

    }
);


/* =========================================
   FAVORITES
========================================= */

function toggleFavorite(index) {

    if (favorites.includes(index)) {

        favorites =
            favorites.filter(
                item => item !== index
            );

    }

    else {

        favorites.push(index);

    }

    updateFavoriteButton();

    renderSongs();

}


function updateFavoriteButton() {

    if (
        favorites.includes(currentIndex)
    ) {

        playerFavorite.classList.add(
            "active"
        );

        playerFavorite.innerHTML =
            '<i class="fa-solid fa-heart"></i>';

    }

    else {

        playerFavorite.classList.remove(
            "active"
        );

        playerFavorite.innerHTML =
            '<i class="fa-regular fa-heart"></i>';

    }

}


playerFavorite.addEventListener(
    "click",
    () => {

        toggleFavorite(
            currentIndex
        );

    }
);


/* =========================================
   RENDER SONGS
========================================= */

function renderSongs(
    list = getVisibleSongs()
) {

    songList.innerHTML = "";

    songCount.textContent =
        `${list.length} ${
            list.length === 1
                ? "song"
                : "songs"
        }`;


    if (list.length === 0) {

        songList.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-music"></i>
                <p>No songs found</p>
            </div>
        `;

        return;

    }


    list.forEach(song => {

        const originalIndex =
            songs.indexOf(song);

        const songElement =
            document.createElement("div");

        songElement.className =
            `song ${
                originalIndex === currentIndex
                    ? "active"
                    : ""
            }`;


        songElement.innerHTML = `

            <div class="song-number">

                <img
                    src="${song.image}"
                    alt="${song.title}"
                >

                <div class="song-play-overlay">

                    <i class="fa-solid ${
                        originalIndex === currentIndex &&
                        isPlaying
                            ? "fa-pause"
                            : "fa-play"
                    }"></i>

                </div>

            </div>


            <div class="song-info">

                <strong>
                    ${song.title}
                </strong>

                <span>
                    ${song.artist}
                </span>

            </div>


            <div class="song-album">

                ${song.album}

            </div>


            <div class="song-duration">

                ${song.duration}

            </div>


            <div class="song-actions">

                <button
                    class="favorite-btn ${
                        favorites.includes(
                            originalIndex
                        )
                            ? "active"
                            : ""
                    }"
                >

                    <i class="${
                        favorites.includes(
                            originalIndex
                        )
                            ? "fa-solid"
                            : "fa-regular"
                    } fa-heart"></i>

                </button>

            </div>

        `;


        songElement.addEventListener(
            "click",
            event => {

                if (
                    event.target.closest(
                        ".favorite-btn"
                    )
                ) {

                    return;

                }


                if (
                    originalIndex ===
                    currentIndex
                ) {

                    togglePlay();

                }

                else {

                    loadSong(
                        originalIndex
                    );

                    playSong();

                }

            }
        );


        const favoriteButton =
            songElement.querySelector(
                ".favorite-btn"
            );


        favoriteButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                toggleFavorite(
                    originalIndex
                );

            }
        );


        songList.appendChild(
            songElement
        );

    });

}


function getVisibleSongs(query = searchInput.value.toLowerCase().trim()) {

    let list = [...songs];

    if (activeView === "favorites") {

        list = list.filter(
            song => favorites.includes(songs.indexOf(song))
        );

    } else if (activeView === "recent") {

        list = recentlyPlayed.map(index => songs[index]);

    }

    if (!query) return list;

    return list.filter(song =>
        `${song.title} ${song.artist} ${song.album}`
            .toLowerCase()
            .includes(query)
    );

}


/* =========================================
   QUEUE
========================================= */

function renderQueue() {

    queueList.innerHTML = "";

    queueCount.textContent =
        `${songs.length} songs`;


    songs.forEach(
        (song, index) => {

            const item =
                document.createElement(
                    "div"
                );

            item.className =
                `queue-item ${
                    index === currentIndex
                        ? "active"
                        : ""
                }`;


            item.innerHTML = `

                <img
                    src="${song.image}"
                    alt="${song.title}"
                >

                <div class="queue-item-info">

                    <strong>
                        ${song.title}
                    </strong>

                    <span>
                        ${song.artist}
                    </span>

                </div>

                <span>
                    ${song.duration}
                </span>

            `;


            item.addEventListener(
                "click",
                () => {

                    loadSong(index);

                    playSong();

                }
            );


            queueList.appendChild(item);

        }
    );

}


/* =========================================
   SEARCH
========================================= */

searchInput.addEventListener(
    "input",
    () => {

        const query =
            searchInput.value
                .toLowerCase()
                .trim();


        clearSearch.style.display =
            query
                ? "block"
                : "none";


        filteredSongs = getVisibleSongs(query);


        renderSongs(
            filteredSongs
        );

    }
);


/* =========================================
   CLEAR SEARCH
========================================= */

clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        filteredSongs = getVisibleSongs("");

        clearSearch.style.display =
            "none";

        renderSongs();

    }
);


/* =========================================
   ALBUM CARDS
========================================= */

document
    .querySelectorAll(".album-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const index =
                    Number(
                        card.dataset.song
                    );

                loadSong(index);

                playSong();

            }
        );

    });


/* =========================================
   HERO BUTTON
========================================= */

heroPlay.addEventListener(
    "click",
    () => {

        loadSong(0);

        playSong();

    }
);

document
    .getElementById("heroFavorite")
    .addEventListener(
        "click",
        () => toggleFavorite(currentIndex)
    );

document
    .getElementById("seeAllSongs")
    .addEventListener(
        "click",
        () => document
            .querySelector(".songs-section")
            .scrollIntoView({ behavior: "smooth" })
    );


/* =========================================
   PLAYER CONTROLS
========================================= */

playBtn.addEventListener(
    "click",
    togglePlay
);


nextBtn.addEventListener(
    "click",
    nextSong
);


previousBtn.addEventListener(
    "click",
    previousSong
);


/* =========================================
   QUEUE PANEL
========================================= */

queueBtn.addEventListener(
    "click",
    () => {

        queuePanel.classList.add(
            "open"
        );

        overlay.classList.add(
            "show"
        );

    }
);


closeQueue.addEventListener(
    "click",
    () => {

        queuePanel.classList.remove(
            "open"
        );

        overlay.classList.remove(
            "show"
        );

    }
);


/* =========================================
   MOBILE SIDEBAR
========================================= */

menuBtn.addEventListener(
    "click",
    () => {

        sidebar.classList.toggle(
            "open"
        );

        overlay.classList.toggle(
            "show"
        );

    }
);


/* =========================================
   OVERLAY
========================================= */

overlay.addEventListener(
    "click",
    () => {

        queuePanel.classList.remove(
            "open"
        );

        sidebar.classList.remove(
            "open"
        );

        overlay.classList.remove(
            "show"
        );

    }
);


/* =========================================
   NAVIGATION
========================================= */

document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();

                activeView = link.dataset.view || "all";

                document
                    .querySelectorAll(
                        ".nav-link"
                    )
                    .forEach(item => {

                        item.classList.remove(
                            "active"
                        );

                    });


                link.classList.add(
                    "active"
                );

                filteredSongs = getVisibleSongs();

                renderSongs(filteredSongs);


                sidebar.classList.remove(
                    "open"
                );

                overlay.classList.remove(
                    "show"
                );

            }
        );

    });


/* =========================================
   KEYBOARD SHORTCUTS
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.target.tagName ===
            "INPUT"
        ) {

            return;

        }


        switch (event.code) {

            case "Space":

                event.preventDefault();

                togglePlay();

                break;


            case "ArrowRight":

                if (audio.duration) {

                    audio.currentTime =
                        Math.min(
                            audio.currentTime + 5,
                            audio.duration
                        );

                }

                break;


            case "ArrowLeft":

                if (audio.duration) {

                    audio.currentTime =
                        Math.max(
                            audio.currentTime - 5,
                            0
                        );

                }

                break;

        }

    }
);


/* =========================================
   INITIALIZE
========================================= */

loadSong(0);

renderSongs();

renderQueue();

updateVolumeIcon();

updatePlayButton();