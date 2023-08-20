/* eslint-disable consistent-return */
import axios from 'axios';
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData = async (sw, ne) => {
    try {
        const {data: {data}} = await axios.get(URL, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': 'a1fd1a9370msheb4abd46e0e8badp13a1f0jsn03727d4ed19d',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });

        return data;

    } catch (error) {
        console.error(error);
    }
}