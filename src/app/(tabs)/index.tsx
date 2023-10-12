import {View, Text, FlatList, ActivityIndicator, TextInput, Button, StyleSheet} from 'react-native';
import {StatusBar} from "expo-status-bar";
import React, {useEffect, useState} from "react";
import {supabase} from "../../lib/supabase";
import MovieItem from "../../components/MovieItem";

export default function TabOneScreen() {
  const [movies, setMovies] = useState<any>([]);
  const [query, setQuery] = useState('');

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

  const onPress = async () => {
    const { data } = await supabase.functions.invoke('embed', {
      body: { input: query },
    });

    const { data: movies } = await supabase.rpc('match_movies', {
      query_embedding: data.embedding, // Pass the embedding you want to compare
      match_threshold: 0.78, // Choose an appropriate threshold for your data
      match_count: 20, // Choose the number of matches
    });
    setMovies(movies);

    setQuery('');
  }

  if(movies.length <= 0) {
    return (
      <View className="h-screen flex items-center justify-center">
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <View className="flex-1 pt-16 bg-black">
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          placeholder="AI: Search for movies..."
          placeholderTextColor={'gray'}
          style={styles.input}
          value={query}
          onChangeText={setQuery}
        />
        <Button title="Search" onPress={onPress} />
      </View>

      <FlatList
        data={movies}
        renderItem={MovieItem}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    color: 'gainsboro',
  },
});
