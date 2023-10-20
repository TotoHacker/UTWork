import React, { useState, useEffect } from 'react';

const Registro = () => {
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registrados, setRegistrados] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('registrados'));
        if (data) {
            setRegistrados(data);
        }
    }, []);

    const handleRegistro = () => {
        if (password === confirmPassword) {
            const nuevoRegistro = { usuario, email, password };
            setRegistrados([...registrados, nuevoRegistro]);
            localStorage.setItem('registrados', JSON.stringify([...registrados, nuevoRegistro]));
            alert('Registro exitoso');
        } else {
            alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="navbar">
                <Navbar open={open} toggleNavbar={() => setOpen(!open)} />
            </div>
            <div className="bg-white p-8 rounded shadow-md w-80">
                <div className="UTlogoapp">
                    <img src="../Imagenes/UtWork.png" alt="Logo" />
                </div>
                <h2 className="text-2xl font-semibold mb-4">Registro</h2>
                <div className="mb-4">
                    <label htmlFor="usuario" className="block text-gray-600 font-medium mb-1">
                        Usuario
                    </label>
                    <input
                        type="text"
                        id="usuario"
                        className="w-full p-2 border rounded"
                        placeholder="Tu usuario"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600 font-medium mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-2 border rounded"
                        placeholder="Tu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}" // Patrón de correo electrónico válido
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-600 font-medium mb-1">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full p-2 border rounded"
                        placeholder="Tu contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-gray-600 font-medium mb-1">
                        Confirmar Contraseña
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="w-full p-2 border rounded"
                        placeholder="Confirmar contraseña"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>

                <button onClick={handleRegistro} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded">
                    Registrarse
                </button>

                <h2 className="text-2xl font-semibold mb-4 py-2">Registrarse con redes</h2>
                <div>
                    <button>
                        <ion-icon name="logo-facebook"></ion-icon>
                    </button>
                    <button>
                        <ion-icon name="logo-google"></ion-icon>
                    </button>
                    <button>
                        <ion-icon name="logo-instagram"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Registro;
