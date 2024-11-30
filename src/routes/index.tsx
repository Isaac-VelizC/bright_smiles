import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../layouts/layout'; // Asegúrate de que la ruta sea correcta
import Home from './../containers/pages/Home';
import About from './../containers/pages/About';
import Doctor from './../containers/pages/Doctor';
import Treatments from './../containers/pages/Treatments';
import ShowTreatmentPage from './../containers/pages/Treatments/showTreatmentPage';
import Blog from './../containers/pages/Blog';
import ShowBlogPage from "./../containers/pages/Blog/showBlogPage";
import Contact from './../containers/pages/Contact';
import Error404 from '../containers/errors/404';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="doctor" element={<Doctor />} />
                    <Route path="treatments" element={<Treatments />} />
                    <Route path="treatments/show" element={<ShowTreatmentPage />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="blog/show" element={<ShowBlogPage />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
                <Route path='404' element={<Error404/>} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;