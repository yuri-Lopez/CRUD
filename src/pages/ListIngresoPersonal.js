import React, { useEffect, useState } from 'react';
import Api from '../Api';
import './ListIngresoPersonal.css';

const ListIngresoPersonal = () => {
    const [ingresoPersonal, setIngresoPersonal] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchIngresoPersonal = async () => {
            try {
                const response = await Api.get('/api/ingreso-personal');
                setIngresoPersonal(response.data);
            } catch (error) {
                console.error('Error al obtener la lista', error);
                setError('Error al obtener la lista');
            } finally {
                setLoading(false);
            }
        };

        fetchIngresoPersonal();
    }, []);

    return (
        <div>
            <h1>Lista de Ingreso Personal</h1>
            {loading ? (
                <p>Cargando...</p>
            ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <ul>
                    {ingresoPersonal.length > 0 ? (
                        ingresoPersonal.map(dato => (
                            <li key={dato.id}>
                                {dato.documento} - {dato.fechaHoraIngreso}
                            </li>
                        ))
                    ) : (
                        <p>No hay ingresos disponibles.</p>
                    )}
                </ul>
            )}
        </div>
    );
};

export default ListIngresoPersonal;
