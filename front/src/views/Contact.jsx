import React from 'react'

function Contact() {
  return (
   <>
     <section className="breadcumb-area bg-img bg-overlay"      style={{ 
        backgroundImage: `url("img/bg-img/breadcumb.jpg")` 
      }} >
        <div className="bradcumbContent">
            <p>Cotizaciones</p>
            <h2>Dónde nos ecuentras?</h2>
        </div>
    </section>
    {/* <!-- ##### Breadcumb Area End ##### --> */}

    {/* <!-- ##### Contactos Area Start ##### --> */}
    <section className="Contactos-area section-padding-100-0">
        <div className="container">
            <div className="row">

                <div className="col-12 col-lg-3">
                    <div className="Contactos-content mb-100">
                        {/* <!-- Title --> */}
                        <div className="Contactos-title mb-50">
                            <h5>Contactos Info</h5>
                        </div>

                        {/* <!-- Single Contactos Info --> */}
                        <div className="single-Contactos-info d-flex align-items-center">
                            <div className="icon mr-30">
                                <span className="icon-placeholder"></span>
                            </div>
                            <p>Zona 4 de Mixco, Guatemala. Ciudad de Guatemala.</p>
                        </div>

                        {/* <!-- Single Contactos Info --> */}
                        <div className="single-Contactos-info d-flex align-items-center">
                            <div className="icon mr-30">
                                <span className="icon-smartphone"></span>
                            </div>
                            <p>(502) 55009217 y (502) 40689735</p>
                        </div>

                        {/* <!-- Single Contactos Info --> */}
                        <div className="single-Contactos-info d-flex align-items-center">
                            <div className="icon mr-30">
                                <span className="icon-mail"></span>
                            </div>
                            <p>info@ticketguatemala.com</p>
                        </div>

                        {/* <!-- Contactos Social Info --> */}
                        <div className="Contactos-social-info mt-50">
                            <a className='m-1' href="#" data-toggle="tooltip" data-placement="top" title="Pinterest"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                            <a className='m-1' href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a className='m-1' href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a className='m-1' href="#" data-toggle="tooltip" data-placement="top" title="Dribbble"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
                            <a className='m-1' href="#" data-toggle="tooltip" data-placement="top" title="Behance"><i className="fa fa-behance" aria-hidden="true"></i></a>
                            <a className='m-1' href="#" data-toggle="tooltip" data-placement="top" title="Linkedin"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                        </div>

                    </div>
                </div>

                <div className="col-12 col-lg-9">
                    {/* <!-- ##### Google Maps ##### --> */}
                    <div className="map-area mb-100">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22236.40558254599!2d-118.25292394686001!3d34.057682914027104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z4Kay4Ka4IOCmj-CmnuCnjeCmnOCnh-CmsuCnh-CmuCwg4KaV4KeN4Kav4Ka-4Kay4Ka_4Kar4KeL4Kaw4KeN4Kao4Ka_4Kav4Ka84Ka-LCDgpq7gpr7gprDgp43gppXgpr_gpqgg4Kav4KeB4KaV4KeN4Kak4Kaw4Ka-4Ka34KeN4Kaf4KeN4Kaw!5e0!3m2!1sbn!2sbd!4v1532328708137" allowfullscreen></iframe>
                    </div>
                </div>

            </div>
        </div>
    </section>
    {/* <!-- ##### Contactos Area End ##### --> */}

    {/* <!-- ##### Contactos Area Start ##### --> */}
    <section className="Contactos-area section-padding-0-100">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading">
                        <p>Necesitas más información?</p>
                        <h2>Escríbenos</h2>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    {/* <!-- Contactos Form Area --> */}
                    <div className="Contactos-form-area">
                        <form action="#" method="post">
                            <div className="row">
                                <div className="col-md-6 col-lg-4">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="name" placeholder="Nombre"/>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="email" placeholder="E-mail"/>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="subject" placeholder="Asunto"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <textarea name="message" className="form-control" id="message" cols="30" rows="10" placeholder="Mensaje"></textarea>
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                    <button className="btn oneMusic-btn mt-30" type="submit">Enviar <i className="fa fa-angle-double-right"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
   </>
  )
}

export default Contact