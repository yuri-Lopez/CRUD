import React, { useState } from 'react';
import Api from '../Api';
import './UpdateEgresoPersonal.css';

const UpdateEgresoPersonal = () => {
    const [id, setId] = useState(''); // ID del egreso para actualizar
    const [fechaHoraEgreso, setFechaHoraEgreso] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (!id || !fechaHoraEgreso) {
            setError('Todos los campos son obligatorios.');
            setLoading(false);
            return;
        }

        try {
            // Realiza la solicitud PUT al endpoint usando el ID
            const response = await Api.put(`/api/egreso-personal/${id}`, { fechaHoraEgreso });
            if (response.status === 200) {
                alert('Egreso actualizado exitosamente');
                setId('');
                setFechaHoraEgreso('');
            } else {
                setError('No se pudo actualizar el egreso');
            }
        } catch (error) {
            console.error('Error al actualizar el egreso:', error.response?.data || error.message);
            setError('Error al actualizar el egreso: ' + (error.response?.data?.message || error.message));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="update-egreso-personal">
            <h1>Actualizar Egreso Personal</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='ID del Egreso'
                    value={id}
                    onChange={e => setId(e.target.value)}
                    required
                />
                <input 
                    type='datetime-local'
                    placeholder='Fecha y hora de egreso'
                    value={fechaHoraEgreso}
                    onChange={e => setFechaHoraEgreso(e.target.value)}
                    required
                />
                <button type='submit' disabled={loading}>
                    {loading ? 'Actualizando...' : 'Actualizar'}
                </button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default UpdateEgresoPersonal;
