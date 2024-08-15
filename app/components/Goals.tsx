import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';
import { type } from 'os';

const Goals = () => {
  return (
    <div className='bg-gradient-to-r from-red-600 to-pink-800 h-screen flex flex-col items-center pb-6'>
      <h1 className='my-4 text-4xl font-bold text-white'>Personal Goals</h1>
      <Image
        src='https://images.pexels.com/photos/21696/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
        alt='logo'
        width={430}
        height={430}
        className='shadow-2xl my-6 rounded-xl'
      />
      <div className='w-3/4 mx-auto text-white text-xl'>
        <Accordion type='single' collapsible>
          <AccordionItem value='item-1'>
            <AccordionTrigger>
              Do my best at my job assignments.
            </AccordionTrigger>
            <AccordionContent>
              There may be times when the work asked of me may not be what I
              enjoy or even what I have experience with, but I will do my best
              to complete the task and try to make the most of the opportunity.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>Improve my Japanese skills.</AccordionTrigger>
            <AccordionContent>
              Japanese is very difficult to learn, however this is Japan and it
              is important to improve my Japanese skills so I can make it easier
              for my employer and my coworkers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>Positive Attitude</AccordionTrigger>
            <AccordionContent>
              I am hoping this working term to improve my attitude and maintain
              positivity in all aspects of my life, both at work and at home.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
export default Goals;
