import React from "react";

function Login() {
  return (
    <>
      {/* <!-- ##### Breadcumb Area Start ##### --> */}
      <section
        className="breadcumb-area bg-img bg-overlay"
        style={{ backgroundImage: "url(img/bg-img/breadcumb3.jpg)" }}
      >
        <div className="bradcumbContent">
          <h2>Inicio de sesión</h2>
        </div>
      </section>
      {/* <!-- ##### Breadcumb Area End ##### --> */}

      {/* <!-- ##### Login Area Start ##### --> */}
      <section className="login-area section-padding-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="login-content">
                <h3>Bienvenidos</h3>
                {/* <!-- Login Form --> */}
                <div className="login-form">
                  <form action="#" method="post">
                    <div className="form-group">
                      <label for="exampleInputEmail1">Email </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Ingresa tu correo"
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        <i className="fa fa-lock mr-2"></i>No usaremos tus datos
                      </small>
                    </div>
                    <div className="form-group">
                      <label for="exampleInputPassword1">Contraseña</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Contraseña"
                      />
                    </div>
                    <button type="submit" className="btn oneMusic-btn mt-30">
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
