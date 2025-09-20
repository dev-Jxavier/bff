import { useState } from 'react'
import './App.module.css'
import style from './App.module.css'
import type { DataResponse} from './types'

const BASE_PATH_API = "http://localhost:3000";

function App() {
  const [id,setId] = useState<number>()
  const [data,setData] = useState<DataResponse>()

  const getUserData = async () => {
    try{

      const userPromise = await fetch(`${BASE_PATH_API}/user/${id}`);
      const userData = await userPromise.json() as DataResponse;

      setData(userData)

    } catch(error){
      console.error(error)
    }
  }

  return (
   <main className={style.container}>
      <label htmlFor='userId'>ID do usuário</label>
      <input className={style.input} type='number' name='userId' id='userId' onChange={(e) => setId(+e.target.value)}/>
      <button className={style.btn} onClick={getUserData}>Buscar</button>

      <h1>Response:</h1>
      {data && (
        <div className={style.result}>
          <h2>Nome: {data.user.name}</h2>
          <h3>Username: {data.user.username}</h3>
          <h3>Email: {data.user.email}</h3>

          <pre>{JSON.stringify(data,undefined,4)}</pre>

          </div>
      )}
   </main>
  )
}

export default App
