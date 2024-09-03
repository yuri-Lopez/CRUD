import React, { useState } from 'react';
import Api from '../Api';
import './DeleteIngresoPersonal.css';

const DeleteIngresoPersonal = () => {
    const [id, setId] = useState('');
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
            const response = await Api.delete(`/ingreso-personal/${id}`);
            if (response.status === 200) {
                alert('Ingreso eliminado exitosamente');
                setId('');
            } else {
                setError('No se pudo eliminar el ingreso');
            }
        } catch (error) {
            console.error('Error al eliminar el dato:', error.response?.data || error.message);
            setError('Error al eliminar el dato: ' + (error.response?.data?.message || error.message));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="delete-ingreso-personal">
            <h1>Eliminar Ingreso Personal</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='ID'
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

export default DeleteIngresoPersonal;
