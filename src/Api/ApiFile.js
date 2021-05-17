import axios from 'axios';

// Contants
import {URL} from '../utils/contants';

export const getData = (res, err) => {
  axios
    .get(
      URL +
        '/3/movie/top_rated?api_key=bf091621962bdf5c30339e874a2a0c1a&language=en-US&page=1',
    )
    .then(function (response) {
      // handle success
      if (response.status === 200) {
        res(response);
      }
    })
    .catch(function (error) {
      // handle error
      err(error);
    });
};
