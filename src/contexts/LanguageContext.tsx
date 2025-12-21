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
    'services.subtitle': 'مجموعة كاملة من الخدمات الطبية في عيادات بيلاروسيا مع وصف موجز',
    
    // Service 1 - Cardiology
    'services.cardiology': 'أمراض القلب وجراحة القلب',
    'services.cardiology.desc': 'تشخيص وعلاج أمراض الجهاز القلبي الوعائي، بما في ذلك تصوير الشرايين التاجية، تركيب الدعامات، تخطيط القلب، تخطيط صدى القلب، الوقاية وإعادة التأهيل بعد النوبة القلبية. يشمل أمراض القلب التداخلية والطرق الجراحية مثل جراحة المجازة والعمليات على الصمامات.',
    'services.cardiology.details': 'تقدم عيادات بيلاروسيا مجموعة كاملة من خدمات أمراض القلب الحديثة بناءً على البروتوكولات السريرية الأوروبية والدولية. يتم التشخيص والعلاج باستخدام معدات عالية الدقة وتحت إشراف أطباء قلب وجراحي قلب ذوي خبرة.\n\nتشمل خدمات أمراض القلب:\n• التشخيص الشامل للجهاز القلبي الوعائي (تخطيط القلب، مراقبة هولتر، تخطيط صدى القلب، اختبارات الإجهاد، التصوير المقطعي والرنين المغناطيسي للقلب)\n• علاج أمراض القلب التاجية وارتفاع ضغط الدم الشرياني وعدم انتظام ضربات القلب وقصور القلب\n• أمراض القلب الغازية وغير الغازية\n• تصوير الشرايين التاجية وتركيب الدعامات\n• إعداد ومرافقة المرضى لعمليات جراحة القلب\n• إعادة التأهيل بعد الجراحة والقلبية\n\nيتم توفير خطة فحص وعلاج فردية للمرضى، ومرافقة طبية، بالإضافة إلى المساعدة في تنظيم الرحلة وترجمة المستندات الطبية والتواصل مع الأطباء.\n\nيختار فريقنا العيادة والمختص الأمثل بناءً على التشخيص وحالة المريض وإلحاح العلاج.',
    
    // Service 2 - Oncology
    'services.oncology': 'الأورام وأمراض الدم الأورام',
    'services.oncology.desc': 'العلاج الشامل للأورام الخبيثة: التشخيص، العلاج الكيميائي، العلاج الإشعاعي، العلاج الموجه، التدخل الجراحي وإعادة التأهيل اللاحقة. يشمل أيضًا مراكز متخصصة لأورام الأطفال وأمراض الدم.',
    'services.oncology.details': 'تقدم عيادات الأورام في بيلاروسيا تشخيصًا وعلاجًا شاملًا للأورام الخبيثة باستخدام أساليب حديثة ومبنية على أسس علمية وسريرية، تتوافق مع المعايير الدولية والأوروبية.\n\nتشمل خدمات الأورام:\n• التشخيص الموسع للأورام (التصوير المقطعي، الرنين المغناطيسي، التصوير المقطعي بالإصدار البوزيتروني، الخزعة، الفحوصات المناعية والجينية الجزيئية)\n• اختيار فردي لأنظمة العلاج الكيميائي، بما في ذلك بروتوكولات العلاج الموجه الحديثة\n• طرق العلاج الإشعاعي الحديثة بدقة عالية وتأثير ضئيل على الأنسجة السليمة\n• العلاج المركب بمشاركة أطباء الأورام وأخصائيي الأشعة والجراحين\n• العلاج الجراحي للأورام (عند وجود مؤشرات)\n• العلاج الداعم وإعادة التأهيل الأورام\n\nتشمل أحدث طرق العلاج المستخدمة في عيادات بيلاروسيا:\n• العلاج الموجه بناءً على الملف الجزيئي للورم\n• العلاج المناعي (عند وجود مؤشرات سريرية)\n• طرق العلاج الإشعاعي عالية الدقة (IMRT، IGRT وتقنيات حديثة أخرى)\n• أنظمة علاج مخصصة بناءً على التوصيات السريرية الدولية\n\nيتم وضع خطة علاج فردية لكل مريض مع مراعاة مرحلة المرض والحالة الصحية العامة والبروتوكولات الطبية الدولية. يتم توفير مرافقة كاملة: من تحليل المستندات الطبية إلى تنظيم العلاج والإقامة والترجمة.\n\nيضمن فريقنا السرية والشفافية والمرافقة الطبية المهنية في جميع مراحل العلاج.',
    
    // Service 3 - Neurosurgery
    'services.neurosurgery': 'جراحة الأعصاب وطب الأعصاب',
    'services.neurosurgery.desc': 'تشخيص وعلاج جراحي لأمراض الجهاز العصبي المركزي والمحيطي، بما في ذلك أورام الدماغ، أمراض الأوعية الدموية، إصابات العمود الفقري، السكتات الدماغية وأمراض الحبل الشوكي.',
    
    // Service 4 - Traumatology
    'services.traumatology': 'الإصابات وجراحة العظام',
    'services.traumatology.desc': 'علاج إصابات الجهاز العضلي الهيكلي، استبدال المفاصل (الورك/الركبة)، تصحيح التشوهات، الطب الرياضي، تثبيت الكسور، جراحة العظام الترميمية وإعادة التأهيل.',
    
    // Service 5 - Transplantology
    'services.transplant': 'زراعة الأعضاء',
    'services.transplant.desc': 'زراعة الأعضاء والأنسجة، بما في ذلك زراعة الكلى والكبد والقلب ونخاع العظام والخلايا الجذعية، مع التشخيص الأولي والدعم بعد العملية.',
    
    // Service 6 - General Surgery
    'services.surgery': 'الجراحة العامة',
    'services.surgery.desc': 'عمليات أمراض البطن، الفتق، أمراض الجهاز التنفسي والهضمي، التدخلات الجراحية الطارئة، العمليات بالمنظار والرعاية بعد الجراحة.',
    
    // Service 7 - Anesthesiology
    'services.anesthesiology': 'التخدير والإنعاش',
    'services.anesthesiology.desc': 'توفير التخدير أثناء العمليات، العناية المركزة ودعم الإنعاش للمرضى بعد التدخلات المعقدة أو في الحالات الحرجة.',
    
    // Service 8 - Ophthalmology
    'services.ophthalmology': 'طب العيون',
    'services.ophthalmology.desc': 'تشخيص وعلاج أمراض العين: الجلوكوما، إعتام عدسة العين، قرح القرنية، اضطرابات الانكسار، طرق الليزر لتصحيح الرؤية.',
    
    // Service 9 - ENT
    'services.ent': 'الأنف والأذن والحنجرة',
    'services.ent.desc': 'خدمات تشخيص وعلاج أمراض الأذن والحلق والأنف، بما في ذلك استئصال اللوزتين، علاج التهاب الجيوب الأنفية، اضطرابات السمع والجراحة الترميمية.',
    
    // Service 10 - Pediatrics
    'services.pediatrics': 'طب الأطفال',
    'services.pediatrics.desc': 'الرعاية الطبية للأطفال من جميع الأعمار: التطعيم، تشخيص الأمراض، علاج الأمراض المعدية، المتابعة والعلاج التأهيلي.',
    
    // Service 11 - Gynecology
    'services.gynecology': 'أمراض النساء والتوليد',
    'services.gynecology.desc': 'تشخيص وعلاج أمراض الجهاز التناسلي الأنثوي، متابعة الحمل، الولادة، التدخلات الجراحية للتشخيصات النسائية، مرافقة الحمل عالي الخطورة.',
    
    // Service 12 - Urology
    'services.urology': 'المسالك البولية',
    'services.urology.desc': 'علاج أمراض الجهاز البولي للرجال والنساء، أمراض البروستاتا، حصوات الكلى، التهابات المسالك البولية والإجراءات الترميمية.',
    
    // Service 13 - Endocrinology
    'services.endocrinology': 'الغدد الصماء',
    'services.endocrinology.desc': 'تشخيص وعلاج الاضطرابات الهرمونية، داء السكري، أمراض الغدة الدرقية والتمثيل الغذائي، ومتابعة المرضى الذين يعانون من أمراض الغدة الدرقية والتمثيل الغذائي.',
    
    // Service 14 - Pulmonology
    'services.pulmonology': 'أمراض الرئة',
    'services.pulmonology.desc': 'علاج أمراض الجهاز التنفسي: الربو، مرض الانسداد الرئوي المزمن، الالتهاب الرئوي، السل، إعادة تأهيل الجهاز التنفسي.',
    
    // Service 15 - Infectious Diseases
    'services.infectious': 'الأمراض المعدية',
    'services.infectious.desc': 'تشخيص وعلاج العدوى الحادة والمزمنة، التطعيم، المراقبة في المستشفى والعلاج المتخصص مع التحكم في مخاطر العدوى.',
    
    // Service 16 - Diagnostic Centers
    'services.diagnostics': 'مراكز التشخيص',
    'services.diagnostics.desc': 'طرق التشخيص الحديثة تشمل: التصوير بالرنين المغناطيسي، التصوير المقطعي، الموجات فوق الصوتية، التنظير، الفحوصات المخبرية، التشخيص الوظيفي (تخطيط القلب، تخطيط الدماغ).',
    
    // Service 17 - Rehabilitation
    'services.rehabilitation': 'إعادة التأهيل والطب التصالحي',
    'services.rehabilitation.desc': 'برامج إعادة التأهيل الشاملة بعد الإصابات والعمليات والسكتات الدماغية والأمراض المزمنة، تشمل العلاج الطبيعي والتمارين العلاجية والعلاج المهني.',
    
    // Service 18 - Psychiatry
    'services.psychiatry': 'الطب النفسي وعلاج الإدمان',
    'services.psychiatry.desc': 'الاستشارة وعلاج اضطرابات الصحة النفسية، دعم الإدمان، العلاج النفسي والرعاية الداخلية للمرضى البالغين.',
    
    // Service 19 - Plastic Surgery
    'services.plastic': 'الجراحة التجميلية والترميمية',
    'services.plastic.desc': 'العمليات التجميلية، تصحيح العيوب بعد الإصابات أو الأمراض، الإجراءات الترميمية للوجه والجسم.',
    
    // Service 20 - Reproductive Medicine
    'services.reproductive': 'الطب التناسلي',
    'services.reproductive.desc': 'تشخيص العقم وتقنيات الإنجاب المساعدة مثل التلقيح الصناعي، تحفيز الإباضة ودعم الحمل.',
    
    // Service 21 - Dentistry
    'services.dentistry': 'طب الأسنان',
    'services.dentistry.desc': 'مجموعة كاملة من خدمات طب الأسنان: الوقاية، علاج التسوس، زراعة الأسنان، تقويم الأسنان، التركيبات وجراحة الأسنان.',
    
    // Service 22 - Oncological Radiology
    'services.radiology': 'الأشعة الأورامية',
    'services.radiology.desc': 'طرق العلاج الإشعاعي الحديثة بدقة عالية في التشعيع للأمراض الأورامية، كجزء من العلاج الأورامي الشامل.',
    
    // Service 23 - International Patient Services
    'services.international': 'خدمات المرضى الدوليين',
    'services.international.desc': 'تنظيم التأشيرات الطبية، ترجمة الوثائق الطبية، مرافقة المترجمين، تنسيق جداول الفحوصات والعلاج، لوجستيات السفر والإقامة.',
    
    // Services Notes
    'services.notes.title': 'ملاحظات',
    'services.notes.1': 'العديد من المؤسسات الكبرى (مثل مركز أمراض القلب والأورام وجراحة الأعصاب) لديها أقسام ومختبرات وظيفية متعددة التخصصات.',
    'services.notes.2': 'خدمات التشخيص متاحة أيضًا في المراكز الخاصة في جميع أنحاء البلاد، وخاصة في مينسك.',
    'services.notes.3': 'تجمع المستشفيات الرائدة بين الرعاية الداخلية والأقسام الجراحية والخدمات الاستشارية.',
    
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
    'services.subtitle': 'Полный спектр медицинских услуг клиник Беларуси с краткими характеристиками',
    
    // Service 1 - Cardiology
    'services.cardiology': 'Кардиология и кардиохирургия',
    'services.cardiology.desc': 'Диагностика и лечение заболеваний сердечно-сосудистой системы, включая коронарографию, стентирование, электрокардиографию, эхокардиографию, профилактику и реабилитацию после инфаркта. Включает интервенционную кардиологию и хирургические методы, такие как шунтирование и клапанные операции.',
    'services.cardiology.details': 'Клиники Беларуси предлагают полный спектр современных кардиологических услуг, основанных на европейских и международных клинических протоколах. Диагностика и лечение проводятся с использованием высокоточного оборудования и под наблюдением опытных кардиологов и кардиохирургов.\n\nКардиологические услуги включают:\n• Комплексную диагностику сердечно-сосудистой системы (ЭКГ, Холтер-мониторинг, ЭхоКГ, стресс-тесты, КТ и МРТ сердца)\n• Лечение ишемической болезни сердца, артериальной гипертензии, аритмий и сердечной недостаточности\n• Инвазивную и неинвазивную кардиологию\n• Коронарографию и стентирование\n• Подготовку и сопровождение пациентов к кардиохирургическим операциям\n• Послеоперационную и кардиологическую реабилитацию\n\nПациентам обеспечивается индивидуальный план обследования и лечения, медицинское сопровождение, а также помощь с организацией поездки, переводом медицинских документов и коммуникацией с врачами.\n\nНаша команда подбирает оптимальную клинику и специалиста с учётом диагноза, состояния пациента и срочности лечения.',
    
    // Service 2 - Oncology
    'services.oncology': 'Онкология и онкогематология',
    'services.oncology.desc': 'Комплексное лечение злокачественных новообразований: диагностика, химиотерапия, лучевая терапия, таргетная терапия, хирургическое вмешательство и последующая реабилитация. Также включены специализированные центры педиатрической онкологии и гематологии.',
    'services.oncology.details': 'Онкологические клиники Беларуси предоставляют комплексную диагностику и лечение злокачественных новообразований с применением современных, научно обоснованных и клинически подтверждённых методов, соответствующих международным и европейским стандартам.\n\nОнкологические услуги включают:\n• Расширенную онкологическую диагностику (КТ, МРТ, ПЭТ-КТ, биопсия, иммуногистохимические и молекулярно-генетические исследования)\n• Индивидуальный подбор схем химиотерапии, включая современные протоколы таргетной терапии\n• Современные методы лучевой терапии с высокой точностью и минимальным воздействием на здоровые ткани\n• Комбинированное лечение с участием онкологов, радиологов и хирургов\n• Хирургическое лечение онкологических заболеваний (при наличии показаний)\n• Поддерживающую терапию и онкологическую реабилитацию\n\nНовейшие методы лечения, применяемые в клиниках Беларуси, включают:\n• Таргетную терапию на основе молекулярного профиля опухоли\n• Иммунотерапию (при наличии клинических показаний)\n• Высокоточные методы лучевой терапии (IMRT, IGRT и другие современные технологии)\n• Персонализированные схемы лечения на основе международных клинических рекомендаций\n\nКаждому пациенту разрабатывается индивидуальный план лечения с учётом стадии заболевания, общего состояния здоровья и международных медицинских протоколов. Обеспечивается полное сопровождение: от анализа медицинских документов до организации лечения, проживания и перевода.\n\nНаша команда обеспечивает конфиденциальность, прозрачность и профессиональное медицинское сопровождение на всех этапах лечения.',
    
    // Service 3 - Neurosurgery
    'services.neurosurgery': 'Нейрохирургия и неврология',
    'services.neurosurgery.desc': 'Диагностика и хирургическое лечение заболеваний центральной и периферической нервной системы, включая опухоли мозга, сосудистые заболевания, травмы позвоночника, инсульты и заболевания спинного мозга.',
    
    // Service 4 - Traumatology
    'services.traumatology': 'Травматология и ортопедия',
    'services.traumatology.desc': 'Лечение травм опорно-двигательного аппарата, замена суставов (hip/knee), коррекция деформаций, спортивная медицина, фиксация переломов, реконструктивная ортопедия и реабилитация.',
    
    // Service 5 - Transplantology
    'services.transplant': 'Трансплантология',
    'services.transplant.desc': 'Пересадка органов и тканей, включая пересадку почки, печени, сердца, костного мозга и стволовых клеток, с предварительной диагностикой и послеоперационной поддержкой.',
    
    // Service 6 - General Surgery
    'services.surgery': 'Общая хирургия',
    'services.surgery.desc': 'Операции по поводу заболеваний брюшной полости, грыж, заболеваний органов дыхания и пищеварения, экстренные хирургические вмешательства, лапароскопические операции и послеоперационный уход.',
    
    // Service 7 - Anesthesiology
    'services.anesthesiology': 'Анестезиология и реанимация',
    'services.anesthesiology.desc': 'Обеспечение анестезией во время операций, интенсивная терапия и реанимационная поддержка пациентов после сложных вмешательств или в критическом состоянии.',
    
    // Service 8 - Ophthalmology
    'services.ophthalmology': 'Офтальмология',
    'services.ophthalmology.desc': 'Диагностика и лечение глазных заболеваний: глаукома, катаракта, язвы роговицы, рефракционные нарушения, лазерные методы коррекции зрительных функций.',
    
    // Service 9 - ENT
    'services.ent': 'ЛОР (оториноларингология)',
    'services.ent.desc': 'Услуги по диагностике и лечению заболеваний уха, горла и носа, включая тонзиллэктомию, лечение синуситов, слуховые нарушения и реконструктивную хирургию.',
    
    // Service 10 - Pediatrics
    'services.pediatrics': 'Педиатрия',
    'services.pediatrics.desc': 'Медицинская помощь детям всех возрастов: вакцинация, диагностика болезней, лечение инфекционных заболеваний, диспансерное наблюдение и восстановительная терапия.',
    
    // Service 11 - Gynecology
    'services.gynecology': 'Гинекология и акушерство',
    'services.gynecology.desc': 'Диагностика и лечение заболеваний женской репродуктивной системы, ведение беременности, роды, хирургические вмешательства при гинекологических диагнозах, сопровождение высокорисковых беременностей.',
    
    // Service 12 - Urology
    'services.urology': 'Урология',
    'services.urology.desc': 'Лечение заболеваний мочевыделительной системы у мужчин и женщин, заболевания простаты, камни почек, инфекции мочевыводящих путей и реконструктивные процедуры.',
    
    // Service 13 - Endocrinology
    'services.endocrinology': 'Эндокринология',
    'services.endocrinology.desc': 'Диагностика и лечение гормональных нарушений, сахарного диабета, заболеваний щитовидной железы и обмена веществ, а также сопровождение пациентов с тиреоидными и метаболическими заболеваниями.',
    
    // Service 14 - Pulmonology
    'services.pulmonology': 'Пульмонология',
    'services.pulmonology.desc': 'Лечение заболеваний дыхательной системы: бронхиальная астма, хроническая обструктивная болезнь легких (ХОБЛ), пневмонии, туберкулез, дыхательная реабилитация.',
    
    // Service 15 - Infectious Diseases
    'services.infectious': 'Инфекционные болезни',
    'services.infectious.desc': 'Диагностика и лечение острых и хронических инфекций, вакцинация, стационарное наблюдение и специализированная терапия с контролем инфекционных рисков.',
    
    // Service 16 - Diagnostic Centers
    'services.diagnostics': 'Диагностические центры',
    'services.diagnostics.desc': 'Современные методы диагностики, включая: МРТ (магнитно-резонансная томография), КТ (компьютерная томография), ультразвуковые исследования (УЗИ), эндоскопия, лабораторные анализы (кровь, биохимия, гормоны), функциональная диагностика (ЭКГ, ЭЭГ).',
    
    // Service 17 - Rehabilitation
    'services.rehabilitation': 'Реабилитация и восстановительная медицина',
    'services.rehabilitation.desc': 'Программы комплексной реабилитации после травм, операций, инсультов и хронических заболеваний, включающие физиотерапию, лечебную физкультуру и эрготерапию.',
    
    // Service 18 - Psychiatry
    'services.psychiatry': 'Психиатрия и наркология',
    'services.psychiatry.desc': 'Консультирование и лечение нарушений психического здоровья, поддержка при зависимостях, психотерапия и стационарная помощь для взрослых пациентов.',
    
    // Service 19 - Plastic Surgery
    'services.plastic': 'Пластическая и реконструктивная хирургия',
    'services.plastic.desc': 'Эстетические операции, коррекция дефектов после травм или заболеваний, реконструктивные процедуры на лице и теле.',
    
    // Service 20 - Reproductive Medicine
    'services.reproductive': 'Репродуктивная медицина',
    'services.reproductive.desc': 'Диагностика бесплодия и вспомогательные репродуктивные технологии (ВРТ), такие как ЭКО (экстракорпоральное оплодотворение), стимуляция овуляции и поддержка беременности.',
    
    // Service 21 - Dentistry
    'services.dentistry': 'Стоматология',
    'services.dentistry.desc': 'Полный спектр стоматологических услуг: профилактика, лечение кариеса, имплантация, ортодонтия, протезирование и стоматологическая хирургия.',
    
    // Service 22 - Oncological Radiology
    'services.radiology': 'Онкологическая радиология',
    'services.radiology.desc': 'Современные методы лучевой терапии с высокой точностью облучения для онкологических заболеваний, как часть комплексного онкологического лечения.',
    
    // Service 23 - International Patient Services
    'services.international': 'Обслуживание международных пациентов',
    'services.international.desc': 'Организация медицинских виз, перевод медицинских документов, сопровождение переводчиками, координация расписания обследований и лечения, логистика поездок и проживания.',
    
    // Services Notes
    'services.notes.title': 'Примечания',
    'services.notes.1': 'Многие крупные учреждения (как РНПЦ кардиологии, онкологии или нейрохирургии) имеют мультидисциплинарные функциональные отделения и лаборатории.',
    'services.notes.2': 'Диагностические услуги доступны также в частных центрах по всей стране, особенно в Минске.',
    'services.notes.3': 'Ведущие больницы совмещают стационарный уход, хирургические отделения и консультационные службы.',
    
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
    'services.subtitle': 'Full range of medical services at Belarusian clinics with brief descriptions',
    
    // Service 1 - Cardiology
    'services.cardiology': 'Cardiology and Cardiac Surgery',
    'services.cardiology.desc': 'Diagnosis and treatment of cardiovascular diseases, including coronary angiography, stenting, electrocardiography, echocardiography, prevention and rehabilitation after heart attack. Includes interventional cardiology and surgical methods such as bypass and valve operations.',
    'services.cardiology.details': 'Belarusian clinics offer a full range of modern cardiology services based on European and international clinical protocols. Diagnosis and treatment are carried out using high-precision equipment under the supervision of experienced cardiologists and cardiac surgeons.\n\nCardiology services include:\n• Comprehensive diagnostics of the cardiovascular system (ECG, Holter monitoring, echocardiography, stress tests, CT and MRI of the heart)\n• Treatment of coronary heart disease, arterial hypertension, arrhythmias, and heart failure\n• Invasive and non-invasive cardiology\n• Coronary angiography and stenting\n• Preparation and support of patients for cardiac surgery\n• Post-operative and cardiac rehabilitation\n\nPatients are provided with an individual examination and treatment plan, medical support, as well as assistance with organizing the trip, translating medical documents, and communicating with doctors.\n\nOur team selects the optimal clinic and specialist based on the diagnosis, patient condition, and urgency of treatment.',
    
    // Service 2 - Oncology
    'services.oncology': 'Oncology and Oncohematology',
    'services.oncology.desc': 'Comprehensive treatment of malignant neoplasms: diagnosis, chemotherapy, radiation therapy, targeted therapy, surgical intervention and subsequent rehabilitation. Also includes specialized centers for pediatric oncology and hematology.',
    'services.oncology.details': 'Oncology clinics in Belarus provide comprehensive diagnosis and treatment of malignant neoplasms using modern, scientifically based and clinically proven methods that meet international and European standards.\n\nOncology services include:\n• Extended oncological diagnostics (CT, MRI, PET-CT, biopsy, immunohistochemical and molecular genetic studies)\n• Individual selection of chemotherapy regimens, including modern targeted therapy protocols\n• Modern radiation therapy methods with high precision and minimal impact on healthy tissues\n• Combined treatment with the participation of oncologists, radiologists, and surgeons\n• Surgical treatment of oncological diseases (when indicated)\n• Supportive therapy and oncological rehabilitation\n\nThe latest treatment methods used in Belarusian clinics include:\n• Targeted therapy based on the molecular profile of the tumor\n• Immunotherapy (when clinically indicated)\n• High-precision radiation therapy methods (IMRT, IGRT, and other modern technologies)\n• Personalized treatment regimens based on international clinical guidelines\n\nEach patient receives an individual treatment plan taking into account the stage of the disease, general health condition, and international medical protocols. Complete support is provided: from analysis of medical documents to organization of treatment, accommodation, and translation.\n\nOur team ensures confidentiality, transparency, and professional medical support at all stages of treatment.',
    
    // Service 3 - Neurosurgery
    'services.neurosurgery': 'Neurosurgery and Neurology',
    'services.neurosurgery.desc': 'Diagnosis and surgical treatment of central and peripheral nervous system diseases, including brain tumors, vascular diseases, spinal injuries, strokes and spinal cord diseases.',
    
    // Service 4 - Traumatology
    'services.traumatology': 'Traumatology and Orthopedics',
    'services.traumatology.desc': 'Treatment of musculoskeletal injuries, joint replacement (hip/knee), deformity correction, sports medicine, fracture fixation, reconstructive orthopedics and rehabilitation.',
    
    // Service 5 - Transplantology
    'services.transplant': 'Transplantology',
    'services.transplant.desc': 'Organ and tissue transplantation, including kidney, liver, heart, bone marrow and stem cell transplants, with preliminary diagnosis and post-operative support.',
    
    // Service 6 - General Surgery
    'services.surgery': 'General Surgery',
    'services.surgery.desc': 'Operations for abdominal diseases, hernias, respiratory and digestive system diseases, emergency surgical interventions, laparoscopic operations and post-operative care.',
    
    // Service 7 - Anesthesiology
    'services.anesthesiology': 'Anesthesiology and Resuscitation',
    'services.anesthesiology.desc': 'Anesthesia provision during operations, intensive care and resuscitation support for patients after complex interventions or in critical condition.',
    
    // Service 8 - Ophthalmology
    'services.ophthalmology': 'Ophthalmology',
    'services.ophthalmology.desc': 'Diagnosis and treatment of eye diseases: glaucoma, cataracts, corneal ulcers, refractive disorders, laser methods for vision correction.',
    
    // Service 9 - ENT
    'services.ent': 'ENT (Otorhinolaryngology)',
    'services.ent.desc': 'Diagnostic and treatment services for ear, throat and nose diseases, including tonsillectomy, treatment of sinusitis, hearing disorders and reconstructive surgery.',
    
    // Service 10 - Pediatrics
    'services.pediatrics': 'Pediatrics',
    'services.pediatrics.desc': 'Medical care for children of all ages: vaccination, disease diagnosis, treatment of infectious diseases, dispensary observation and restorative therapy.',
    
    // Service 11 - Gynecology
    'services.gynecology': 'Gynecology and Obstetrics',
    'services.gynecology.desc': 'Diagnosis and treatment of female reproductive system diseases, pregnancy management, childbirth, surgical interventions for gynecological diagnoses, high-risk pregnancy support.',
    
    // Service 12 - Urology
    'services.urology': 'Urology',
    'services.urology.desc': 'Treatment of urinary system diseases in men and women, prostate diseases, kidney stones, urinary tract infections and reconstructive procedures.',
    
    // Service 13 - Endocrinology
    'services.endocrinology': 'Endocrinology',
    'services.endocrinology.desc': 'Diagnosis and treatment of hormonal disorders, diabetes mellitus, thyroid and metabolic diseases, as well as support for patients with thyroid and metabolic diseases.',
    
    // Service 14 - Pulmonology
    'services.pulmonology': 'Pulmonology',
    'services.pulmonology.desc': 'Treatment of respiratory diseases: bronchial asthma, chronic obstructive pulmonary disease (COPD), pneumonia, tuberculosis, respiratory rehabilitation.',
    
    // Service 15 - Infectious Diseases
    'services.infectious': 'Infectious Diseases',
    'services.infectious.desc': 'Diagnosis and treatment of acute and chronic infections, vaccination, inpatient observation and specialized therapy with infection risk control.',
    
    // Service 16 - Diagnostic Centers
    'services.diagnostics': 'Diagnostic Centers',
    'services.diagnostics.desc': 'Modern diagnostic methods including: MRI (magnetic resonance imaging), CT (computed tomography), ultrasound examinations (ultrasound), endoscopy, laboratory tests (blood, biochemistry, hormones), functional diagnostics (ECG, EEG).',
    
    // Service 17 - Rehabilitation
    'services.rehabilitation': 'Rehabilitation and Restorative Medicine',
    'services.rehabilitation.desc': 'Comprehensive rehabilitation programs after injuries, operations, strokes and chronic diseases, including physiotherapy, therapeutic exercises and occupational therapy.',
    
    // Service 18 - Psychiatry
    'services.psychiatry': 'Psychiatry and Narcology',
    'services.psychiatry.desc': 'Consultation and treatment of mental health disorders, addiction support, psychotherapy and inpatient care for adult patients.',
    
    // Service 19 - Plastic Surgery
    'services.plastic': 'Plastic and Reconstructive Surgery',
    'services.plastic.desc': 'Aesthetic operations, correction of defects after injuries or diseases, reconstructive procedures on the face and body.',
    
    // Service 20 - Reproductive Medicine
    'services.reproductive': 'Reproductive Medicine',
    'services.reproductive.desc': 'Infertility diagnosis and assisted reproductive technologies (ART), such as IVF (in vitro fertilization), ovulation stimulation and pregnancy support.',
    
    // Service 21 - Dentistry
    'services.dentistry': 'Dentistry',
    'services.dentistry.desc': 'Full range of dental services: prevention, caries treatment, implantation, orthodontics, prosthetics and dental surgery.',
    
    // Service 22 - Oncological Radiology
    'services.radiology': 'Oncological Radiology',
    'services.radiology.desc': 'Modern radiation therapy methods with high precision irradiation for oncological diseases, as part of comprehensive oncological treatment.',
    
    // Service 23 - International Patient Services
    'services.international': 'International Patient Services',
    'services.international.desc': 'Organization of medical visas, translation of medical documents, interpreter accompaniment, coordination of examination and treatment schedules, travel and accommodation logistics.',
    
    // Services Notes
    'services.notes.title': 'Notes',
    'services.notes.1': 'Many large institutions (such as RSPC of Cardiology, Oncology or Neurosurgery) have multidisciplinary functional departments and laboratories.',
    'services.notes.2': 'Diagnostic services are also available in private centers throughout the country, especially in Minsk.',
    'services.notes.3': 'Leading hospitals combine inpatient care, surgical departments and consultation services.',
    
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
