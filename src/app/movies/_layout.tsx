import React from "react";
import {Stack} from "expo-router";

const MovieLayout = ({ }) => {
  return (
    <Stack>
      <Stack.Screen name="[id]" options={{ title: 'Movie Details' }} />
    </Stack>
  );
}

export default MovieLayout;
