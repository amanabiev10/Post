import axios from 'axios';

// Definiere den API-Endpoint deines Django-Backends
const API_URL = 'https://www.zeniton.de:8000/api/posts/';

// Typ für einen Post
export interface Post {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

// Funktion, um alle Posts abzurufen
export const getPosts = async (): Promise<Post[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};
