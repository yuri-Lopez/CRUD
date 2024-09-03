import React, { useEffect, useState } from 'react';
import Api from '../Api';
import './ListEditarUsuario.css'; // Asegúrate de tener este archivo CSS para estilos

const ListEditarUsuario = () => {
    const [editarUsuarios, setEditarUsuarios] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await Api.get('/editar_usuario/traerdato');
                setEditarUsuarios(response.data);
            } catch (error) {
                console.error('Error al obtener lista:', error);
                setError('No se pudo cargar la lista de usuarios.');
            }
        };

        fetchUsuarios();
    }, []);

    return (
        <div className="list-editar-usuario">
            <h1>Lista de Usuarios</h1>
            {error && <div className="error-message">{error}</div>}
            <ul>
                {editarUsuarios.length > 0 ? (
                    editarUsuarios.map(dato => (
                        <li key={dato.id}>
                            {dato.nombre} - {dato.apellido} - {dato.documento} - {dato.telefono} - {dato.correoElectronico} - {dato.planillaSeguridadSocial}
                        </li>
                    ))
                ) : (
                    <li>No hay usuarios disponibles.</li>
                )}
            </ul>
        </div>
    );
};

export default ListEditarUsuario;
