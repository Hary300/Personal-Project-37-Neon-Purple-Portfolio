import successEnvelope from '@/assets/images/modal/successEnvelope.png';
import errorEnvelope from '@/assets/images/modal/errorEnvelope.png';

export interface ModalContent {
  status: keyof NotificationModalData;
  image: string;
  title: string;
  description: string;
  buttonText: string;
}

export interface NotificationModalData {
  success: ModalContent;
  error: ModalContent;
}

export const notificationModalData: NotificationModalData = {
  success: {
    status: 'success',
    image: successEnvelope,
    title: 'Message Sent Successfully!',
    description:
      "Thank you for reaching out. I'll get back to you as soon as possible",
    buttonText: 'Back to Home',
  },
  error: {
    status: 'error',
    image: errorEnvelope,
    title: 'Message failed to send.',
    description:
      'An unexpected error occurred. Kindly try again in a few moments.',
    buttonText: 'Try Again',
  },
};
