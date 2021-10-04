import axios from "axios";
  
const URL ='https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary'

export const getPlacesData = async (type, sw, ne) =>{
    try{
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
            params: {
              bl_latitude: sw.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
              tr_latitude: ne.lat,
              
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': '81332606bcmsh7ca1aa4cba0f00cp1750fcjsnc7aa784ceed9',
            }
        });
        return data;
 } catch (error){
    console.log(error)

 }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
        params: { lat, lon: lng },
        headers: {
          'x-rapidapi-key': '81332606bcmsh7ca1aa4cba0f00cp1750fcjsnc7aa784ceed9',
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        },
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};