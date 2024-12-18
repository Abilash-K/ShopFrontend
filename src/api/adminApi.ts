import axios from 'axios';

const API_URL = '/api/admin';

export const addProduct = async (product: {
  name: string;
  description: string;
  price: number;
  stock: number;
}, token: string) => {
  return axios.post(`${API_URL}/products`, product, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateProduct = async (productId: string, updates: object, token: string) => {
  return axios.put(`${API_URL}/products/${productId}`, updates, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteProduct = async (productId: string, token: string) => {
  return axios.delete(`${API_URL}/products/${productId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const fetchOrders = async (token: string) => {
  return axios.get(`${API_URL}/orders`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
