<script>
import { store } from '../../../store';
import axios from 'axios';

export default{
  name: 'MainArtist',
  data(){
    return{
        store,
    }
  },
  methods:{
    goToArtistPage(artistName) {
      this.$router.push({ 
        path: `/artist/${artistName}` 
      });
    },
  }
}
</script>

<template>
    <div class="container">
        <div class="titles">
            <div class="most-relevant">Risultato più rilevante</div>
            <div>Brani</div>
        </div>

        <!-- artist card -->
        <div v-for="artist in store.artistsResults.slice(0,1)" :key="artist.name"  @click="$router.push(`/artist/${artist.name}`)" class="artist-card">

            <div class="image-box">
                <img src="../../../public/artist.png" alt="">
            </div>
            <div class="text-box">
                <div class="artist-name">{{artist.name}}</div>
                <div class="artist-subtitle">Artista</div>
            </div>

        </div>


        <!-- song list -->
        <div class="songs-list">
            <ul class="songs-box">

                <li v-for="song in store.tracksResults.slice(0,4)" class="song">
                    <div class="song-img">
                        <img src="../../../public/song.png" alt="">
                    </div>
                    <div class="song-text">
                        <div class="song-title">{{song.name}}</div>
                        <div class="song-artist">{{song.artist}}</div>
                    </div>
                </li>

            </ul>
        </div>
    </div>



</template>

<style scoped lang="scss">
@use '../../../styles/partials/variables.scss' as *;

.container{
    margin: 0 auto;
    width: 80%;
    min-height: 200px;
    background-color: $black;
    // flex
    display: flex;
    flex-wrap: wrap;

    .titles{
        font-size: 30px;
        font-weight: 600;
        width: 100%;
        padding: 30px 2.5% 5px;
        color: $p_txt;

        // flex
        display: flex;

        .most-relevant{
            width: 40%;
        }
    }

    .artist-card{
        height: 100%;
        width: calc(40% - 20px);
        border-radius: $b_rad;
        max-height: 342px;
        margin-right: 20px;

        &:hover{
            background-color: $dark_grey;

        }
        &:hover>.image-box>.fake-img{
            background-color: $black;

        }

        .image-box{
            width: 50%;
            padding: 5%;
            aspect-ratio: 1/1;
            display: flex;

            img{
                border-radius: 50%;
            }

            .fake-img{
                background-color: $dark_grey;
                height: 100%;
                width: 100%;
                border-radius: 50%;
            }
        }
        .text-box{
            padding: 5%;
            
            .artist-name{
                font-size: 20px;
                font-weight: 700;
                color: $p_txt;
            }
            .artist-subtitle{
                padding-top: 5px;
                color: $s_txt;
            }
        }
    }
    .songs-list{
        width: 60%;
        max-height: 342px;


        .songs-box{
            height: 100%;
            width: 100%;
            border-radius: $b_rad;

            // flex
            display: flex;
            flex-direction: column;

            .song{
                height: 25%;
                max-height: 300px;
                width: 100%;
                padding: 10px;
                border-radius: $b_rad;

                // flex
                display: flex;
                gap: 10px;

                .song-img{
                    height: 100%;
                    aspect-ratio: 1/1;
                    background-color: $dark_grey;
                    border-radius: $b_rad;
                    overflow: hidden;
                }
                .song-text{
                    // flex
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 2px;

                    .song-title{
                        font-size: 18px;
                        color: $p_txt;
                    }
                    .song-artist{
                        font-size: 16px;
                        color: $s_txt;

                        &:hover{
                            text-decoration: underline;
                        }
                    }
                }


                &:hover{
                    background-color: $dark_grey;

                }

                &:hover>.song-img{
                    background-color: $black;

                }
            }
        }
    }
}
</style>
