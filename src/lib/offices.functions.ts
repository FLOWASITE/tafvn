import { createServerFn } from "@tanstack/react-start";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

export type Office = {
  id: string;
  name: string;
  address_line: string;
  ward: string | null;
  district: string | null;
  city: string;
  phone: string | null;
  email: string | null;
  hours: string | null;
  lat: number | null;
  lng: number | null;
  is_primary: boolean;
};

export const listOffices = createServerFn({ method: "GET" }).handler(async (): Promise<Office[]> => {
  const { data, error } = await supabaseAdmin
    .from("offices")
    .select("id,name,address_line,ward,district,city,phone,email,hours,lat,lng,is_primary")
    .order("sort_order", { ascending: true });
  if (error) {
    console.error("listOffices error", error);
    return [];
  }
  return (data ?? []) as Office[];
});
