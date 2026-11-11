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
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '1.6rem', lineHeight: '1.4', marginBottom: '8px' }}>
        🎓 Sistema de Gestión - Academia de Idiomas
      </h1>
      <p style={{ marginTop: 0, color: '#888', marginBottom: '20px' }}>
        Prototipo Web - Despliegue en Vercel (Grupo 6)
      </p>

      <form onSubmit={agregarTarea} style={{ background: '#222', padding: '20px', borderRadius: '8px', marginBottom: '20px', textAlign: 'left' }}>
        <h3 style={{ marginTop: 0 }}>Agregar Nueva Tarea / Notificación</h3>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Título de la tarea o aviso..."
            value={nuevoTitulo}
            onChange={(e) => setNuevoTitulo(e.target.value)}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box', marginBottom: '10px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Responsable (ej. Prof. Juan)"
            value={responsable}
            onChange={(e) => setResponsable(e.target.value)}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 15px', background: '#0070f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%', marginTop: '10px' }}>
          Guardar Tarea
        </button>
      </form>

      <h3 style={{ textAlign: 'left' }}>Lista de Tareas Pendientes</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tareas.map((t) => (
          <li key={t.id} style={{ background: '#333', padding: '12px', marginBottom: '8px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span><strong>{t.titulo}</strong> ({t.responsable})</span>
            <span style={{ color: t.estado === 'Completado' ? '#4caf50' : '#ff9800' }}>{t.estado}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App