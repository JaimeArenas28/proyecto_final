import { useState } from "react"
import { useNavigate } from "react-router-dom"

import basedatosasesores from "../utils/basedatosasesores.json"

import Swal from 'sweetalert2'


export function Formulario(){

   
    const[verCedula,guardarCedula]=useState("")
    const[verContraseña,guardarContraseña]=useState("")

    
    let enrutador=useNavigate()

    function procesarFormulario(evento){
        evento.preventDefault()

               
        let buscar=basedatosasesores.find(function(asesor){
            return(asesor.identificacion==verCedula && asesor.contraseña==verContraseña)
        
        })
    
    
        if (buscar==undefined){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Usuario o contraseña incorrecta!",
                
              });
                  

            } else {
                enrutador ("/home")
            }

        }
        
        
    

    return(

        <>
  
          <section className="container" >
                <div className="row justify-content-center text-center">

                    <div className="col-10 col-md-5">
                        <img src="../../src/assets/seguros-sura.png" alt="" className="img-fluid" />
                        <form className="border rounded p-4" onSubmit={procesarFormulario}>
                            <h2>Iniciar sesión</h2>
                            <h3>Asesores</h3>

                            <div class="input-group mb-3 mt-5">
                                <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-circle"></i></span>
                                            <select class="form-select" aria-label="Default select example">
                                            <option selected>Tipo de identificación</option>
                                            <option value="1">CEDULA</option>
                                            <option value="2">CEDULA EXTRANJERIA</option>
                                            <option value="3">NIT</option>
                                            <option value="4">NIT PERSONAS NATURALES</option>
                                            

                                            </select>
                                
                            </div>

                            <div class="input-group mb-3 mt-5">
                                <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-vcard"></i></span>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Numero cedula"
                                    id="identificacion"
                                    onChange={function(evento){guardarCedula(evento.target.value)}}
                                />
                            </div>

                            <div class="input-group mb-3 mt-5">
                                <span class="input-group-text" id="basic-addo"><i class="bi bi-key"></i></span>
                                <input 
                                    type="password" 
                                    class="form-control" 
                                    placeholder="Contraseña"
                                    id="contraseña"
                                    onChange={function(evento){guardarContraseña(evento.target.value)}}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">Ingresar</button>

                        </form>
                    </div>

                 <div className="col-5 col-md-3 align-self-center">
                    <br />
                    <br />
                 <img src="../../src/assets/tigre.png" alt="" className="img-tigre" />
                    </div>
                </div>
        </section>
        </>
    )

}