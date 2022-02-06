import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import Image from 'next/image';

export default function NewDocument() {
  return (
    <section className='bg-[#F8F9FA] pb-10 px-10'>
      <div className='max-w-3xl mx-auto'>
        <div className='flex items-center justify-between py-6'>
          <h2 className='text-gray-700 text-lg'>
            Start new document
          </h2>
          <Button
            className='border-0'
            color='gray'
            buttonType='outline'
            iconOnly={true}
            ripple='dark'
          >
            <Icon name='more_vert' size='3xl' />
          </Button>
        </div>
        <div>
          <div className='relative h-52 w-40 border-2 cursor-pointer hover:border-blue-400'>
            <Image
              loading='lazy'
              layout='fill'
              src='https://links.papareact.com/pju'
              alt=''
            />
          </div>
          <p className='ml-2 mt-2 font-semi-bold text-sm text-gray-700'>Blank</p>
        </div>
      </div>
    </section>
  );
}