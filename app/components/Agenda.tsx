import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

export const details = [
  {
    id: 1,
    title: 'Personal Review of Last Year',
    description: 'Highlights',
    bulletPoints: [
      'Worked and extended 2 job assignments.',
      'Trained 15-20 employees basic Python skills.',
      'Completed 10+ projects in Python, React, and NextJS.',
      'Obtained 3+ certifications in C#, React, and NextJS.',
    ],
    image:
      'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    title: 'Strengths',
    description: 'Key Points',
    bulletPoints: [
      'Strong Problem-Solving Skills: Ability to analyze complex problems and design effective solutions.',
      'Technical Proficiency: Deep knowledge of programming languages, tools, and best practices.',
      'Continuous Learning: Commitment to keeping up with industry trends and emerging technologies.',
    ],
    image:
      'https://plus.unsplash.com/premium_photo-1695807489199-4ba908b63826?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fFByb2JsZW0lMjBTb2x2aW5nfGVufDB8MHwwfHx8MA%3D%3D',
  },
  {
    id: 3,
    title: 'Weaknesses',
    description: 'Key Points',
    bulletPoints: [
      'Japanese Skills: Unability to read and write Japanese. Speaking still limited.',
      'Over-Engineering: Tendency to create overly complex solutions instead of simpler, more efficient ones.',
      'Lack of Teamwork: Tendency to work independently and without a team.',
    ],
    image:
      'https://images.pexels.com/photos/1498273/pexels-photo-1498273.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    title: 'Goals for the Upcoming Year',
    description: 'Action Plan',
    bulletPoints: [
      'Win long-term assignments (front-end react/js) for a year or more.',
      'Recommend at least one person for consideration to join TechnoPro.',
      'Mentor at least two young developers on React/Next JS fundamentals or other programming technologies.',
    ],
    image:
      'https://images.pexels.com/photos/262438/pexels-photo-262438.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const Agenda = () => {
  return (
    <div className='bg-gradient-to-r from-green-500 to-blue-600 h-screen flex flex-col items-center'>
      <h1 className='my-4 text-4xl font-bold text-white'>Agenda</h1>
      <Carousel className='max-w-6xl'>
        <CarouselContent>
          {details.map((detail) => (
            <CarouselItem key={detail.id}>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex flex-col aspect-auto items-center justify-center p-6'>
                    <h2 className='text-3xl font-bold'>{detail.title}</h2>
                    <p className='text-xl my-4 font-semibold'>
                      {detail.description}
                    </p>
                    <div className='grid grid-cols-2 h-[400px] items-center justify-center gap-6'>
                      <div>
                        <ul className='pl-10 w-[600px]'>
                          {detail.bulletPoints.map((bulletPoint) => (
                            <li
                              className='text-xl my-4 flex flex-row'
                              key={bulletPoint}
                            >
                              <FaStar className='text-yellow-500 mr-4' />
                              {bulletPoint}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className='flex justify-center'>
                        <Image
                          src={detail.image}
                          alt={detail.title}
                          width={400}
                          height={400}
                          priority={true}
                          className='shadow-2xl rounded-xl'
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default Agenda;
