export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
      bl_lat: '34.6904',
      bl_lng: '25.1524',
      tr_lat: '42.51526',
      tr_lng: '45.39471',
      limit: '300'
    },
    headers: {
      'X-RapidAPI-Key': '3e56dc0d92mshe72babef2d7cee7p1c9cccjsn1be6ecd3c1a5',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };
  
  

  export const options2 = {
    
    headers: {
      'X-RapidAPI-Key': '3e56dc0d92mshe72babef2d7cee7p1c9cccjsn1be6ecd3c1a5',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };