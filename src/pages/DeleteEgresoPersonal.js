import React, { useState } from 'react';
import Api from '../Api';
import './DeleteEgresoPersonal.css'; 

const DeleteEgresoPersonal = () => {
    const [id, setId] = useState(''); // Utiliza el ID en lugar del documento
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (!id) {
            setError('El ID es obligatorio.');
            setLoading(false);
            return;
        }

        try {
            // Eliminar el egreso usando DELETE con el ID en la URL
            const response = await Api.delete(`/api/egreso-personal/${id}`);
            if (response.status === 200) {
                alert('Egreso eliminado exitosamente');
                setId('');
            } else {
                setError('No se pudo eliminar el egreso');
            }
        } catch (error) {
            // Agregar más detalles para depuración
            console.error('Error al eliminar el dato', error.response?.data || error.message);
            setError('Error al eliminar el dato: ' + (error.response?.data?.message || error.message));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="delete-egreso-personal">
            <h1>Eliminar Egreso Personal</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='ID del Egreso'
                    value={id}
                    onChange={e => setId(e.target.value)}
                    required
                />
                <button type='submit' disabled={loading}>
                    {loading ? 'Eliminando...' : 'Eliminar'}
                </button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default DeleteEgresoPersonal;

