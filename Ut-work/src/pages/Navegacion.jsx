import { Link } from 'react-router-dom';

function Navegacion() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/inicio">Inicio</Link>
        </li>
        <li>
          <Link to="/notas">Notas</Link>
        </li>
        {/* Otros enlaces... */}
      </ul>
    </nav>
  );
}

export default Navegacion;
