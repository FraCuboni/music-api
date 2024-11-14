<script>
import axios from 'axios';
import { store } from '../../store';

export default{
  name: 'AlbumPage',
  components:{
  },
  data(){
    return{
        store,
    }
  },

  methods: {
  },

  mounted() {
  },

}
</script>

<template>
  <div class="container">

    <div class="jumbo">

        <div class="album-cover">
            <img src="../../public/album.png" alt="">
        </div>

        <div class="album-text">
            <div class="album-class">Album</div>
            <div class="album-title">In Rainbows</div>
            <div class="album-artist">
                <div class="artist-image">
                    <img src="../../public/artist.png" alt="">
                </div>
                <div class="artist-name">Radiohead</div>
            </div>
        </div>

    </div>

    <div class="song-list">
        <ul>
            <li>    
                <div class="number">1</div>
                <div class="title-artist">
                    <div class="song-title">Weird Fishes</div>
                    <div class="song-artist">Radiohead</div>
                </div>
                <div class="stream">12345678</div>
                <div class="time">00:00</div>
            </li>
        </ul>
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
        padding: 15px;

        // flex
        display: flex;
        gap: 15px;
        align-items: end;

        .album-cover{
            height: 100%;
            aspect-ratio: 1/1;
            border-radius: $b_rad;
            overflow: hidden;

            &:hover{
                scale: 1.02;
            }
        }

        .album-text{

            .album-class{
                font-size: 18px;
                color: $s_txt;
                padding-bottom: 20px;

            }

            .album-title{
                font-size: 90px;
                font-weight: 1000;
                color: $p_txt;
            }
            .album-artist{
                font-size: 18px;
                color: $p_txt;
                
                // flex
                display: flex;
                align-items: center;
                gap: 5px;

                .artist-image{
                    aspect-ratio: 1/1;
                    height: 30px;
                    border-radius: 50%;
                    overflow: hidden;

                }

                .artist-name{
                    &:hover{
                        text-decoration: underline;
                    }
                }

            }
        }

    }

    .song-list{
        background-color: $black;
        padding: 15px;
        padding-top: 50px;

        ul{
            li{
                height: 70px;
                border-radius: $b_rad;
                padding:0 30px;
                
                // flex
                display: flex;
                align-items: center;

                &:hover{
                    background-color: $dark_grey;
                }
                .number{
                    width: 2%;
                    color: $s_txt;
                }
                .title-artist{
                    width: 68%;
                    padding-left: 15px;
                    .song-title{
                        color: $p_txt;
                        font-weight: 600;
                        font-size: 18px;
                        padding-bottom: 2px;
                    }
                    .song-artist{
                        padding-top: 2px;
                        color: $s_txt;

                    }
                }
                .stream{
                    width: 20%;
                    color: $s_txt;

                }
                .time{
                    width: 10%;
                    color: $s_txt;
                    text-align: right;

                }
            }
        }
    }
}
</style>
