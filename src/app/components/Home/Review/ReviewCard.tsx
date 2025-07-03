import React from 'react'
import Image from 'next/image';
import { BsQuote } from 'react-icons/bs';

type Props = {
    image: string;
    name: string;
    role: string;
}

const ReviewCard = ({image, name, role}:Props) => {
  return (
    <div>
      <BsQuote className="w-14 h-14 text-pink-500 text-5xl"/>
      <p className='text-center text-gray-800 dark:text-gray-200 text-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        dignissimos consequuntur nisi voluptatibus ullam quod natus similique
        saepe laborum deserunt, porro nihil eos, tempore aliq uid. Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Facere accusantium debitis
        mollitia nihil voluptas dolorem.
      </p>
      <div className='mt-6'>
        <Image src={image} alt="image" width={100} height={100} className="object-center mx-auto rounded-full"/>
        <h1 className='text-lg font-bold text-center mt-4'>{name}</h1>
        <h1 className='text-center text-gray-500'>{role}</h1>
      </div>
    </div>
  );
}

export default ReviewCard