import PocketBase from 'pocketbase';


const pb = new PocketBase('https://geppetto.pockethost.io');
// const pb = new PocketBase(import.meta.env.VITE_PB_URL);

export default pb;
