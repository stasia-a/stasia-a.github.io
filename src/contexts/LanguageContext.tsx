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
    
    // About - Hero
    'about.hero.title': 'التنظيم المهني للعلاج في المراكز الطبية الرائدة في بيلاروسيا',
    'about.hero.subtitle': 'المرافقة الدولية، السرية، النهج الطبي الفردي',
    
    // About - Mission
    'about.mission.badge': 'المهمة والقيم',
    'about.mission.title': 'مهمتنا',
    'about.mission.text1': 'توفير وصول المرضى من دول الشرق الأوسط ودول أخرى في العالم إلى أفضل الخدمات الطبية في جمهورية بيلاروسيا.',
    'about.mission.text2': 'مهمتنا هي الجمع بين الطب والثقافة والضيافة، وتحويل بيلاروسيا إلى أحد المراكز الرئيسية للسياحة العلاجية في أوروبا الشرقية.',
    
    // About - Values
    'about.values.title': 'قيمنا الأساسية',
    'about.values.patient.title': 'رعاية المريض',
    'about.values.patient.desc': 'نهج فردي واحترام واهتمام بكل مريض',
    'about.values.transparency.title': 'شفافية الأسعار',
    'about.values.transparency.desc': 'هيكل تكلفة واضح بدون رسوم خفية',
    'about.values.confidentiality.title': 'السرية',
    'about.values.confidentiality.desc': 'حماية صارمة للبيانات الشخصية والطبية',
    'about.values.standards.title': 'المعايير الدولية',
    'about.values.standards.desc': 'العلاج وفق البروتوكولات السريرية العالمية المعترف بها',
    
    // About - Strategy
    'about.strategy.title': 'الرؤية الاستراتيجية',
    'about.strategy.subtitle': 'شركة "ستانوبرينت" تركز على ثلاث مهام استراتيجية',
    'about.strategy.turnkey.title': 'خدمة شاملة "تسليم مفتاح"',
    'about.strategy.turnkey.desc': 'التنسيق الكامل لمسار المريض، بما في ذلك التشخيص والعلاج وإعادة التأهيل والإقامة والترجمة الطبية والخدمات اللوجستية.',
    'about.strategy.cooperation.title': 'التعاون الدولي',
    'about.strategy.cooperation.desc': 'تطوير علاقات مؤسسية وحكومية طويلة الأمد مع الدول العربية ومناطق أخرى في مجالات الصحة والتعليم والأدوية.',
    'about.strategy.reputation.title': 'بناء السمعة الدولية للطب البيلاروسي',
    'about.strategy.reputation.desc': 'تعزيز الوعي والثقة في طب جمهورية بيلاروسيا من خلال تقديم خدمات طبية عالية الجودة للمرضى الأجانب بأسعار تنافسية.',
    
    // About - Company
    'about.company.title': 'من نحن',
    'about.company.legal': 'الكيان القانوني',
    'about.company.name': 'شركة ذات مسؤولية محدودة "ستانوبرينت"',
    'about.company.address.label': 'العنوان القانوني',
    'about.company.address.value': '220124، جمهورية بيلاروسيا، مينسك، شارع م. لينكوفا، مبنى 101/3، مكتب 44',
    'about.company.phone.label': 'الهاتف / الفاكس',
    
    // About - Role
    'about.role.title': 'دورنا',
    'about.role.text1': 'تعمل شركة "ستانوبرينت" كمنسق للسياحة العلاجية للمرضى الأجانب الذين يخططون للعلاج في جمهورية بيلاروسيا.',
    'about.role.text2': 'تقدم الشركة خدمات تنظيمية ومعلوماتية وتنسيقية حصرياً، مما يضمن التفاعل الفعال للمرضى مع المؤسسات الطبية المعتمدة.',
    
    // About - Why Belarus
    'about.whybelarus.title': 'لماذا بيلاروسيا',
    'about.whybelarus.subtitle': 'بيلاروسيا من بين الدول الرائدة في أوروبا الشرقية التي تتمتع بمزايا تنافسية كبيرة في مجال الرعاية الصحية',
    'about.whybelarus.specialists': 'مستوى عالٍ من المتخصصين الطبيين',
    'about.whybelarus.equipment': 'معدات تشخيصية وعلاجية حديثة',
    'about.whybelarus.system': 'نظام رعاية صحية حكومي شامل',
    'about.whybelarus.prices': 'أسعار شفافة ومعقولة',
    'about.whybelarus.directions': 'أكثر التخصصات الطبية طلباً:',
    'about.whybelarus.dir.oncology': 'الأورام والأشعة',
    'about.whybelarus.dir.cardiology': 'أمراض القلب وجراحة العظام',
    'about.whybelarus.dir.ophthalmology': 'طب العيون',
    'about.whybelarus.dir.endocrinology': 'الغدد الصماء وعلاج السمنة',
    'about.whybelarus.dir.diagnostics': 'التشخيص الشامل وإعادة التأهيل',
    'about.whybelarus.stats': 'في عام 2024، تلقى أكثر من 160,000 مواطن أجنبي من 159 دولة الرعاية الطبية في بيلاروسيا، بما في ذلك أكثر من 1,000 مريض من ليبيا.',
    
    // About - Advantages
    'about.advantages.title': 'المزايا الرئيسية للطب البيلاروسي',
    'about.advantages.quality.title': 'الجودة',
    'about.advantages.reputation.title': 'السمعة',
    'about.advantages.comfort.title': 'الأمان والراحة',
    'about.quality.protocols': 'البروتوكولات السريرية الدولية (NCCN، ESMO، ESC)',
    'about.quality.equipment': 'معدات عالية التقنية: PET-CT، MRI 3 Tesla، VMAT، أنظمة Da Vinci الروبوتية، التنقل ثلاثي الأبعاد',
    'about.quality.doctors': 'أكثر من 45,000 طبيب في جميع أنحاء البلاد',
    'about.quality.training': 'متخصصون تدربوا في ألمانيا وإسرائيل وكوريا الجنوبية وبولندا',
    'about.reputation.oncology': 'واحدة من أقوى مدارس الأورام في المنطقة',
    'about.reputation.diagnostics': 'دقة تشخيصية عالية',
    'about.reputation.complications': 'معدل مضاعفات منخفض',
    'about.reputation.ethics': 'معايير صارمة للأخلاقيات الطبية',
    'about.comfort.safety': 'دولة أوروبية آمنة',
    'about.comfort.cities': 'مدن نظيفة وبنية تحتية واضحة',
    'about.comfort.languages': 'طاقم يتحدث الإنجليزية والروسية وجزئياً العربية',
    'about.advantages.duration': 'متوسط مدة إقامة المريض: 7-14 يوماً',
    
    // About - Medical Centers
    'about.centers.title': 'المراكز الطبية الرائدة',
    'about.centers.table.name': 'المركز الطبي',
    'about.centers.table.profile': 'التخصص',
    'about.centers.cardiology.name': 'مركز RNPC لأمراض القلب',
    'about.centers.cardiology.profile': 'جراحة القلب، التشخيص، جراحة الأوعية الدموية',
    'about.centers.oncology.name': 'مركز RNPC للأورام',
    'about.centers.oncology.profile': 'العلاج الكيميائي، العلاج الإشعاعي، العلاج الجراحي',
    'about.centers.neurosurgery.name': 'مركز RNPC لجراحة الأعصاب',
    'about.centers.neurosurgery.profile': 'جراحة الدماغ والعمود الفقري',
    'about.centers.lode.name': 'مركز LODE الطبي',
    'about.centers.lode.profile': 'برامج الفحص الشامل، التشخيص',
    'about.centers.newmed.name': 'عيادة الطب الجديد',
    'about.centers.newmed.profile': 'الجراحة التجميلية والترميمية',
    'about.centers.ophthalmology.name': 'عيادة طب العيون البيلاروسية',
    'about.centers.ophthalmology.profile': 'تصحيح الرؤية بالليزر، علاج إعتام عدسة العين',
    'about.centers.yunost.name': 'مصحة يونوست',
    'about.centers.yunost.profile': 'برامج إعادة التأهيل المتميزة',
    
    // About - Tourism
    'about.tourism.title': 'السياحة العلاجية والبرامج الثقافية',
    'about.tourism.subtitle': 'للمرضى الذين يخضعون لعلاج غير مكثف والمرافقين تتوفر برامج إضافية',
    'about.tourism.historical': 'مينسك التاريخية، قلعة مير، نسفيج',
    'about.tourism.parks': 'المحميات الطبيعية والجولات الإثنية',
    'about.tourism.spa': 'مجمعات السبا والعافية، الينابيع المعدنية',
    'about.tourism.gastro': 'جولات التسوق والطهي الموسمية',
    'about.tourism.note': 'هذه البرامج تزيد من جاذبية الباقات للعملاء العائليين وكبار الشخصيات.',
    
    // About - Our Services
    'about.ourservices.title': 'نطاق الخدمات',
    'about.ourservices.subtitle': 'تقدم شركة "ستانوبرينت" خدمات تنظيمية ومعلوماتية وتنسيقية حصرياً',
    'about.services.clinic': 'اختيار العيادة وبرامج التشخيص والعلاج الأولية بناءً على المستندات الطبية المقدمة من المريض',
    'about.services.cost': 'الحصول على تقديرات تكلفة التشخيص والعلاج من العيادات',
    'about.services.arrival': 'تنظيم الوصول إلى بيلاروسيا (الاستقبال في المطار، التحويلات - بالاتفاق)',
    'about.services.accommodation': 'تنظيم الإقامة (الفنادق، الشقق، المصحات)',
    'about.services.leisure': 'تنظيم الترفيه والبرامج السياحية والثقافية',
    'about.services.transfers': 'تنظيم التحويلات داخل بيلاروسيا (باتفاق منفصل)',
    'about.services.communication': 'الدعم المعلوماتي والمساعدة في التواصل مع العيادات (الترجمة، تنسيق المواعيد والإجراءات)',
    
    // About - Disclaimer
    'about.disclaimer.title': 'إخلاء المسؤولية القانونية',
    'about.disclaimer.text1': 'جميع الخدمات الطبية (التشخيص، العلاج، التدخلات الجراحية، إعادة التأهيل) تقدم مباشرة من قبل المؤسسات الطبية بناءً على عقود منفصلة بين المريض والعيادة المعنية.',
    'about.disclaimer.text2': 'شركة "ستانوبرينت":',
    'about.disclaimer.important': 'مهم:',
    'about.disclaimer.point1': 'ليست منظمة طبية',
    'about.disclaimer.point2': 'لا تقدم خدمات طبية',
    'about.disclaimer.point3': 'لا تتدخل في عملية التشخيص والعلاج',
    'about.disclaimer.point4': 'ليست مسؤولة عن القرارات الطبية للأطباء، نتائج العلاج، المضاعفات المحتملة، الآثار الجانبية والتغييرات في تكلفة العلاج بسبب الضرورة الطبية',
    'about.disclaimer.permits': 'تصاريح السياحة على أراضي جمهورية بيلاروسيا صادرة وفقاً للإجراءات المعمول بها.',
    
    // About - Offices
    'about.offices.title': 'المكاتب والممثليات',
    'about.offices.headquarters': 'المكتب الرئيسي',
    'about.offices.representation': 'الممثلية',
    'about.offices.belarus.title': 'بيلاروسيا',
    'about.offices.oman.title': 'عُمان',
    'about.offices.oman.reg': 'رقم التسجيل',
    'about.offices.oman.address': 'الخوير / بوشر / محافظة مسقط',
    
    // Tourism Page
    'tourism.hero.badge': 'السياحة العلاجية في جمهورية بيلاروسيا',
    'tourism.hero.title': 'السياحة العلاجية في جمهورية بيلاروسيا',
    'tourism.hero.intro': 'تمتلك بيلاروسيا جميع المقومات اللازمة لتصبح وجهة جديدة وواعدة للسياحة العلاجية لمواطني الدول العربية ومناطق أخرى من العالم. المستوى العالي للطب والتقنيات الحديثة والأسعار المعقولة والبيئة الآمنة تجعل البلاد جذابة بشكل خاص للمرضى الأجانب.',
    'tourism.hero.gap': 'في الوقت نفسه، لم يكن هناك حتى الآن مشغل متخصص في السوق قادر على دمج الخدمات الطبية واللوجستية والثقافية والخدمية في نظام واحد مريح ومفهوم، مكيف مع التقاليد الإسلامية وعقلية المرضى العرب.',
    
    'tourism.project.title': 'مشروع ARABIA.BY',
    'tourism.project.desc': 'يصبح مشروع ARABIA.BY أول حل شامل لا يقدم فقط جولة طبية، بل يشكل قطاعاً جديداً في السوق — السياحة الطبية والثقافية، القائمة على:',
    'tourism.project.point1': 'احترام الخصوصيات الدينية والثقافية',
    'tourism.project.point2': 'المرافقة الشخصية',
    'tourism.project.point3': 'المعايير العالية للخدمة الطبية',
    'tourism.project.value': 'هذا يخلق قيمة استراتيجية عالية للمشروع، وجاذبية استثمارية، وآفاق مستدامة للتعاون الدولي.',
    
    'tourism.state.title': 'حالة السياحة العلاجية في بيلاروسيا',
    'tourism.state.desc': 'السياحة العلاجية في جمهورية بيلاروسيا — قطاع يتطور بثبات، حيث شكلت البلاد خلال السنوات الأخيرة سمعة دولية قوية كمورد لخدمات طبية عالية الجودة بأسعار تنافسية.',
    'tourism.state.flow': 'في الفترة 2010-2019، تجاوز التدفق السنوي للمرضى الأجانب 150,000 شخص.',
    'tourism.state.recovery': 'بعد تراجع مؤقت مرتبط بجائحة COVID-19، يظهر السوق منذ عام 2022 انتعاشاً ونمواً مستقرين.',
    'tourism.state.factors.title': 'يساهم في تطوير السياحة العلاجية:',
    'tourism.state.factor1': 'نمو الثقة في نظام الرعاية الصحية البيلاروسي',
    'tourism.state.factor2': 'توسع التعاون مع دول الشرق الأوسط وأفريقيا',
    'tourism.state.factor3': 'تطوير المراكز الطبية الحكومية والخاصة ذات المستوى الدولي',
    'tourism.state.feature': 'الميزة الرئيسية للنموذج البيلاروسي — التوجه ليس نحو الإجراءات التجميلية الجماعية، بل نحو العلاج عالي التقنية والتأهيل والوقاية في المجالات الطبية المتخصصة.',
    
    'tourism.directions.title': 'التخصصات الطبية الرئيسية',
    'tourism.directions.oncology.title': 'الأورام والأشعة',
    'tourism.directions.oncology.desc': 'بيلاروسيا من بين الرواد الإقليميين في علاج أمراض الأورام.',
    'tourism.directions.oncology.point1': 'تشخيص عالي الدقة',
    'tourism.directions.oncology.point2': 'طرق حديثة للعلاج الكيميائي والإشعاعي',
    'tourism.directions.oncology.point3': 'نهج متعدد التخصصات شامل',
    'tourism.directions.oncology.centers': 'المراكز الرائدة:',
    'tourism.directions.oncology.center1': 'مركز RNPC للأورام والأشعة الطبية باسم ن.ن. ألكسندروف',
    'tourism.directions.oncology.center2': 'مركز RNPC لزراعة الأعضاء والأنسجة (بما في ذلك زراعة نخاع العظام)',
    
    'tourism.directions.cardiology.title': 'أمراض القلب وجراحة القلب',
    'tourism.directions.cardiology.point1': 'عمليات القلب المفتوح',
    'tourism.directions.cardiology.point2': 'جراحة المجازة التاجية',
    'tourism.directions.cardiology.point3': 'تركيب الدعامات ومنظمات ضربات القلب',
    'tourism.directions.cardiology.price': 'تكلفة جراحات القلب أقل بـ 2-3 مرات مقارنة بدول أوروبا الغربية، مع جودة مماثلة.',
    'tourism.directions.cardiology.center': 'المركز الرئيسي: مركز RNPC "أمراض القلب" — أحد مراكز القلب الرائدة في أوروبا الشرقية.',
    
    'tourism.directions.orthopedics.title': 'جراحة العظام والإصابات',
    'tourism.directions.orthopedics.point1': 'استبدال مفاصل الورك والركبة',
    'tourism.directions.orthopedics.point2': 'فترات انتظار قصيرة للعمليات',
    'tourism.directions.orthopedics.point3': 'إعادة تأهيل فعالة',
    'tourism.directions.orthopedics.centers': 'المؤسسات الرئيسية:',
    'tourism.directions.orthopedics.center1': 'مركز RNPC للإصابات وجراحة العظام (مينسك)',
    'tourism.directions.orthopedics.center2': 'المركز البيلاروسي للأطراف الصناعية وإعادة التأهيل العظمي',
    
    'tourism.directions.ivf.title': 'الطب التناسلي (أطفال الأنابيب)',
    'tourism.directions.ivf.point1': 'برامج أطفال الأنابيب الحديثة',
    'tourism.directions.ivf.point2': 'معدلات نجاح عالية',
    'tourism.directions.ivf.point3': 'تكلفة الإجراءات أقل بـ 2-4 مرات مقارنة بدول الاتحاد الأوروبي',
    'tourism.directions.ivf.centers': 'المراكز الرائدة:',
    'tourism.directions.ivf.center1': 'المركز الدولي لتقنيات الإنجاب "ميديكا"',
    'tourism.directions.ivf.center2': 'مركز RNPC "الأم والطفل"',
    
    'tourism.directions.ophthalmology.title': 'طب العيون',
    'tourism.directions.ophthalmology.point1': 'علاج إعتام عدسة العين والجلوكوما واعتلال الشبكية',
    'tourism.directions.ophthalmology.point2': 'جراحة العين المجهرية',
    'tourism.directions.ophthalmology.point3': 'استعادة الرؤية في مضاعفات السكري',
    'tourism.directions.ophthalmology.center': 'المركز الرئيسي: معهد مينسك لأبحاث أمراض العيون',
    
    'tourism.why.title': 'لماذا يختار المرضى بيلاروسيا',
    'tourism.why.prices.title': 'أسعار تنافسية',
    'tourism.why.prices.point1': 'الخدمات الطبية أرخص بنسبة 30-50% من أوروبا الغربية',
    'tourism.why.prices.point2': 'أقل بنسبة 20-30% من روسيا وكازاخستان',
    'tourism.why.prices.point3': 'تسعير شفاف بدون تكاليف خفية',
    
    'tourism.why.quality.title': 'جودة طبية عالية',
    'tourism.why.quality.point1': 'بروتوكولات سريرية دولية (NCCN، ESMO، ESC)',
    'tourism.why.quality.point2': 'معدات عالية التقنية: PET-CT، MRI 3T، VMAT، أنظمة روبوتية، تنقل ثلاثي الأبعاد',
    'tourism.why.quality.point3': 'أكثر من 45,000 طبيب في جميع أنحاء البلاد',
    'tourism.why.quality.point4': 'متخصصون تدربوا في ألمانيا وإسرائيل وكوريا الجنوبية',
    
    'tourism.why.safety.title': 'الأمان والراحة',
    'tourism.why.safety.point1': 'دولة مستقرة وآمنة',
    'tourism.why.safety.point2': 'مدن نظيفة وبنية تحتية متطورة',
    'tourism.why.safety.point3': 'بيئة ودية',
    'tourism.why.safety.point4': 'طاقم طبي وخدمي يتحدث الروسية والإنجليزية وجزئياً العربية',
    
    'tourism.why.convenience.title': 'الراحة والسرعة',
    'tourism.why.convenience.point1': 'لا توجد فترات انتظار طويلة',
    'tourism.why.convenience.point2': 'تنسيق سريع للعلاج',
    'tourism.why.convenience.point3': 'متوسط مدة إقامة المريض — 7-14 يوماً',
    
    'tourism.prospects.title': 'آفاق التطوير',
    'tourism.prospects.desc': 'لدى بيلاروسيا جميع الأسس لتصبح مركزاً إقليمياً للسياحة العلاجية في أوروبا الشرقية، خاصة في قطاعات الطب عالي التقنية والتأهيل.',
    'tourism.prospects.factors.title': 'عوامل النمو الرئيسية:',
    'tourism.prospects.factor1': 'تشكيل علامة تجارية موحدة Medical Belarus',
    'tourism.prospects.factor2': 'تبسيط إجراءات التأشيرات',
    'tourism.prospects.factor3': 'تطوير خدمات شاملة "تسليم مفتاح"',
    'tourism.prospects.factor4': 'شراكات دولية بين العيادات والجامعات والمشغلين الطبيين',
    
    'tourism.conclusion.title': 'الخلاصة',
    'tourism.conclusion.text1': 'السياحة العلاجية في بيلاروسيا في مرحلة نمو ناضج وتمتلك إمكانات عالية للتدويل. في الوقت نفسه، ظل المجال الموجه للدول العربية والسياق الثقافي الإسلامي حتى الآن شاغراً عملياً.',
    'tourism.conclusion.project': 'مشروع ARABIA.BY:',
    'tourism.conclusion.point1': 'يسد هذه الفجوة',
    'tourism.conclusion.point2': 'يجمع الخبرة الطبية البيلاروسية مع خدمة مكيفة ثقافياً',
    'tourism.conclusion.point3': 'يحول جمهورية بيلاروسيا إلى وجهة جذابة للمرضى من ليبيا وعُمان والإمارات ومصر والسعودية',
    'tourism.conclusion.final': 'ARABIA.BY — ليس مجرد سياحة علاجية. إنه شكل جديد من التعاون الدولي والثقة والدبلوماسية الإنسانية.',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'الشروط والأحكام',
    
    // Institutions
    'institutions.title': 'المؤسسات الطبية الرائدة',
    'institutions.subtitle': 'أفضل المستشفيات والمراكز الطبية في بيلاروسيا',
    'institutions.hero.badge': 'بيلاروسيا — عيادات للمرضى الأجانب',
    'institutions.hero.title': 'المؤسسات الطبية في بيلاروسيا',
    'institutions.hero.subtitle': 'ماذا يعالجون، أين يعالجون، خصائص الخدمة',
    
    'institutions.type.state': 'حكومي',
    'institutions.type.private': 'خاص',
    'institutions.profile.title': 'التخصص:',
    'institutions.foreigners.title': 'للأجانب:',
    
    // Categories
    'institutions.category.cardiology': 'أمراض القلب وجراحة القلب',
    'institutions.category.oncology': 'الأورام والأشعة',
    'institutions.category.transplant': 'زراعة الأعضاء',
    'institutions.category.neuro': 'جراحة الأعصاب وطب الأعصاب',
    'institutions.category.ortho': 'جراحة العظام والإصابات',
    'institutions.category.ivf': 'الطب التناسلي (ВРТ / ЭКО)',
    'institutions.category.eye': 'طب العيون',
    'institutions.category.vip': 'الطب VIP و Check-up',
    'institutions.category.multi': 'المستشفيات متعددة التخصصات',
    'institutions.category.rehab': 'إعادة التأهيل والطب التصالحي',
    
    // Cardiology Center
    'institutions.cardiology.name': 'المركز الجمهوري العلمي والعملي لأمراض القلب',
    'institutions.cardiology.address': 'مينسك، شارع روزا لوكسمبورغ، 110ب',
    'institutions.cardiology.profile1': 'أمراض القلب التداخلية (CAG، PCI، تركيب الدعامات)',
    'institutions.cardiology.profile2': 'جراحة القلب المفتوح',
    'institutions.cardiology.profile3': 'جراحة مجازة الشريان التاجي (CABG)',
    'institutions.cardiology.profile4': 'عمليات الصمامات',
    'institutions.cardiology.profile5': 'زراعة القلب والزراعات المركبة (بما في ذلك للأطفال)',
    'institutions.cardiology.foreign1': 'دورة علاجية كاملة',
    'institutions.cardiology.foreign2': 'إجراء منفصل للخدمات المدفوعة',
    'institutions.cardiology.foreign3': 'قسم دولي',
    'institutions.cardiology.foreign4': 'مرافقة المنسقين',
    
    // Oncology Center
    'institutions.oncology.name': 'المركز الوطني للأورام والأشعة الطبية ن.ن. ألكسندروف',
    'institutions.oncology.address': 'منطقة مينسك، قرية ليسنوي',
    'institutions.oncology.profile1': 'جراحة الأورام لجميع التوطينات',
    'institutions.oncology.profile2': 'العلاج الكيميائي والعلاج الموجه',
    'institutions.oncology.profile3': 'العلاج الإشعاعي عالي الدقة (IMRT، VMAT)',
    'institutions.oncology.profile4': 'أمراض الدم الأورامية',
    'institutions.oncology.foreign1': 'نظام خدمة منفصل',
    'institutions.oncology.foreign2': 'برامج مدفوعة رسمية',
    'institutions.oncology.foreign3': 'المساعدة في الخدمات اللوجستية والمواعيد',
    
    // Transplant Center
    'institutions.transplant.name': 'المركز الجمهوري العلمي والعملي لزراعة الأعضاء والأنسجة',
    'institutions.transplant.address': 'مينسك، شارع سيماشكو، 8',
    'institutions.transplant.profile1': 'زراعة الكلى',
    'institutions.transplant.profile2': 'زراعة الكبد',
    'institutions.transplant.profile3': 'زراعة نخاع العظم',
    'institutions.transplant.profile4': 'الزراعات المركبة',
    'institutions.transplant.foreign1': 'العلاج بموافقة فردية',
    'institutions.transplant.foreign2': 'مستوى دولي عالي للعمليات',
    'institutions.transplant.foreign3': 'المتابعة بعد الزراعة',
    
    // Neuro Center
    'institutions.neuro.name': 'المركز الجمهوري العلمي والعملي لطب الأعصاب وجراحة الأعصاب',
    'institutions.neuro.address': 'مينسك، شارع فرانتيسك سكورينا، 24',
    'institutions.neuro.profile1': 'أورام الجهاز العصبي',
    'institutions.neuro.profile2': 'جراحة الأعصاب الوعائية',
    'institutions.neuro.profile3': 'التدخلات داخل الأوعية الدموية',
    'institutions.neuro.profile4': 'الجراحة التجسيمية (DBS)',
    'institutions.neuro.profile5': 'جراحة أعصاب الأطفال',
    'institutions.neuro.foreign1': 'برامج مدفوعة',
    'institutions.neuro.foreign2': 'عمليات عالية التقنية',
    'institutions.neuro.foreign3': 'فترات انتظار قصيرة',
    
    // Ortho Center
    'institutions.ortho.name': 'المركز الجمهوري العلمي والعملي للإصابات وجراحة العظام',
    'institutions.ortho.address': 'مينسك، شارع كيجيفاتوفا، 60',
    'institutions.ortho.profile1': 'استبدال مفاصل الورك والركبة',
    'institutions.ortho.profile2': 'جراحة العمود الفقري',
    'institutions.ortho.profile3': 'الإصابات الرياضية',
    'institutions.ortho.foreign1': 'أسعار معقولة',
    'institutions.ortho.foreign2': 'دخول سريع للمستشفى',
    'institutions.ortho.foreign3': 'برامج إعادة التأهيل',
    
    // Prosthetic Center
    'institutions.prosthetic.name': 'المركز البيلاروسي للأطراف الصناعية وجراحة العظام والتأهيل',
    'institutions.prosthetic.address': 'مينسك، شارع أودويفسكوغو، 10',
    'institutions.prosthetic.profile1': 'الأطراف الصناعية الفردية',
    'institutions.prosthetic.profile2': 'استعادة الوظائف الحركية',
    'institutions.prosthetic.foreign1': 'حلول شخصية',
    'institutions.prosthetic.foreign2': 'إعادة تأهيل شاملة',
    
    // BINA Center
    'institutions.bina.name': 'المركز الدولي للتقنيات التناسلية BINA',
    'institutions.bina.address': 'مينسك، شارع نيمانسكايا، 67',
    'institutions.bina.profile1': 'التلقيح الصناعي IVF، ICSI',
    'institutions.bina.profile2': 'برامج التبرع',
    'institutions.bina.profile3': 'تجميد البويضات والحيوانات المنوية',
    'institutions.bina.foreign1': 'مرافقة باللغة الإنجليزية',
    'institutions.bina.foreign2': 'باقات شفافة',
    'institutions.bina.foreign3': 'نسبة نجاح عالية',
    
    // Mother and Child Center
    'institutions.mother.name': 'المركز الجمهوري العلمي والعملي "الأم والطفل"',
    'institutions.mother.address': 'مينسك، شارع أورلوفسكايا، 66',
    'institutions.mother.profile1': 'الدورة الكاملة للطب التناسلي',
    'institutions.mother.profile2': 'إدارة حالات الحمل المعقدة',
    'institutions.mother.foreign1': 'برامج حكومية',
    'institutions.mother.foreign2': 'بروتوكولات العلاج الدولية',
    
    // Ophthalmology Clinic
    'institutions.ophthalmology.name': 'عيادة بيلاروسيا لطب العيون',
    'institutions.ophthalmology.address': 'مينسك، شارع بريتيتسكوغو، 79',
    'institutions.ophthalmology.profile1': 'تصحيح الرؤية بالليزر',
    'institutions.ophthalmology.profile2': 'إعتام عدسة العين',
    'institutions.ophthalmology.profile3': 'الجلوكوما',
    'institutions.ophthalmology.foreign1': 'إجراءات سريعة',
    'institutions.ophthalmology.foreign2': 'علاج خارجي',
    'institutions.ophthalmology.foreign3': 'فترة إقامة قصيرة',
    
    // Eye Research Institute
    'institutions.eye.name': 'معهد مينسك لأبحاث أمراض العيون',
    'institutions.eye.address': 'مينسك، شارع كولاسا، 16',
    'institutions.eye.profile1': 'جراحة العيون الدقيقة',
    'institutions.eye.profile2': 'حالات طب العيون المعقدة',
    
    // VIP Clinic
    'institutions.vip.name': 'المركز الطبي السريري الجمهوري (VIP-Clinic)',
    'institutions.vip.address': 'مينسك، شارع جدانوفيتشسكايا، 18',
    'institutions.vip.profile1': 'برامج Check-up الشاملة',
    'institutions.vip.profile2': 'الجراحة والتنظير',
    'institutions.vip.profile3': 'التشخيص المتميز',
    'institutions.vip.foreign1': 'غرف مريحة للغاية',
    'institutions.vip.foreign2': 'مرافقة شخصية',
    'institutions.vip.foreign3': 'فحوصات سريعة',
    
    // Hospital 5
    'institutions.hospital5.name': 'المستشفى السريري رقم 5 في مينسك',
    'institutions.hospital5.address': 'مينسك، شارع فيلاتوفا، 9',
    'institutions.hospital5.profile1': 'الجراحة العامة',
    'institutions.hospital5.profile2': 'العلاج',
    'institutions.hospital5.profile3': 'التشخيص',
    'institutions.hospital5.foreign1': 'خدمات مدفوعة رسمية',
    'institutions.hospital5.foreign2': 'العمل من خلال المشغلين الطبيين',
    'institutions.hospital5.foreign3': 'أسعار ثابتة',
    
    // Yunost Sanatorium
    'institutions.yunost.name': 'مصحة "يونوست"',
    'institutions.yunost.address': 'منطقة مينسك، خزان زاسلافسكوي',
    'institutions.yunost.profile1': 'إعادة تأهيل القلب والأعصاب',
    'institutions.yunost.profile2': 'التعافي بعد العمليات',
    'institutions.yunost.profile3': 'العافية والسبا',
    'institutions.yunost.foreign1': 'برامج متميزة',
    'institutions.yunost.foreign2': 'إقامة مريحة',
    'institutions.yunost.foreign3': 'صيغة عائلية',
    
    // Summary
    'institutions.summary.title': 'ملخص للموقع',
    'institutions.summary.point1': 'مجموعة كاملة من الطب عالي التقنية',
    'institutions.summary.point2': 'أسعار أقل بنسبة 30-70% من الاتحاد الأوروبي',
    'institutions.summary.point3': 'مراكز حكومية بمستوى عالمي',
    'institutions.summary.point4': 'بيئة آمنة ومريحة',
    'institutions.summary.point5': 'لا انتظار وعلاج سريع',
    
    // Doctors
    'doctors.title': 'أطباؤنا الرائدون',
    'doctors.subtitle': 'نخبة من الأطباء المتخصصين في المؤسسات الطبية الرائدة في بيلاروسيا',
    'doctors.experience': 'سنوات الخبرة',
    'doctors.operations': 'عملية ناجحة',
    
    // Doctor Clinics
    'doctors.clinic.cardiology.name': 'مركز RNPC لأمراض القلب',
    'doctors.clinic.cardiology.address': 'مينسك، شارع روزا لوكسمبورغ، 110ب',
    'doctors.clinic.oncology.name': 'مركز NNPC للأورام والأشعة الطبية باسم ن.ن. ألكسندروف',
    'doctors.clinic.oncology.address': 'منطقة مينسك، قرية ليسنوي',
    'doctors.clinic.neurosurgery.name': 'مركز RNPC لطب الأعصاب وجراحة الأعصاب',
    'doctors.clinic.neurosurgery.address': 'مينسك، شارع فرانسيسك سكارينا، 24',
    'doctors.clinic.vip.name': 'المركز الطبي السريري الجمهوري (VIP-Clinic)',
    'doctors.clinic.vip.address': 'مينسك، جدانوفيتشي، مبنى 81، بناء 5',
    'doctors.clinic.orthopedics.name': 'مركز RNPC للإصابات وجراحة العظام',
    'doctors.clinic.orthopedics.address': 'مينسك، شارع كيجيفاتوفا، 60',
    'doctors.clinic.reproductive.name': 'المركز الدولي لتقنيات الإنجاب BINA',
    'doctors.clinic.reproductive.address': 'مينسك، شارع نيمانسكايا، 67',
    
    // Individual Doctors - Cardiology
    'doctors.ostrovsky.name': 'يوري بتروفيتش أوستروفسكي',
    'doctors.ostrovsky.degree': 'دكتور في العلوم الطبية، أستاذ، أكاديمي',
    'doctors.ostrovsky.specialty': 'جراحة القلب، زراعة القلب',
    'doctors.ostrovsky.experience': 'أكثر من 30 عاماً',
    'doctors.ostrovsky.clinic': 'مركز RNPC لأمراض القلب',
    
    'doctors.shket.name': 'ألكسندر بافلوفيتش شكيت',
    'doctors.shket.degree': 'مرشح العلوم الطبية',
    'doctors.shket.specialty': 'جراحة القلب',
    'doctors.shket.experience': 'أكثر من 27 عاماً',
    'doctors.shket.clinic': 'المركز الطبي السريري الجمهوري',
    
    'doctors.gubar.name': 'إيلينا نيكولايفنا غوبار',
    'doctors.gubar.degree': 'طبيب من أعلى فئة تأهيلية',
    'doctors.gubar.specialty': 'أمراض القلب',
    'doctors.gubar.experience': 'أكثر من 38 عاماً',
    'doctors.gubar.clinic': 'المركز الطبي السريري الجمهوري',
    
    'doctors.dovnar.name': 'نيللي ماريانوفنا دوفنار',
    'doctors.dovnar.degree': 'طبيب متخصص',
    'doctors.dovnar.specialty': 'أمراض القلب',
    'doctors.dovnar.experience': '28 عاماً',
    'doctors.dovnar.clinic': 'المركز الطبي السريري الجمهوري',
    
    // Individual Doctors - Oncology
    'doctors.karanik.name': 'فلاديمير ستيبانوفيتش كارانيك',
    'doctors.karanik.degree': 'مرشح العلوم الطبية',
    'doctors.karanik.specialty': 'أورام الصدر، جراحة الرئة',
    'doctors.karanik.experience': 'سنوات عديدة',
    'doctors.karanik.clinic': 'مركز RNPC للأورام',
    
    'doctors.gizemova.name': 'أولغا أناتوليفنا غيزيموفا',
    'doctors.gizemova.degree': 'مرشح العلوم الطبية',
    'doctors.gizemova.specialty': 'الأورام الإشعاعية',
    'doctors.gizemova.experience': 'سنوات عديدة',
    'doctors.gizemova.clinic': 'مركز RNPC للأورام',
    
    'doctors.aleinikova.name': 'أولغا فيتاليفنا أليينيكوفا',
    'doctors.aleinikova.degree': 'دكتور في العلوم الطبية، أستاذ',
    'doctors.aleinikova.specialty': 'أورام الأطفال وأمراض الدم',
    'doctors.aleinikova.experience': 'سنوات عديدة',
    'doctors.aleinikova.clinic': 'مركز أبحاث أورام الأطفال',
    
    // Individual Doctors - Neurosurgery
    'doctors.sidorovich.name': 'ريشارد رومالدوفيتش سيدوروفيتش',
    'doctors.sidorovich.degree': 'دكتور في العلوم الطبية، أستاذ',
    'doctors.sidorovich.specialty': 'طب الأعصاب وجراحة الأعصاب (مدير المركز)',
    'doctors.sidorovich.experience': 'سنوات عديدة',
    'doctors.sidorovich.clinic': 'مركز RNPC لجراحة الأعصاب',
    
    'doctors.talabaev.name': 'ميخائيل فلاديميروفيتش تالاباييف',
    'doctors.talabaev.degree': 'دكتور في العلوم الطبية، دوتسنت',
    'doctors.talabaev.specialty': 'جراحة أعصاب الأطفال',
    'doctors.talabaev.experience': 'سنوات عديدة',
    'doctors.talabaev.clinic': 'مركز RNPC لجراحة الأعصاب',
    
    'doctors.vasilevich.name': 'إدوارد نيكولايفيتش فاسيليفيتش',
    'doctors.vasilevich.degree': 'مرشح العلوم الطبية، دوتسنت',
    'doctors.vasilevich.specialty': 'جراحة الأعصاب',
    'doctors.vasilevich.experience': 'سنوات عديدة',
    'doctors.vasilevich.clinic': 'مركز RNPC لجراحة الأعصاب',
    
    'doctors.bunyak.name': 'آنا غيورغيفنا بونياك',
    'doctors.bunyak.degree': 'مرشح العلوم الطبية، دوتسنت',
    'doctors.bunyak.specialty': 'طب الأعصاب',
    'doctors.bunyak.experience': 'سنوات عديدة',
    'doctors.bunyak.clinic': 'مركز RNPC لجراحة الأعصاب',
    
    // Individual Doctors - VIP Clinic
    'doctors.burko.name': 'فلاديمير دميتريفيتش بوركو',
    'doctors.burko.degree': 'مرشح العلوم',
    'doctors.burko.specialty': 'المسالك البولية',
    'doctors.burko.experience': '34 عاماً',
    'doctors.burko.clinic': 'المركز الطبي السريري الجمهوري',
    
    'doctors.geyno.name': 'إيلينا فلاديميروفنا غيينو',
    'doctors.geyno.degree': 'طبيب متخصص',
    'doctors.geyno.specialty': 'الأنف والأذن والحنجرة',
    'doctors.geyno.experience': '32 عاماً',
    'doctors.geyno.clinic': 'المركز الطبي السريري الجمهوري',
    
    'doctors.olikhver.name': 'يوري أليكسييفيتش أوليخفير',
    'doctors.olikhver.degree': 'جراح قلب',
    'doctors.olikhver.specialty': 'جراحة القلب',
    'doctors.olikhver.experience': '24 عاماً',
    'doctors.olikhver.clinic': 'المركز الطبي السريري الجمهوري',
    
    'doctors.glybovskaya.name': 'تاتيانا فيكينتيفنا غليبوفسكايا',
    'doctors.glybovskaya.degree': 'مرشح العلوم الطبية',
    'doctors.glybovskaya.specialty': 'أمراض القلب',
    'doctors.glybovskaya.experience': '31 عاماً',
    'doctors.glybovskaya.clinic': 'المركز الطبي السريري الجمهوري',
    
    // Individual Doctors - Orthopedics
    'doctors.volkov.name': 'سيرغي إيفانوفيتش فولكوف',
    'doctors.volkov.degree': 'طبيب متخصص',
    'doctors.volkov.specialty': 'جراحة العظام، استبدال المفاصل',
    'doctors.volkov.experience': 'أكثر من 25 عاماً',
    'doctors.volkov.clinic': 'مركز RNPC للإصابات وجراحة العظام',
    
    // Individual Doctors - Reproductive
    'doctors.kuznetsova.name': 'ماريا بتروفنا كوزنتسوفا',
    'doctors.kuznetsova.degree': 'طبيب متخصص',
    'doctors.kuznetsova.specialty': 'تقنيات الإنجاب المساعدة / أطفال الأنابيب',
    'doctors.kuznetsova.experience': 'أكثر من 15 عاماً',
    'doctors.kuznetsova.clinic': 'المركز الدولي لتقنيات الإنجاب BINA',
    
    // Prices
    'prices.title': 'الأسعار',
    'prices.subtitle': 'أسعار تنافسية وشفافة',
    'prices.includes': 'يشمل',
    'prices.from': 'ابتداءً من',
    'prices.or': 'أو',
    'prices.device': 'الجهاز',
    'prices.service': 'الخدمة',
    'prices.cost': 'التكلفة، USD',
    'prices.profile': 'التخصص',
    'prices.estimate': 'التكلفة التقديرية، USD',
    
    // Prices Hero
    'prices.hero.title': 'أسعار وشروط السياحة العلاجية في بيلاروسيا',
    'prices.hero.subtitle': 'تقدم بيلاروسيا للمرضى الأجانب رعاية طبية عالية الجودة في العيادات الحكومية والخاصة بأسعار تنافسية',
    
    // Important Note
    'prices.important.title': 'ملاحظة مهمة',
    'prices.important.text': 'الأسعار المذكورة تقديرية. يتم تحديد التكلفة النهائية للعلاج من قبل المؤسسة الطبية بعد دراسة المستندات الطبية وإجراء التشخيص الأولي.',
    
    // Treatment Prices Title
    'prices.treatment.title': 'الأسعار التقديرية للعلاج',
    
    // Cardiology
    'prices.cardiology.title': 'أمراض القلب وجراحة القلب',
    'prices.cardiology.subtitle': 'المراكز الحكومية المتخصصة',
    'prices.cardiology.profile': 'مرض الشريان التاجي، عيوب الصمامات، عدم انتظام ضربات القلب، قصور القلب، جراحة القلب التداخلية والمفتوحة',
    'prices.cardiology.cag': 'تصوير الشرايين التاجية (CAG)',
    'prices.cardiology.stenting': 'تركيب الدعامة (1 دعامة)',
    'prices.cardiology.cabg': 'جراحة تحويل مسار الشريان التاجي (CABG)',
    'prices.cardiology.valve': 'استبدال صمام القلب',
    'prices.cardiology.pacemaker': 'زراعة جهاز تنظيم ضربات القلب',
    'prices.cardiology.ablation': 'الاستئصال بالترددات الراديوية',
    'prices.cardiology.tavi': 'TAVI (حسب المؤشرات)',
    
    // Oncology
    'prices.oncology.title': 'الأورام والإشعاع',
    'prices.oncology.subtitle': 'مراكز الأورام الحكومية',
    'prices.oncology.profile': 'أورام جميع المواقع، جراحة الأورام، العلاج الكيميائي والإشعاعي، العلاج الموجه، CAR-T (حسب المؤشرات)',
    'prices.oncology.gastrectomy': 'استئصال المعدة',
    'prices.oncology.whipple': 'عملية ويبل',
    'prices.oncology.lobectomy': 'استئصال فص الرئة',
    'prices.oncology.thyroid': 'جراحة الغدة الدرقية',
    'prices.oncology.radiation': 'العلاج الإشعاعي (IMRT / VMAT)',
    'prices.oncology.chemo': 'العلاج الكيميائي (دورة واحدة)',
    'prices.oncology.cart': 'CAR-T (مرحلة التحضير)',
    
    // Neurology
    'prices.neuro.title': 'أمراض الأعصاب وجراحة الأعصاب',
    'prices.neuro.subtitle': 'مراكز جراحة الأعصاب الحكومية',
    'prices.neuro.profile': 'أورام المخ، تمدد الأوعية الدموية، أمراض الأوعية الدموية، جراحة الأعصاب الوظيفية، DBS',
    'prices.neuro.mri': 'التصوير بالرنين المغناطيسي للدماغ',
    'prices.neuro.aneurysm': 'قص تمدد الأوعية الدموية',
    'prices.neuro.avm': 'إزالة التشوه الشرياني الوريدي',
    'prices.neuro.meningioma': 'إزالة الورم السحائي',
    'prices.neuro.dbs': 'DBS (زراعة ثنائية)',
    'prices.neuro.embolization': 'إصمام تمدد الأوعية الدموية',
    
    // IVF
    'prices.ivf.title': 'الطب التناسلي (التلقيح الصناعي)',
    'prices.ivf.subtitle': 'المراكز الخاصة المتخصصة',
    'prices.ivf.profile': 'العقم، التلقيح الصناعي، ICSI، برامج التبرع، الحفاظ على الخصوبة في حالات السرطان',
    'prices.ivf.basic': 'التلقيح الصناعي (الدورة الأساسية)',
    'prices.ivf.icsi': 'التلقيح الصناعي + ICSI',
    'prices.ivf.donor': 'التلقيح الصناعي مع بويضات متبرعة',
    'prices.ivf.oncofertility': 'الحفاظ على الخصوبة في حالات السرطان',
    
    // Transplant
    'prices.transplant.title': 'زراعة الأعضاء',
    'prices.transplant.subtitle': 'المراكز الوطنية المتخصصة',
    'prices.transplant.type': 'نوع الزراعة',
    'prices.transplant.kidney': 'الكلى',
    'prices.transplant.liver': 'الكبد',
    'prices.transplant.heart': 'القلب',
    'prices.transplant.note': 'يتم تحديد التكلفة بشكل فردي وتعتمد على الحالة السريرية والمتبرع والأدوية وفترة ما بعد الجراحة.',
    
    // Coordinator Services
    'prices.coordinator.title': 'تكلفة خدمات المنسق (المنفذ)',
    'prices.coordinator.intro': 'يتم تقديم الخدمات التنظيمية بشكل منفصل عن الخدمات الطبية التي تقدمها العيادات مباشرة.',
    'prices.coordinator.fee.title': 'رسوم الخدمة / أتعاب المنسق',
    'prices.coordinator.fee.text': 'يتم تحديد التكلفة بشكل فردي وتكون عادة:',
    'prices.coordinator.fee.percent': '5-10% من التكلفة التقديرية للتشخيص والعلاج',
    'prices.coordinator.fee.fixed': 'مبلغ ثابت من 1,500 إلى 5,000 دولار',
    'prices.coordinator.fee.note': 'يعتمد المبلغ على تعقيد الحالة الطبية ومدة الإقامة ونطاق المرافقة.',
    'prices.coordinator.services.title': 'تشمل خدمات المنسق:',
    'prices.coordinator.service1': 'تنسيق التفاعل مع العيادات',
    'prices.coordinator.service2': 'التنظيم المسبق للتشخيص والعلاج',
    'prices.coordinator.service3': 'تنظيم النقل والإقامة',
    'prices.coordinator.service4': 'الدعم المعلوماتي واللغوي',
    'prices.coordinator.service5': 'المساعدة في التواصل مع المؤسسات الطبية',
    'prices.coordinator.service6': 'تنظيم البرامج السياحية والثقافية (حسب الطلب)',
    
    // Payment
    'prices.payment.title': 'إجراءات وجدول الدفع',
    'prices.payment.advance.title': 'الدفعة المقدمة',
    'prices.payment.advance.item1': '50% من تكلفة خدمات المنسق',
    'prices.payment.advance.item2': 'التكلفة التقديرية للتشخيص والعلاج',
    'prices.payment.advance.item3': 'في موعد أقصاه 10 أيام تقويمية قبل الوصول إلى بيلاروسيا',
    'prices.payment.after.title': 'بعد التشخيص الأولي',
    'prices.payment.after.item1': 'تتفق العيادة والعميل على التكلفة النهائية للعلاج مباشرة',
    'prices.payment.after.item2': 'يتم دفع الخدمات الطبية مباشرة للعيادة',
    'prices.payment.after.item3': 'قد يعمل المنسق كوسيط دفع مؤقت، وليس كمنظمة طبية',
    'prices.payment.via.title': 'الدفع عبر المنسق (بالاتفاق)',
    'prices.payment.via.item1': 'يمكن قبول الأموال بالعملة القابلة للتحويل بحرية',
    'prices.payment.via.item2': 'الدفع اللاحق لخدمات العيادة والأطراف الثالثة',
    'prices.payment.via.item3': 'تقديم المستندات المؤيدة',
    'prices.payment.adjustment.title': 'تعديل التكلفة',
    'prices.payment.adjustment.text': 'ممكن في حالة:',
    'prices.payment.adjustment.item1': 'تغيير تركيبة الخدمات بمبادرة من العميل',
    'prices.payment.adjustment.item2': 'تغيير تعريفات الأطراف الثالثة (الإقامة، النقل، الرحلات)',
    'prices.payment.urgent.title': 'الحالات العاجلة',
    'prices.payment.urgent.text': 'عند التقديم قبل أقل من 10 أيام من الوصول:',
    'prices.payment.urgent.item1': 'يتم الاتفاق على الشروط بشكل فردي',
    'prices.payment.urgent.item2': 'قد تصل الدفعة المقدمة إلى 100% من تكلفة خدمات المنسق',
    
    // Partner Company
    'prices.partner.title': 'إمكانية الدفع عبر الشركة الشريكة',
    'prices.partner.intro': 'لراحة المرضى الأجانب وتحسين التسويات الدولية، يتوفر الدفع عبر شركة شريكة:',
    'prices.partner.usage': 'يمكن استخدام الشركة الشريكة:',
    'prices.partner.item1': 'لاستلام المدفوعات بالعملة القابلة للتحويل بحرية',
    'prices.partner.item2': 'للتحويل اللاحق للأموال إلى المنفذ، مع صرف الأموال للمريض بالروبل البيلاروسي بسعر صرف البنك المركزي لجمهورية بيلاروسيا للإيداع في خزائن العيادات',
    'prices.partner.item3': 'لتبسيط التسويات عبر الحدود وتقليل الرسوم المصرفية',
    'prices.partner.note.title': 'استخدام الشركة الشريكة لا يغير الوضع القانوني للمنسق:',
    'prices.partner.note.item1': 'المنسق ليس منظمة طبية',
    'prices.partner.note.item2': 'يتم تقديم الخدمات الطبية من قبل العيادات مباشرة',
    'prices.partner.note.item3': 'المنسق لا يتدخل في عملية العلاج',
    
    // Bank Details
    'prices.bank.title': 'التأكيد الرسمي للتفاصيل المصرفية',
    'prices.bank.text': 'يتم تقديم التفاصيل المصرفية فقط بناءً على طلب كتابي رسمي.',
    'prices.bank.confirmation': 'بعد التأكيد، يتم تزويد العميل بجميع مستندات الدفع والتأكيد اللازمة.',
    
    // Important for Patient
    'prices.patient.title': 'مهم للمريض',
    'prices.patient.item1': 'يقدم المنسق خدمات تنظيمية حصراً',
    'prices.patient.item2': 'القرارات الطبية تتخذها العيادة',
    'prices.patient.item3': 'يتم دفع الخدمات الطبية للعيادات مباشرة أو وفقاً للمخطط المتفق عليه',
    
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
    
    // About - Hero
    'about.hero.title': 'Профессиональная организация лечения в ведущих медицинских центрах Беларуси',
    'about.hero.subtitle': 'Международное сопровождение, конфиденциальность, индивидуальный медицинский подход',
    
    // About - Mission
    'about.mission.badge': 'Миссия и ценности',
    'about.mission.title': 'Наша миссия',
    'about.mission.text1': 'Обеспечить пациентам из стран Ближнего Востока и других стран мира доступ к лучшим медицинским услугам в Республике Беларусь.',
    'about.mission.text2': 'Наша миссия — объединить медицину, культуру и гостеприимство, превратив Беларусь в один из ключевых центров медицинского туризма Восточной Европы.',
    
    // About - Values
    'about.values.title': 'Наши ключевые ценности',
    'about.values.patient.title': 'Забота о пациенте',
    'about.values.patient.desc': 'Индивидуальный подход, уважение и внимание к каждому пациенту',
    'about.values.transparency.title': 'Прозрачность цен',
    'about.values.transparency.desc': 'Понятная структура стоимости без скрытых платежей',
    'about.values.confidentiality.title': 'Конфиденциальность',
    'about.values.confidentiality.desc': 'Строгая защита персональных и медицинских данных',
    'about.values.standards.title': 'Международные стандарты',
    'about.values.standards.desc': 'Лечение на основе признанных мировых клинических протоколов',
    
    // About - Strategy
    'about.strategy.title': 'Стратегическое видение',
    'about.strategy.subtitle': 'Компания «Станопринт» ориентируется на три стратегические задачи',
    'about.strategy.turnkey.title': 'Комплексный сервис «под ключ»',
    'about.strategy.turnkey.desc': 'Полная координация пути пациента, включая диагностику, лечение, реабилитацию, размещение, медицинский перевод и логистику.',
    'about.strategy.cooperation.title': 'Международное сотрудничество',
    'about.strategy.cooperation.desc': 'Развитие долгосрочных межгосударственных и институциональных связей с арабскими странами и другими регионами в сферах здравоохранения, образования и фармацевтики.',
    'about.strategy.reputation.title': 'Формирование международной репутации белорусской медицины',
    'about.strategy.reputation.desc': 'Повышение узнаваемости и доверия к медицине Республики Беларусь за счёт предоставления высококачественных медицинских услуг иностранным пациентам по конкурентоспособным ценам.',
    
    // About - Company
    'about.company.title': 'Кто мы',
    'about.company.legal': 'Юридическое лицо',
    'about.company.name': 'Общество с ограниченной ответственностью «Станопринт»',
    'about.company.address.label': 'Юридический адрес',
    'about.company.address.value': '220124, Республика Беларусь, г. Минск, ул. М. Лынькова, д. 101/3, офис 44',
    'about.company.phone.label': 'Телефон / факс',
    
    // About - Role
    'about.role.title': 'Наша роль',
    'about.role.text1': 'Компания «Станопринт» выступает в роли координатора медицинского туризма для иностранных пациентов, планирующих лечение в Республике Беларусь.',
    'about.role.text2': 'Компания оказывает исключительно организационные, информационные и координационные услуги, обеспечивая эффективное взаимодействие пациентов с аккредитованными медицинскими учреждениями.',
    
    // About - Why Belarus
    'about.whybelarus.title': 'Почему Беларусь',
    'about.whybelarus.subtitle': 'Беларусь входит в число ведущих государств Восточной Европы, обладающих значительными конкурентными преимуществами в сфере здравоохранения',
    'about.whybelarus.specialists': 'Высокий уровень медицинских специалистов',
    'about.whybelarus.equipment': 'Современное диагностическое и лечебное оборудование',
    'about.whybelarus.system': 'Комплексная государственная система здравоохранения',
    'about.whybelarus.prices': 'Доступные и прозрачные цены',
    'about.whybelarus.directions': 'Наиболее востребованные медицинские направления:',
    'about.whybelarus.dir.oncology': 'Онкология и радиология',
    'about.whybelarus.dir.cardiology': 'Кардиология и ортопедия',
    'about.whybelarus.dir.ophthalmology': 'Офтальмология',
    'about.whybelarus.dir.endocrinology': 'Эндокринология и лечение ожирения',
    'about.whybelarus.dir.diagnostics': 'Комплексная диагностика и реабилитация',
    'about.whybelarus.stats': 'В 2024 году медицинскую помощь в Беларуси получили более 160 000 иностранных граждан из 159 стран, включая более 1 000 пациентов из Ливии.',
    
    // About - Advantages
    'about.advantages.title': 'Ключевые преимущества белорусской медицины',
    'about.advantages.quality.title': 'Качество',
    'about.advantages.reputation.title': 'Репутация',
    'about.advantages.comfort.title': 'Безопасность и комфорт',
    'about.quality.protocols': 'Международные клинические протоколы (NCCN, ESMO, ESC)',
    'about.quality.equipment': 'Высокотехнологичное оборудование: ПЭТ-КТ, МРТ 3 Тесла, VMAT, роботизированные системы Da Vinci, 3D-навигация',
    'about.quality.doctors': 'Более 45 000 врачей по всей стране',
    'about.quality.training': 'Специалисты, прошедшие стажировки в Германии, Израиле, Южной Корее, Польше',
    'about.reputation.oncology': 'Одна из сильнейших онкологических школ в регионе',
    'about.reputation.diagnostics': 'Высокая точность диагностики',
    'about.reputation.complications': 'Низкий уровень осложнений',
    'about.reputation.ethics': 'Строгие стандарты медицинской этики',
    'about.comfort.safety': 'Безопасная европейская страна',
    'about.comfort.cities': 'Чистые города и понятная инфраструктура',
    'about.comfort.languages': 'Персонал, владеющий английским, русским и частично арабским языками',
    'about.advantages.duration': 'Средняя продолжительность пребывания пациента: 7–14 дней',
    
    // About - Medical Centers
    'about.centers.title': 'Ведущие медицинские центры',
    'about.centers.table.name': 'Медицинский центр',
    'about.centers.table.profile': 'Профиль',
    'about.centers.cardiology.name': 'РНПЦ «Кардиология»',
    'about.centers.cardiology.profile': 'Кардиохирургия, диагностика, сосудистая хирургия',
    'about.centers.oncology.name': 'РНПЦ «Онкология»',
    'about.centers.oncology.profile': 'Химиотерапия, лучевая терапия, хирургическое лечение',
    'about.centers.neurosurgery.name': 'РНПЦ «Нейрохирургия»',
    'about.centers.neurosurgery.profile': 'Хирургия головного мозга и позвоночника',
    'about.centers.lode.name': 'Медицинский центр «ЛОДЭ»',
    'about.centers.lode.profile': 'Комплексные check-up программы, диагностика',
    'about.centers.newmed.name': 'Клиника «Новая Медицина»',
    'about.centers.newmed.profile': 'Пластическая и реконструктивная хирургия',
    'about.centers.ophthalmology.name': 'Белорусская офтальмологическая клиника',
    'about.centers.ophthalmology.profile': 'Лазерная коррекция зрения, лечение катаракты',
    'about.centers.yunost.name': 'Санаторий «Юность»',
    'about.centers.yunost.profile': 'Премиальные программы реабилитации',
    
    // About - Tourism
    'about.tourism.title': 'Медицинский туризм и культурные программы',
    'about.tourism.subtitle': 'Для пациентов с неинтенсивным лечением и сопровождающих лиц доступны дополнительные программы',
    'about.tourism.historical': 'Исторический Минск, Мирский замок, Несвиж',
    'about.tourism.parks': 'Национальные парки и этно-туры',
    'about.tourism.spa': 'SPA- и wellness-комплексы, минеральные источники',
    'about.tourism.gastro': 'Шопинг-туры и сезонные гастрономические маршруты',
    'about.tourism.note': 'Данные программы повышают привлекательность пакетов для семейных и VIP-клиентов.',
    
    // About - Our Services
    'about.ourservices.title': 'Объём услуг',
    'about.ourservices.subtitle': 'Компания «Станопринт» оказывает исключительно организационные, информационные и координационные услуги',
    'about.services.clinic': 'Подбор клиники и предварительных лечебно-диагностических программ на основании медицинских документов, предоставленных пациентом',
    'about.services.cost': 'Получение ориентировочных расчётов стоимости диагностики и лечения от клиник',
    'about.services.arrival': 'Организация прибытия в Беларусь (встреча в аэропорту, трансферы — по согласованию)',
    'about.services.accommodation': 'Организация проживания (гостиницы, апартаменты, санатории)',
    'about.services.leisure': 'Организация досуга, экскурсионных и культурных программ',
    'about.services.transfers': 'Организация трансферов по территории Беларуси (по отдельному соглашению)',
    'about.services.communication': 'Информационное сопровождение и помощь в коммуникации с клиниками (перевод, согласование дат и процедур)',
    
    // About - Disclaimer
    'about.disclaimer.title': 'Юридический дисклеймер',
    'about.disclaimer.text1': 'Все медицинские услуги (диагностика, лечение, хирургические вмешательства, реабилитация) оказываются непосредственно медицинскими учреждениями на основании отдельных договоров между пациентом и соответствующей клиникой.',
    'about.disclaimer.text2': 'Компания «Станопринт»:',
    'about.disclaimer.important': 'Важно:',
    'about.disclaimer.point1': 'Не является медицинской организацией',
    'about.disclaimer.point2': 'Не оказывает медицинских услуг',
    'about.disclaimer.point3': 'Не вмешивается в процесс диагностики и лечения',
    'about.disclaimer.point4': 'Не несёт ответственности за медицинские решения врачей, результаты лечения, возможные осложнения, побочные эффекты и изменения стоимости лечения, обусловленные медицинской необходимостью',
    'about.disclaimer.permits': 'Туристические разрешения на территории Республики Беларусь оформлены в установленном порядке.',
    
    // About - Offices
    'about.offices.title': 'Офисы и представительства',
    'about.offices.headquarters': 'Головной офис',
    'about.offices.representation': 'Представительство',
    'about.offices.belarus.title': 'Беларусь',
    'about.offices.oman.title': 'Оман',
    'about.offices.oman.reg': 'Регистрационный номер',
    'about.offices.oman.address': 'Al Khuwair / Bousher / Governorate of Muscat',
    
    // Tourism Page
    'tourism.hero.badge': 'Медицинский туризм в Республику Беларусь',
    'tourism.hero.title': 'Медицинский туризм в Республику Беларусь',
    'tourism.hero.intro': 'Беларусь обладает всеми необходимыми предпосылками для того, чтобы стать одним из новых и перспективных направлений медицинского туризма для граждан арабских стран и других регионов мира. Высокий уровень медицины, современные технологии, доступные цены и безопасная среда делают страну особенно привлекательной для иностранных пациентов.',
    'tourism.hero.gap': 'В то же время до настоящего момента на рынке отсутствовал специализированный оператор, способный объединить медицинские, логистические, культурные и сервисные услуги в единую, удобную и понятную систему, адаптированную под исламские традиции и менталитет арабских пациентов.',
    
    'tourism.project.title': 'Проект ARABIA.BY',
    'tourism.project.desc': 'Проект ARABIA.BY становится первым комплексным решением, которое не просто предлагает медицинский тур, а формирует новый сегмент рынка — медицинско-культурный туризм, основанный на:',
    'tourism.project.point1': 'уважении к религиозным и культурным особенностям',
    'tourism.project.point2': 'персональном сопровождении',
    'tourism.project.point3': 'высоких стандартах медицинского сервиса',
    'tourism.project.value': 'Это создаёт высокую стратегическую ценность проекта, инвестиционную привлекательность и устойчивые перспективы международного сотрудничества.',
    
    'tourism.state.title': 'Состояние медицинского туризма в Беларуси',
    'tourism.state.desc': 'Медицинский туризм в Республике Беларусь — это устойчиво развивающийся сектор, в котором страна за последние годы сформировала прочную международную репутацию поставщика качественных медицинских услуг по конкурентным ценам.',
    'tourism.state.flow': 'В период 2010–2019 гг. ежегодный поток иностранных пациентов превышал 150 000 человек.',
    'tourism.state.recovery': 'После временного спада, связанного с пандемией COVID-19, с 2022 года рынок демонстрирует стабильное восстановление и рост.',
    'tourism.state.factors.title': 'Развитию медицинского туризма способствуют:',
    'tourism.state.factor1': 'рост доверия к белорусской системе здравоохранения',
    'tourism.state.factor2': 'расширение сотрудничества со странами Ближнего Востока и Африки',
    'tourism.state.factor3': 'развитие государственных и частных медицинских центров международного уровня',
    'tourism.state.feature': 'Ключевая особенность белорусской модели — ориентация не на массовые косметические процедуры, а на высокотехнологичное лечение, реабилитацию и профилактику в узкоспециализированных областях медицины.',
    
    'tourism.directions.title': 'Основные медицинские направления',
    'tourism.directions.oncology.title': 'Онкология и радиология',
    'tourism.directions.oncology.desc': 'Беларусь является одним из региональных лидеров в лечении онкологических заболеваний.',
    'tourism.directions.oncology.point1': 'высокоточная диагностика',
    'tourism.directions.oncology.point2': 'современные методы химио- и лучевой терапии',
    'tourism.directions.oncology.point3': 'комплексный мультидисциплинарный подход',
    'tourism.directions.oncology.centers': 'Ведущие центры:',
    'tourism.directions.oncology.center1': 'РНПЦ онкологии и медицинской радиологии им. Н.Н. Александрова',
    'tourism.directions.oncology.center2': 'РНПЦ трансплантации органов и тканей (включая пересадку костного мозга)',
    
    'tourism.directions.cardiology.title': 'Кардиология и кардиохирургия',
    'tourism.directions.cardiology.point1': 'операции на открытом сердце',
    'tourism.directions.cardiology.point2': 'коронарное шунтирование',
    'tourism.directions.cardiology.point3': 'установка стентов и кардиостимуляторов',
    'tourism.directions.cardiology.price': 'Стоимость кардиохирургических вмешательств в 2–3 раза ниже, чем в странах Западной Европы, при сопоставимом качестве.',
    'tourism.directions.cardiology.center': 'Ключевой центр: РНПЦ «Кардиология» — один из ведущих кардиоцентров Восточной Европы.',
    
    'tourism.directions.orthopedics.title': 'Ортопедия и травматология',
    'tourism.directions.orthopedics.point1': 'эндопротезирование тазобедренных и коленных суставов',
    'tourism.directions.orthopedics.point2': 'короткие сроки ожидания операций',
    'tourism.directions.orthopedics.point3': 'эффективная реабилитация',
    'tourism.directions.orthopedics.centers': 'Ключевые учреждения:',
    'tourism.directions.orthopedics.center1': 'РНПЦ травматологии и ортопедии (Минск)',
    'tourism.directions.orthopedics.center2': 'Белорусский протезно-ортопедический восстановительный центр',
    
    'tourism.directions.ivf.title': 'Репродуктивная медицина (ЭКО)',
    'tourism.directions.ivf.point1': 'современные программы ЭКО',
    'tourism.directions.ivf.point2': 'высокая результативность',
    'tourism.directions.ivf.point3': 'стоимость процедур в 2–4 раза ниже, чем в странах ЕС',
    'tourism.directions.ivf.centers': 'Ведущие центры:',
    'tourism.directions.ivf.center1': 'Международный центр репродуктивных технологий «Медика»',
    'tourism.directions.ivf.center2': 'РНПЦ «Мать и дитя»',
    
    'tourism.directions.ophthalmology.title': 'Офтальмология',
    'tourism.directions.ophthalmology.point1': 'лечение катаракты, глаукомы, ретинопатий',
    'tourism.directions.ophthalmology.point2': 'микрохирургия глаза',
    'tourism.directions.ophthalmology.point3': 'восстановление зрения при диабетических осложнениях',
    'tourism.directions.ophthalmology.center': 'Ключевой центр: Минский НИИ глазных болезней',
    
    'tourism.why.title': 'Почему пациенты выбирают Беларусь',
    'tourism.why.prices.title': 'Конкурентные цены',
    'tourism.why.prices.point1': 'медицинские услуги на 30–50% дешевле, чем в Западной Европе',
    'tourism.why.prices.point2': 'на 20–30% ниже, чем в России и Казахстане',
    'tourism.why.prices.point3': 'прозрачное ценообразование без скрытых расходов',
    
    'tourism.why.quality.title': 'Высокое качество медицины',
    'tourism.why.quality.point1': 'международные клинические протоколы (NCCN, ESMO, ESC)',
    'tourism.why.quality.point2': 'высокотехнологичное оборудование: ПЭТ-КТ, МРТ 3Т, VMAT, роботизированные системы, 3D-навигация',
    'tourism.why.quality.point3': 'более 45 000 врачей по всей стране',
    'tourism.why.quality.point4': 'специалисты, прошедшие стажировки в Германии, Израиле, Южной Корее',
    
    'tourism.why.safety.title': 'Безопасность и комфорт',
    'tourism.why.safety.point1': 'стабильная и безопасная страна',
    'tourism.why.safety.point2': 'чистые города и развитая инфраструктура',
    'tourism.why.safety.point3': 'доброжелательная среда',
    'tourism.why.safety.point4': 'медицинский и сервисный персонал, говорящий на русском, английском и частично арабском языках',
    
    'tourism.why.convenience.title': 'Удобство и скорость',
    'tourism.why.convenience.point1': 'отсутствие длительных очередей',
    'tourism.why.convenience.point2': 'быстрое согласование лечения',
    'tourism.why.convenience.point3': 'средняя продолжительность пребывания пациента — 7–14 дней',
    
    'tourism.prospects.title': 'Перспективы развития',
    'tourism.prospects.desc': 'Беларусь имеет все основания стать региональным центром медицинского туризма Восточной Европы, особенно в сегментах высокотехнологичной медицины и реабилитации.',
    'tourism.prospects.factors.title': 'Ключевые факторы роста:',
    'tourism.prospects.factor1': 'формирование единого бренда Medical Belarus',
    'tourism.prospects.factor2': 'упрощение визовых процедур',
    'tourism.prospects.factor3': 'развитие комплексных сервисов «под ключ»',
    'tourism.prospects.factor4': 'международные партнёрства между клиниками, университетами и медицинскими операторами',
    
    'tourism.conclusion.title': 'Заключение',
    'tourism.conclusion.text1': 'Медицинский туризм в Беларуси находится на этапе зрелого роста и обладает высоким потенциалом интернационализации. При этом ниша, ориентированная на арабские страны и исламский культурный контекст, до настоящего времени оставалась практически свободной.',
    'tourism.conclusion.project': 'Проект ARABIA.BY:',
    'tourism.conclusion.point1': 'закрывает этот пробел',
    'tourism.conclusion.point2': 'объединяет медицинскую экспертизу Беларуси с культурно адаптированным сервисом',
    'tourism.conclusion.point3': 'превращает Республику Беларусь в привлекательное направление для пациентов из Ливии, Омана, ОАЭ, Египта и Саудовской Аравии',
    'tourism.conclusion.final': 'ARABIA.BY — это не просто медицинский туризм. Это новый формат международного сотрудничества, доверия и гуманитарной дипломатии.',
    
    // Footer
    'footer.rights': 'Все права защищены',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
    
    // Institutions
    'institutions.title': 'Ведущие медицинские учреждения',
    'institutions.subtitle': 'Лучшие больницы и медицинские центры Беларуси',
    'institutions.hero.badge': 'Беларусь — клиники для иностранных пациентов',
    'institutions.hero.title': 'Медицинские учреждения Беларуси',
    'institutions.hero.subtitle': 'Что лечат, где лечат, особенности обслуживания',
    'institutions.type.state': 'Государственный',
    'institutions.type.private': 'Частный',
    'institutions.profile.title': 'Профиль:',
    'institutions.foreigners.title': 'Для иностранцев:',
    'institutions.category.cardiology': 'Кардиология и кардиохирургия',
    'institutions.category.oncology': 'Онкология и радиология',
    'institutions.category.transplant': 'Трансплантология',
    'institutions.category.neuro': 'Нейрохирургия и неврология',
    'institutions.category.ortho': 'Ортопедия и травматология',
    'institutions.category.ivf': 'Репродуктивная медицина (ВРТ / ЭКО)',
    'institutions.category.eye': 'Офтальмология',
    'institutions.category.vip': '"VIP-медицина" и Check-up',
    'institutions.category.multi': 'Многопрофильные городские клиники',
    'institutions.category.rehab': 'Реабилитация и восстановительная медицина',
    'institutions.cardiology.name': 'РНПЦ «Кардиология»',
    'institutions.cardiology.address': 'г. Минск, ул. Розы Люксембург, 110Б',
    'institutions.cardiology.profile1': 'Интервенционная кардиология (КАГ, PCI, стентирование)',
    'institutions.cardiology.profile2': 'Операции на открытом сердце',
    'institutions.cardiology.profile3': 'Коронарное шунтирование (CABG)',
    'institutions.cardiology.profile4': 'Клапанные операции',
    'institutions.cardiology.profile5': 'Трансплантация сердца и комбинированные трансплантации',
    'institutions.cardiology.foreign1': 'Полный цикл лечения',
    'institutions.cardiology.foreign2': 'Отдельный порядок платных услуг',
    'institutions.cardiology.foreign3': 'Международный отдел',
    'institutions.cardiology.foreign4': 'Сопровождение координаторов',
    'institutions.oncology.name': 'ННПЦ онкологии им. Н.Н. Александрова',
    'institutions.oncology.address': 'Минская область, д. Лесной',
    'institutions.oncology.profile1': 'Онкохирургия всех локализаций',
    'institutions.oncology.profile2': 'Химиотерапия, таргетная терапия',
    'institutions.oncology.profile3': 'Высокоточная лучевая терапия (IMRT, VMAT)',
    'institutions.oncology.profile4': 'Онкогематология',
    'institutions.oncology.foreign1': 'Отдельный регламент обслуживания',
    'institutions.oncology.foreign2': 'Официальные платные программы',
    'institutions.oncology.foreign3': 'Помощь с логистикой и сроками',
    'institutions.transplant.name': 'РНПЦ трансплантации органов и тканей',
    'institutions.transplant.address': 'г. Минск, ул. Семашко, 8',
    'institutions.transplant.profile1': 'Трансплантация почки',
    'institutions.transplant.profile2': 'Трансплантация печени',
    'institutions.transplant.profile3': 'Пересадка костного мозга',
    'institutions.transplant.profile4': 'Комбинированные трансплантации',
    'institutions.transplant.foreign1': 'Лечение по индивидуальному допуску',
    'institutions.transplant.foreign2': 'Высокий международный уровень операций',
    'institutions.transplant.foreign3': 'Посттрансплантационное сопровождение',
    'institutions.neuro.name': 'РНПЦ неврологии и нейрохирургии',
    'institutions.neuro.address': 'г. Минск, ул. Франциска Скорины, 24',
    'institutions.neuro.profile1': 'Нейроонкология',
    'institutions.neuro.profile2': 'Сосудистая нейрохирургия',
    'institutions.neuro.profile3': 'Эндоваскулярные вмешательства',
    'institutions.neuro.profile4': 'Стереотаксическая хирургия (DBS)',
    'institutions.neuro.profile5': 'Детская нейрохирургия',
    'institutions.neuro.foreign1': 'Платные программы',
    'institutions.neuro.foreign2': 'Высокотехнологичные операции',
    'institutions.neuro.foreign3': 'Короткие сроки ожидания',
    'institutions.ortho.name': 'РНПЦ травматологии и ортопедии',
    'institutions.ortho.address': 'г. Минск, ул. Кижеватова, 60',
    'institutions.ortho.profile1': 'Эндопротезирование суставов',
    'institutions.ortho.profile2': 'Хирургия позвоночника',
    'institutions.ortho.profile3': 'Спортивная травматология',
    'institutions.ortho.foreign1': 'Доступные цены',
    'institutions.ortho.foreign2': 'Быстрая госпитализация',
    'institutions.ortho.foreign3': 'Реабилитационные программы',
    'institutions.prosthetic.name': 'Белорусский протезно-ортопедический центр',
    'institutions.prosthetic.address': 'г. Минск, ул. Одоевского, 10',
    'institutions.prosthetic.profile1': 'Индивидуальное протезирование',
    'institutions.prosthetic.profile2': 'Восстановление двигательных функций',
    'institutions.prosthetic.foreign1': 'Персонализированные решения',
    'institutions.prosthetic.foreign2': 'Комплексная реабилитация',
    'institutions.bina.name': 'Международный центр репродуктивных технологий BINA',
    'institutions.bina.address': 'г. Минск, ул. Неманская, 67',
    'institutions.bina.profile1': 'ЭКО, ИКСИ',
    'institutions.bina.profile2': 'Донорские программы',
    'institutions.bina.profile3': 'Криоконсервация',
    'institutions.bina.foreign1': 'Англоязычное сопровождение',
    'institutions.bina.foreign2': 'Прозрачные пакеты',
    'institutions.bina.foreign3': 'Высокая результативность',
    'institutions.mother.name': 'РНПЦ «Мать и дитя»',
    'institutions.mother.address': 'г. Минск, ул. Орловская, 66',
    'institutions.mother.profile1': 'Полный цикл репродуктивной медицины',
    'institutions.mother.profile2': 'Ведение сложных беременностей',
    'institutions.mother.foreign1': 'Государственные программы',
    'institutions.mother.foreign2': 'Международные протоколы лечения',
    'institutions.ophthalmology.name': 'Белорусская офтальмологическая клиника',
    'institutions.ophthalmology.address': 'г. Минск, ул. Притыцкого, 79',
    'institutions.ophthalmology.profile1': 'Лазерная коррекция зрения',
    'institutions.ophthalmology.profile2': 'Катаракта',
    'institutions.ophthalmology.profile3': 'Глаукома',
    'institutions.ophthalmology.foreign1': 'Быстрые процедуры',
    'institutions.ophthalmology.foreign2': 'Амбулаторное лечение',
    'institutions.ophthalmology.foreign3': 'Короткий срок пребывания',
    'institutions.eye.name': 'Минский НИИ глазных болезней',
    'institutions.eye.address': 'г. Минск, ул. Коласа, 16',
    'institutions.eye.profile1': 'Микрохирургия глаза',
    'institutions.eye.profile2': 'Сложные офтальмологические случаи',
    'institutions.vip.name': 'Республиканский клинический медицинский центр (VIP-Clinic)',
    'institutions.vip.address': 'г. Минск, ул. Ждановичская, 18',
    'institutions.vip.profile1': 'Комплексные check-up программы',
    'institutions.vip.profile2': 'Хирургия и эндоскопия',
    'institutions.vip.profile3': 'Диагностика премиум-уровня',
    'institutions.vip.foreign1': 'Палаты повышенного комфорта',
    'institutions.vip.foreign2': 'Персональное сопровождение',
    'institutions.vip.foreign3': 'Ускоренные обследования',
    'institutions.hospital5.name': '5-я городская клиническая больница г. Минска',
    'institutions.hospital5.address': 'г. Минск, ул. Филатова, 9',
    'institutions.hospital5.profile1': 'Общая хирургия',
    'institutions.hospital5.profile2': 'Терапия',
    'institutions.hospital5.profile3': 'Диагностика',
    'institutions.hospital5.foreign1': 'Официальные платные услуги',
    'institutions.hospital5.foreign2': 'Работа через медицинских операторов',
    'institutions.hospital5.foreign3': 'Фиксированные прайсы',
    'institutions.yunost.name': 'Санаторий «Юность»',
    'institutions.yunost.address': 'Минская область, Заславское водохранилище',
    'institutions.yunost.profile1': 'Кардио- и нейрореабилитация',
    'institutions.yunost.profile2': 'Восстановление после операций',
    'institutions.yunost.profile3': 'Wellness и SPA',
    'institutions.yunost.foreign1': 'Премиальные программы',
    'institutions.yunost.foreign2': 'Комфортное размещение',
    'institutions.yunost.foreign3': 'Семейный формат',
    'institutions.summary.title': 'Итог для сайта',
    'institutions.summary.point1': 'Полный спектр высокотехнологичной медицины',
    'institutions.summary.point2': 'Цены на 30–70% ниже, чем в ЕС',
    'institutions.summary.point3': 'Государственные центры мирового уровня',
    'institutions.summary.point4': 'Безопасная и комфортная среда',
    'institutions.summary.point5': 'Отсутствие очередей и быстрые сроки лечения',
    
    // Doctors
    'doctors.title': 'Ведущие врачи',
    'doctors.subtitle': 'Ведущие специалисты ключевых медицинских учреждений Беларуси',
    'doctors.experience': 'опыт работы',
    'doctors.operations': 'успешных операций',
    
    // Doctor Clinics
    'doctors.clinic.cardiology.name': 'РНПЦ «Кардиология»',
    'doctors.clinic.cardiology.address': 'г. Минск, ул. Розы Люксембург, 110Б',
    'doctors.clinic.oncology.name': 'ННПЦ онкологии и медицинской радиологии им. Н.Н. Александрова',
    'doctors.clinic.oncology.address': 'Минская область, д. Лесной',
    'doctors.clinic.neurosurgery.name': 'РНПЦ неврологии и нейрохирургии',
    'doctors.clinic.neurosurgery.address': 'г. Минск, ул. Франциска Скорины, 24',
    'doctors.clinic.vip.name': 'Республиканский клинический медицинский центр (VIP-Clinic)',
    'doctors.clinic.vip.address': 'г. Минск, Ждановичский сельсовет, д. 81, корп. 5',
    'doctors.clinic.orthopedics.name': 'РНПЦ травматологии и ортопедии',
    'doctors.clinic.orthopedics.address': 'г. Минск, ул. Кижеватова, 60',
    'doctors.clinic.reproductive.name': 'Международный центр репродуктивных технологий BINA',
    'doctors.clinic.reproductive.address': 'г. Минск, ул. Неманская, 67',
    
    // Individual Doctors - Cardiology
    'doctors.ostrovsky.name': 'Юрий Петрович Островский',
    'doctors.ostrovsky.degree': 'Доктор медицинских наук, профессор, академик',
    'doctors.ostrovsky.specialty': 'Кардиохирургия, трансплантация сердца',
    'doctors.ostrovsky.experience': 'Более 30 лет',
    'doctors.ostrovsky.clinic': 'РНПЦ «Кардиология»',
    
    'doctors.shket.name': 'Александр Павлович Шкет',
    'doctors.shket.degree': 'Кандидат медицинских наук',
    'doctors.shket.specialty': 'Кардиохирургия',
    'doctors.shket.experience': 'Более 27 лет',
    'doctors.shket.clinic': 'Республиканский клинический медицинский центр',
    
    'doctors.gubar.name': 'Елена Николаевна Губарь',
    'doctors.gubar.degree': 'Врач высшей квалификационной категории',
    'doctors.gubar.specialty': 'Кардиология',
    'doctors.gubar.experience': 'Более 38 лет',
    'doctors.gubar.clinic': 'Республиканский клинический медицинский центр',
    
    'doctors.dovnar.name': 'Нелли Марьяновна Довнар',
    'doctors.dovnar.degree': 'Врач-специалист',
    'doctors.dovnar.specialty': 'Кардиология',
    'doctors.dovnar.experience': '28 лет',
    'doctors.dovnar.clinic': 'Республиканский клинический медицинский центр',
    
    // Individual Doctors - Oncology
    'doctors.karanik.name': 'Владимир Степанович Караник',
    'doctors.karanik.degree': 'Кандидат медицинских наук',
    'doctors.karanik.specialty': 'Торакальная онкопатология, хирургия лёгких',
    'doctors.karanik.experience': 'Многолетний опыт',
    'doctors.karanik.clinic': 'РНПЦ онкологии',
    
    'doctors.gizemova.name': 'Ольга Анатольевна Гиземова',
    'doctors.gizemova.degree': 'Кандидат медицинских наук',
    'doctors.gizemova.specialty': 'Радиационная онкология',
    'doctors.gizemova.experience': 'Многолетний опыт',
    'doctors.gizemova.clinic': 'РНПЦ онкологии',
    
    'doctors.aleinikova.name': 'Ольга Виталиевна Алейникова',
    'doctors.aleinikova.degree': 'Доктор медицинских наук, профессор',
    'doctors.aleinikova.specialty': 'Педиатрическая онко-гематология',
    'doctors.aleinikova.experience': 'Многолетний опыт',
    'doctors.aleinikova.clinic': 'Центр детской онкологии и гематологии',
    
    // Individual Doctors - Neurosurgery
    'doctors.sidorovich.name': 'Рышард Ромуальдович Сидорович',
    'doctors.sidorovich.degree': 'Доктор медицинских наук, профессор',
    'doctors.sidorovich.specialty': 'Неврология и нейрохирургия (директор центра)',
    'doctors.sidorovich.experience': 'Многолетний опыт',
    'doctors.sidorovich.clinic': 'РНПЦ нейрохирургии',
    
    'doctors.talabaev.name': 'Михаил Владимирович Талабаев',
    'doctors.talabaev.degree': 'Доктор медицинских наук, доцент',
    'doctors.talabaev.specialty': 'Нейрохирургия детского профиля',
    'doctors.talabaev.experience': 'Многолетний опыт',
    'doctors.talabaev.clinic': 'РНПЦ нейрохирургии',
    
    'doctors.vasilevich.name': 'Эдуард Николаевич Василевич',
    'doctors.vasilevich.degree': 'Кандидат медицинских наук, доцент',
    'doctors.vasilevich.specialty': 'Нейрохирургия',
    'doctors.vasilevich.experience': 'Многолетний опыт',
    'doctors.vasilevich.clinic': 'РНПЦ нейрохирургии',
    
    'doctors.bunyak.name': 'Анна Георгиевна Буняк',
    'doctors.bunyak.degree': 'Кандидат медицинских наук, доцент',
    'doctors.bunyak.specialty': 'Неврология',
    'doctors.bunyak.experience': 'Многолетний опыт',
    'doctors.bunyak.clinic': 'РНПЦ нейрохирургии',
    
    // Individual Doctors - VIP Clinic
    'doctors.burko.name': 'Владимир Дмитриевич Бурко',
    'doctors.burko.degree': 'Кандидат наук',
    'doctors.burko.specialty': 'Урология',
    'doctors.burko.experience': '34 года',
    'doctors.burko.clinic': 'Республиканский клинический медицинский центр',
    
    'doctors.geyno.name': 'Елена Владимировна Гейно',
    'doctors.geyno.degree': 'Врач-специалист',
    'doctors.geyno.specialty': 'Оториноларингология',
    'doctors.geyno.experience': '32 года',
    'doctors.geyno.clinic': 'Республиканский клинический медицинский центр',
    
    'doctors.olikhver.name': 'Юрий Алексеевич Олихвер',
    'doctors.olikhver.degree': 'Кардиохирург',
    'doctors.olikhver.specialty': 'Кардиохирургия',
    'doctors.olikhver.experience': '24 года',
    'doctors.olikhver.clinic': 'Республиканский клинический медицинский центр',
    
    'doctors.glybovskaya.name': 'Татьяна Викентьевна Глыбовская',
    'doctors.glybovskaya.degree': 'Кандидат медицинских наук',
    'doctors.glybovskaya.specialty': 'Кардиология',
    'doctors.glybovskaya.experience': '31 год',
    'doctors.glybovskaya.clinic': 'Республиканский клинический медицинский центр',
    
    // Individual Doctors - Orthopedics
    'doctors.volkov.name': 'Сергей Иванович Волков',
    'doctors.volkov.degree': 'Врач-специалист',
    'doctors.volkov.specialty': 'Ортопедическая хирургия, эндопротезирование суставов',
    'doctors.volkov.experience': 'Более 25 лет',
    'doctors.volkov.clinic': 'РНПЦ травматологии и ортопедии',
    
    // Individual Doctors - Reproductive
    'doctors.kuznetsova.name': 'Мария Петровна Кузнецова',
    'doctors.kuznetsova.degree': 'Врач-специалист',
    'doctors.kuznetsova.specialty': 'ВРТ/ЭКО, репродуктология',
    'doctors.kuznetsova.experience': 'Более 15 лет',
    'doctors.kuznetsova.clinic': 'Международный центр репродуктивных технологий BINA',
    
    // Prices
    'prices.title': 'Цены',
    'prices.subtitle': 'Конкурентные и прозрачные цены',
    'prices.includes': 'Включено',
    'prices.from': 'от',
    'prices.or': 'или',
    'prices.device': 'устройство',
    'prices.service': 'Услуга',
    'prices.cost': 'Стоимость, USD',
    'prices.profile': 'Профиль лечения',
    'prices.estimate': 'Ориентир, USD',
    
    // Prices Hero
    'prices.hero.title': 'Цены и условия медицинского туризма в Беларуси',
    'prices.hero.subtitle': 'Беларусь предлагает иностранным пациентам высококачественную медицинскую помощь в государственных и частных клиниках по конкурентным ценам',
    
    // Important Note
    'prices.important.title': 'Важно',
    'prices.important.text': 'Указанные цены являются ориентировочными. Окончательная стоимость лечения определяется медицинским учреждением после изучения медицинских документов и проведения первичной диагностики.',
    
    // Treatment Prices Title
    'prices.treatment.title': 'Ориентировочные цены на лечение',
    
    // Cardiology
    'prices.cardiology.title': 'Кардиология и кардиохирургия',
    'prices.cardiology.subtitle': 'Государственные специализированные центры',
    'prices.cardiology.profile': 'Ишемическая болезнь сердца, пороки клапанов, аритмии, сердечная недостаточность, интервенционная и открытая кардиохирургия',
    'prices.cardiology.cag': 'Коронарография (CAG)',
    'prices.cardiology.stenting': 'Стентирование (1 стент)',
    'prices.cardiology.cabg': 'Коронарное шунтирование (CABG)',
    'prices.cardiology.valve': 'Замена клапана сердца',
    'prices.cardiology.pacemaker': 'Имплантация кардиостимулятора',
    'prices.cardiology.ablation': 'Радиочастотная аблация',
    'prices.cardiology.tavi': 'TAVI (по показаниям)',
    
    // Oncology
    'prices.oncology.title': 'Онкология и радиология',
    'prices.oncology.subtitle': 'Государственные онкологические центры',
    'prices.oncology.profile': 'Онкология всех локализаций, онкохирургия, химио- и лучевая терапия, таргетная терапия, CAR-T (по показаниям)',
    'prices.oncology.gastrectomy': 'Гастрэктомия',
    'prices.oncology.whipple': 'Операция Уиппла',
    'prices.oncology.lobectomy': 'Лобэктомия лёгкого',
    'prices.oncology.thyroid': 'Операции на щитовидной железе',
    'prices.oncology.radiation': 'Лучевая терапия (IMRT / VMAT)',
    'prices.oncology.chemo': 'Химиотерапия (1 цикл)',
    'prices.oncology.cart': 'CAR-T (подготовительный этап)',
    
    // Neurology
    'prices.neuro.title': 'Неврология и нейрохирургия',
    'prices.neuro.subtitle': 'Государственные нейрохирургические центры',
    'prices.neuro.profile': 'Опухоли мозга, аневризмы, сосудистые патологии, функциональная нейрохирургия, DBS',
    'prices.neuro.mri': 'МРТ головного мозга',
    'prices.neuro.aneurysm': 'Клипирование аневризмы',
    'prices.neuro.avm': 'Удаление АВМ',
    'prices.neuro.meningioma': 'Удаление менингиомы',
    'prices.neuro.dbs': 'DBS (двусторонняя имплантация)',
    'prices.neuro.embolization': 'Эмболизация аневризмы',
    
    // IVF
    'prices.ivf.title': 'Репродуктивная медицина (ЭКО)',
    'prices.ivf.subtitle': 'Частные специализированные центры',
    'prices.ivf.profile': 'Бесплодие, ЭКО, ICSI, донорские программы, онкофертильность',
    'prices.ivf.basic': 'ЭКО (базовый цикл)',
    'prices.ivf.icsi': 'ЭКО + ICSI',
    'prices.ivf.donor': 'ЭКО с донорскими ооцитами',
    'prices.ivf.oncofertility': 'Онкофертильность',
    
    // Transplant
    'prices.transplant.title': 'Трансплантация органов',
    'prices.transplant.subtitle': 'Национальные специализированные центры',
    'prices.transplant.type': 'Вид трансплантации',
    'prices.transplant.kidney': 'Почка',
    'prices.transplant.liver': 'Печень',
    'prices.transplant.heart': 'Сердце',
    'prices.transplant.note': 'Стоимость определяется индивидуально и зависит от клинического случая, донора, медикаментозного сопровождения и послеоперационного периода.',
    
    // Coordinator Services
    'prices.coordinator.title': 'Стоимость услуг координатора (Исполнителя)',
    'prices.coordinator.intro': 'Организационные услуги оказываются отдельно от медицинских услуг, которые предоставляются Клиниками напрямую.',
    'prices.coordinator.fee.title': 'Сервисный сбор / гонорар координатора',
    'prices.coordinator.fee.text': 'Стоимость фиксируется индивидуально и, как правило, составляет:',
    'prices.coordinator.fee.percent': '5–10% от ориентировочной стоимости диагностики и лечения',
    'prices.coordinator.fee.fixed': 'Фиксированную сумму от 1 500 до 5 000 USD',
    'prices.coordinator.fee.note': 'Размер зависит от сложности медицинского случая, длительности пребывания и объёма сопровождения.',
    'prices.coordinator.services.title': 'В услуги координатора может входить:',
    'prices.coordinator.service1': 'Координация взаимодействия с Клиниками',
    'prices.coordinator.service2': 'Предварительная организация диагностики и лечения',
    'prices.coordinator.service3': 'Организация трансферов и проживания',
    'prices.coordinator.service4': 'Информационное и языковое сопровождение',
    'prices.coordinator.service5': 'Помощь в коммуникации с медицинскими учреждениями',
    'prices.coordinator.service6': 'Организация экскурсионной и культурной программы (по запросу)',
    
    // Payment
    'prices.payment.title': 'Порядок и график оплат',
    'prices.payment.advance.title': 'Авансовый платёж',
    'prices.payment.advance.item1': '50% стоимости услуг координатора',
    'prices.payment.advance.item2': 'Ориентировочная стоимость диагностики и лечения',
    'prices.payment.advance.item3': 'Не позднее чем за 10 календарных дней до прибытия в Беларусь',
    'prices.payment.after.title': 'После первичной диагностики',
    'prices.payment.after.item1': 'Клиника и Заказчик согласовывают окончательную стоимость лечения напрямую',
    'prices.payment.after.item2': 'Медицинские услуги оплачиваются непосредственно Клинике',
    'prices.payment.after.item3': 'Координатор может выступать как временный платёжный посредник, не являясь медицинской организацией',
    'prices.payment.via.title': 'Оплата через координатора (по согласованию)',
    'prices.payment.via.item1': 'Возможен приём средств в свободно конвертируемой валюте',
    'prices.payment.via.item2': 'Последующая оплата услуг Клиники и третьих лиц',
    'prices.payment.via.item3': 'Предоставление подтверждающих документов',
    'prices.payment.adjustment.title': 'Корректировка стоимости',
    'prices.payment.adjustment.text': 'Возможна при:',
    'prices.payment.adjustment.item1': 'Изменении состава услуг по инициативе Заказчика',
    'prices.payment.adjustment.item2': 'Изменении тарифов третьих лиц (проживание, транспорт, экскурсии)',
    'prices.payment.urgent.title': 'Срочные случаи',
    'prices.payment.urgent.text': 'При обращении менее чем за 10 дней до приезда:',
    'prices.payment.urgent.item1': 'Условия согласуются индивидуально',
    'prices.payment.urgent.item2': 'Предоплата может составлять до 100% стоимости услуг координатора',
    
    // Partner Company
    'prices.partner.title': 'Возможность оплаты через компанию-партнёра',
    'prices.partner.intro': 'Для удобства иностранных пациентов и оптимизации международных расчётов предусмотрена возможность оплаты через компанию-партнёра:',
    'prices.partner.usage': 'Компания-партнёр может использоваться:',
    'prices.partner.item1': 'Для приёма платежей в свободно конвертируемой валюте',
    'prices.partner.item2': 'Для последующего перечисления средств Исполнителю, с выдачей средств пациенту в белорусских рублях по курсу ЦБ РБ для внесения в кассы клиник',
    'prices.partner.item3': 'Для упрощения трансграничных расчётов и снижения банковских издержек',
    'prices.partner.note.title': 'Использование компании-партнёра не меняет правовой статус координатора:',
    'prices.partner.note.item1': 'Координатор не является медицинской организацией',
    'prices.partner.note.item2': 'Медицинские услуги оказываются Клиниками напрямую',
    'prices.partner.note.item3': 'Координатор не вмешивается в процесс лечения',
    
    // Bank Details
    'prices.bank.title': 'Официальное подтверждение реквизитов',
    'prices.bank.text': 'Банковские реквизиты предоставляются только по официальному письменному запросу.',
    'prices.bank.confirmation': 'После подтверждения Заказчику предоставляются все необходимые платёжные и подтверждающие документы.',
    
    // Important for Patient
    'prices.patient.title': 'Важно для пациента',
    'prices.patient.item1': 'Координатор оказывает исключительно организационные услуги',
    'prices.patient.item2': 'Медицинские решения принимает Клиника',
    'prices.patient.item3': 'Оплата медицинских услуг производится Клиникам напрямую либо по согласованной схеме',
    
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
    
    // About - Hero
    'about.hero.title': 'Professional Medical Treatment Organization at Leading Belarusian Medical Centers',
    'about.hero.subtitle': 'International Support, Confidentiality, Individual Medical Approach',
    
    // About - Mission
    'about.mission.badge': 'Mission and Values',
    'about.mission.title': 'Our Mission',
    'about.mission.text1': 'To provide patients from the Middle East and other countries around the world with access to the best medical services in the Republic of Belarus.',
    'about.mission.text2': 'Our mission is to combine medicine, culture, and hospitality, transforming Belarus into one of the key centers of medical tourism in Eastern Europe.',
    
    // About - Values
    'about.values.title': 'Our Key Values',
    'about.values.patient.title': 'Patient Care',
    'about.values.patient.desc': 'Individual approach, respect and attention to each patient',
    'about.values.transparency.title': 'Price Transparency',
    'about.values.transparency.desc': 'Clear cost structure without hidden fees',
    'about.values.confidentiality.title': 'Confidentiality',
    'about.values.confidentiality.desc': 'Strict protection of personal and medical data',
    'about.values.standards.title': 'International Standards',
    'about.values.standards.desc': 'Treatment based on recognized global clinical protocols',
    
    // About - Strategy
    'about.strategy.title': 'Strategic Vision',
    'about.strategy.subtitle': 'Stanoprint Company focuses on three strategic objectives',
    'about.strategy.turnkey.title': 'Comprehensive Turnkey Service',
    'about.strategy.turnkey.desc': 'Full coordination of the patient journey, including diagnostics, treatment, rehabilitation, accommodation, medical translation, and logistics.',
    'about.strategy.cooperation.title': 'International Cooperation',
    'about.strategy.cooperation.desc': 'Development of long-term interstate and institutional relations with Arab countries and other regions in healthcare, education, and pharmaceuticals.',
    'about.strategy.reputation.title': 'Building International Reputation of Belarusian Medicine',
    'about.strategy.reputation.desc': 'Increasing recognition and trust in the medicine of the Republic of Belarus by providing high-quality medical services to foreign patients at competitive prices.',
    
    // About - Company
    'about.company.title': 'Who We Are',
    'about.company.legal': 'Legal Entity',
    'about.company.name': 'Limited Liability Company "Stanoprint"',
    'about.company.address.label': 'Legal Address',
    'about.company.address.value': '220124, Republic of Belarus, Minsk, M. Lynkova str., 101/3, office 44',
    'about.company.phone.label': 'Phone / Fax',
    
    // About - Role
    'about.role.title': 'Our Role',
    'about.role.text1': 'Stanoprint Company acts as a medical tourism coordinator for foreign patients planning treatment in the Republic of Belarus.',
    'about.role.text2': 'The company provides exclusively organizational, informational, and coordination services, ensuring effective interaction of patients with accredited medical institutions.',
    
    // About - Why Belarus
    'about.whybelarus.title': 'Why Belarus',
    'about.whybelarus.subtitle': 'Belarus is among the leading states in Eastern Europe with significant competitive advantages in healthcare',
    'about.whybelarus.specialists': 'High level of medical specialists',
    'about.whybelarus.equipment': 'Modern diagnostic and treatment equipment',
    'about.whybelarus.system': 'Comprehensive state healthcare system',
    'about.whybelarus.prices': 'Affordable and transparent prices',
    'about.whybelarus.directions': 'Most sought-after medical directions:',
    'about.whybelarus.dir.oncology': 'Oncology and radiology',
    'about.whybelarus.dir.cardiology': 'Cardiology and orthopedics',
    'about.whybelarus.dir.ophthalmology': 'Ophthalmology',
    'about.whybelarus.dir.endocrinology': 'Endocrinology and obesity treatment',
    'about.whybelarus.dir.diagnostics': 'Comprehensive diagnostics and rehabilitation',
    'about.whybelarus.stats': 'In 2024, more than 160,000 foreign citizens from 159 countries received medical care in Belarus, including more than 1,000 patients from Libya.',
    
    // About - Advantages
    'about.advantages.title': 'Key Advantages of Belarusian Medicine',
    'about.advantages.quality.title': 'Quality',
    'about.advantages.reputation.title': 'Reputation',
    'about.advantages.comfort.title': 'Safety and Comfort',
    'about.quality.protocols': 'International clinical protocols (NCCN, ESMO, ESC)',
    'about.quality.equipment': 'High-tech equipment: PET-CT, MRI 3 Tesla, VMAT, Da Vinci robotic systems, 3D navigation',
    'about.quality.doctors': 'More than 45,000 doctors across the country',
    'about.quality.training': 'Specialists trained in Germany, Israel, South Korea, Poland',
    'about.reputation.oncology': 'One of the strongest oncology schools in the region',
    'about.reputation.diagnostics': 'High diagnostic accuracy',
    'about.reputation.complications': 'Low complication rate',
    'about.reputation.ethics': 'Strict medical ethics standards',
    'about.comfort.safety': 'Safe European country',
    'about.comfort.cities': 'Clean cities and clear infrastructure',
    'about.comfort.languages': 'Staff speaking English, Russian, and partially Arabic',
    'about.advantages.duration': 'Average patient stay duration: 7-14 days',
    
    // About - Medical Centers
    'about.centers.title': 'Leading Medical Centers',
    'about.centers.table.name': 'Medical Center',
    'about.centers.table.profile': 'Profile',
    'about.centers.cardiology.name': 'RSPC "Cardiology"',
    'about.centers.cardiology.profile': 'Cardiac surgery, diagnostics, vascular surgery',
    'about.centers.oncology.name': 'RSPC "Oncology"',
    'about.centers.oncology.profile': 'Chemotherapy, radiation therapy, surgical treatment',
    'about.centers.neurosurgery.name': 'RSPC "Neurosurgery"',
    'about.centers.neurosurgery.profile': 'Brain and spine surgery',
    'about.centers.lode.name': 'Medical Center "LODE"',
    'about.centers.lode.profile': 'Comprehensive check-up programs, diagnostics',
    'about.centers.newmed.name': 'Clinic "New Medicine"',
    'about.centers.newmed.profile': 'Plastic and reconstructive surgery',
    'about.centers.ophthalmology.name': 'Belarusian Ophthalmology Clinic',
    'about.centers.ophthalmology.profile': 'Laser vision correction, cataract treatment',
    'about.centers.yunost.name': 'Sanatorium "Yunost"',
    'about.centers.yunost.profile': 'Premium rehabilitation programs',
    
    // About - Tourism
    'about.tourism.title': 'Medical Tourism and Cultural Programs',
    'about.tourism.subtitle': 'Additional programs are available for patients with non-intensive treatment and accompanying persons',
    'about.tourism.historical': 'Historic Minsk, Mir Castle, Nesvizh',
    'about.tourism.parks': 'National parks and ethno-tours',
    'about.tourism.spa': 'SPA and wellness complexes, mineral springs',
    'about.tourism.gastro': 'Shopping tours and seasonal gastronomic routes',
    'about.tourism.note': 'These programs increase the attractiveness of packages for family and VIP clients.',
    
    // About - Our Services
    'about.ourservices.title': 'Scope of Services',
    'about.ourservices.subtitle': 'Stanoprint Company provides exclusively organizational, informational, and coordination services',
    'about.services.clinic': 'Selection of clinic and preliminary treatment and diagnostic programs based on medical documents provided by the patient',
    'about.services.cost': 'Obtaining estimated costs for diagnostics and treatment from clinics',
    'about.services.arrival': 'Organization of arrival in Belarus (airport pickup, transfers - by agreement)',
    'about.services.accommodation': 'Organization of accommodation (hotels, apartments, sanatoriums)',
    'about.services.leisure': 'Organization of leisure, excursion and cultural programs',
    'about.services.transfers': 'Organization of transfers within Belarus (by separate agreement)',
    'about.services.communication': 'Information support and assistance in communication with clinics (translation, coordination of dates and procedures)',
    
    // About - Disclaimer
    'about.disclaimer.title': 'Legal Disclaimer',
    'about.disclaimer.text1': 'All medical services (diagnostics, treatment, surgical interventions, rehabilitation) are provided directly by medical institutions based on separate contracts between the patient and the respective clinic.',
    'about.disclaimer.text2': 'Stanoprint Company:',
    'about.disclaimer.important': 'Important:',
    'about.disclaimer.point1': 'Is not a medical organization',
    'about.disclaimer.point2': 'Does not provide medical services',
    'about.disclaimer.point3': 'Does not interfere in the diagnosis and treatment process',
    'about.disclaimer.point4': 'Is not responsible for medical decisions of doctors, treatment results, possible complications, side effects and changes in treatment costs due to medical necessity',
    'about.disclaimer.permits': 'Tourism permits on the territory of the Republic of Belarus are issued in accordance with established procedures.',
    
    // About - Offices
    'about.offices.title': 'Offices and Representations',
    'about.offices.headquarters': 'Headquarters',
    'about.offices.representation': 'Representation',
    'about.offices.belarus.title': 'Belarus',
    'about.offices.oman.title': 'Oman',
    'about.offices.oman.reg': 'Registration number',
    'about.offices.oman.address': 'Al Khuwair / Bousher / Governorate of Muscat',
    
    // Tourism Page
    'tourism.hero.badge': 'Medical Tourism to the Republic of Belarus',
    'tourism.hero.title': 'Medical Tourism to the Republic of Belarus',
    'tourism.hero.intro': 'Belarus has all the necessary prerequisites to become a new and promising destination for medical tourism for citizens of Arab countries and other regions of the world. The high level of medicine, modern technologies, affordable prices, and safe environment make the country particularly attractive for foreign patients.',
    'tourism.hero.gap': 'At the same time, until now, there has been no specialized operator in the market capable of combining medical, logistics, cultural, and service offerings into a single, convenient, and understandable system adapted to Islamic traditions and the mentality of Arab patients.',
    
    'tourism.project.title': 'ARABIA.BY Project',
    'tourism.project.desc': 'The ARABIA.BY project is becoming the first comprehensive solution that not only offers a medical tour but forms a new market segment — medical and cultural tourism based on:',
    'tourism.project.point1': 'respect for religious and cultural characteristics',
    'tourism.project.point2': 'personal accompaniment',
    'tourism.project.point3': 'high standards of medical service',
    'tourism.project.value': 'This creates high strategic value for the project, investment attractiveness, and sustainable prospects for international cooperation.',
    
    'tourism.state.title': 'State of Medical Tourism in Belarus',
    'tourism.state.desc': 'Medical tourism in the Republic of Belarus is a steadily developing sector in which the country has formed a strong international reputation as a provider of quality medical services at competitive prices over recent years.',
    'tourism.state.flow': 'In the period 2010-2019, the annual flow of foreign patients exceeded 150,000 people.',
    'tourism.state.recovery': 'After a temporary decline associated with the COVID-19 pandemic, since 2022 the market has been showing stable recovery and growth.',
    'tourism.state.factors.title': 'The development of medical tourism is facilitated by:',
    'tourism.state.factor1': 'growing trust in the Belarusian healthcare system',
    'tourism.state.factor2': 'expansion of cooperation with Middle Eastern and African countries',
    'tourism.state.factor3': 'development of state and private medical centers of international level',
    'tourism.state.feature': 'The key feature of the Belarusian model is orientation not towards mass cosmetic procedures, but towards high-tech treatment, rehabilitation, and prevention in specialized medical fields.',
    
    'tourism.directions.title': 'Main Medical Directions',
    'tourism.directions.oncology.title': 'Oncology and Radiology',
    'tourism.directions.oncology.desc': 'Belarus is one of the regional leaders in the treatment of oncological diseases.',
    'tourism.directions.oncology.point1': 'high-precision diagnostics',
    'tourism.directions.oncology.point2': 'modern methods of chemo- and radiation therapy',
    'tourism.directions.oncology.point3': 'comprehensive multidisciplinary approach',
    'tourism.directions.oncology.centers': 'Leading centers:',
    'tourism.directions.oncology.center1': 'RSPC of Oncology and Medical Radiology named after N.N. Alexandrov',
    'tourism.directions.oncology.center2': 'RSPC for Organ and Tissue Transplantation (including bone marrow transplantation)',
    
    'tourism.directions.cardiology.title': 'Cardiology and Cardiac Surgery',
    'tourism.directions.cardiology.point1': 'open heart surgery',
    'tourism.directions.cardiology.point2': 'coronary bypass surgery',
    'tourism.directions.cardiology.point3': 'stent and pacemaker installation',
    'tourism.directions.cardiology.price': 'The cost of cardiac surgery is 2-3 times lower than in Western European countries, with comparable quality.',
    'tourism.directions.cardiology.center': 'Key center: RSPC "Cardiology" — one of the leading cardiac centers in Eastern Europe.',
    
    'tourism.directions.orthopedics.title': 'Orthopedics and Traumatology',
    'tourism.directions.orthopedics.point1': 'hip and knee joint replacement',
    'tourism.directions.orthopedics.point2': 'short waiting times for operations',
    'tourism.directions.orthopedics.point3': 'effective rehabilitation',
    'tourism.directions.orthopedics.centers': 'Key institutions:',
    'tourism.directions.orthopedics.center1': 'RSPC of Traumatology and Orthopedics (Minsk)',
    'tourism.directions.orthopedics.center2': 'Belarusian Prosthetic and Orthopedic Rehabilitation Center',
    
    'tourism.directions.ivf.title': 'Reproductive Medicine (IVF)',
    'tourism.directions.ivf.point1': 'modern IVF programs',
    'tourism.directions.ivf.point2': 'high success rate',
    'tourism.directions.ivf.point3': 'procedure costs 2-4 times lower than in EU countries',
    'tourism.directions.ivf.centers': 'Leading centers:',
    'tourism.directions.ivf.center1': 'International Center for Reproductive Technologies "Medica"',
    'tourism.directions.ivf.center2': 'RSPC "Mother and Child"',
    
    'tourism.directions.ophthalmology.title': 'Ophthalmology',
    'tourism.directions.ophthalmology.point1': 'treatment of cataracts, glaucoma, retinopathies',
    'tourism.directions.ophthalmology.point2': 'eye microsurgery',
    'tourism.directions.ophthalmology.point3': 'vision restoration in diabetic complications',
    'tourism.directions.ophthalmology.center': 'Key center: Minsk Research Institute of Eye Diseases',
    
    'tourism.why.title': 'Why Patients Choose Belarus',
    'tourism.why.prices.title': 'Competitive Prices',
    'tourism.why.prices.point1': 'medical services 30-50% cheaper than in Western Europe',
    'tourism.why.prices.point2': '20-30% lower than in Russia and Kazakhstan',
    'tourism.why.prices.point3': 'transparent pricing without hidden costs',
    
    'tourism.why.quality.title': 'High Quality of Medicine',
    'tourism.why.quality.point1': 'international clinical protocols (NCCN, ESMO, ESC)',
    'tourism.why.quality.point2': 'high-tech equipment: PET-CT, MRI 3T, VMAT, robotic systems, 3D navigation',
    'tourism.why.quality.point3': 'more than 45,000 doctors across the country',
    'tourism.why.quality.point4': 'specialists trained in Germany, Israel, South Korea',
    
    'tourism.why.safety.title': 'Safety and Comfort',
    'tourism.why.safety.point1': 'stable and safe country',
    'tourism.why.safety.point2': 'clean cities and developed infrastructure',
    'tourism.why.safety.point3': 'friendly environment',
    'tourism.why.safety.point4': 'medical and service staff speaking Russian, English, and partially Arabic',
    
    'tourism.why.convenience.title': 'Convenience and Speed',
    'tourism.why.convenience.point1': 'no long queues',
    'tourism.why.convenience.point2': 'quick treatment coordination',
    'tourism.why.convenience.point3': 'average patient stay — 7-14 days',
    
    'tourism.prospects.title': 'Development Prospects',
    'tourism.prospects.desc': 'Belarus has all the grounds to become a regional center for medical tourism in Eastern Europe, especially in the segments of high-tech medicine and rehabilitation.',
    'tourism.prospects.factors.title': 'Key growth factors:',
    'tourism.prospects.factor1': 'formation of a unified Medical Belarus brand',
    'tourism.prospects.factor2': 'simplification of visa procedures',
    'tourism.prospects.factor3': 'development of comprehensive turnkey services',
    'tourism.prospects.factor4': 'international partnerships between clinics, universities, and medical operators',
    
    'tourism.conclusion.title': 'Conclusion',
    'tourism.conclusion.text1': 'Medical tourism in Belarus is at a stage of mature growth and has high potential for internationalization. At the same time, the niche oriented towards Arab countries and the Islamic cultural context has remained virtually vacant until now.',
    'tourism.conclusion.project': 'ARABIA.BY Project:',
    'tourism.conclusion.point1': 'fills this gap',
    'tourism.conclusion.point2': 'combines the medical expertise of Belarus with culturally adapted service',
    'tourism.conclusion.point3': 'transforms the Republic of Belarus into an attractive destination for patients from Libya, Oman, UAE, Egypt, and Saudi Arabia',
    'tourism.conclusion.final': 'ARABIA.BY is not just medical tourism. It is a new format of international cooperation, trust, and humanitarian diplomacy.',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    
    // Institutions
    'institutions.title': 'Leading Medical Institutions',
    'institutions.subtitle': 'Best hospitals and medical centers in Belarus',
    'institutions.hero.badge': 'Belarus — Clinics for Foreign Patients',
    'institutions.hero.title': 'Medical Institutions of Belarus',
    'institutions.hero.subtitle': 'What they treat, where they treat, service features',
    
    'institutions.type.state': 'State',
    'institutions.type.private': 'Private',
    'institutions.profile.title': 'Profile:',
    'institutions.foreigners.title': 'For foreigners:',
    
    // Categories
    'institutions.category.cardiology': 'Cardiology and Cardiac Surgery',
    'institutions.category.oncology': 'Oncology and Radiology',
    'institutions.category.transplant': 'Transplantology',
    'institutions.category.neuro': 'Neurosurgery and Neurology',
    'institutions.category.ortho': 'Orthopedics and Traumatology',
    'institutions.category.ivf': 'Reproductive Medicine (ART / IVF)',
    'institutions.category.eye': 'Ophthalmology',
    'institutions.category.vip': '"VIP Medicine" and Check-up',
    'institutions.category.multi': 'Multi-specialty City Clinics',
    'institutions.category.rehab': 'Rehabilitation and Restorative Medicine',
    
    // Cardiology Center
    'institutions.cardiology.name': 'RSPC "Cardiology"',
    'institutions.cardiology.address': 'Minsk, Rosa Luxemburg str., 110B',
    'institutions.cardiology.profile1': 'Interventional cardiology (CAG, PCI, stenting)',
    'institutions.cardiology.profile2': 'Open heart surgery',
    'institutions.cardiology.profile3': 'Coronary artery bypass grafting (CABG)',
    'institutions.cardiology.profile4': 'Valve operations',
    'institutions.cardiology.profile5': 'Heart transplantation and combined transplants (including for children)',
    'institutions.cardiology.foreign1': 'Full treatment cycle',
    'institutions.cardiology.foreign2': 'Separate procedure for paid services',
    'institutions.cardiology.foreign3': 'International department',
    'institutions.cardiology.foreign4': 'Coordinator support',
    
    // Oncology Center
    'institutions.oncology.name': 'N.N. Alexandrov National Cancer Centre',
    'institutions.oncology.address': 'Minsk region, Lesnoy village',
    'institutions.oncology.profile1': 'Oncosurgery of all localizations',
    'institutions.oncology.profile2': 'Chemotherapy, targeted therapy',
    'institutions.oncology.profile3': 'High-precision radiation therapy (IMRT, VMAT)',
    'institutions.oncology.profile4': 'Oncohematology',
    'institutions.oncology.foreign1': 'Separate service regulations',
    'institutions.oncology.foreign2': 'Official paid programs',
    'institutions.oncology.foreign3': 'Assistance with logistics and timelines',
    
    // Transplant Center
    'institutions.transplant.name': 'RSPC for Organ and Tissue Transplantation',
    'institutions.transplant.address': 'Minsk, Semashko str., 8',
    'institutions.transplant.profile1': 'Kidney transplantation',
    'institutions.transplant.profile2': 'Liver transplantation',
    'institutions.transplant.profile3': 'Bone marrow transplantation',
    'institutions.transplant.profile4': 'Combined transplantations',
    'institutions.transplant.foreign1': 'Treatment by individual admission',
    'institutions.transplant.foreign2': 'High international level of operations',
    'institutions.transplant.foreign3': 'Post-transplant support',
    
    // Neuro Center
    'institutions.neuro.name': 'RSPC of Neurology and Neurosurgery',
    'institutions.neuro.address': 'Minsk, Francysk Skaryna str., 24',
    'institutions.neuro.profile1': 'Neuro-oncology',
    'institutions.neuro.profile2': 'Vascular neurosurgery',
    'institutions.neuro.profile3': 'Endovascular interventions',
    'institutions.neuro.profile4': 'Stereotactic surgery (DBS)',
    'institutions.neuro.profile5': 'Pediatric neurosurgery',
    'institutions.neuro.foreign1': 'Paid programs',
    'institutions.neuro.foreign2': 'High-tech operations',
    'institutions.neuro.foreign3': 'Short waiting times',
    
    // Ortho Center
    'institutions.ortho.name': 'RSPC of Traumatology and Orthopedics',
    'institutions.ortho.address': 'Minsk, Kizhevatova str., 60',
    'institutions.ortho.profile1': 'Hip and knee joint replacement',
    'institutions.ortho.profile2': 'Spine surgery',
    'institutions.ortho.profile3': 'Sports traumatology',
    'institutions.ortho.foreign1': 'Affordable prices',
    'institutions.ortho.foreign2': 'Fast hospitalization',
    'institutions.ortho.foreign3': 'Rehabilitation programs',
    
    // Prosthetic Center
    'institutions.prosthetic.name': 'Belarusian Prosthetic and Orthopedic Rehabilitation Center',
    'institutions.prosthetic.address': 'Minsk, Odoevskogo str., 10',
    'institutions.prosthetic.profile1': 'Individual prosthetics',
    'institutions.prosthetic.profile2': 'Motor function restoration',
    'institutions.prosthetic.foreign1': 'Personalized solutions',
    'institutions.prosthetic.foreign2': 'Comprehensive rehabilitation',
    
    // BINA Center
    'institutions.bina.name': 'International Center for Reproductive Technologies BINA',
    'institutions.bina.address': 'Minsk, Nemanskaya str., 67',
    'institutions.bina.profile1': 'IVF, ICSI',
    'institutions.bina.profile2': 'Donor programs',
    'institutions.bina.profile3': 'Oocyte and sperm cryopreservation',
    'institutions.bina.foreign1': 'English-speaking support',
    'institutions.bina.foreign2': 'Transparent packages',
    'institutions.bina.foreign3': 'High success rate',
    
    // Mother and Child Center
    'institutions.mother.name': 'RSPC "Mother and Child"',
    'institutions.mother.address': 'Minsk, Orlovskaya str., 66',
    'institutions.mother.profile1': 'Full cycle of reproductive medicine',
    'institutions.mother.profile2': 'Management of complicated pregnancies',
    'institutions.mother.foreign1': 'State programs',
    'institutions.mother.foreign2': 'International treatment protocols',
    
    // Ophthalmology Clinic
    'institutions.ophthalmology.name': 'Belarusian Ophthalmology Clinic',
    'institutions.ophthalmology.address': 'Minsk, Prytytskogo str., 79',
    'institutions.ophthalmology.profile1': 'Laser vision correction',
    'institutions.ophthalmology.profile2': 'Cataract',
    'institutions.ophthalmology.profile3': 'Glaucoma',
    'institutions.ophthalmology.foreign1': 'Fast procedures',
    'institutions.ophthalmology.foreign2': 'Outpatient treatment',
    'institutions.ophthalmology.foreign3': 'Short stay duration',
    
    // Eye Research Institute
    'institutions.eye.name': 'Minsk Research Institute of Eye Diseases',
    'institutions.eye.address': 'Minsk, Kolasa str., 16',
    'institutions.eye.profile1': 'Eye microsurgery',
    'institutions.eye.profile2': 'Complex ophthalmological cases',
    
    // VIP Clinic
    'institutions.vip.name': 'Republican Clinical Medical Center (VIP-Clinic)',
    'institutions.vip.address': 'Minsk, Zhdanovichskaya str., 18',
    'institutions.vip.profile1': 'Comprehensive check-up programs',
    'institutions.vip.profile2': 'Surgery and endoscopy',
    'institutions.vip.profile3': 'Premium-level diagnostics',
    'institutions.vip.foreign1': 'High-comfort rooms',
    'institutions.vip.foreign2': 'Personal support',
    'institutions.vip.foreign3': 'Accelerated examinations',
    
    // Hospital 5
    'institutions.hospital5.name': 'Minsk City Clinical Hospital No. 5',
    'institutions.hospital5.address': 'Minsk, Filatova str., 9',
    'institutions.hospital5.profile1': 'General surgery',
    'institutions.hospital5.profile2': 'Therapy',
    'institutions.hospital5.profile3': 'Diagnostics',
    'institutions.hospital5.foreign1': 'Official paid services',
    'institutions.hospital5.foreign2': 'Work through medical operators',
    'institutions.hospital5.foreign3': 'Fixed price lists',
    
    // Yunost Sanatorium
    'institutions.yunost.name': 'Sanatorium "Yunost"',
    'institutions.yunost.address': 'Minsk region, Zaslavskoe reservoir',
    'institutions.yunost.profile1': 'Cardiac and neuro-rehabilitation',
    'institutions.yunost.profile2': 'Post-operative recovery',
    'institutions.yunost.profile3': 'Wellness and SPA',
    'institutions.yunost.foreign1': 'Premium programs',
    'institutions.yunost.foreign2': 'Comfortable accommodation',
    'institutions.yunost.foreign3': 'Family format',
    
    // Summary
    'institutions.summary.title': 'Summary for the Website',
    'institutions.summary.point1': 'Full range of high-tech medicine',
    'institutions.summary.point2': 'Prices 30-70% lower than in the EU',
    'institutions.summary.point3': 'World-class state centers',
    'institutions.summary.point4': 'Safe and comfortable environment',
    'institutions.summary.point5': 'No queues and fast treatment timelines',
    
    // Doctors
    'doctors.title': 'Leading Doctors',
    'doctors.subtitle': 'Leading specialists at key medical institutions in Belarus',
    'doctors.experience': 'experience',
    'doctors.operations': 'successful operations',
    
    // Doctor Clinics
    'doctors.clinic.cardiology.name': 'RSPC Cardiology',
    'doctors.clinic.cardiology.address': 'Minsk, Rosa Luxemburg St., 110B',
    'doctors.clinic.oncology.name': 'NSPC of Oncology and Medical Radiology named after N.N. Alexandrov',
    'doctors.clinic.oncology.address': 'Minsk Region, Lesnoy village',
    'doctors.clinic.neurosurgery.name': 'RSPC of Neurology and Neurosurgery',
    'doctors.clinic.neurosurgery.address': 'Minsk, Francisk Skorina St., 24',
    'doctors.clinic.vip.name': 'Republican Clinical Medical Center (VIP-Clinic)',
    'doctors.clinic.vip.address': 'Minsk, Zhdanovichi, Building 81, Block 5',
    'doctors.clinic.orthopedics.name': 'RSPC of Traumatology and Orthopedics',
    'doctors.clinic.orthopedics.address': 'Minsk, Kizhevatova St., 60',
    'doctors.clinic.reproductive.name': 'International Center for Reproductive Technologies BINA',
    'doctors.clinic.reproductive.address': 'Minsk, Nemanskaya St., 67',
    
    // Individual Doctors - Cardiology
    'doctors.ostrovsky.name': 'Yuri Petrovich Ostrovsky',
    'doctors.ostrovsky.degree': 'Doctor of Medical Sciences, Professor, Academician',
    'doctors.ostrovsky.specialty': 'Cardiac Surgery, Heart Transplantation',
    'doctors.ostrovsky.experience': 'Over 30 years',
    'doctors.ostrovsky.clinic': 'RSPC Cardiology',
    
    'doctors.shket.name': 'Alexander Pavlovich Shket',
    'doctors.shket.degree': 'Candidate of Medical Sciences',
    'doctors.shket.specialty': 'Cardiac Surgery',
    'doctors.shket.experience': 'Over 27 years',
    'doctors.shket.clinic': 'Republican Clinical Medical Center',
    
    'doctors.gubar.name': 'Elena Nikolaevna Gubar',
    'doctors.gubar.degree': 'Physician of the Highest Qualification Category',
    'doctors.gubar.specialty': 'Cardiology',
    'doctors.gubar.experience': 'Over 38 years',
    'doctors.gubar.clinic': 'Republican Clinical Medical Center',
    
    'doctors.dovnar.name': 'Nelli Maryanovna Dovnar',
    'doctors.dovnar.degree': 'Specialist Physician',
    'doctors.dovnar.specialty': 'Cardiology',
    'doctors.dovnar.experience': '28 years',
    'doctors.dovnar.clinic': 'Republican Clinical Medical Center',
    
    // Individual Doctors - Oncology
    'doctors.karanik.name': 'Vladimir Stepanovich Karanik',
    'doctors.karanik.degree': 'Candidate of Medical Sciences',
    'doctors.karanik.specialty': 'Thoracic Oncology, Lung Surgery',
    'doctors.karanik.experience': 'Many years',
    'doctors.karanik.clinic': 'RSPC Oncology',
    
    'doctors.gizemova.name': 'Olga Anatolyevna Gizemova',
    'doctors.gizemova.degree': 'Candidate of Medical Sciences',
    'doctors.gizemova.specialty': 'Radiation Oncology',
    'doctors.gizemova.experience': 'Many years',
    'doctors.gizemova.clinic': 'RSPC Oncology',
    
    'doctors.aleinikova.name': 'Olga Vitalyevna Aleinikova',
    'doctors.aleinikova.degree': 'Doctor of Medical Sciences, Professor',
    'doctors.aleinikova.specialty': 'Pediatric Onco-Hematology',
    'doctors.aleinikova.experience': 'Many years',
    'doctors.aleinikova.clinic': 'Pediatric Oncology and Hematology Center',
    
    // Individual Doctors - Neurosurgery
    'doctors.sidorovich.name': 'Ryshard Romualdovich Sidorovich',
    'doctors.sidorovich.degree': 'Doctor of Medical Sciences, Professor',
    'doctors.sidorovich.specialty': 'Neurology and Neurosurgery (Center Director)',
    'doctors.sidorovich.experience': 'Many years',
    'doctors.sidorovich.clinic': 'RSPC Neurosurgery',
    
    'doctors.talabaev.name': 'Mikhail Vladimirovich Talabaev',
    'doctors.talabaev.degree': 'Doctor of Medical Sciences, Associate Professor',
    'doctors.talabaev.specialty': 'Pediatric Neurosurgery',
    'doctors.talabaev.experience': 'Many years',
    'doctors.talabaev.clinic': 'RSPC Neurosurgery',
    
    'doctors.vasilevich.name': 'Eduard Nikolaevich Vasilevich',
    'doctors.vasilevich.degree': 'Candidate of Medical Sciences, Associate Professor',
    'doctors.vasilevich.specialty': 'Neurosurgery',
    'doctors.vasilevich.experience': 'Many years',
    'doctors.vasilevich.clinic': 'RSPC Neurosurgery',
    
    'doctors.bunyak.name': 'Anna Georgievna Bunyak',
    'doctors.bunyak.degree': 'Candidate of Medical Sciences, Associate Professor',
    'doctors.bunyak.specialty': 'Neurology',
    'doctors.bunyak.experience': 'Many years',
    'doctors.bunyak.clinic': 'RSPC Neurosurgery',
    
    // Individual Doctors - VIP Clinic
    'doctors.burko.name': 'Vladimir Dmitrievich Burko',
    'doctors.burko.degree': 'Candidate of Sciences',
    'doctors.burko.specialty': 'Urology',
    'doctors.burko.experience': '34 years',
    'doctors.burko.clinic': 'Republican Clinical Medical Center',
    
    'doctors.geyno.name': 'Elena Vladimirovna Geyno',
    'doctors.geyno.degree': 'Specialist Physician',
    'doctors.geyno.specialty': 'Otorhinolaryngology',
    'doctors.geyno.experience': '32 years',
    'doctors.geyno.clinic': 'Republican Clinical Medical Center',
    
    'doctors.olikhver.name': 'Yuri Alekseevich Olikhver',
    'doctors.olikhver.degree': 'Cardiac Surgeon',
    'doctors.olikhver.specialty': 'Cardiac Surgery',
    'doctors.olikhver.experience': '24 years',
    'doctors.olikhver.clinic': 'Republican Clinical Medical Center',
    
    'doctors.glybovskaya.name': 'Tatyana Vikentyevna Glybovskaya',
    'doctors.glybovskaya.degree': 'Candidate of Medical Sciences',
    'doctors.glybovskaya.specialty': 'Cardiology',
    'doctors.glybovskaya.experience': '31 years',
    'doctors.glybovskaya.clinic': 'Republican Clinical Medical Center',
    
    // Individual Doctors - Orthopedics
    'doctors.volkov.name': 'Sergey Ivanovich Volkov',
    'doctors.volkov.degree': 'Specialist Physician',
    'doctors.volkov.specialty': 'Orthopedic Surgery, Joint Replacement',
    'doctors.volkov.experience': 'Over 25 years',
    'doctors.volkov.clinic': 'RSPC Traumatology and Orthopedics',
    
    // Individual Doctors - Reproductive
    'doctors.kuznetsova.name': 'Maria Petrovna Kuznetsova',
    'doctors.kuznetsova.degree': 'Specialist Physician',
    'doctors.kuznetsova.specialty': 'ART/IVF, Reproductive Medicine',
    'doctors.kuznetsova.experience': 'Over 15 years',
    'doctors.kuznetsova.clinic': 'International Center for Reproductive Technologies BINA',
    
    // Prices
    'prices.title': 'Prices',
    'prices.subtitle': 'Competitive and transparent pricing',
    'prices.includes': 'Includes',
    'prices.from': 'from',
    'prices.or': 'or',
    'prices.device': 'device',
    'prices.service': 'Service',
    'prices.cost': 'Cost, USD',
    'prices.profile': 'Treatment profile',
    'prices.estimate': 'Estimate, USD',
    'prices.hero.title': 'Medical Tourism Prices and Conditions in Belarus',
    'prices.hero.subtitle': 'Belarus offers foreign patients high-quality medical care in state and private clinics at competitive prices',
    'prices.important.title': 'Important',
    'prices.important.text': 'The prices listed are indicative. The final cost of treatment is determined by the medical institution after reviewing medical documents and conducting initial diagnostics.',
    'prices.treatment.title': 'Indicative Treatment Prices',
    'prices.cardiology.title': 'Cardiology and Cardiac Surgery',
    'prices.cardiology.subtitle': 'State Specialized Centers',
    'prices.cardiology.profile': 'Coronary heart disease, valve defects, arrhythmias, heart failure, interventional and open cardiac surgery',
    'prices.cardiology.cag': 'Coronary Angiography (CAG)',
    'prices.cardiology.stenting': 'Stenting (1 stent)',
    'prices.cardiology.cabg': 'Coronary Artery Bypass Grafting (CABG)',
    'prices.cardiology.valve': 'Heart Valve Replacement',
    'prices.cardiology.pacemaker': 'Pacemaker Implantation',
    'prices.cardiology.ablation': 'Radiofrequency Ablation',
    'prices.cardiology.tavi': 'TAVI (as indicated)',
    'prices.oncology.title': 'Oncology and Radiology',
    'prices.oncology.subtitle': 'State Oncology Centers',
    'prices.oncology.profile': 'All cancer types, oncosurgery, chemo and radiation therapy, targeted therapy, CAR-T (as indicated)',
    'prices.oncology.gastrectomy': 'Gastrectomy',
    'prices.oncology.whipple': 'Whipple Procedure',
    'prices.oncology.lobectomy': 'Lung Lobectomy',
    'prices.oncology.thyroid': 'Thyroid Surgery',
    'prices.oncology.radiation': 'Radiation Therapy (IMRT / VMAT)',
    'prices.oncology.chemo': 'Chemotherapy (1 cycle)',
    'prices.oncology.cart': 'CAR-T (preparatory stage)',
    'prices.neuro.title': 'Neurology and Neurosurgery',
    'prices.neuro.subtitle': 'State Neurosurgical Centers',
    'prices.neuro.profile': 'Brain tumors, aneurysms, vascular pathologies, functional neurosurgery, DBS',
    'prices.neuro.mri': 'Brain MRI',
    'prices.neuro.aneurysm': 'Aneurysm Clipping',
    'prices.neuro.avm': 'AVM Removal',
    'prices.neuro.meningioma': 'Meningioma Removal',
    'prices.neuro.dbs': 'DBS (bilateral implantation)',
    'prices.neuro.embolization': 'Aneurysm Embolization',
    'prices.ivf.title': 'Reproductive Medicine (IVF)',
    'prices.ivf.subtitle': 'Private Specialized Centers',
    'prices.ivf.profile': 'Infertility, IVF, ICSI, donor programs, oncofertility',
    'prices.ivf.basic': 'IVF (basic cycle)',
    'prices.ivf.icsi': 'IVF + ICSI',
    'prices.ivf.donor': 'IVF with donor oocytes',
    'prices.ivf.oncofertility': 'Oncofertility',
    'prices.transplant.title': 'Organ Transplantation',
    'prices.transplant.subtitle': 'National Specialized Centers',
    'prices.transplant.type': 'Transplant Type',
    'prices.transplant.kidney': 'Kidney',
    'prices.transplant.liver': 'Liver',
    'prices.transplant.heart': 'Heart',
    'prices.transplant.note': 'Cost is determined individually and depends on the clinical case, donor, medication support, and post-operative period.',
    'prices.coordinator.title': 'Coordinator Services Cost',
    'prices.coordinator.intro': 'Organizational services are provided separately from medical services, which are provided directly by the Clinics.',
    'prices.coordinator.fee.title': 'Service Fee / Coordinator Fee',
    'prices.coordinator.fee.text': 'The cost is fixed individually and usually amounts to:',
    'prices.coordinator.fee.percent': '5-10% of the estimated cost of diagnostics and treatment',
    'prices.coordinator.fee.fixed': 'Fixed amount from $1,500 to $5,000',
    'prices.coordinator.fee.note': 'The amount depends on the complexity of the medical case, length of stay, and scope of support.',
    'prices.coordinator.services.title': 'Coordinator services may include:',
    'prices.coordinator.service1': 'Coordination with Clinics',
    'prices.coordinator.service2': 'Preliminary organization of diagnostics and treatment',
    'prices.coordinator.service3': 'Organization of transfers and accommodation',
    'prices.coordinator.service4': 'Information and language support',
    'prices.coordinator.service5': 'Assistance in communication with medical institutions',
    'prices.coordinator.service6': 'Organization of excursion and cultural programs (on request)',
    'prices.payment.title': 'Payment Procedure and Schedule',
    'prices.payment.advance.title': 'Advance Payment',
    'prices.payment.advance.item1': '50% of coordinator services cost',
    'prices.payment.advance.item2': 'Estimated cost of diagnostics and treatment',
    'prices.payment.advance.item3': 'No later than 10 calendar days before arrival in Belarus',
    'prices.payment.after.title': 'After Initial Diagnostics',
    'prices.payment.after.item1': 'The Clinic and the Client agree on the final treatment cost directly',
    'prices.payment.after.item2': 'Medical services are paid directly to the Clinic',
    'prices.payment.after.item3': 'The coordinator may act as a temporary payment intermediary, not being a medical organization',
    'prices.payment.via.title': 'Payment via Coordinator (by agreement)',
    'prices.payment.via.item1': 'Acceptance of funds in freely convertible currency is possible',
    'prices.payment.via.item2': 'Subsequent payment for Clinic services and third parties',
    'prices.payment.via.item3': 'Provision of supporting documents',
    'prices.payment.adjustment.title': 'Cost Adjustment',
    'prices.payment.adjustment.text': 'Possible when:',
    'prices.payment.adjustment.item1': 'Service composition changes at the Client initiative',
    'prices.payment.adjustment.item2': 'Third-party tariffs change (accommodation, transport, excursions)',
    'prices.payment.urgent.title': 'Urgent Cases',
    'prices.payment.urgent.text': 'When applying less than 10 days before arrival:',
    'prices.payment.urgent.item1': 'Terms are agreed individually',
    'prices.payment.urgent.item2': 'Prepayment may be up to 100% of coordinator services cost',
    'prices.partner.title': 'Payment via Partner Company',
    'prices.partner.intro': 'For the convenience of foreign patients and optimization of international settlements, payment through a partner company is available:',
    'prices.partner.usage': 'The partner company can be used:',
    'prices.partner.item1': 'For receiving payments in freely convertible currency',
    'prices.partner.item2': 'For subsequent transfer of funds to the Contractor, with disbursement to the patient in Belarusian rubles at the National Bank of Belarus exchange rate for deposit at clinic cash desks',
    'prices.partner.item3': 'For simplifying cross-border settlements and reducing banking costs',
    'prices.partner.note.title': 'Using the partner company does not change the legal status of the coordinator:',
    'prices.partner.note.item1': 'The coordinator is not a medical organization',
    'prices.partner.note.item2': 'Medical services are provided directly by the Clinics',
    'prices.partner.note.item3': 'The coordinator does not interfere in the treatment process',
    'prices.bank.title': 'Official Confirmation of Bank Details',
    'prices.bank.text': 'Bank details are provided only upon official written request.',
    'prices.bank.confirmation': 'After confirmation, the Client is provided with all necessary payment and supporting documents.',
    'prices.patient.title': 'Important for Patient',
    'prices.patient.item1': 'The coordinator provides exclusively organizational services',
    'prices.patient.item2': 'Medical decisions are made by the Clinic',
    'prices.patient.item3': 'Payment for medical services is made to Clinics directly or according to the agreed scheme',

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
