import React, { useState } from 'react';

export default function Component() {
  const [text, setText] = useState('');
  const [updated, setUpdated] = useState('');

  const textOnChange = (event) => {
    setText(event.target.value);
  }

  const buttonOnClick = () => {
    setUpdated(text);
  }

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a >Inicio</a></li>
            <li><a >Acerca de</a></li>
            <li><a >Contacto</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <input type="text" value={text} onChange={textOnChange} />
        <button onClick={buttonOnClick}>Actualizar</button>
        <p>Texto input: {text}</p>
        <p>Texto actualizado: {updated}</p>
        <form>
          {/* Agrega tus campos de formulario aquí */}
          <label>
            Nombre:
            <input  />
          </label>
          <label>
            Correo electrónico:
            <input  />
          </label>
          <button >Enviar</button>
        </form>
      </main>
    </div>
  );
}
