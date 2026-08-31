import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabasePublishableKey) {
  throw new Error(
    "Missing Supabase environment variables. Check your .env.local file.",
  );
}

export const supabase = createClient(supabaseUrl, supabasePublishableKey);

// export const testSupabaseSecurity = async () => {
//   const { data, error } = await supabase.from("contact_inquiries").select("*");

//   console.log("SECURITY TEST DATA:", data);
//   console.log("SECURITY TEST ERROR:", error);
// };
