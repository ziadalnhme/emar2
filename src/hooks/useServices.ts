import { useState, useEffect } from 'react'
import { supabase, type Service } from '../lib/supabase'

// البيانات الافتراضية في حالة عدم توفر قاعدة البيانات
const defaultServices: Service[] = [
  {
    id: '1',
    title: 'الأعمال الإنشائية',
    description: 'تنفيذ جميع أنواع الأعمال الإنشائية بأعلى معايير الجودة والسلامة مع فريق من المهندسين والفنيين المتخصصين',
    features: ['الأعمال الخرسانية المسلحة', 'الهياكل الإنشائية المعدنية', 'أعمال الأساسات العميقة', 'الأعمال المدنية والطرق'],
    icon: 'building',
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    title: 'أعمال الكهروميكانيك',
    description: 'تنفيذ الأنظمة الكهربائية والميكانيكية المتكاملة للمباني السكنية والتجارية والصناعية',
    features: ['الأنظمة الكهربائية والإنارة', 'أنظمة التكييف والتهوية', 'أنظمة السلامة والإطفاء', 'أنظمة التحكم الآلي الذكية'],
    icon: 'zap',
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    title: 'التشطيبات والديكور',
    description: 'أعمال التشطيبات الداخلية والخارجية بأحدث التصاميم والمواد عالية الجودة',
    features: ['التشطيبات الداخلية الفاخرة', 'الواجهات الخارجية الحديثة', 'أعمال الدهانات والديكور', 'تركيب الأرضيات والسيراميك'],
    icon: 'palette',
    created_at: new Date().toISOString()
  }
]

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
      setError(null)
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        // إذا كان الخطأ متعلق بعدم وجود الجدول، استخدم البيانات الافتراضية
        if (error.code === 'PGRST205' || error.message.includes('Could not find the table')) {
          console.warn('جدول الخدمات غير موجود، سيتم استخدام البيانات الافتراضية')
          setServices(defaultServices)
          return
        }
        throw error
      }
      setServices(data || defaultServices)
    } catch (err) {
      console.warn('فشل في تحميل الخدمات من قاعدة البيانات، سيتم استخدام البيانات الافتراضية:', err)
      setServices(defaultServices)
      setError(null) // لا نعرض خطأ للمستخدم، فقط نستخدم البيانات الافتراضية
    } finally {
      setLoading(false)
    }
  }

  return { services, loading, error, refetch: fetchServices }
}