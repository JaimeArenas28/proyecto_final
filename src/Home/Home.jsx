import "./Home.css"

import basedatosasesores from "../utils/basedatosasesores.json"


export function Home(){
    

    console.log(basedatosasesores[0].ramos[0].Vida)
    return( //zona de renderizado
        <>
            <section className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h2 className="fuente">Bienvenido al portal Asesores</h2>
                        <h2 className="text-muted">Hola querido Asesor Sura <span className="fuente"></span></h2>
                        <p>En este portal puedes verificar las ventas totales acumuladas por mes por cada servicio vendido. A continuacion se encuentra el detalle de tus ventas:</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src="../../src/assets/contact-page-img1.jpg" alt="" height={200}/>
                    </div>
                </div>
            </section>

            <hr />
            <section className="container my-5">
                <div className="row">
                    <div className="col-5 col-md-7">
                        
                        <h3 className="fuente"> {basedatosasesores[0].nombre} </h3>
                        <h5> {basedatosasesores[0].cargo} </h5>
                        <h5> {basedatosasesores[0].oficina} </h5>
                        <h5> {basedatosasesores[0].empresasVinculada} </h5>
                        <h5 className="sub"> {basedatosasesores[0].correo} </h5>
                                    
                    </div>
                                    
                                    
                                
                            
                                                
                    
                </div>
            </section>
            <section className="container my-5">
                <div className=" row row-cols-1 row-cols-md-3">
                    {
                        
                                    
                                            <div className="card h-100 shadow px-6">
                                                <h3><i class="bi bi-activity"></i> Vida: {basedatosasesores[0].ramos[0].Vida}</h3>
                                                <h3><i class="bi bi-car-front-fill"></i> Autos: {basedatosasesores[0].ramos[1].Autos}</h3>
                                                <h3><i class="bi bi-capsule-pill"></i> Salud: {basedatosasesores[0].ramos[2].Salud}</h3>
                                                <h3><i class="bi bi-airplane"></i> Viaje: {basedatosasesores[0].ramos[3].Viaje}</h3>
                                                <h3><i class="bi bi-bicycle"></i> Motos: {basedatosasesores[0].ramos[4].Motos}</h3>
                                                <h3><i class="bi bi-house-heart"></i> Arrendamiento: {basedatosasesores[0].ramos[5].Arrendamiento}</h3>

                                            </div>
                                        
                                        
                                    
                              
                          
                    }

                </div>
            </section>
            <div className="col-5 col-md-3 align-self-center">
                    <br />
                    <br />
                 
            </div>

        </>
    )
}