export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      userprofiles: {
        Row: {
          created_at: string | null
          id: string
          name: string | null
          userid: string
          role: string
          orgname:string | null
          mobileno: string | null
          award: boolean 
          trial: boolean
          training:boolean
          referralpartner:boolean
          reseller:boolean
          servicepartner:boolean
          invitecode:string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name?: string | null
          userid?: string
          role?: string
          orgname?:string | null
          mobileno?: string | null
          award?: boolean 
          trial?: boolean
          training?:boolean
          referralpartner?:boolean
          reseller?:boolean
          servicepartner?:boolean
          invitecode?:string | null
        }
        Update: {
            created_at?: string | null
            id?: string
            name?: string | null
            userid?: string
            role?: string
            orgname?:string | null
            mobileno?: string | null
            award?: boolean 
            trial?: boolean
            training?:boolean
            referralpartner?:boolean
            reseller?:boolean
            servicepartner?:boolean
            invitecode?:string | null
        }
      }
    }
  }
}
