import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Loader2, CheckCircle, Crown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required').max(100),
  email: z.string().email('Invalid email').max(255),
  phone: z.string().min(5, 'Phone is required').max(20),
  whatsapp: z.string().optional(),
  country: z.string().min(2, 'Country is required').max(100),
  vipPackage: z.enum(['silver', 'gold', 'platinum']),
  diagnosis: z.string().min(5, 'Diagnosis is required').max(500),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface VipApplicationFormProps {
  defaultPackage?: 'silver' | 'gold' | 'platinum';
}

const VipApplicationForm = ({ defaultPackage = 'gold' }: VipApplicationFormProps) => {
  const { t, dir } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset, watch, setValue } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vipPackage: defaultPackage,
    },
  });
  
  const selectedPackage = watch('vipPackage');
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const { data: result, error } = await supabase.functions.invoke('send-to-telegram', {
        body: {
          type: 'vip',
          name: data.name,
          email: data.email,
          phone: data.phone,
          whatsapp: data.whatsapp,
          country: data.country,
          vipPackage: data.vipPackage,
          diagnosis: data.diagnosis,
          message: data.message,
        },
      });

      if (error) {
        console.error('Error sending to Telegram:', error);
        toast.error('Ошибка отправки. Попробуйте позже.');
        setIsSubmitting(false);
        return;
      }

      console.log('VIP Form submitted successfully:', result);
      setIsSuccess(true);
      toast.success(t('vipForm.success'));
      reset();
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Ошибка отправки. Попробуйте позже.');
    }
    
    setIsSubmitting(false);
  };
  
  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-gold" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">{t('vipForm.success')}</h3>
        <p className="text-muted-foreground">{t('vipForm.successDesc')}</p>
      </div>
    );
  }
  
  const packages = [
    { 
      value: 'silver' as const, 
      label: 'VIP SILVER', 
      price: t('vip.packages.silver.price'),
      icon: Crown,
      color: 'text-gray-500',
      bgColor: 'bg-gray-100',
      borderColor: 'border-gray-300',
      selectedBorder: 'border-gray-500'
    },
    { 
      value: 'gold' as const, 
      label: 'VIP GOLD', 
      price: t('vip.packages.gold.price'),
      icon: Crown,
      color: 'text-gold',
      bgColor: 'bg-gold/10',
      borderColor: 'border-gold/30',
      selectedBorder: 'border-gold'
    },
    { 
      value: 'platinum' as const, 
      label: 'VIP PLATINUM', 
      price: t('vip.packages.platinum.price'),
      icon: Sparkles,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      selectedBorder: 'border-purple-500'
    },
  ];
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" dir={dir}>
      {/* VIP Package Selection */}
      <div className="space-y-3">
        <Label className="text-lg font-semibold">{t('vipForm.selectPackage')} *</Label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {packages.map((pkg) => (
            <button
              key={pkg.value}
              type="button"
              onClick={() => setValue('vipPackage', pkg.value)}
              className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                selectedPackage === pkg.value 
                  ? `${pkg.selectedBorder} ${pkg.bgColor} shadow-lg scale-[1.02]` 
                  : `${pkg.borderColor} bg-card hover:${pkg.bgColor}`
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 rounded-lg ${pkg.bgColor} flex items-center justify-center`}>
                  <pkg.icon className={`w-5 h-5 ${pkg.color}`} />
                </div>
                <div>
                  <div className={`font-bold ${pkg.color}`}>{pkg.label}</div>
                  <div className="text-xs text-muted-foreground">{pkg.price}</div>
                </div>
              </div>
              {selectedPackage === pkg.value && (
                <div className="flex items-center gap-1 mt-2">
                  <CheckCircle className={`w-4 h-4 ${pkg.color}`} />
                  <span className="text-xs text-muted-foreground">{t('vipForm.selected')}</span>
                </div>
              )}
            </button>
          ))}
        </div>
        <input type="hidden" {...register('vipPackage')} />
      </div>
      
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="vip-name">{t('form.name')} *</Label>
        <Input
          id="vip-name"
          {...register('name')}
          placeholder={t('form.name')}
          className={errors.name ? 'border-destructive' : ''}
        />
        {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
      </div>
      
      {/* Email & Phone */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="vip-email">{t('form.email')} *</Label>
          <Input
            id="vip-email"
            type="email"
            {...register('email')}
            placeholder="email@example.com"
            className={errors.email ? 'border-destructive' : ''}
          />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="vip-phone">{t('form.phone')} *</Label>
          <Input
            id="vip-phone"
            type="tel"
            {...register('phone')}
            placeholder="+971 50 123 4567"
            className={errors.phone ? 'border-destructive' : ''}
          />
          {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
        </div>
      </div>
      
      {/* WhatsApp & Country */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="vip-whatsapp">{t('form.whatsapp')}</Label>
          <Input
            id="vip-whatsapp"
            {...register('whatsapp')}
            placeholder="+971 50 123 4567"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="vip-country">{t('vipForm.country')} *</Label>
          <Input
            id="vip-country"
            {...register('country')}
            placeholder={t('vipForm.countryPlaceholder')}
            className={errors.country ? 'border-destructive' : ''}
          />
          {errors.country && <p className="text-sm text-destructive">{errors.country.message}</p>}
        </div>
      </div>
      
      {/* Diagnosis */}
      <div className="space-y-2">
        <Label htmlFor="vip-diagnosis">{t('form.diagnosis')} *</Label>
        <Textarea
          id="vip-diagnosis"
          {...register('diagnosis')}
          placeholder={t('vipForm.diagnosisPlaceholder')}
          rows={3}
          className={errors.diagnosis ? 'border-destructive' : ''}
        />
        {errors.diagnosis && <p className="text-sm text-destructive">{errors.diagnosis.message}</p>}
      </div>
      
      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="vip-message">{t('vipForm.specialRequests')}</Label>
        <Textarea
          id="vip-message"
          {...register('message')}
          placeholder={t('vipForm.specialRequestsPlaceholder')}
          rows={4}
        />
      </div>
      
      {/* Submit */}
      <Button
        type="submit"
        variant="gold"
        size="lg"
        className="w-full gap-2"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            {t('vipForm.submitting')}
          </>
        ) : (
          <>
            <Crown className="w-5 h-5" />
            {t('vipForm.submit')}
          </>
        )}
      </Button>
      
      {/* Privacy Note */}
      <p className="text-xs text-center text-muted-foreground">
        {t('vipForm.privacy')}
      </p>
    </form>
  );
};

export default VipApplicationForm;
