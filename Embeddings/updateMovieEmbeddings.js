import { supabase } from './supabase.js';
import { generateEmbedding } from './generateEmbedding.js';

const getMovies = () => {
  return supabase.from('movies').select('*').is('embedding', null).range(0, 3);
};

const addMovieEmbedding = async (movie) => {
  const embedding = await generateEmbedding(movie.overview);
  await supabase
    .from("movies")
    .update({ embedding })
    .eq("id",
      movie.id
    );
  console.log("Generated embeddings for movie: ", movie.id);
};

const processAllMovies = async () => {
  const { data: movies } = await getMovies();

  if (!movies?.length) {
    return;
  }
  await Promise.all(movies.map((movie) => addMovieEmbedding(movie)));

  // Recursively call the function until all movies have been processed
  processAllMovies();
};

processAllMovies();
