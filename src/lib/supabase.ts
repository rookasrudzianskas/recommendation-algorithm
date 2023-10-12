import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://gwhibbujdhnxjdbgpjvw.supabase.co";
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3aGliYnVqZGhueGpkYmdwanZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5NDg0MjgsImV4cCI6MjAxMjUyNDQyOH0.Z_A0actLC0MiX7UCNNvTW0bPLL3V3wCg3woDefDw-Hw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
