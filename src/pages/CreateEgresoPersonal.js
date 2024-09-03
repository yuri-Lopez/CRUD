import React, { useState } from 'react';
import Api from '../Api';
import './CreateEgresoPersonal.css'; 

const CreateEgresoPersonal = () => {
    const [documento, setDocumento] = useState('');
    const [fechaHoraEgreso, setFechaHoraEgreso] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (!documento || !fechaHoraEgreso) {
            setError('Todos los campos son obligatorios.');
            setLoading(false);
            return;
        }

        try {
            const response = await Api.post('/api/egreso-personal', { documento, fechaHoraEgreso });
            if (response.status === 200 || response.status === 201) {
                alert('Egreso creado exitosamente');
                setDocumento('');
                setFechaHoraEgreso('');
            } else {
                setError(`Error al crear el egreso: ${response.statusText}`);
            }
        } catch (error) {
            console.error('Error al crear el egreso:', error.response?.data || error.message);
            setError('Error al crear el egreso: ' + (error.response?.data?.message || error.message));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="create-egreso-personal">
            <h1>Crear egreso Personal</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='Documento'
                    value={documento}
                    onChange={e => setDocumento(e.target.value)}
                    required
                />
                <input 
                    type='datetime-local'
                    value={fechaHoraEgreso}
                    onChange={e => setFechaHoraEgreso(e.target.value)}
                    required
                />
                <button type='submit' disabled={loading}>
                    {loading ? 'Guardando...' : 'Guardar'}
                </button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default CreateEgresoPersonal;
