import React, { useState } from 'react';
import Api from '../Api';
import './UpdateIngresoPersonal.css'; // Asegúrate de que la ruta del CSS es correcta

const UpdateIngresoPersonal = () => {
    const [id, setId] = useState(''); // Estado para almacenar el ID
    const [fechaHoraIngreso, setFechaHoraIngreso] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Validación de los campos
        if (!id || !fechaHoraIngreso) {
            setError('Todos los campos son obligatorios.');
            setLoading(false);
            return;
        }

        try {
            // Realiza la solicitud PUT al endpoint correcto usando el ID
            const response = await Api.put(`/api/ingreso-personal/${id}`, { fechaHoraIngreso });
            if (response.status === 200) {
                alert('Ingreso actualizado exitosamente');
                setId(''); // Limpia el campo ID
                setFechaHoraIngreso(''); // Limpia el campo fechaHoraIngreso
            } else {
                setError('No se pudo actualizar el ingreso'); // Mensaje de error si el status no es 200
            }
        } catch (error) {
            console.error('Error al actualizar el dato', error);
            setError('Error al actualizar el dato: ' + (error.response?.data?.message || error.message));
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="update-ingreso-personal">
            <input 
                type='text'
                placeholder='ID del Ingreso'
                value={id}
                onChange={e => setId(e.target.value)}
                required
            />
            <input 
                type='text'
                placeholder='Fecha y hora de Ingreso'
                value={fechaHoraIngreso}
                onChange={e => setFechaHoraIngreso(e.target.value)}
                required
            />
            
            <button type='submit' disabled={loading}>
                {loading ? 'Actualizando...' : 'Actualizar'}
            </button>

            {error && <p className="error-message">{error}</p>}
        </form>
    );
};

export default UpdateIngresoPersonal;
