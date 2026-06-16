export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      authors: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          credentials: string | null
          id: string
          name: string
          title: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          credentials?: string | null
          id?: string
          name: string
          title?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          credentials?: string | null
          id?: string
          name?: string
          title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      contact_leads: {
        Row: {
          company: string | null
          created_at: string
          email: string
          id: string
          ip_hash: string | null
          message: string
          name: string
          phone: string | null
          service_interest: string | null
          source_path: string | null
          user_agent: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          id?: string
          ip_hash?: string | null
          message: string
          name: string
          phone?: string | null
          service_interest?: string | null
          source_path?: string | null
          user_agent?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          ip_hash?: string | null
          message?: string
          name?: string
          phone?: string | null
          service_interest?: string | null
          source_path?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
      offices: {
        Row: {
          address_line: string
          city: string
          created_at: string
          district: string | null
          email: string | null
          hours: string | null
          id: string
          is_primary: boolean
          lat: number | null
          lng: number | null
          name: string
          phone: string | null
          sort_order: number
          updated_at: string
          ward: string | null
        }
        Insert: {
          address_line: string
          city: string
          created_at?: string
          district?: string | null
          email?: string | null
          hours?: string | null
          id?: string
          is_primary?: boolean
          lat?: number | null
          lng?: number | null
          name: string
          phone?: string | null
          sort_order?: number
          updated_at?: string
          ward?: string | null
        }
        Update: {
          address_line?: string
          city?: string
          created_at?: string
          district?: string | null
          email?: string | null
          hours?: string | null
          id?: string
          is_primary?: boolean
          lat?: number | null
          lng?: number | null
          name?: string
          phone?: string | null
          sort_order?: number
          updated_at?: string
          ward?: string | null
        }
        Relationships: []
      }
      pages: {
        Row: {
          author_id: string | null
          body_html: string | null
          breadcrumb: Json | null
          created_at: string
          excerpt: string | null
          faq: Json | null
          h1: string | null
          meta_description: string | null
          noindex: boolean
          og_image: string | null
          published_at: string | null
          slug: string
          title: string
          type: Database["public"]["Enums"]["page_type"]
          updated_at: string
        }
        Insert: {
          author_id?: string | null
          body_html?: string | null
          breadcrumb?: Json | null
          created_at?: string
          excerpt?: string | null
          faq?: Json | null
          h1?: string | null
          meta_description?: string | null
          noindex?: boolean
          og_image?: string | null
          published_at?: string | null
          slug: string
          title: string
          type: Database["public"]["Enums"]["page_type"]
          updated_at?: string
        }
        Update: {
          author_id?: string | null
          body_html?: string | null
          breadcrumb?: Json | null
          created_at?: string
          excerpt?: string | null
          faq?: Json | null
          h1?: string | null
          meta_description?: string | null
          noindex?: boolean
          og_image?: string | null
          published_at?: string | null
          slug?: string
          title?: string
          type?: Database["public"]["Enums"]["page_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "pages_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "authors"
            referencedColumns: ["id"]
          },
        ]
      }
      redirects: {
        Row: {
          created_at: string
          from_path: string
          status: number
          to_path: string
        }
        Insert: {
          created_at?: string
          from_path: string
          status?: number
          to_path: string
        }
        Update: {
          created_at?: string
          from_path?: string
          status?: number
          to_path?: string
        }
        Relationships: []
      }
      translations: {
        Row: {
          created_at: string
          lang: string
          source: string
          source_hash: string
          translated: string
        }
        Insert: {
          created_at?: string
          lang: string
          source: string
          source_hash: string
          translated: string
        }
        Update: {
          created_at?: string
          lang?: string
          source?: string
          source_hash?: string
          translated?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      page_type: "service" | "province" | "article" | "static"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      page_type: ["service", "province", "article", "static"],
    },
  },
} as const
