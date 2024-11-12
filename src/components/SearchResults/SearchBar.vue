<script>
import { store } from '../../../store';
import axios from 'axios';

export default{
  name: 'Navbar',
  data(){
    return{
        store,
        query:'o',
    }
  },
  methods:{
    searchArtist(){
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
    },
    searchTrack() {
    const url = `${store.apiUrl}?method=track.search&track=${this.query}&api_key=${store.apiKey}&format=json`;
    axios.get(url)
        .then(response => {
            store.tracksResults = response.data.results.trackmatches.track;
            console.log(response.data.results.trackmatches.track);
            console.log(store.tracksResults);
        })
        .catch(error => {
            console.error('Errore nella richiesta API:', error);
        });
    },
    searchAlbum() {
    const url = `${store.apiUrl}?method=album.search&album=${this.query}&api_key=${store.apiKey}&format=json`;
    axios.get(url)
        .then(response => {
            store.albumsResults = response.data.results.albummatches.album;
            console.log(response.data.results.albummatches.album);
            console.log('albums',store.albumsResults);
        })
        .catch(error => {
            console.error('Errore nella richiesta API:', error);
        });
    },

    updateQuery(){
        this.searchArtist();
        this.searchTrack();
        this.searchAlbum();
    },

  },
  mounted(){
    this.searchArtist();
    this.searchTrack();
    this.searchAlbum();
  }
}
</script>

<template>
  <div class="container">
    <input type="text" v-model="query" @input="updateQuery()">
  </div>
</template>

<style scoped lang="scss">
@use '../../../styles/partials/variables.scss' as *;

.container{
    margin: 0 auto;
    width: 80%;
    min-height: 50px;
    background-color: $black;
    padding: 10px;
    // flex
    display: flex;

    input{
      height: 40px;
      width: 30%;
      border-radius: $b_rad;
      padding: 5px 10px;
      border: none;
      background-color: $dark_grey;
      color: $p_txt;
    }
  }

</style>
