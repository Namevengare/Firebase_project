import React, {useState,useEffect} from 'react'
import firebaseApp from '../credenciales'
import {getAuth, signOut} from 'firebase/auth'
import {getFirestore,collection,addDoc,getDocs,doc,deleteDoc,getDoc,setDoc} from 'firebase/firestore'

const auth = getAuth(firebaseApp)

const db = getFirestore(firebaseApp)

const Home = ({correoUsuario}) => {


const valorInicial = {
    nombre: '',
    edad: '',
    profesion: ''
}

const [user,setUser] = useState(valorInicial)
const [lista,setLista] = useState([])

const capturarInputs = (e) =>{
    const {name,value} = e.target;
    setUser({...user,[name]:value})
}

const guardarDatos = async(e) =>{
    e.preventDefault()
    //console.log(user)
    try{
        await addDoc(collection(db,'usuarios'),{
            ...user
        })
    } catch (error) {
        console.log(error)
    }
    console.log(user);
    setUser({...valorInicial})
}

// Función para renderizar la lista de usuarios
useEffect(()=>{
    const getLista = async()=>{
        try {
            const querySnapshot = await getDocs(collection(db,'usuarios'))
            const docs = []
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id:doc.id})
            })
            setLista(docs)
        } catch (error) {
            console.log(error)
        }
    }
    getLista()
},[lista])

//función para eliminar el usuario
const deleteUser = async(id) =>{
    await deleteDoc(doc(db,'usuarios',id))
}

  return (
    <div className='container'>
        <p>Bienvenido, <strong>{correoUsuario}</strong> Haz iniciado sesión </p>
        <button className='btn btn-primary' onClick={()=> signOut(auth)}> Cerrar Sesión </button>
        <hr></hr>
        <div className='row'>
            {/* Está sección será del formulario */}
            <div className='col-md-4'>
                <h3 className='text-center mb-3'>Ingresar usuario</h3>
                <form onSubmit={guardarDatos}>
                    <div className='card card-body'>
                        <div className='form-group'>
                            <input type='texto' name='nombre' className='form-control mb-3' placeholder='Ingresar el nombre del usuario' onChange={capturarInputs} value={user.nombre}></input>
                            <input type='texto' name='edad' className='form-control mb-3' placeholder='Ingresar la edad del usuario' onChange={capturarInputs} value={user.edad}></input>
                            <input type='texto' name='profesion' className='form-control mb-3' placeholder='Ingresar la profesión del usuario' onChange={capturarInputs} value={user.profesion}></input>
                        </div>
                        <button className='btn btn-success'>
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
            {/* Está secciíon será la lista de nuestros usuarios */}
            <div className='col-md-8'>
                <h2 className='text-center mb-5'>Lista de usuarios</h2>
                <div className='container card'>
                    <div className='card-body'>
                        {
                            lista.map(List => (
                                <div key={List.id}>
                                    <p>Nombre: {List.nombre}</p>
                                    <p>Edad: {List.edad}</p>
                                    <p>Profesión: {List.profesion}</p>

                                    <button className='btn btn-danger' onClick={()=> deleteUser(List.id)}>
                                        Eliminar
                                    </button>
                                    <button className='btn btn-success m-1'>
                                        Actualizar
                                    </button>
                                    <hr></hr>
                                    </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home