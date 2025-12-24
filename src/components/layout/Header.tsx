import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage, dir } = useLanguage();
  const location = useLocation();
  
  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/tourism', label: t('nav.tourism') },
    { href: '/vip-tourism', label: t('nav.vipTourism') },
    { href: '/institutions', label: t('nav.institutions') },
    { href: '/doctors', label: t('nav.doctors') },
    { href: '/prices', label: t('nav.prices') },
  ];
  
  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧', short: 'EN' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦', short: 'AR' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺', short: 'RU' },
  ];
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg gradient-hero flex items-center justify-center">
              <span className="text-xl lg:text-2xl font-bold text-gold">M</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg text-foreground">MedBelarus</div>
              <div className="text-xs text-muted-foreground">{t('hero.subtitle').substring(0, 25)}...</div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" dir={dir}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground/70 hover:text-foreground hover:bg-secondary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* Actions */}
          <div className="flex items-center gap-2 lg:gap-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-1.5 px-2.5 border-border/50 hover:border-primary/30 hover:bg-primary/5"
                >
                  <span className="text-base leading-none">{languages.find(l => l.code === language)?.flag}</span>
                  <span className="text-xs font-semibold text-foreground/80">
                    {languages.find(l => l.code === language)?.short}
                  </span>
                  <ChevronDown className="w-3 h-3 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[140px]">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as 'ar' | 'ru' | 'en')}
                    className={`gap-2 ${language === lang.code ? 'bg-primary/10 text-primary' : ''}`}
                  >
                    <span className="text-base">{lang.flag}</span>
                    <span className="flex-1">{lang.name}</span>
                    {language === lang.code && (
                      <span className="text-xs text-primary">✓</span>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* CTA Buttons */}
            <Link to="/contacts" className="hidden sm:block">
              <Button variant="outline" size="sm">
                {t('nav.contacts')}
              </Button>
            </Link>
            <Link to="/apply" className="hidden sm:block">
              <Button variant="gold" size="sm">
                {t('nav.apply')}
              </Button>
            </Link>
            
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-up" dir={dir}>
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground/70 hover:text-foreground hover:bg-secondary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/apply"
                onClick={() => setIsOpen(false)}
                className="mt-2"
              >
                <Button variant="gold" className="w-full">
                  {t('nav.apply')}
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
