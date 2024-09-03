import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import './MainContent.css'; 

const MainContent = () => {
    return (
        <div className="main-container">
            <Navbar />
            <main className="content">
                {/* Mostrar el contenido de las rutas anidadas */}
                <Outlet />
            </main>
            {/* Mostrar la imagen */}
            <img 
                src='/escudo.jpg' // Ruta relativa a la raíz de `public`
                alt='Escudo'
                className="main-image"
            />
        </div>
    );
};

export default MainContent;

