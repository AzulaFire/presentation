import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import {
  img1,
  img2,
  img3,
  img6,
  img8,
  img10,
  img15,
  img18,
  img19,
  img20,
  img21,
  img22,
} from '@/public/images';

const details = [
  {
    id: 1,
    title: 'Coffee Shop',
    image: img22,
  },
  {
    id: 2,
    title: 'Multi-Form',
    image: img21,
  },
  {
    id: 3,
    title: 'Kanban Board',
    image: img19,
  },
  {
    id: 4,
    title: 'Game Website',
    image: img15,
  },
  {
    id: 5,
    title: 'Nike Website',
    image: img1,
  },
  {
    id: 6,
    title: 'Anime Website',
    image: img10,
  },
  {
    id: 7,
    title: 'Blog Website',
    image: img2,
  },
  {
    id: 8,
    title: 'Budget Tracker',
    image: img3,
  },
  {
    id: 9,
    title: 'Kanji Study App',
    image: img6,
  },
  {
    id: 10,
    title: 'Property Website',
    image: img8,
  },
  {
    id: 11,
    title: 'Documentation App',
    image: img18,
  },
  {
    id: 12,
    title: 'Decision Matrix',
    image: img20,
  },
];

const Projects = () => {
  return (
    <div className='bg-gradient-to-r from-amber-500 to-violet-600 h-max flex flex-col items-center pb-6'>
      <h1 className='my-4 text-4xl font-bold text-white'>Projects</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 place-items-center'>
        {details.map((detail) => (
          <Card key={detail.id}>
            <CardContent className='flex flex-col items-center justify-center p-6'>
              <h2 className='text-xl font-bold my-2'>{detail.title}</h2>

              <div className='flex flex-row'>
                <Image
                  src={detail.image}
                  alt={detail.title}
                  width={200}
                  height={200}
                  priority={true}
                  className='shadow-2xl rounded-xl'
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default Projects;
