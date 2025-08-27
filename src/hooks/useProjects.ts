import { useState, useEffect } from 'react'
import { supabase, type Project } from '../lib/supabase'

// البيانات الافتراضية في حالة عدم توفر قاعدة البيانات
const defaultProjects: Project[] = [
  {
    id: '1',
    title: 'مجمع الأمير السكني',
    description: 'مجمع سكني فاخر يضم 50 وحدة سكنية بتصميم عصري ومرافق متكاملة تشمل حدائق ومناطق ترفيهية ومواقف سيارات',
    category: 'residential',
    location: 'الرياض',
    date: '2023',
    image_url: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    title: 'برج التجارة المركزي',
    description: 'برج تجاري حديث بارتفاع 25 طابق يضم مكاتب ومحلات تجارية ومطاعم بتصميم معماري متميز',
    category: 'commercial',
    location: 'جدة',
    date: '2023',
    image_url: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    title: 'مصنع الخليج للصناعات',
    description: 'مصنع حديث للصناعات الغذائية بمساحة 5000 متر مربع مجهز بأحدث التقنيات والمعدات',
    category: 'industrial',
    location: 'الدمام',
    date: '2023',
    image_url: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    created_at: new Date().toISOString()
  }
]

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      setLoading(true)
      setError(null)
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        // إذا كان الخطأ متعلق بعدم وجود الجدول، استخدم البيانات الافتراضية
        if (error.code === 'PGRST205' || error.message.includes('Could not find the table')) {
          console.warn('جدول المشاريع غير موجود، سيتم استخدام البيانات الافتراضية')
          setProjects(defaultProjects)
          return
        }
        throw error
      }
      setProjects(data || defaultProjects)
    } catch (err) {
      console.warn('فشل في تحميل المشاريع من قاعدة البيانات، سيتم استخدام البيانات الافتراضية:', err)
      setProjects(defaultProjects)
      setError(null) // لا نعرض خطأ للمستخدم، فقط نستخدم البيانات الافتراضية
    } finally {
      setLoading(false)
    }
  }

  return { projects, loading, error, refetch: fetchProjects }
}