<script>
import { store } from '../../store';
import axios from 'axios';

export default{
  name: 'Table',
  data(){
    return{
        store,
        query:'',
        artists:[],
    }
  },
  methods:{
    searchArtist(query){
        query='Beatle';
        const url = `${store.apiUrl}?method=artist.search&artist=${query}&api_key=${store.apiKey}&format=json`;
        axios.get(url)
            .then(response => {
                this.artists = response.data.results.artistmatches.artist;
                console.log(response.data.results.artistmatches.artist);
                console.log(this.artists);
            })
            .catch(error => {
                console.error('Errore nella richiesta API:', error);
            });
    }

  },
  mounted(){
    this.searchArtist();
  },
}
</script>

<template>
    <h1>API INFO</h1>
    <ul>
        <li>Url: {{ store.apiUrl }}</li>
        <li>Key: {{ store.apiKey }}</li>
        <li>Secret: {{ store.apiSecret }}</li>
    </ul>


<!-- ====== Cards Section End -->



</template>

<style scoped lang="scss">
</style>
