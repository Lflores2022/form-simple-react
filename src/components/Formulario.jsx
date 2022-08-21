import React, { useState } from "react";
import PintarError from "./PintarError";

const Formulario = () => {
  const [todo, setTodo] = useState({
    todoName: "",
    todoDescription: "",
    todoEstado: "pendiente",
    todoCheck: false,
  });
  
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();


    const {todoDescription, todoName} = todo
        if(!todoDescription.trim() || !todoName.trim()) {
            alert('Please enter a description')
            setError(true)
            return
        }
        console.log('formulario enviado')
  };

  const handleChange = (e) => {

    const {name, value, type, checked} = e.target

    setTodo({
      ...todo,
      [name]:
        type === "checkbox" ? checked : value,
    });
  };

  return (
    <div>
      <>
      {
        error && <PintarError/> 
      }
        <h2>Controlado</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingrese Todo"
            name="todoName"
            className="form-control mb-2"
            onChange={handleChange}
            value={todo.todoName}
          />
          <textarea
            name="todoDescription"
            className="form-control mb-2"
            placeholder="Ingrese Todo Description"
            onChange={handleChange}
            value={todo.todoDescription}
          />
          <select
            name="todoEstado"
            className="form-control mb-2"
            onChange={handleChange}
            value={todo.todoEstado}
          >
            <option value="pendiente">Pendiente</option>
            <option value="completada">Completada</option>
          </select>
          <div className="form-check">
            <input
              type="checkbox"
              name="todoCheck"
              className="form-check-input"
              id="flexCheckDefault"
              checked={todo.todoCheck}
              onChange={handleChange}
            />
            <label htmlFor="flexCheckDefault" className="form-check-label">
              Picoteame
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
        </form>
      </>
      
    </div>
  );
};

export default Formulario;
