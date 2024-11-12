<script>
import { store } from '../../../store';
import axios from 'axios';

export default{
  name: 'MainArtist',
  data(){
    return{
        store,
        query:'Gorillaz',
    }
  },
  methods:{
    searchArtist(){
        if(this.query){
        const url = `${store.apiUrl}?method=artist.search&artist=${this.query}&api_key=${store.apiKey}&format=json`;
        axios.get(url)
            .then(response => {
                store.artistsResults = response.data.results.artistmatches.artist;
                console.log(response.data.results.artistmatches.artist);
                console.log(store.artistsResults);
            })
            .catch(error => {
                console.error('Errore nella richiesta API:', error);
            });
        }else{
            store.artistsResults=[];
        }
    },

    updateQuery(){
        this.searchArtist();
        console.log(this.query)
    },

  },
  mounted(){
    this.searchArtist();
  }
}
</script>

<template>
    <h1>API INFO</h1>
    <ul>
        <li>Url: {{ store.apiUrl }}</li>
        <li>Key: {{ store.apiKey }}</li>
        <li>Secret: {{ store.apiSecret }}</li>
        <input type="text" v-model="query" @input="updateQuery()">
    </ul>
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
        <div class="songs-list">asdasd</div>
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

    .artist-card{
        height: 100%;
        width: 40%;
        border-radius: $b_rad;

        &:hover{
            background-color: $light_grey;
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
        background-color: yellow;
        height: 100%;
        width: 60%;
    }
}
</style>
