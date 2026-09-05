import type { HeaderData } from '@/types/headerData';

export type NameField = 'name' | 'email' | 'message';
export type LabelField = 'Name' | 'Email' | 'Message';
export type TypeField = 'text' | 'email' | 'textarea';

export interface FormField {
  name: NameField;
  label: LabelField;
  placeholder: string;
  type: TypeField;
}

export interface ContactFormData {
  header: HeaderData;
  fields: FormField[];
  submitButtonText: string;
}

// 2. Data Object
export const contactData: ContactFormData = {
  header: {
    title: 'Contact Me',
    subtitle:
      'Feel free to drop a message for any inquiries or collaborations.',
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      placeholder: 'Name',
      type: 'text',
    },
    {
      name: 'email',
      label: 'Email',
      placeholder: 'Email',
      type: 'email',
    },
    {
      name: 'message',
      label: 'Message',
      placeholder: 'Message',
      type: 'textarea',
    },
  ],
  submitButtonText: 'Send',
};
