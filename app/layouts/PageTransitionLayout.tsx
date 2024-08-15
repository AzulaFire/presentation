'use client';
import { motion, AnimatePresence, animate } from 'framer-motion';
import { ReactNode, FC } from 'react';

// TYPES
interface ILayoutProps {
  children: ReactNode;
}

const PageTransitionLayout: FC<ILayoutProps> = ({ children }) => {
  return (
    <AnimatePresence mode={'wait'}>
      <motion.div
        initial='initialState'
        animate='animateState'
        exit='exitState'
        transition={{
          type: 'tween',
          duration: 0.8,
        }}
        variants={{
          initialState: {
            y: '100vh',
            opacity: 0.5,
          },
          animateState: {
            y: 0,
            opacity: 1,
          },
          exitState: {
            y: '-100vh',
          },
        }}
        className='min-h-screen w-full' // Feel free to add your classes here
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionLayout;
