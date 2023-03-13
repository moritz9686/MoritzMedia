

import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
   
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': 'dc22d6c073mshf05b0832cea68dcp15316ajsn79666548a769',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
