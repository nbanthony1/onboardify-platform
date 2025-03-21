export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      dashboard_data: {
        Row: {
          data: Json
          id: number
          timestamp: string
        }
        Insert: {
          data: Json
          id?: number
          timestamp?: string
        }
        Update: {
          data?: Json
          id?: number
          timestamp?: string
        }
        Relationships: []
      }
      module_progress: {
        Row: {
          completed_at: string | null
          course_id: number
          created_at: string | null
          id: string
          module_title: string
          user_id: string | null
        }
        Insert: {
          completed_at?: string | null
          course_id: number
          created_at?: string | null
          id?: string
          module_title: string
          user_id?: string | null
        }
        Update: {
          completed_at?: string | null
          course_id?: number
          created_at?: string | null
          id?: string
          module_title?: string
          user_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          department: string | null
          first_name: string | null
          id: string
          last_name: string | null
          role: Database["public"]["Enums"]["app_role"] | null
        }
        Insert: {
          department?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          role?: Database["public"]["Enums"]["app_role"] | null
        }
        Update: {
          department?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          role?: Database["public"]["Enums"]["app_role"] | null
        }
        Relationships: []
      }
      sales_data: {
        Row: {
          collections: number | null
          created_at: string | null
          customer_name: string | null
          deal_size: number | null
          delivery_date: string | null
          delivery_status: string | null
          estimated_delivery_date: string | null
          id: string
          industry_segment: string | null
          installation_date: string | null
          priority: string | null
          processing_status: string | null
          region: string | null
          revenue: number | null
          satisfaction_score: number | null
          status: string | null
          time_in_transit: unknown | null
        }
        Insert: {
          collections?: number | null
          created_at?: string | null
          customer_name?: string | null
          deal_size?: number | null
          delivery_date?: string | null
          delivery_status?: string | null
          estimated_delivery_date?: string | null
          id?: string
          industry_segment?: string | null
          installation_date?: string | null
          priority?: string | null
          processing_status?: string | null
          region?: string | null
          revenue?: number | null
          satisfaction_score?: number | null
          status?: string | null
          time_in_transit?: unknown | null
        }
        Update: {
          collections?: number | null
          created_at?: string | null
          customer_name?: string | null
          deal_size?: number | null
          delivery_date?: string | null
          delivery_status?: string | null
          estimated_delivery_date?: string | null
          id?: string
          industry_segment?: string | null
          installation_date?: string | null
          priority?: string | null
          processing_status?: string | null
          region?: string | null
          revenue?: number | null
          satisfaction_score?: number | null
          status?: string | null
          time_in_transit?: unknown | null
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
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
