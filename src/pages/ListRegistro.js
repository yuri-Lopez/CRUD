import React, { useEffect, useState } from 'react';
import Api from '../Api';
import './ListRegistro.css';

const ListRegistro = () => {
    const [registros, setRegistros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        Api.get('/api/registro')
            .then(response => {
                setRegistros(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al obtener lista', error);
                setError('Error al obtener los registros.');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Cargando...</p>;

    return (
        <div className="registro-list">
            <h1>Lista de Registros</h1>
            {error && <p className="error-message">{error}</p>}
            {registros.length === 0 ? (
                <p>No hay registros disponibles.</p>
            ) : (
                <ul>
                    {registros.map(dato => (
                        <li key={dato.id} className="registro-item">
                            <div><strong>Nombre:</strong> {dato.nombre}</div>
                            <div><strong>Apellido:</strong> {dato.apellido}</div>
                            <div><strong>Documento:</strong> {dato.documento}</div>
                            <div><strong>Teléfono:</strong> {dato.telefono}</div>
                            <div><strong>Correo Electrónico:</strong> {dato.correoElectronico}</div>
                            <div><strong>Planilla Seguridad Social:</strong> {dato.planillaSeguridadSocial}</div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ListRegistro;
