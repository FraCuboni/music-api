<script>
import { store } from '../../../store';
import axios from 'axios';

export default{
  name: 'TopArtists',
  data(){
    return{
        store,
        topArtistsData:[],
    }
  },
  methods:{
    getTopArtists() {
      const url = `${store.apiUrl}?method=chart.getTopArtists&api_key=${store.apiKey}&format=json&limit=5`;

      return axios.get(url)
        .then(response => {
          this.topArtistsData = response.data.artists.artist;
          console.log('topArtists',this.topArtistsData)
        })
        .catch(error => {
          console.error('Errore nel recupero dei dati degli artisti:', error);
        });
    },
  },
  mounted(){
    this.getTopArtists();
  }
}
</script>

<template>
    <div class="container">
        <div class="title">Più ascoltati</div>
        <div @click="$router.push(`/artist/${artist.name}`)" v-for="artist in topArtistsData" class="artist-card-box">
            <div class="image-box">
                <img src="../../../public/artist.png" alt="">

            </div>
            <div class="text-box">
                <div class="artist-name">{{ artist.name }}</div>
                <div class="artist-subtitle">Artista</div>
            </div>
        </div>
    </div>



<!-- ====== Cards Section End -->



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

    .artist-card-box{
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
}
</style>
