import { createClient } from "@supabase/supabase-js";
import { Database } from "../database.types";

const supabaseUrl = 'https://wypohljkstfekeokizaf.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if(!supabaseKey) throw new Error("supabaseKey가 준비되지 않았습니다");

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;