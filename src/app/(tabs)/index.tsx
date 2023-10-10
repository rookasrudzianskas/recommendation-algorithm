import {View, Text} from 'react-native';
import {StatusBar} from "expo-status-bar";
export default function TabOneScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Connect to Supabase</Text>
      <StatusBar style="auto" />
    </View>
  );
}
