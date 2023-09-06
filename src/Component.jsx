
import React, {useState} from 'react'

export default function Component() {

    const [text, setText]=useState()
    const [updated, setUpdated]=useState()

    const textOnChange = (event) => {
        setText(event.target.value)
    }

    const buttononclick = () => {
        setUpdated(text)
    }

  return (
    <div>
        <input type="text" value={text} onChange={textOnChange} />
        <button onClick={buttononclick}>Actualizar</button>
        <p>Texto input: {text}</p>
        <p>Texto actualizado: {updated}</p>
    </div>
  )
}
