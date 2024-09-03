import React, { useEffect, useState } from 'react';
import Api from '../Api';
import './ListAdministrardatos.css'; 

const ListAdministrardatos = () => {
    const [administrarDatos, setAdministrarDatos] = useState([]);
    const [error, setError] = useState(null); // Estado para manejar errores

    useEffect(() => {
        Api.get('/AdministrarDatos/traerdato')
            .then(response => {
                setAdministrarDatos(response.data);
                setError(null); // Limpiar error si la solicitud es exitosa
            })
            .catch(error => {
                console.error('Error al obtener lista', error);
                setError('No se pudo cargar la lista de datos.');
            });
    }, []);

    return (
        <div className="list-administrardatos">
            <h1>Lista Administrar Datos</h1>
            {error && <p className="error-message">{error}</p>} {/* Mostrar mensaje de error */}
            <ul>
                {administrarDatos.length > 0 ? (
                    administrarDatos.map(dato => (
                        <li key={dato.id}>
                            {dato.nombre} - {dato.apellido} - {dato.documento} - {dato.telefono} - {dato.correoElectronico} - {dato.planillaSeguridadSocial}
                        </li>
                    ))
                ) : (
                    <li>No hay datos disponibles</li> // Mensaje cuando no hay datos
                )}
            </ul>
        </div>
    );
};

export default ListAdministrardatos;
