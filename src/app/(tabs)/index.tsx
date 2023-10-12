import {View, Text} from 'react-native';
import {StatusBar} from "expo-status-bar";
import {useEffect, useState} from "react";
import {supabase} from "../../lib/supabase";
export default function TabOneScreen() {
  const [movies, setMovies] = useState<any>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data: movies } = await supabase
        .from("movies")
        .select("*")
        // .range(0, 25);
      setMovies(movies);
    };
    fetchMovies();
  }, []);

  console.log(JSON.stringify(movies));

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Connect to Supabase</Text>
      <StatusBar style="auto" />
    </View>
  );
}
