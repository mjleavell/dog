import axios from 'axios';

const getDogs = (() => axios.get('https://random-dogs-api.herokuapp.com/dogs/23'));

// when using export default and only exporting 1 function
// dont use brackets
export default getDogs;
