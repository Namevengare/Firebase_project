import React, {useState} from 'react'


import im1 from '../images/image1.jpg'
import im2 from '../images/image2.jpg'
import im3 from '../images/image3.jpg'

import firebaseApp from '../credenciales'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
const auth = getAuth(firebaseApp)

const Login = () => {

const [registro, setRegistro] = useState(false)

const handlerSubmit = async(e) =>
    {
        e.preventDefault()
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        if(registro){
            await createUserWithEmailAndPassword(auth,correo,contraseña)
        }
        else{
            await signInWithEmailAndPassword (auth.correo,contraseña)
        }
    }

  return (
    <div className='row container p-4'>
        {/* creamos nuestro slider */}
        <div className='col-md-8'>
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div class="carousel-item active">
      <img src={im1} className='tamaño-imagen' alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={im2} className='tamaño-imagen' alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={im3} className='tamaño-imagen' alt="..."></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
            
        </div>
        {/* sección para el formulario */}
        <div className='col-md-4'>
            <div className='mt-5 ms-5'>
                <h1>{registro ? 'Regístro': 'Incia sesión'}</h1>
                <form onSubmit={handlerSubmit}>
                    <div className='mb-3'>
                        <label className='form-label'>
                            Dirección de Email
                        </label>
                        <input type='email' className='form-control' placeholder='Ingrese correo' id='email' required></input>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'> Contraseña </label>
                        <input type='password' className='form-control' placeholder='Ingrese contraseña' id='password' required></input>
                    </div>
                    <button className='btn btn-primary' type='submit'>
                        {registro ? 'Regístrate' : 'Incia sesión'}
                    </button>
                </form>
                <div className='form-group'>
                    <button className='btn btn-secondary mt-4 form-control'onClick={()=> setRegistro (!registro)}>
                        {registro ? '¿Ya tiene una cuenta?, Inicia sesión' : '¿No tienes cuenta?, regístrate'}
                    </button>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Login