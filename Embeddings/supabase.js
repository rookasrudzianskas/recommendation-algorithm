import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://gwhibbujdhnxjdbgpjvw.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3aGliYnVqZGhueGpkYmdwanZ3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5Njk0ODQyOCwiZXhwIjoyMDEyNTI0NDI4fQ.BFcemACgeweJ77xLeD5dfHDdKZjM5adN8svXuJ4VJms"
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3aGliYnVqZGhueGpkYmdwanZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5NDg0MjgsImV4cCI6MjAxMjUyNDQyOH0.Z_A0actLC0MiX7UCNNvTW0bPLL3V3wCg3woDefDw-Hw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);