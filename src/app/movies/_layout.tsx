import React from "react";
import {Link, Stack} from "expo-router";
import {Text} from "react-native";
import {Ionicons} from "@expo/vector-icons";

const MovieLayout = ({ }) => {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          title: 'Movie Details',
          headerLeft: () => (
            <Link href={'/'}>
              <Ionicons name="md-arrow-back-circle-outline" size={24} color="white" />
            </Link>
          )
      }} />
    </Stack>
  );
}

export default MovieLayout;
