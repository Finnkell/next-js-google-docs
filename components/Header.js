import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white'>
      <Button
        className='md:inline-flex h-20 w-20 border-0'
        color='gray'
        buttonType='outline'
        rounded={true}
        iconOnly={true}
        ripple='dark'
      >
        <Icon name='menu' size='3xl' />
      </Button>
      <Icon name='description' size='5xl' color='blue' />
      <h1 className='md:inline-flex ml-2 text-gray-700 text-2xl'>
        Docs
      </h1>
      <div className='md:mx-20 mx-5 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md'>
        <Icon name='search' size='3xl' color='gray' />
        <input
          className='flex-grow px-5 text-base bg-transparent outline-none'
          type='text'
          placeholder='Search'
        />
      </div>
      <Button
        className='md:inline-flex ml-5 md:ml-20 h-20 w-20 border-0'
        color='gray'
        buttonType='outline'
        rounded={true}
        iconOnly={true}
        ripple='dark'
      >
        <Icon name='apps' size='3xl' color='gray' />
      </Button>
      <div className="relative h-12 w-12 ml-2">
        <Image
          className='cursor-pointer rounded-full'
          layout='fill'
          objectFit='cover'
          loading='lazy'
          // onClick={signOut}
          // src={session.user.image}
          src='https://lh3.googleusercontent.com/ogw/ADea4I595z7qC8alHZ9dIA0r7BzSWEPbZl6vFgIg13RTojo=s32-c-mo'
          alt=''
        />
      </div>
    </header>
  );
}