const api = 'http://192.168.100.116:3002/api/treinafood/products';
export const ApiService = {
  get(endpoint) {
    return fetch(`${api}${endpoint}`).then(response => response.json());
  },
  post(endpoint, data) {
    return fetch(`${api}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => response.json());
  },
};
