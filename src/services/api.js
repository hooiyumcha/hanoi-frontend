// src/services/api.js
import axios from 'axios';

// Set up the base URL for the Rails API
const api = axios.create({
  baseURL: 'http://localhost:3001/api/v1', // Update this URL as necessary
});

// API request functions
export const getAssets = () => api.get('/assets');
export const getAsset = (id) => api.get(`/assets/${id}`);
export const createAsset = (data) => api.post('/assets', data);
export const updateAsset = (id, data) => api.put(`/assets/${id}`, data);
export const deleteAsset = (id) => api.delete(`/assets/${id}`);

// src/services/api.js
export const updateAssetStatus = (id, completedStep) => 
  api.patch(`/assets/${id}/update_status`, { completed_step: completedStep });


export default api;
