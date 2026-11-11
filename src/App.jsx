import { useState } from 'react'
import './App.css'

function App() {
  const [tareas, setTareas] = useState([
    { id: 1, titulo: 'Revisar matrículas de Inglés', estado: 'Pendiente', responsable: 'Adán Toro' },
    { id: 2, titulo: 'Asignar sala para Portugués', estado: 'Completado', responsable: 'Ferox' }
  ])
  const [nuevoTitulo, setNuevoTitulo] = useState('')
  const [responsable, setResponsable] = useState('')

  const agregarTarea = (e) => {
    e.preventDefault()
    if (!nuevoTitulo.trim()) return
    const nueva = {
      id: Date.now(),
      titulo: nuevoTitulo,
      estado: 'Pendiente',
      responsable: responsable || 'Sin asignar'
    }
    setTareas([...tareas, nueva])
    setNuevoTitulo('')
    setResponsable('')
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>🎓 Sistema de Gestión - Academia de Idiomas</h1>
      <p>Prototipo Web - Despliegue en Vercel (Grupo 6)</p>

      <form onSubmit={agregarTarea} style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <h3>Agregar Nueva Tarea / Notificación</h3>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Título de la tarea o aviso..."
            value={nuevoTitulo}
            onChange={(e) => setNuevoTitulo(e.target.value)}
            style={{ width: '95%', padding: '8px', marginBottom: '10px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Responsable (ej. Prof. Juan)"
            value={responsable}
            onChange={(e) => setResponsable(e.target.value)}
            style={{ width: '95%', padding: '8px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 15px', background: '#0070f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Guardar Tarea
        </button>
      </form>

      <h3>Lista de Tareas Pendientes</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tareas.map((t) => (
          <li key={t.id} style={{ background: '#fff', border: '1px solid #ddd', padding: '10px', marginBottom: '8px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between' }}>
            <span><strong>{t.titulo}</strong> ({t.responsable})</span>
            <span style={{ color: t.estado === 'Completado' ? 'green' : 'orange' }}>{t.estado}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App