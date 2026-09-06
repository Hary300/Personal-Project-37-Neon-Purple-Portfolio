import { Button } from '@/components/ui/button';
import { contactData } from '@/data/10-contactData';
import { contactSchema, type ContactSchema } from '@/schema/contactSchema';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from './InputField';
import { zodResolver } from '@hookform/resolvers/zod';
import ContactModal from './ContactModal';
import {
  notificationModalData,
  type NotificationModalData,
} from '@/data/modalData';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchema>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    resolver: zodResolver(contactSchema),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: ContactSchema) => {
    try {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSuccess(true);
      console.log(data);
      reset();
    } catch (error) {
      setIsSuccess(false);
      console.log(error);
    } finally {
      setIsOpen(true);
      setIsSubmitting(false);
    }
  };

  const fields = contactData.fields;
  const key: keyof NotificationModalData = isSuccess ? 'success' : 'error';
  const modal = notificationModalData[key];

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>test modal</Button>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='p-4 lg:p-6 rounded-3xl lg:rounded-4xl backdrop-blur-2xl bg-white/5 w-full max-w-120 flex flex-col gap-4 lg:gap-5'
      >
        {fields.map((field) => {
          const errorMessage = errors[field.name]?.message;
          return (
            <InputField
              key={field.name}
              register={register}
              name={field.name}
              placeholder={field.placeholder}
              type={field.type}
              errorMessage={errorMessage}
            />
          );
        })}
        <Button type='submit' disabled={isSubmitting} className='w-full'>
          {isSubmitting ? 'Sending...' : 'Send'}
        </Button>
      </form>
      <ContactModal
        modal={modal}
        isOpen={isOpen}
        onOpenChange={(isOpen) => setIsOpen(isOpen)}
      />
    </>
  );
};

export default ContactForm;
