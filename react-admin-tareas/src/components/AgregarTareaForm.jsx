import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const AgregarTareaForm = ({ onAddTask }) => {
  // Estado del formulario
  const [titulo, setTitulo] = useState("");
  const [longitud, setLongitud] = useState(0);

  useEffect(() => {
    console.log("Acaba de ser renderizado!");
  });

  useEffect(() => {
    console.log("Solo se ejecuta al montar el componente");
  }, []);

  useEffect(() => {
    console.log("Se ejecuta cuando cambia la variable 'titulo'");
    setLongitud(titulo.length);
  }, [titulo]);

  const limpiarFormulario = (event) => {
    // Previene el envío del formulario
    event.preventDefault();
    // Modifica el estado del componente
    setTitulo("");
  };

  const handleSubmit = (event) => {
    // Previene el envío del formulario
    event.preventDefault();

    if (!titulo) {
      alert("Debe digitar el titulo");
      return;
    }

    // Crea el nuevo objeto
    const nuevaTarea = {
      titulo,
      terminada: false,
    };

    // Envía la nueva tarea al componente padre
    onAddTask(nuevaTarea);

    // Modifica el estado del componente
    setTitulo("");
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <fieldset>
        <label htmlFor="titulo">Titulo: </label>
        <input
          type="text"
          id="titulo"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
        />
        <p>Caracteres digitados: {longitud}</p>
      </fieldset>
      <fieldset>
        <input type="submit" value="Agregar" />
        <button onClick={limpiarFormulario}>Reset</button>
      </fieldset>
    </form>
  );
};

AgregarTareaForm.propTypes = {
  onAddTask: PropTypes.func,
};

export default AgregarTareaForm;
