// --- test_connection.cjs ---

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ ERROR: Secrets are missing. Please check Tools > Secrets.");
} else {
  console.log("✅ Secrets found. Creating Supabase client...");
  const supabase = createClient(supabaseUrl, supabaseKey);

  async function checkConnection() {
    console.log("Attempting to read from 'characters' table...");
    const { data, error } = await supabase.from('characters').select('id').limit(1);

    if (error) {
      console.error("\n❌ CONNECTION FAILED. Supabase error message:");
      console.error(error.message);
    } else {
      console.log("\n✅✅✅ SUCCESS! Your code is connected to your Supabase database.");
      console.log("Test read was successful:", data);
    }
  }
  checkConnection();
}
