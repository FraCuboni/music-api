<script>
import { store } from '../../../store';
import axios from 'axios';

export default{
  name: 'Navbar',
  data(){
    return{
        store,
        query:'Tyler',
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
        <input type="text" v-model="query" @input="updateQuery()">
</template>

<style scoped lang="scss">
// @use '../../styles/partials/variables.scss' as *;

</style>
