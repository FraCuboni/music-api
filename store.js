import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://ws.audioscrobbler.com/2.0/',
    apiKey: '4b0aee850c2ef9fe6b5e95e6c405afde',
    apiSecret: '709bf17fa43130f1d665e60177f3ac4d',
    query: '',

    // searchpage
    artistsResults: [],
    tracksResults: [],
    albumsResults: [],

    // 
    artistData: [],
    artistTopTracks: [],
    artistTopAlbums: [],
})