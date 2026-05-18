import apiClient from '../lib/axios';

export const getVideos = async ({ cursor } = {}) => {
  const params = cursor ? { cursor } : {};
  const response = await apiClient.get('/videos', { params });
  return response.data;
};

export const getFollowingVideos = async ({ cursor } = {}) => {
  const params = cursor ? { cursor } : {};
  const response = await apiClient.get('/videos/following', { params });
  return response.data;
};

export const getUserVideos = async (userId) => {
  const response = await apiClient.get(`/users/${userId}/videos`);
  return response.data;
};

export const getVideoById = async (videoId) => {
  const response = await apiClient.get(`/videos/${videoId}`);
  return response.data;
};

export const likeVideo = async (videoId) => {
  const response = await apiClient.post(`/videos/${videoId}/like`);
  return response.data;
};

export const unlikeVideo = async (videoId) => {
  const response = await apiClient.delete(`/videos/${videoId}/like`);
  return response.data;
};

export const getComments = async (videoId) => {
  const response = await apiClient.get(`/videos/${videoId}/comments`);
  return response.data;
};

export const addComment = async (videoId, content) => {
  const response = await apiClient.post(`/videos/${videoId}/comments`, { content });
  return response.data;
};