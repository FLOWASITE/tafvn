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
  try {
    const { data, error } = await supabaseAdmin
      .from("offices")
      .select("id,name,address_line,ward,district,city,phone,email,hours,lat,lng,is_primary")
      .order("sort_order", { ascending: true });
    if (error) {
      console.error("listOffices error", error);
      return [];
    }
    return (data ?? []) as Office[];
  } catch (e) {
    // Supabase admin client không khả dụng (vd thiếu SUPABASE_SERVICE_ROLE_KEY khi chạy local).
    // Trả rỗng để site vẫn render thay vì sập toàn bộ.
    console.error("listOffices failed (Supabase admin unavailable)", e);
    return [];
  }
});
