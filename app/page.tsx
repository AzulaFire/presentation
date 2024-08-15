import PageTransitionLayout from './layouts/PageTransitionLayout';
import Title from './components/Title';
import Nav from './components/Nav';

const App = () => {
  return (
    <>
      <Nav />
      <PageTransitionLayout>
        <div className='h-full w-full'>
          <Title />
        </div>
      </PageTransitionLayout>
    </>
  );
};
export default App;
