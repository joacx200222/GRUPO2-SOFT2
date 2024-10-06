import '../RegisterPage2/RegisterPage2.css'; // Asegúrate de que este archivo CSS esté en la ubicación correcta
import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegisterPage2 = () => {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [confirmarContrasena, setConfirmarContrasena] = useState('');
    const [mostrarContrasena, setMostrarContrasena] = useState(false);
    const [mostrarConfirmarContrasena, setMostrarConfirmarContrasena] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
      // Verificar si las contraseñas coinciden
      if (contrasena !== confirmarContrasena) {
        alert("Las contraseñas no coinciden.");
        return;
      }
  
      // Aquí puedes agregar la lógica para registrar al usuario
      console.log('Usuario o Correo:', usuario);
      console.log('Contraseña:', contrasena);
      
      // Redirigir a la página de inicio o a donde desees
      navigate('/login');
    };
  
    return (
      <Container className="ContenedorPrincipalRegistro" maxWidth="xs">
        <Typography variant="h5" className="TituloRegistro" fontSize={"38px"}>
          <b>Registro de Usuario</b>
        </Typography>
        <Typography variant="subtitle1" className="SubtituloRegistro" color="white">
          Datos de la Cuenta
        </Typography>
        <form onSubmit={handleSubmit} className="FormularioRegistro">
          <TextField
            className="TextField"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Usuario o Correo"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <TextField
            className="TextField"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Contraseña"
            type={mostrarContrasena ? 'text' : 'password'} // Cambia el tipo según el estado
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            InputProps={{
              endAdornment: (
                <Button
                  onClick={() => setMostrarContrasena(!mostrarContrasena)}
                  style={{ textTransform: 'none' }} // Para evitar que el botón cambie el formato
                >
                  {mostrarContrasena ? 'Ocultar' : 'Mostrar'}
                </Button>
              ),
            }}
          />
          <TextField
            className="TextField"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Ingrese nuevamente la contraseña"
            type={mostrarConfirmarContrasena ? 'text' : 'password'} // Cambia el tipo según el estado
            value={confirmarContrasena}
            onChange={(e) => setConfirmarContrasena(e.target.value)}
            InputProps={{
              endAdornment: (
                <Button
                  onClick={() => setMostrarConfirmarContrasena(!mostrarConfirmarContrasena)}
                  style={{ textTransform: 'none' }} // Para evitar que el botón cambie el formato
                >
                  {mostrarConfirmarContrasena ? 'Ocultar' : 'Mostrar'}
                </Button>
              ),
            }}
          />
          <div className="ContenedorRegistro-Boton">
            <Button className="RegistrarBoton" variant="outlined" type="submit">
              Registrar
            </Button>
          </div>
        </form>
      </Container>
    );
  };

export default RegisterPage2;
