<script>
import { store } from '../../../store';
import axios from 'axios';

export default{
  name: 'AlbumSearchTable',
  data(){
    return{
        store,
    }
  },
  methods:{
  },
}
</script>

<template>

    <div class="container">
        <div class="title">Album</div>
        <div v-for="album in store.albumsResults.slice(0,5)" class="album-card-box">
            <div class="image-box">
                <img src="../../../public/album.png" alt="">
            </div>
            <div class="text-box">
                <div class="album-name">{{ album.name }}</div>
                <div @click="$router.push(`/artist/${album.artist}`)" class="artist">{{ album.artist }}</div>
            </div>
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
    justify-content: start;
    overflow: scroll;
    flex-wrap: wrap;
    
    .title{
        font-size: 30px;
        font-weight: 600;
        width: 100%;
        padding: 30px 2.5% 5px;
        color: $p_txt;
    }

    .album-card-box{
        width: 20%;
        padding: 20px 20px 0;
        border-radius: $b_rad;

        &:hover{
            background-color: $dark_grey;
        }
        &:hover>.image-box>.fake-img{
            background-color: $black;

        }

        .image-box{
            width: 100%;
            padding: 5%;
            aspect-ratio: 1/1;
            display: flex;

            img{
                border-radius: $b_rad;
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
            
            .album-name{
                font-size: 20px;
                font-weight: 700;
                color: $p_txt;
            }
            .artist{
                padding-top: 5px;
                color: $s_txt;

                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>
