import PageTransitionLayout from '../layouts/PageTransitionLayout';
import Nav from '../components/Nav';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  return (
    <>
      <Nav />
      <PageTransitionLayout>
        <div className='h-full w-full'>
          <Projects />
        </div>
      </PageTransitionLayout>
    </>
  );
};
export default ProjectsPage;
