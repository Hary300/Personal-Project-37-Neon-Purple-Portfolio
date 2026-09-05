import BlurCircle from '@/components/shared/BlurCircle';
import { Button } from '@/components/ui/button';

function App() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='size-10 mt-10 ml-10 shadow-purple border flex justify-center items-center rounded-2xl'>
        4
      </div>
      <div className='max-w-45'>
        <Button className='w-full'>Hire Me</Button>
      </div>
      <BlurCircle color='primary' size='lg' />
      <div className='w-full h-px bg-white'></div>
      <BlurCircle color='secondary' size='md' />
      <div className='w-full h-px bg-white'></div>
      <BlurCircle color='secondary' size='sm' />
      <div className='w-100 h-1.5 mt-10 ml-10 shadow-purple border flex justify-center items-center rounded-2xl bg-horizontal-gradient-purple-pink'></div>
      <div className='h-100 w-1.5 mt-10 ml-10 shadow-purple border flex justify-center items-center rounded-2xl bg-vertical-gradient-purple-pink'></div>
    </div>
  );
}

export default App;
