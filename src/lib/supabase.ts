import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Project {
  id: string
  title: string
  description: string
  category: 'residential' | 'commercial' | 'industrial'
  location: string
  date: string
  image_url?: string
  created_at: string
}

export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
  created_at: string
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  phone: string
  service: string
  message: string
  created_at: string
}