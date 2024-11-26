import axios from 'axios';

export const getWeather = async url => {
  try {
    let res = await axios.get (url);
    return {success: true, data: res.data};
  } catch (e) {
    console.log (e);
    return {
      success: false,
      data: null,
    };
  }
};
