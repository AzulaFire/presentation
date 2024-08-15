import PageTransitionLayout from '../layouts/PageTransitionLayout';
import Nav from '../components/Nav';
import Agenda from '../components/Agenda';

const AgendaPage = () => {
  return (
    <>
      <Nav />
      <PageTransitionLayout>
        <div className='h-full w-full'>
          <Agenda />
        </div>
      </PageTransitionLayout>
    </>
  );
};
export default AgendaPage;
