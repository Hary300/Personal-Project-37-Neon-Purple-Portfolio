import BlurCircle from '@/components/shared/BlurCircle';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { backgroundData } from '@/data/backgroundData';
import type { ModalContent } from '@/data/modalData';

interface ContactModalProps {
  modal: ModalContent;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const ContactModal = ({ modal, isOpen, onOpenChange }: ContactModalProps) => {
  const gridPattern = backgroundData.modalGridPattern;
  const particles = backgroundData.modalParticles;
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        className='sm:max-w-119.75  pb-8 lg:pb-10 flex flex-col w-full justify-center gap-10 lg:gap-11.75 items-center overflow-hidden'
        showCloseButton={false}
      >
        <div className='relative w-full flex justify-center pt-[55.45px] lg:pt-18'>
          <BlurCircle
            className='size-70 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 blur-[120px] -z-1'
            color='primary'
          />
          <div className='absolute inset-0 -z-1 flex justify-center items-center'>
            <img
              src={gridPattern}
              alt='grid pattern'
              className=' opacity-10 max-w-58'
            />
          </div>
          <div className='absolute inset-0 flex justify-center items-center'>
            <img src={particles} alt='modal particles' />
          </div>
          <div className='max-w-[168.82px] '>
            <img src={modal.image} alt={`${modal.status} image`} />
          </div>
        </div>
        <div className='flex flex-col gap-6 px-6 lg:px-8  text-center'>
          <div className='flex flex-col gap-2'>
            <p className='font-semibold text-lg lg:text-xl'>{modal.title}</p>
            <p className='text-sm lg:text-md text-neutral-200'>
              {modal.description}
            </p>
          </div>
          <Button onClick={() => onOpenChange(false)} className='w-full'>
            {modal.buttonText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
