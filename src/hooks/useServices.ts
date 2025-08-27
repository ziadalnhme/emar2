import { useState, useEffect } from 'react'
import { supabase, type Service } from '../lib/supabase'

export function useServices() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setServices(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'حدث خطأ في تحميل الخدمات')
      console.error('Error fetching services:', err)
    } finally {
      setLoading(false)
    }
  }

  return { services, loading, error, refetch: fetchServices }
}