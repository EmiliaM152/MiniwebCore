import React, { useState, useEffect } from 'react';
import AlumnoList from './AlumnoList';

const Alumno = ({ onAlumnoSubmit }) => {
  const [name, setNombre] = useState('');
  const [idBanner, setIdBanner] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [alumnos, setAlumnos] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={name} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br />
        <label>
          ID Banner:
          <input type="text" value={idBanner} onChange={(e) => setIdBanner(e.target.value)} />
        </label>
        <br />
        <button type="submit">Agregar Alumno</button>
      </form>
      {successMessage && <p>{successMessage}</p>}

    

      
      <AlumnoList
        alumnos={alumnos}
        searchTerm={searchTerm}
        onEdit={(idBanner) => console.log(`Editar alumno con ID Banner: ${idBanner}`)}
        onDelete={(idBanner) => console.log(`Borrar alumno con ID Banner: ${idBanner}`)}
      />
    </div>
  );
};

export default Alumno;
