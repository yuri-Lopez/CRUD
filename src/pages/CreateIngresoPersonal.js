import React, { useState } from 'react';
import Api from '../Api';
import './CreateIngresoPersonal.css'; // Asegúrate de tener este archivo CSS para estilos

const CreateIngresoPersonal = () => {
    const [documento, setDocumento] = useState('');
    const [fechaHoraIngreso, setFechaHoraIngreso] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (!documento || !fechaHoraIngreso) {
            setError('Todos los campos son obligatorios.');
            setLoading(false);
            return;
        }

        try {
            await Api.post('/api/ingreso-personal', { documento, fechaHoraIngreso });
            alert('Ingreso creado exitosamente');
            setDocumento('');
            setFechaHoraIngreso('');
        } catch (error) {
            console.error('Error al crear el ingreso:', error.response?.data || error.message);
            setError('Error al crear el ingreso');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="create-ingreso-personal">
            <h1>Crear Ingreso Personal</h1>
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
                    placeholder='Fecha y hora de Ingreso'
                    value={fechaHoraIngreso}
                    onChange={e => setFechaHoraIngreso(e.target.value)}
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

export default CreateIngresoPersonal;
