import { useState, /*useEffect*/ } from "react";
// import axios from 'axios';
import {happy_playlist, 
        sad_playlist, 
        hype_playlist, 
        chill_playlist, 
        sentimental_playlist, 
        jazz_playlist, 
        funky_playlist, 
        angry_playlist, 
        suspenseful_playlist, 
        classical_playlist} from './playlists';

const App = () => {
  // const CLIENT_ID = "e47e6d57532349319c956a3a025016cd"
  // const REDIRECT_URI = "http://localhost:3000"
  // const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  // const RESPONSE_TYPE = "token"
 
  // const [token, setToken] = useState("")

  // const playlist_id = "37i9dQZF1EIYYwwtw4fWyK"
  // const PLAYLISTS_ENDPOINT = `https://api.spotify.com/v1/playlists/`
  
  const EMBED_ENDPOINT = "https://open.spotify.com/embed/track/"
  const [playlist, setPlaylist] = useState([])
  const [songID, setSongID] = useState("")

  const moodList = {Happy: happy_playlist, 
                    Sad: sad_playlist, 
                    Hype: hype_playlist, 
                    Chill: chill_playlist, 
                    Sentimental: sentimental_playlist, 
                    Jazz: jazz_playlist, 
                    Classical: classical_playlist, 
                    Funky: funky_playlist,
                    Angry: angry_playlist,
                    Suspenseful: suspenseful_playlist}
  const [mood, setMood] = useState("")
  const [page, setPage] = useState(1)

  // login stuff
  // useEffect(() => {
  //   const hash = window.location.hash
  //   let token = window.localStorage.getItem("token")

  //   if (!token && hash) {
  //     token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

  //     window.location.hash = ""
  //     window.localStorage.setItem("token", token)
  //   }

  //   setToken(token)

  // }, [])

  // const logout = () => {
  //   setToken("")
  //   window.localStorage.removeItem("token")
  // }

  // changing moods/pages
  const updateMood = (newMood) => {
    setMood(newMood)
    setPage(2)
    setPlaylist(moodList[newMood]);
    setSongID(moodList[newMood][Math.floor(Math.random() * moodList[newMood].length)].track.id)
  };

  const resetMood = () => {
    setMood("")
    setPage(1)
    setPlaylist([])
    setSongID("")
  };

  const resetSong = () => {
    setSongID(playlist[Math.floor(Math.random() * playlist.length)].track.id)
  }

  const PageOne = ({moodList, updateMood }) => {
    return (
      <div>
        <div class="header">
          <button onClick={() => setPage(1)} 
                  >Vibesync
                  </button>
        </div>
        

        <hr class="h-px mb-2 bg-gray-200 border-0 dark:bg-gray-500"></hr>

        <div class="grid grid-rows-5 grid-cols-2 gap-4">

          <div class="column-5 mood-1 rounded-3xl hover:brightness-90">
            <h2 class="image-text">
              <button class="hover:brightness-90"
                      onClick={() => updateMood("Happy")}>Happy</button>
            </h2>
          </div>

          <div class="column-5 mood-2 rounded-3xl">
            <h2 class="image-text">
              <button onClick={() => updateMood("Sad")}>Sad
                    </button>
            </h2>
          </div>

          <div class="column-5 mood-3 rounded-3xl">
            <h2 class="image-text">
              <button onClick={() => updateMood("Hype")}>Hype
                    </button>
            </h2>
          </div>

          <div class="column-5 mood-4 rounded-3xl">
            <h2 class="image-text">
              <button onClick={() => updateMood("Chill")}>Chill
                    </button>
            </h2>
          </div>

          <div class="column-5 mood-5 rounded-3xl">
            <h2 class="image-text">
              <button onClick={() => updateMood("Sentimental")}>Sentimental
                    </button>
            </h2>
          </div>

          <div class="column-5 mood-6 rounded-3xl">
            <h2 class="image-text">
              <button onClick={() => updateMood("Jazz")}>Jazz
                    </button>
            </h2>
          </div>

          <div class="column-5 mood-7 rounded-3xl">
            <h2 class="image-text">
              <button onClick={() => updateMood("Classical")}>Classical
                    </button>
            </h2>
          </div>

          <div class="column-5 mood-8 rounded-3xl">
            <h2 class="image-text">
              <button onClick={() => updateMood("Funky")}>Funky
                    </button>
            </h2>
          </div>

          <div class="column-5 mood-9 rounded-3xl">
            <h2 class="image-text">
              <button onClick={() => updateMood("Angry")}>Angry
                    </button>
            </h2>
          </div>

          <div class="column-5 mood-10 rounded-3xl">
            <h2 class="image-text">
              <button onClick={() => updateMood("Suspenseful")}>Suspenseful
                    </button>
            </h2>
          </div>

        </div>
      </div>

     //<ul>
        //{Object.keys(moodList).map( (mood) => <li key={mood}><button onClick={() => updateMood(mood)}>{mood}</button></li> )}
      //</ul>  
    );
  };

  const PageTwo = ({ mood, resetMood }) => {
    return (
      <div>
        <div class="header">
          <button onClick={() => setPage(1)} 
                  >Vibesync
                  </button>
        </div>

        <hr class="h-px bg-gray-200 border-0 dark:bg-gray-500"></hr>

        <h3 class="text-center my-2 font-light">{mood}</h3>
        <iframe 
          title="embed" 
          src={EMBED_ENDPOINT + songID} 
          width="100%" 
          height="450px" 
          frameBorder="0" 
          allowFullScreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy">
          </iframe>

        <div class="grid grid-rows-1 grid-cols-2 gap-5">

          <div class="button rounded-3xl">
            <h2 class="text-center mb-5 text-[#543361]">
              <button onClick={resetMood}>Back</button>
            </h2>
          </div>

           <div class="button rounded-3xl">
            <h2 class="text-center mb-5 text-[#543361]">
              <button onClick={resetSong}>New Song</button>
            </h2>
          </div>

        </div>
        
      </div>
    )
  }

  
  // const getPlaylists = async (playlist_id) => {
  //   const {data} = await axios.get(PLAYLISTS_ENDPOINT + playlist_id, {
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     }//,
  //     // params: {
  //     //   limit: 100,
  //     //   offset: 50
  //     // }
  //   })
  //   setPlaylist(data.tracks.items)
  //   console.log(data.tracks.items)
  // }


return (
  <div class="bg-[#f8f0fb] min-h-screen">
    
    {page === 1 ?
      <PageOne moodList={moodList} updateMood={updateMood}/>
    : <PageTwo mood={mood} resetMood={resetMood}/>}
  </div>  
  );
};

export default App;