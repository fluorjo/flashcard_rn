import {createClient} from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = 'https://lszxeydbftsfpoaeiwlv.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzenhleWRiZnRzZnBvYWVpd2x2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1NDg5ODYsImV4cCI6MjAzMzEyNDk4Nn0.clHjkXc_R6PXl4XPLN8olr3Em-7XQpvDI9TduvwuELQ';
const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;
