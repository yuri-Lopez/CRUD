import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de crear este archivo para los estilos del menú

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveDropdown(index);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    const dropdowns = [
        { title: 'Administrar Datos', links: [
            { href: '/administrardatoscrear', text: 'Crear' },
            { href: '/administrardatosactualizar', text: 'Actualizar' },
            { href: '/administrardatoseliminar', text: 'Eliminar' },
            { href: '/administrardatoslistar', text: 'Listar' }
        ] },
        { title: 'Editar Usuario', links: [
            { href: '/editar-usuario/crear', text: 'Crear' },
            { href: '/editar-usuario/actualizar', text: 'Actualizar' },
            { href: '/editar-usuario/eliminar', text: 'Eliminar' },
            { href: '/editar-usuario/listar', text: 'Listar' }
        ] },
        { title: 'Ingreso Personal', links: [
            { href: '/ingreso-personal/crear', text: 'Crear' },
            { href: '/ingreso-personal/actualizar', text: 'Actualizar' },
            { href: '/ingreso-personal/eliminar', text: 'Eliminar' },
            { href: '/ingreso-personal/listar', text: 'Listar' }
        ] },
        { title: 'Egreso Personal', links: [
            { href: '/egreso-personal/crear', text: 'Crear' },
            { href: '/egreso-personal/actualizar', text: 'Actualizar' },
            { href: '/egreso-personal/eliminar', text: 'Eliminar' },
            { href: '/egreso-personal/listar', text: 'Listar' }
        ] },
        { title: 'Registro', links: [
            { href: '/registro/crear', text: 'Crear' },
            { href: '/registro/actualizar', text: 'Actualizar' },
            { href: '/registro/eliminar', text: 'Eliminar' },
            { href: '/registro/listar', text: 'Listar' }
        ] }
    ];

    return (
        <nav className="navbar">
            <ul className="menu">
                <li><Link to="/">Inicio</Link></li>
                {dropdowns.map((dropdown, index) => (
                    <li
                        key={index}
                        className="dropdown"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button
                            className="dropdown-button"
                            aria-expanded={activeDropdown === index}
                            aria-haspopup="true"
                        >
                            {dropdown.title}
                        </button>
                        {activeDropdown === index && (
                            <ul className="dropdown-content" role="menu">
                                {dropdown.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link to={link.href}>{link.text}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
