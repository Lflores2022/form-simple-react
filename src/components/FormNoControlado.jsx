import React, { useRef } from 'react'

const FormNoControlado = () => {

    const formulario = useRef(null)

    const handleSubmit = e =>{
        e.preventDefault();

        const datos = new FormData(formulario.current)

        const objectData = Object.fromEntries([...datos.entries()])
        
        console.log(objectData)

        const {todoDescription, todoName, todoEstado} = objectData
        if(!todoDescription.trim() || !todoName.trim()) {
            alert('Please enter a description')
            return
        }
        console.log('formulario enviado')
    }

  return (
    <>
      <h2>No controlado</h2>
      <form ref={formulario} onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Ingrese Todo'
        name='todoName'
        className='form-control mb-2'
        defaultValue="tarea #01"
        />
        <textarea 
        name="todoDescription" 
        className='form-control mb-2'
        placeholder='Ingrese Todo Description' 
        defaultValue="descripcion #01"
        />
        <select 
        name="todoEstado"
        className='form-control mb-2'
        defaultValue="completada"
        >
            <option value="pendiente">Pendiente</option>
            <option value="completada">Completada</option>
        </select>
        <button 
        type='submit'
        className='btn btn-primary'
        >
            Agregar
        </button>
      </form>
    </>
  )
}

export default FormNoControlado