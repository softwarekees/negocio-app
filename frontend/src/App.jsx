import { useEffect } from 'react'
import { supabase } from './supabase'

function App() {

  useEffect(() => {
    cargar()
  }, [])

  async function cargar() {
    const { data, error } = await supabase
      .from('test')
      .select('*')

    console.log('DATA:', data)
    console.log('ERROR:', error)
  }

  return (
    <h1>Supabase conectado 🚀</h1>
  )
}

export default App