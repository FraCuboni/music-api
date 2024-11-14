<script>
export default{
  name: 'ArtistPage',
  components:{
  },
  data(){
    return{

    }
  },
  methods:{

  },
  mounted(){

  },
}
</script>

<template>
  <div class="container">

    <div class="jumbo">
        <div class="artist-verified"><i class="fa-solid fa-certificate"></i>   Artista verificato</div>
        <div class="artist-info">
            <div class="artist-name">Radiohead</div>
            <div class="artist-listeners">390938909 ascoltatori mensili</div>
        </div>
    </div>

    <div class="popular-songs">
        <div class="title">Popolari</div>
        <ul class="songs-box">

            <li  class="song">
                <div class="main-info">
                    <div class="number">1</div>
                    <div class="song-img">
                        <img src="../../../public/song.png" alt="">
                    </div>
                    <div class="song-text">
                        <div class="song-title">Everything in it's right place</div>
                        <!-- <div class="song-artist"></div> -->
                    </div>
                </div>

                <div class="listeners">1234567</div>
                <div class="time">12:04</div>
            </li>
            <li  class="song">
                <div class="main-info">
                    <div class="number">1</div>
                    <div class="song-img">
                        <img src="../../../public/song.png" alt="">
                    </div>
                    <div class="song-text">
                        <div class="song-title">Everything in it's right place</div>
                        <!-- <div class="song-artist"></div> -->
                    </div>
                </div>

                <div class="listeners">1234567</div>
                <div class="time">12:04</div>
            </li>
            <li  class="song">
                <div class="main-info">
                    <div class="number">1</div>
                    <div class="song-img">
                        <img src="../../../public/song.png" alt="">
                    </div>
                    <div class="song-text">
                        <div class="song-title">Everything in it's right place</div>
                        <!-- <div class="song-artist"></div> -->
                    </div>
                </div>

                <div class="listeners">1234567</div>
                <div class="time">12:04</div>
            </li>
            <li  class="song">
                <div class="main-info">
                    <div class="number">1</div>
                    <div class="song-img">
                        <img src="../../../public/song.png" alt="">
                    </div>
                    <div class="song-text">
                        <div class="song-title">Everything in it's right place</div>
                        <!-- <div class="song-artist"></div> -->
                    </div>
                </div>

                <div class="listeners">1234567</div>
                <div class="time">12:04</div>
            </li>
            <li  class="song">
                <div class="main-info">
                    <div class="number">1</div>
                    <div class="song-img">
                        <img src="../../../public/song.png" alt="">
                    </div>
                    <div class="song-text">
                        <div class="song-title">Everything in it's right place</div>
                        <!-- <div class="song-artist"></div> -->
                    </div>
                </div>

                <div class="listeners">1234567</div>
                <div class="time">12:04</div>
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

                .main-info{
                    width: 60%;

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
                    width: 30%;
                    color: $s_txt;

                    // flex
                    display: flex;
                    justify-content: center;
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
}
</style>
