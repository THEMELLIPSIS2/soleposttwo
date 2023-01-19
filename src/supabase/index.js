import { createClient } from '@supabase/supabase-js';

const PROJECT_URL = `https://enchfgsdvmmdvdjvdisy.supabase.co`;
const API_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuY2hmZ3Nkdm1tZHZkanZkaXN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM5OTE0MzUsImV4cCI6MTk4OTU2NzQzNX0.alYRlAdP2AZ2koH65lNlifJkzqzEAhuxRfE4Mhh0DmI`;

export default createClient(PROJECT_URL, API_KEY);
