/*
  # إنشاء جميع الجداول المطلوبة للتطبيق

  1. New Tables
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `category` (text with check constraint)
      - `location` (text)
      - `date` (text)
      - `image_url` (text, optional)
      - `created_at` (timestamp)
    
    - `services`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `features` (text array)
      - `icon` (text)
      - `created_at` (timestamp)
    
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `service` (text)
      - `message` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access on projects and services
    - Add policy for public insert access on contact_messages

  3. Sample Data
    - Insert sample projects and services for demonstration
*/

-- إنشاء جدول المشاريع
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL CHECK (category IN ('residential', 'commercial', 'industrial')),
  location text NOT NULL,
  date text NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now()
);

-- تفعيل Row Level Security للمشاريع
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- إنشاء سياسة للقراءة العامة للمشاريع
CREATE POLICY "Projects are viewable by everyone"
  ON projects
  FOR SELECT
  TO public
  USING (true);

-- إنشاء جدول الخدمات
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  features text[] DEFAULT '{}',
  icon text DEFAULT 'wrench',
  created_at timestamptz DEFAULT now()
);

-- تفعيل Row Level Security للخدمات
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- إنشاء سياسة للقراءة العامة للخدمات
CREATE POLICY "Services are viewable by everyone"
  ON services
  FOR SELECT
  TO public
  USING (true);

-- إنشاء جدول رسائل التواصل
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- تفعيل Row Level Security لرسائل التواصل
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- إنشاء سياسة للإدراج العام لرسائل التواصل
CREATE POLICY "Contact messages are insertable by everyone"
  ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (true);

-- إدراج بيانات تجريبية للمشاريع
INSERT INTO projects (title, description, category, location, date, image_url) VALUES
('مجمع الأمير السكني', 'مجمع سكني فاخر يضم 50 وحدة سكنية بتصميم عصري ومرافق متكاملة تشمل حدائق ومناطق ترفيهية ومواقف سيارات', 'residential', 'الرياض', '2023', 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'),
('برج التجارة المركزي', 'برج تجاري حديث بارتفاع 25 طابق يضم مكاتب ومحلات تجارية ومطاعم بتصميم معماري متميز', 'commercial', 'جدة', '2023', 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800'),
('مصنع الخليج للصناعات', 'مصنع حديث للصناعات الغذائية بمساحة 5000 متر مربع مجهز بأحدث التقنيات والمعدات', 'industrial', 'الدمام', '2023', 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800'),
('فيلا الواحة الفاخرة', 'فيلا سكنية فاخرة بمساحة 800 متر مربع مع حديقة وبركة سباحة وتصميم داخلي عصري', 'residential', 'الرياض', '2022', 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'),
('مجمع المكاتب التنفيذية', 'مجمع مكاتب تنفيذية يضم 100 مكتب بمساحات متنوعة ومرافق خدمية متكاملة', 'commercial', 'الخبر', '2022', 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800'),
('مصنع البتروكيماويات', 'مصنع متخصص في إنتاج المواد البتروكيماوية بطاقة إنتاجية عالية ومعايير سلامة متقدمة', 'industrial', 'الجبيل', '2022', 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800');

-- إدراج بيانات تجريبية للخدمات
INSERT INTO services (title, description, features, icon) VALUES
('الأعمال الإنشائية', 'تنفيذ جميع أنواع الأعمال الإنشائية بأعلى معايير الجودة والسلامة مع فريق من المهندسين والفنيين المتخصصين', ARRAY['الأعمال الخرسانية المسلحة', 'الهياكل الإنشائية المعدنية', 'أعمال الأساسات العميقة', 'الأعمال المدنية والطرق'], 'building'),
('أعمال الكهروميكانيك', 'تنفيذ الأنظمة الكهربائية والميكانيكية المتكاملة للمباني السكنية والتجارية والصناعية', ARRAY['الأنظمة الكهربائية والإنارة', 'أنظمة التكييف والتهوية', 'أنظمة السلامة والإطفاء', 'أنظمة التحكم الآلي الذكية'], 'zap'),
('التشطيبات والديكور', 'أعمال التشطيبات الداخلية والخارجية بأحدث التصاميم والمواد عالية الجودة', ARRAY['التشطيبات الداخلية الفاخرة', 'الواجهات الخارجية الحديثة', 'أعمال الدهانات والديكور', 'تركيب الأرضيات والسيراميك'], 'palette'),
('إدارة المشاريع', 'إدارة شاملة للمشاريع من التخطيط حتى التسليم مع ضمان الجودة والالتزام بالمواعيد', ARRAY['التخطيط والجدولة الزمنية', 'إدارة الموارد والمواد', 'مراقبة الجودة والسلامة', 'التقارير والمتابعة المستمرة'], 'clipboard-list'),
('الاستشارات الهندسية', 'خدمات استشارية هندسية متخصصة في جميع مراحل المشروع من التصميم حتى التنفيذ', ARRAY['الدراسات الفنية والاقتصادية', 'التصميم المعماري والإنشائي', 'الإشراف على التنفيذ', 'تقييم وفحص المباني'], 'hard-hat'),
('الصيانة والتشغيل', 'خدمات الصيانة الدورية والطارئة للمباني والمرافق مع عقود صيانة شاملة', ARRAY['الصيانة الدورية المبرمجة', 'الصيانة الطارئة على مدار الساعة', 'إدارة وتشغيل المرافق', 'قطع الغيار والمواد الأصلية'], 'wrench');