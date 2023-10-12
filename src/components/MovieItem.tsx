import {Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Link} from "expo-router";

type MovieItemPros = {
  item: any;
  index: number;
};

const MovieItem = ({ item: movie, index }: MovieItemPros) => {
  return (
    <Link
      href={`/movies/${movie.id}`} asChild
    >
      <Pressable
        style={styles.container}
      >
        <Text style={styles.index}>#{index + 1}</Text>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.subtitle}>{movie.tagline}</Text>
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  index: {
    fontSize: 40,
    color: 'gray',
    fontFamily: 'Courier New',
    marginRight: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gainsboro',
    marginVertical: 5,
  },
  subtitle: {
    color: 'gray',
  },
});

export default MovieItem;
