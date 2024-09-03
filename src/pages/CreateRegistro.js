import React, { useState } from 'react';
import Api from '../Api';
import './CreateRegistro.css'; // Asegúrate de tener el archivo CSS importado

const CreateRegistro = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [documento, setDocumento] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [planillaSeguridadSocial, setPlanillaSeguridadSocial] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const validateFields = () => {
        return nombre && apellido && documento && telefono && correoElectronico && planillaSeguridadSocial;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateFields()) {
            setError('Por favor, complete todos los campos');
            return;
        }

        setLoading(true);
        setError('');

        try {
            await Api.post('/api/registro/nuevoregistro', { nombre, apellido, documento, telefono, correoElectronico, planillaSeguridadSocial });
            alert('Registro creado exitosamente');
            // Clear the form
            setNombre('');
            setApellido('');
            setDocumento('');
            setTelefono('');
            setCorreoElectronico('');
            setPlanillaSeguridadSocial('');
        } catch (error) {
            console.error('Error al crear el registro', error);
            setError('Error al crear el registro');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} aria-labelledby="create-registro-form">
            <h1 id="create-registro-form">Crear Nuevo Registro</h1>
            <input 
                type='text'
                placeholder='Nombre'
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                required
                aria-required="true"
            />
            <input 
                type='text'
                placeholder='Apellido'
                value={apellido}
                onChange={e => setApellido(e.target.value)}
                required
                aria-required="true"
            />
            <input 
                type='text'
                placeholder='Documento'
                value={documento}
                onChange={e => setDocumento(e.target.value)}
                required
                aria-required="true"
            />
            <input 
                type='text'
                placeholder='Telefono'
                value={telefono}
                onChange={e => setTelefono(e.target.value)}
                required
                aria-required="true"
            />
            <input 
                type='email'
                placeholder='Correo Electrónico'
                value={correoElectronico}
                onChange={e => setCorreoElectronico(e.target.value)}
                required
                aria-required="true"
            />
            <input 
                type='text'
                placeholder='Planilla Seguridad Social'
                value={planillaSeguridadSocial}
                onChange={e => setPlanillaSeguridadSocial(e.target.value)}
                required
                aria-required="true"
            />
            <button type='submit' disabled={loading} aria-busy={loading}>
                {loading ? 'Creando...' : 'Crear'}
            </button>
            {error && <p className="error">{error}</p>}
        </form>
    );
};

export default CreateRegistro;


