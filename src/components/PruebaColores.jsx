import { useState } from 'react';

function PruebaColores() {
  const [nuevoColor, setNuevoColor] = useState("")
  const [colores, setColores] = useState(["red", "blue", "yellow", "pink"])

  function handleSubmit(e){
    e.preventDefault()

    if(!nuevoColor.trim()) return

    setColores([...colores, nuevoColor])
    setNuevoColor("")
  }
  return (
    <>
    <section>
      <form action="submit" onSubmit={(e) => handleSubmit(e) }>
        <input type="text" value={nuevoColor} onChange={(e)=> setNuevoColor(e.target.value)}/>
        <button type="submit">Enviar</button>
      </form>
      <div>
        {colores.map((color, i)=>{
          return(
            <p key={i} style={{color: color}}>{color}</p>
          )
        })}
      </div>
    </section>
    </>
  );
}

export default PruebaColores;