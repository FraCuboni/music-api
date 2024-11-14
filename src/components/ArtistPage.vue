<script>
import axios from 'axios';
import { store } from '../../store';

export default{
  name: 'ArtistPage',
  components:{
  },
  data(){
    return{
        store,
    }
  },

  methods: {
    async fetchArtistData() {
      try {
        const artistName = this.$route.params.name;
        const url = `${store.apiUrl}?method=artist.getinfo&artist=${artistName}&api_key=${store.apiKey}&format=json`;
        const response = await axios.get(url);
        store.artistData = response.data.artist;
        console.log('artistData',store.artistData);
      } catch (error) {
        console.error("Errore nel recupero dei dati dell'artista:", error);
      }
    },

    async fetchTopTracks() {
        try {
            const artistName = this.$route.params.name;
            const url = `${store.apiUrl}?method=artist.getTopTracks&artist=${artistName}&api_key=${store.apiKey}&format=json&limit=5`; // Limita a 5 brani
            const response = await axios.get(url);
            store.artistTopTracks = response.data.toptracks.track;
            console.log('topTracks',store.artistTopTracks);
        } catch (error) {
            console.error("Errore nel recupero delle tracce popolari:", error);
        }
    },

    async fetchTopAlbums() {
        try {
            const artistName = this.$route.params.name;
            const url = `${store.apiUrl}?method=artist.getTopAlbums&artist=${artistName}&api_key=${store.apiKey}&format=json&limit=6`; // Limita a 5 album
            const response = await axios.get(url);
            store.artistTopAlbums = response.data.topalbums.album;
            console.log('topAlbums',store.artistTopAlbums);
        } catch (error) {
            console.error("Errore nel recupero degli album popolari:", error);
        }
    },
  },

  mounted() {
    this.fetchArtistData();
    this.fetchTopTracks();
    this.fetchTopAlbums();
  },

}
</script>

<template>
  <div class="container">

    <div class="jumbo">
        <div class="artist-verified"><i class="fa-solid fa-certificate"></i>   Artista verificato</div>
        <div class="artist-info">
            <div class="artist-name">{{ store.artistData.name }}</div>
            <div class="artist-listeners">X ascoltatori mensili</div>
        </div>
    </div>

    <div class="popular-songs">
        <div class="title">Popolari</div>
        <ul class="songs-box">

            <li v-for="track in store.artistTopTracks" class="song">
                <div class="main-info">
                    <div class="number"></div>
                    <div class="song-img">
                        <img src="../../../public/song.png" alt="">
                    </div>
                    <div class="song-text">
                        <div class="song-title">{{track.name}}</div>
                        <!-- <div class="song-artist"></div> -->
                    </div>
                </div>

                <div class="listeners">{{ track.playcount }}</div>
                <div class="time">00:00</div>
            </li>
            

        </ul>
    </div>

    <div class="albums">
        <div class="title">Album</div>
        <div v-for="album in store.artistTopAlbums" class="album-box">
            <div class="image-box">
                <img src="../../../public/album.png" alt="">
            </div>
            <div class="text-box">
                <div class="album-name">{{album.name}}</div>
                <div class="album-playcount">{{album.playcount}}</div>
            </div>
        </div>
    </div>


    </div>
</template>

<style scoped lang="scss">
@use '../../styles/partials/variables.scss' as *;
.container{
    background-color: $black;
    width: 80%;
    margin: 0 auto;
  
    .jumbo{
    height: 300px;
    width: 100%;
    background-color: $dark_grey;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .artist-verified{
        color: $s_txt;
        padding: 30px;

        i{
            color: $green;
        }
    }
    .artist-name{
        color: $p_txt;
        font-size: 60px;
        font-weight: 700;
        padding-left: 30px;
    }
    .artist-listeners{
        color: $s_txt;
        padding: 10px 30px 30px;
    }
    }

    .popular-songs{
        padding: 30px;

        .title{
            color: $p_txt;
            font-size: 30px;
            padding-bottom: 30px;
            font-weight: 600;
        }

        .songs-box{
            height: 300px;
            width: 100%;
            border-radius: $b_rad;

            // flex
            display: flex;
            flex-direction: column;

            .song{
                height: 20%;
                max-height: 300px;
                width: 100%;
                padding: 10px;
                border-radius: $b_rad;
                // flex
                display: flex;

                &:hover{
                    background-color: $dark_grey;

                }

                .main-info{
                    width: 70%;

                    // flex
                    display: flex;
                    justify-content: start;
                    align-items: center;

                    .number{
                        padding-right: 15px;
                        color: $s_txt;
                    }

                    .song-img{
                        height: 100%;
                        aspect-ratio: 1/1;
                        background-color: $dark_grey;
                        border-radius: 3px;
                        overflow: hidden;
                    }
                    .song-text{
                        padding: 15px;
                        // flex
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        gap: 2px;

                        .song-title{
                            font-size: 18px;
                            color: $p_txt;
                        }
                    }
                }

                .listeners{
                    width: 20%;
                    color: $s_txt;

                    // flex
                    display: flex;
                    justify-content: start;
                    align-items: center;
                }

                .time{
                    width: 10%;
                    color: $s_txt;

                    // flex
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

            }
        }        
    }

    .albums{
        padding: 30px;
        display: flex;
        flex-wrap: wrap;
        .title{
            color: $p_txt;
            font-size: 30px;
            padding-bottom: 30px;
            font-weight: 600;
            width: 100%;
        }

        .album-box{
            width: calc(100% / 6);
            height: 250px;
            padding: 10px;
            border-radius: $b_rad;
            
            &:hover{
                background-color: $dark_grey;

            }

            .image-box{
                border-radius: $b_rad;
                overflow: hidden;
                max-width: 100%;
                aspect-ratio: 1/1;
            }
            .text-box{
                padding-top: 10px;
                .album-name{
                    color: $p_txt;

                }
                .album-playcount{
                    color: $s_txt;
                }
            }


        }
    }
}
</style>
