import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

import ctScanner from '@/assets/equipment/ct-scanner.jpg';
import hyperthermia from '@/assets/equipment/hyperthermia.jpg';
import mrtOpen from '@/assets/equipment/mrt-open.jpg';
import petMrtDoctor from '@/assets/equipment/pet-mrt-doctor.jpg';
import mrtPhilips from '@/assets/equipment/mrt-philips.jpg';
import petCtSiemens from '@/assets/equipment/pet-ct-siemens.jpg';
import petMriBlue from '@/assets/equipment/pet-mri-blue.jpg';
import petMrtPatient from '@/assets/equipment/pet-mrt-patient.jpg';

const EquipmentGallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const equipment = [
    {
      image: petMriBlue,
      title: 'PET-MRI Siemens Biograph mMR',
      description: 'Гибридный ПЭТ-МРТ сканер для точной диагностики',
    },
    {
      image: petCtSiemens,
      title: 'PET-CT Siemens Biograph mCT',
      description: 'Современный ПЭТ-КТ сканер для онкологической диагностики',
    },
    {
      image: mrtPhilips,
      title: 'MRI Philips 3T',
      description: 'Высокопольный МРТ 3 Тесла',
    },
    {
      image: petMrtPatient,
      title: 'PET-MRT Siemens',
      description: 'Комфортное обследование с участием квалифицированного персонала',
    },
    {
      image: petMrtDoctor,
      title: 'PET-MRT Philips',
      description: 'Профессиональная диагностика под контролем специалистов',
    },
    {
      image: mrtOpen,
      title: 'Открытый МРТ',
      description: 'Комфортное обследование для пациентов с клаустрофобией',
    },
    {
      image: hyperthermia,
      title: 'Гипертермия',
      description: 'Современное оборудование для термотерапии',
    },
    {
      image: ctScanner,
      title: 'CT Scanner GE',
      description: 'Компьютерный томограф для быстрой диагностики',
    },
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % equipment.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + equipment.length) % equipment.length);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('equipment.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('equipment.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipment.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer bg-card shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.description}</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1 line-clamp-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-black/95 border-none">
          {selectedImage !== null && (
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <img
                src={equipment[selectedImage].image}
                alt={equipment[selectedImage].title}
                className="w-full max-h-[80vh] object-contain"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-white">
                <h3 className="text-xl font-bold mb-2">{equipment[selectedImage].title}</h3>
                <p className="text-white/80">{equipment[selectedImage].description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default EquipmentGallery;
