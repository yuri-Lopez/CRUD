import React, { useEffect, useState } from 'react';
import Api from '../Api';
import './ListEgresoPersonal.css';

const ListEgresoPersonal = () => {
    const [egresoPersonal, setEgresoPersonal] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEgresoPersonal = async () => {
            try {
                const response = await Api.get('/api/egreso-personal');
                console.log('Respuesta del API:', response.data);
                setEgresoPersonal(response.data);
            } catch (error) {
                console.error('Error al obtener la lista', error);
                setError('Error al obtener la lista');
            }
        };

        fetchEgresoPersonal();
    }, []);

    const formatDate = (dateStr) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const date = new Date(dateStr);
        return date.toLocaleString('es-ES', options); // Puedes ajustar el locale según sea necesario
    };

    return (
        <div className="list-egreso-personal">
            <h1>Lista de Egreso Personal</h1>
            {error && <p className="error-message">{error}</p>}
            <ul>
                {egresoPersonal.length > 0 ? (
                    egresoPersonal.map(dato => {
                        const fechaHoraEgreso = formatDate(dato.fechaHoraEgreso);
                        return (
                            <li key={dato.id}>
                                Documento: {dato.documento} - Fecha y Hora de Egreso: {fechaHoraEgreso}
                            </li>
                        );
                    })
                ) : (
                    <p>No hay egresos personales disponibles.</p>
                )}
            </ul>
        </div>
    );
};

export default ListEgresoPersonal;

