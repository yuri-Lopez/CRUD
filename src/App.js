import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import './App.css';

// Importar los componentes de las páginas
import CreateAdministrardatos from './pages/CreateAdministrardatos';
import UpdateAdministrardatos from './pages/UpdateAdministrardatos';
import DeleteAdministrardatos from './pages/DeleteAdministrardatos';
import ListAdministrardatos from './pages/ListAdministrardatos';

import CreateEditarUsuario from './pages/CreateEditarUsuario';
import UpdateEditarUsuario from './pages/UpdateEditarUsuario';
import DeleteEditarUsuario from './pages/DeleteEditarUsuario';
import ListEditarUsuario from './pages/ListEditarUsuario';

import CreateIngresoPersonal from './pages/CreateIngresoPersonal';
import UpdateIngresoPersonal from './pages/UpdateIngresoPersonal';
import DeleteIngresoPersonal from './pages/DeleteIngresoPersonal';
import ListIngresoPersonal from './pages/ListIngresoPersonal';

import CreateEgresoPersonal from './pages/CreateEgresoPersonal';
import UpdateEgresoPersonal from './pages/UpdateEgresoPersonal';
import DeleteEgresoPersonal from './pages/DeleteEgresoPersonal';
import ListEgresoPersonal from './pages/ListEgresoPersonal';

import CreateRegistro from './pages/CreateRegistro';
import UpdateRegistro from './pages/UpdateRegistro';
import DeleteRegistro from './pages/DeleteRegistro';
import ListRegistro from './pages/ListRegistro';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                {/* Ruta principal que usa MainContent como contenedor */}
                <Route path="/" element={<MainContent />}>
                    {/* Rutas para Administrar Datos */}
                    <Route path="administrardatoscrear" element={<CreateAdministrardatos />} />
                    <Route path="administrardatosactualizar" element={<UpdateAdministrardatos />} />
                    <Route path="administrardatoseliminar" element={<DeleteAdministrardatos />} />
                    <Route path="administrardatoslistar" element={<ListAdministrardatos />} />

                    {/* Rutas para Editar Usuario */}
                    <Route path="editar-usuario/crear" element={<CreateEditarUsuario />} />
                    <Route path="editar-usuario/actualizar" element={<UpdateEditarUsuario />} />
                    <Route path="editar-usuario/eliminar" element={<DeleteEditarUsuario />} />
                    <Route path="editar-usuario/listar" element={<ListEditarUsuario />} />

                    {/* Rutas para Ingreso Personal */}
                    <Route path="ingreso-personal/crear" element={<CreateIngresoPersonal />} />
                    <Route path="ingreso-personal/actualizar" element={<UpdateIngresoPersonal />} />
                    <Route path="ingreso-personal/eliminar" element={<DeleteIngresoPersonal />} />
                    <Route path="ingreso-personal/listar" element={<ListIngresoPersonal />} />

                    {/* Rutas para Egreso Personal */}
                    <Route path="egreso-personal/crear" element={<CreateEgresoPersonal />} />
                    <Route path="egreso-personal/actualizar" element={<UpdateEgresoPersonal />} />
                    <Route path="egreso-personal/eliminar" element={<DeleteEgresoPersonal />} />
                    <Route path="egreso-personal/listar" element={<ListEgresoPersonal />} />

                    {/* Rutas para Registro */}
                    <Route path="registro/crear" element={<CreateRegistro />} />
                    <Route path="registro/actualizar" element={<UpdateRegistro />} />
                    <Route path="registro/eliminar" element={<DeleteRegistro />} />
                    <Route path="registro/listar" element={<ListRegistro />} />

                </Route>
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
