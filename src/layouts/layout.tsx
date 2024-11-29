// src/layouts/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
import { useScrollToTop } from '../hooks/use_scroll_to_top';
import { motion } from 'framer-motion';

const Layout: React.FC = () => {
    useScrollToTop();

    // Definición de la animación
    const pageTransition = {
        initial: { opacity: 0, x: 50 }, // Estado inicial
        animate: { opacity: 1, x: 0 }, // Estado final
        exit: { opacity: 0, x: -50 }, // Estado al salir
        transition: { duration: 0.5 } // Duración de la transición
    };

    return (
        <div className=''>
            <Navbar />
            <main>
                <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageTransition}
                >
                    <Outlet />
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;