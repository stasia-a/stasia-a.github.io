import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, dir } = useLanguage();
  
  return (
    <footer className="bg-primary text-primary-foreground" dir={dir}>
      {/* Arabic Pattern Overlay */}
      <div className="arabic-pattern">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gold flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">M</span>
                </div>
                <div>
                  <div className="font-bold text-xl">MedBelarus</div>
                  <div className="text-sm text-primary-foreground/70">{t('about.subtitle')}</div>
                </div>
              </div>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                {t('about.mission.text')}
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-gold">{t('nav.home')}</h3>
              <nav className="flex flex-col gap-2">
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
                  {t('nav.home')}
                </Link>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
                  {t('nav.about')}
                </Link>
                <Link to="/tourism" className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
                  {t('nav.tourism')}
                </Link>
                <Link to="/institutions" className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
                  {t('nav.institutions')}
                </Link>
                <Link to="/doctors" className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
                  {t('nav.doctors')}
                </Link>
                <Link to="/prices" className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
                  {t('nav.prices')}
                </Link>
              </nav>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-gold">{t('contact.title')}</h3>
              <div className="space-y-3">
                <a href="tel:+375291234567" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-gold transition-colors">
                  <Phone className="w-4 h-4 text-gold" />
                  +375 29 123-45-67
                </a>
                <a href="mailto:info@medbelarus.com" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-gold transition-colors">
                  <Mail className="w-4 h-4 text-gold" />
                  info@medbelarus.com
                </a>
                <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                  <MapPin className="w-4 h-4 text-gold mt-0.5" />
                  <span>Minsk, Belarus<br />Independence Ave, 95</span>
                </div>
              </div>
            </div>
            
            {/* Social */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-gold">Social Media</h3>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-6">
                <p className="text-sm text-primary-foreground/60">{t('contact.hours')}</p>
                <p className="text-sm text-primary-foreground/80">{t('contact.hours.value')}</p>
              </div>
            </div>
          </div>
          
          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2024 MedBelarus. {t('footer.rights')}
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link to="/terms" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
