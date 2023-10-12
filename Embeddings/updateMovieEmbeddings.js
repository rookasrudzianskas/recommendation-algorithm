import { supabase } from './supabase.js';
import { generateEmbedding } from './generateEmbedding.js';

const getMovies = () => {
  return supabase.from('movies').select('*').is('embedding', null);
};

