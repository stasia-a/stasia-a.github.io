import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Loader2, CheckCircle } from 'lucide-react';
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
  telegram: z.string().optional(),
  diagnosis: z.string().min(5, 'Diagnosis is required').max(500),
  readiness: z.enum(['ready', 'month', 'planning']),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const ApplicationForm = () => {
  const { t, dir } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      readiness: 'month',
    },
  });
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const { data: result, error } = await supabase.functions.invoke('send-to-telegram', {
        body: {
          type: 'standard',
          name: data.name,
          email: data.email,
          phone: data.phone,
          whatsapp: data.whatsapp,
          telegram: data.telegram,
          diagnosis: data.diagnosis,
          readiness: data.readiness === 'ready' ? 'Готов сейчас' : data.readiness === 'month' ? 'В течение месяца' : 'Планирую',
          message: data.message,
        },
      });

      if (error) {
        console.error('Error sending to Telegram:', error);
        toast.error('Ошибка отправки. Попробуйте позже.');
        setIsSubmitting(false);
        return;
      }

      console.log('Form submitted successfully:', result);
      setIsSuccess(true);
      toast.success(t('form.success'));
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
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald/20 flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-emerald" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">{t('form.success')}</h3>
        <p className="text-muted-foreground">{t('form.subtitle')}</p>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" dir={dir}>
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">{t('form.name')} *</Label>
        <Input
          id="name"
          {...register('name')}
          placeholder={t('form.name')}
          className={errors.name ? 'border-destructive' : ''}
        />
        {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
      </div>
      
      {/* Email & Phone */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">{t('form.email')} *</Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder="email@example.com"
            className={errors.email ? 'border-destructive' : ''}
          />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">{t('form.phone')} *</Label>
          <Input
            id="phone"
            type="tel"
            {...register('phone')}
            placeholder="+971 50 123 4567"
            className={errors.phone ? 'border-destructive' : ''}
          />
          {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
        </div>
      </div>
      
      {/* WhatsApp & Telegram */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="whatsapp">{t('form.whatsapp')}</Label>
          <Input
            id="whatsapp"
            {...register('whatsapp')}
            placeholder="+971 50 123 4567"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telegram">{t('form.telegram')}</Label>
          <Input
            id="telegram"
            {...register('telegram')}
            placeholder="@username"
          />
        </div>
      </div>
      
      {/* Diagnosis */}
      <div className="space-y-2">
        <Label htmlFor="diagnosis">{t('form.diagnosis')} *</Label>
        <Textarea
          id="diagnosis"
          {...register('diagnosis')}
          placeholder={t('form.diagnosis')}
          rows={3}
          className={errors.diagnosis ? 'border-destructive' : ''}
        />
        {errors.diagnosis && <p className="text-sm text-destructive">{errors.diagnosis.message}</p>}
      </div>
      
      {/* Readiness */}
      <div className="space-y-3">
        <Label>{t('form.readiness')} *</Label>
        <RadioGroup defaultValue="month" className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="flex items-center space-x-2 p-3 rounded-lg border border-border hover:border-primary transition-colors">
            <RadioGroupItem value="ready" id="ready" {...register('readiness')} />
            <Label htmlFor="ready" className="cursor-pointer flex-1">{t('form.readiness.ready')}</Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg border border-border hover:border-primary transition-colors">
            <RadioGroupItem value="month" id="month" {...register('readiness')} />
            <Label htmlFor="month" className="cursor-pointer flex-1">{t('form.readiness.month')}</Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg border border-border hover:border-primary transition-colors">
            <RadioGroupItem value="planning" id="planning" {...register('readiness')} />
            <Label htmlFor="planning" className="cursor-pointer flex-1">{t('form.readiness.planning')}</Label>
          </div>
        </RadioGroup>
      </div>
      
      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">{t('form.message')}</Label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder={t('form.message')}
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
            Loading...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            {t('form.submit')}
          </>
        )}
      </Button>
    </form>
  );
};

export default ApplicationForm;
