import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {StatusBar} from "expo-status-bar";
import {useEffect, useState} from "react";
import {supabase} from "../../lib/supabase";
import MovieItem from "../../components/MovieItem";
export default function TabOneScreen() {
  const [movies, setMovies] = useState<any>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data: movies } = await supabase
        .from("movies")
        .select("*")
        .range(0, 25);
      setMovies(movies);
    };
    fetchMovies();
  }, []);

  if(movies.length <= 0) {
    return (
      <View className="h-screen flex items-center justify-center">
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <View className="flex-1 bg-black">
      <FlatList
        data={movies}
        renderItem={MovieItem}
      />
      <StatusBar style="auto" />
    </View>
  );
}
