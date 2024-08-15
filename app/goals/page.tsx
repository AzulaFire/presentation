import PageTransitionLayout from '../layouts/PageTransitionLayout';
import Nav from '../components/Nav';
import Goals from '../components/Goals';

const GoalsPage = () => {
  return (
    <>
      <Nav />
      <PageTransitionLayout>
        <div className='h-full w-full'>
          <Goals />
        </div>
      </PageTransitionLayout>
    </>
  );
};
export default GoalsPage;
