import React, { useState } from 'react'; // Asegúrate de importar useState
import Api from '../Api';
import './CreateAdministrardatos.css';

const CreateAdministrardatos = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [documento, setDocumento] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [planillaSeguridadSocial, setPlanillaSeguridadSocial] = useState('');
    const [loading, setLoading] = useState(false); // Estado para manejo de carga
    const [error, setError] = useState(null); // Estado para manejo de errores

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validación básica
        if (!nombre || !apellido || !documento || !telefono || !correoElectronico || !planillaSeguridadSocial) {
            alert('Por favor complete todos los campos.');
            return;
        }

        setLoading(true); // Mostrar estado de carga
        setError(null); // Limpiar errores previos

        Api.post('/AdministrarDatos/nuevodato', { nombre, apellido, documento, telefono, correoElectronico, planillaSeguridadSocial })
            .then(response => {
                alert('Dato creado exitosamente');
                setNombre('');
                setApellido('');
                setDocumento('');
                setTelefono('');
                setCorreoElectronico('');
                setPlanillaSeguridadSocial('');
            })
            .catch(error => {
                console.error('Error al crear el dato', error);
                setError('Error al crear el dato');
            })
            .finally(() => {
                setLoading(false); // Ocultar estado de carga
            });
    };

    return (
        <div>
            <h1>Crear Administrar Datos</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostrar mensaje de error */}
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='Nombre'
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
                <input 
                    type='text'
                    placeholder='Apellido'
                    value={apellido}
                    onChange={e => setApellido(e.target.value)}
                />
                <input 
                    type='text'
                    placeholder='Documento'
                    value={documento}
                    onChange={e => setDocumento(e.target.value)}
                />
                <input 
                    type='text'
                    placeholder='Telefono'
                    value={telefono}
                    onChange={e => setTelefono(e.target.value)}
                />
                <input 
                    type='text'
                    placeholder='Correo Electrónico'
                    value={correoElectronico}
                    onChange={e => setCorreoElectronico(e.target.value)}
                />
                <input 
                    type='text'
                    placeholder='Planilla Seguridad Social'
                    value={planillaSeguridadSocial}
                    onChange={e => setPlanillaSeguridadSocial(e.target.value)}
                />
                <button type='submit' disabled={loading}>
                    {loading ? 'Creando...' : 'Crear'}
                </button>
            </form>
        </div>
    );
};

export default CreateAdministrardatos;
