import React from 'react'

export const MyComponent = () => {
  
  const name = "Inés";
  const repository = "https://github.com/inesmariao/component-practice";

  const student = {
    name: "Adrián",
    lastName: "Nieto",
    mobile: "3156658725",
    linkedinProfile: "https://www.linkedin.com/in/adrian-nieto-acpa56"
  }

  console.log(student);

  return (
    <div>
        <hr/>
        <p>Este es mi Primer Componente</p>
        <h2>Temas de React</h2>
        <ul>
            <li>Componentes</li>
            <li>Eventos</li>
            <li>Estados - Hooks</li>
            <li>Comunicación</li>
        </ul>
        <hr />
        <h2>Datos del Docente</h2>
        <p>Nombre: { name }</p>
        <p>Repositorio:</p>
        <p>{ repository }</p>
        <hr />
        <h2>Datos del estudiante</h2>
        <p>Nombre: { student.name }</p>
        <p>Apellido: { student.lastName }</p>
        <p>Celular: { student.mobile }</p>
        <p>Perfil de LinkedIn:</p>
        <p>{ student.linkedinProfile }</p>
    </div>
  )
}
