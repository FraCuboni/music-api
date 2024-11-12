<script>
import { store } from '../../../store';
import axios from 'axios';

export default{
  name: 'MainArtist',
  data(){
    return{
        store,
    }
  }
}
</script>

<template>
        <input type="text" v-model="query" @input="updateQuery()">
    <div class="container">
        <div class="artist-card">
            <div class="image-box">
                <div class="fake-img"></div>
            </div>
            <div class="text-box">
                <div class="artist-name">Name</div>
                <div class="artist-subtitle">LISTENERS</div>
            </div>
        </div>
        <!-- song list -->
        <div class="songs-list">
            <ul class="songs-box">

                <li class="song">
                    <div class="song-img">
                        <div class="fake-img"></div>
                    </div>
                    <div class="song-text">
                        <div class="song-title">Song Name</div>
                        <div class="song-artist">Artist name</div>
                    </div>
                </li>

                <li class="song">
                    <div class="song-img">
                        <div class="fake-img"></div>
                    </div>
                    <div class="song-text">
                        <div class="song-title">Song Name</div>
                        <div class="song-artist">Artist name</div>
                    </div>
                </li>

                <li class="song">
                    <div class="song-img">
                        <div class="fake-img"></div>
                    </div>
                    <div class="song-text">
                        <div class="song-title">Song Name</div>
                        <div class="song-artist">Artist name</div>
                    </div>
                </li>

                <li class="song">
                    <div class="song-img">
                        <div class="fake-img"></div>
                    </div>
                    <div class="song-text">
                        <div class="song-title">Song Name</div>
                        <div class="song-artist">Artist name</div>
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

    .artist-card{
        height: 100%;
        width: 40%;
        border-radius: $b_rad;
        max-height: 342px;

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
