import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.tourism': 'السياحة العلاجية',
    'nav.institutions': 'المؤسسات الطبية',
    'nav.doctors': 'الأطباء',
    'nav.prices': 'الأسعار',
    'nav.contacts': 'اتصل بنا',
    'nav.apply': 'تقديم طلب',
    
    // Hero
    'hero.title': 'السياحة العلاجية في بيلاروسيا',
    'hero.subtitle': 'رعاية طبية عالمية المستوى بأسعار معقولة',
    'hero.description': 'نرحب بالمرضى من الدول العربية للحصول على أفضل الخدمات الطبية في مؤسسات بيلاروسيا الرائدة',
    'hero.cta': 'احجز استشارتك المجانية',
    'hero.learn': 'اكتشف المزيد',
    
    // Stats
    'stats.patients': 'مريض سنوياً',
    'stats.doctors': 'طبيب متخصص',
    'stats.clinics': 'مؤسسة طبية',
    'stats.satisfaction': 'نسبة الرضا',
    
    // Services
    'services.title': 'خدماتنا الطبية',
    'services.subtitle': 'نقدم مجموعة شاملة من الخدمات الطبية',
    'services.cardiology': 'أمراض القلب',
    'services.cardiology.desc': 'تشخيص وعلاج أمراض القلب والأوعية الدموية',
    'services.oncology': 'علاج الأورام',
    'services.oncology.desc': 'أحدث طرق العلاج الكيميائي والإشعاعي',
    'services.orthopedics': 'جراحة العظام',
    'services.orthopedics.desc': 'استبدال المفاصل وجراحة العمود الفقري',
    'services.ivf': 'الإخصاب الصناعي',
    'services.ivf.desc': 'تقنيات متقدمة في علاج العقم',
    'services.neurology': 'طب الأعصاب',
    'services.neurology.desc': 'علاج أمراض الجهاز العصبي',
    'services.transplant': 'زراعة الأعضاء',
    'services.transplant.desc': 'برامج زراعة الكلى والكبد',
    
    // Why Belarus
    'why.title': 'لماذا بيلاروسيا؟',
    'why.quality': 'جودة عالمية',
    'why.quality.desc': 'مستشفيات معتمدة دولياً بأحدث التقنيات',
    'why.price': 'أسعار تنافسية',
    'why.price.desc': 'توفير يصل إلى 70% مقارنة بأوروبا الغربية',
    'why.visa': 'تسهيلات السفر',
    'why.visa.desc': 'إعفاء من التأشيرة لـ 30 يوماً',
    'why.arabic': 'دعم باللغة العربية',
    'why.arabic.desc': 'مترجمون ومرافقون يتحدثون العربية',
    
    // Form
    'form.title': 'طلب استشارة طبية',
    'form.subtitle': 'املأ النموذج وسنتواصل معك خلال 24 ساعة',
    'form.name': 'الاسم الكامل',
    'form.email': 'البريد الإلكتروني',
    'form.phone': 'رقم الهاتف',
    'form.whatsapp': 'واتساب',
    'form.telegram': 'تيليجرام',
    'form.diagnosis': 'التشخيص الأساسي',
    'form.readiness': 'الاستعداد للعلاج',
    'form.readiness.ready': 'مستعد للسفر فوراً',
    'form.readiness.month': 'خلال شهر',
    'form.readiness.planning': 'أخطط للمستقبل',
    'form.message': 'رسالة إضافية',
    'form.submit': 'إرسال الطلب',
    'form.success': 'تم إرسال طلبك بنجاح!',
    
    // About
    'about.title': 'من نحن',
    'about.subtitle': 'شريكك الموثوق في السياحة العلاجية',
    'about.mission': 'مهمتنا',
    'about.mission.text': 'توفير الوصول إلى أفضل الرعاية الصحية في بيلاروسيا للمرضى من الدول العربية',
    'about.experience': 'سنوات من الخبرة',
    'about.team': 'فريق متخصص',
    'about.team.text': 'فريقنا يضم أطباء ومترجمين ومنسقين محترفين',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'الشروط والأحكام',
    
    // Institutions
    'institutions.title': 'المؤسسات الطبية الرائدة',
    'institutions.subtitle': 'أفضل المستشفيات والمراكز الطبية في بيلاروسيا',
    
    // Doctors
    'doctors.title': 'أطباؤنا',
    'doctors.subtitle': 'نخبة من الأطباء المتخصصين ذوي الخبرة العالية',
    'doctors.experience': 'سنة خبرة',
    'doctors.operations': 'عملية ناجحة',
    
    // Prices
    'prices.title': 'الأسعار',
    'prices.subtitle': 'أسعار تنافسية وشفافة',
    'prices.includes': 'يشمل',
    'prices.from': 'ابتداءً من',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'نحن هنا لمساعدتك',
    'contact.address': 'العنوان',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.hours': 'ساعات العمل',
    'contact.hours.value': 'الأحد - الخميس: 9:00 - 18:00',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.tourism': 'Медицинский туризм',
    'nav.institutions': 'Медучреждения',
    'nav.doctors': 'Врачи',
    'nav.prices': 'Цены',
    'nav.contacts': 'Контакты',
    'nav.apply': 'Оставить заявку',
    
    // Hero
    'hero.title': 'Медицинский туризм в Беларуси',
    'hero.subtitle': 'Мировой уровень медицины по доступным ценам',
    'hero.description': 'Мы приглашаем пациентов из арабских стран получить лучшие медицинские услуги в ведущих учреждениях Беларуси',
    'hero.cta': 'Бесплатная консультация',
    'hero.learn': 'Узнать больше',
    
    // Stats
    'stats.patients': 'пациентов в год',
    'stats.doctors': 'врачей-специалистов',
    'stats.clinics': 'медучреждений',
    'stats.satisfaction': 'удовлетворённость',
    
    // Services
    'services.title': 'Наши медицинские услуги',
    'services.subtitle': 'Полный спектр медицинских услуг',
    'services.cardiology': 'Кардиология',
    'services.cardiology.desc': 'Диагностика и лечение сердечно-сосудистых заболеваний',
    'services.oncology': 'Онкология',
    'services.oncology.desc': 'Современные методы химио- и лучевой терапии',
    'services.orthopedics': 'Ортопедия',
    'services.orthopedics.desc': 'Эндопротезирование и хирургия позвоночника',
    'services.ivf': 'ЭКО',
    'services.ivf.desc': 'Передовые технологии лечения бесплодия',
    'services.neurology': 'Неврология',
    'services.neurology.desc': 'Лечение заболеваний нервной системы',
    'services.transplant': 'Трансплантология',
    'services.transplant.desc': 'Программы пересадки почек и печени',
    
    // Why Belarus
    'why.title': 'Почему Беларусь?',
    'why.quality': 'Мировое качество',
    'why.quality.desc': 'Международно аккредитованные клиники с современным оборудованием',
    'why.price': 'Конкурентные цены',
    'why.price.desc': 'Экономия до 70% по сравнению с Западной Европой',
    'why.visa': 'Простой въезд',
    'why.visa.desc': 'Безвизовый режим на 30 дней',
    'why.arabic': 'Поддержка на арабском',
    'why.arabic.desc': 'Переводчики и координаторы, говорящие по-арабски',
    
    // Form
    'form.title': 'Заявка на консультацию',
    'form.subtitle': 'Заполните форму, и мы свяжемся с вами в течение 24 часов',
    'form.name': 'ФИО',
    'form.email': 'Email',
    'form.phone': 'Телефон',
    'form.whatsapp': 'WhatsApp',
    'form.telegram': 'Telegram',
    'form.diagnosis': 'Основной диагноз',
    'form.readiness': 'Готовность к лечению',
    'form.readiness.ready': 'Готов ехать сразу',
    'form.readiness.month': 'В течение месяца',
    'form.readiness.planning': 'Планирую на будущее',
    'form.message': 'Дополнительное сообщение',
    'form.submit': 'Отправить заявку',
    'form.success': 'Заявка успешно отправлена!',
    
    // About
    'about.title': 'О нас',
    'about.subtitle': 'Ваш надёжный партнёр в медицинском туризме',
    'about.mission': 'Наша миссия',
    'about.mission.text': 'Обеспечить доступ к лучшему здравоохранению Беларуси для пациентов из арабских стран',
    'about.experience': 'лет опыта',
    'about.team': 'Профессиональная команда',
    'about.team.text': 'В нашей команде врачи, переводчики и координаторы',
    
    // Footer
    'footer.rights': 'Все права защищены',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
    
    // Institutions
    'institutions.title': 'Ведущие медучреждения',
    'institutions.subtitle': 'Лучшие больницы и медицинские центры Беларуси',
    
    // Doctors
    'doctors.title': 'Наши врачи',
    'doctors.subtitle': 'Ведущие специалисты с многолетним опытом',
    'doctors.experience': 'лет опыта',
    'doctors.operations': 'успешных операций',
    
    // Prices
    'prices.title': 'Цены',
    'prices.subtitle': 'Конкурентные и прозрачные цены',
    'prices.includes': 'Включено',
    'prices.from': 'от',
    
    // Contact
    'contact.title': 'Контакты',
    'contact.subtitle': 'Мы здесь, чтобы помочь вам',
    'contact.address': 'Адрес',
    'contact.phone': 'Телефон',
    'contact.email': 'Email',
    'contact.hours': 'Часы работы',
    'contact.hours.value': 'Пн-Пт: 9:00 - 18:00',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.tourism': 'Medical Tourism',
    'nav.institutions': 'Medical Institutions',
    'nav.doctors': 'Doctors',
    'nav.prices': 'Prices',
    'nav.contacts': 'Contacts',
    'nav.apply': 'Apply Now',
    
    // Hero
    'hero.title': 'Medical Tourism in Belarus',
    'hero.subtitle': 'World-Class Healthcare at Affordable Prices',
    'hero.description': 'We welcome patients from Arab countries to receive the best medical services at leading Belarusian institutions',
    'hero.cta': 'Book Free Consultation',
    'hero.learn': 'Learn More',
    
    // Stats
    'stats.patients': 'patients yearly',
    'stats.doctors': 'specialist doctors',
    'stats.clinics': 'medical institutions',
    'stats.satisfaction': 'satisfaction rate',
    
    // Services
    'services.title': 'Our Medical Services',
    'services.subtitle': 'Comprehensive range of medical services',
    'services.cardiology': 'Cardiology',
    'services.cardiology.desc': 'Diagnosis and treatment of cardiovascular diseases',
    'services.oncology': 'Oncology',
    'services.oncology.desc': 'Modern chemotherapy and radiation therapy',
    'services.orthopedics': 'Orthopedics',
    'services.orthopedics.desc': 'Joint replacement and spinal surgery',
    'services.ivf': 'IVF',
    'services.ivf.desc': 'Advanced fertility treatment technologies',
    'services.neurology': 'Neurology',
    'services.neurology.desc': 'Treatment of nervous system disorders',
    'services.transplant': 'Transplantology',
    'services.transplant.desc': 'Kidney and liver transplant programs',
    
    // Why Belarus
    'why.title': 'Why Belarus?',
    'why.quality': 'World-Class Quality',
    'why.quality.desc': 'Internationally accredited hospitals with state-of-the-art equipment',
    'why.price': 'Competitive Prices',
    'why.price.desc': 'Save up to 70% compared to Western Europe',
    'why.visa': 'Easy Entry',
    'why.visa.desc': 'Visa-free for 30 days',
    'why.arabic': 'Arabic Support',
    'why.arabic.desc': 'Arabic-speaking translators and coordinators',
    
    // Form
    'form.title': 'Request Consultation',
    'form.subtitle': 'Fill out the form and we will contact you within 24 hours',
    'form.name': 'Full Name',
    'form.email': 'Email',
    'form.phone': 'Phone',
    'form.whatsapp': 'WhatsApp',
    'form.telegram': 'Telegram',
    'form.diagnosis': 'Primary Diagnosis',
    'form.readiness': 'Treatment Readiness',
    'form.readiness.ready': 'Ready to travel immediately',
    'form.readiness.month': 'Within a month',
    'form.readiness.planning': 'Planning for the future',
    'form.message': 'Additional Message',
    'form.submit': 'Submit Request',
    'form.success': 'Your request has been submitted successfully!',
    
    // About
    'about.title': 'About Us',
    'about.subtitle': 'Your Trusted Partner in Medical Tourism',
    'about.mission': 'Our Mission',
    'about.mission.text': 'To provide access to the best healthcare in Belarus for patients from Arab countries',
    'about.experience': 'years of experience',
    'about.team': 'Professional Team',
    'about.team.text': 'Our team includes doctors, translators, and coordinators',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    
    // Institutions
    'institutions.title': 'Leading Medical Institutions',
    'institutions.subtitle': 'Best hospitals and medical centers in Belarus',
    
    // Doctors
    'doctors.title': 'Our Doctors',
    'doctors.subtitle': 'Leading specialists with extensive experience',
    'doctors.experience': 'years experience',
    'doctors.operations': 'successful operations',
    
    // Prices
    'prices.title': 'Prices',
    'prices.subtitle': 'Competitive and transparent pricing',
    'prices.includes': 'Includes',
    'prices.from': 'from',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are here to help you',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Working Hours',
    'contact.hours.value': 'Mon-Fri: 9:00 AM - 6:00 PM',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const dir = language === 'ar' ? 'rtl' : 'ltr';
  
  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    document.body.className = language === 'ar' ? 'font-arabic' : 'font-sans';
  }, [language, dir]);
  
  const t = (key: string): string => {
    return translations[language][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
