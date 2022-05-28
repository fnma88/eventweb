import React from "react";

function Elements() {
  return (
    <>
      <section className="elements-area mt-30 section-padding-100-0">
        <div className="container">
          <div className="row">
            {/* <!-- ========== Buttons ========== --> */}
            <div className="col-12">
              <div className="elements-title mb-70">
                <h2>Buttons</h2>
              </div>
              {/* <!-- Buttons --> */}
              <div className="oneMusic-buttons-area mb-100">
                <a href="#" className="btn oneMusic-btn m-2">
                  Send <i className="fa fa-angle-double-right"></i>
                </a>
                <a href="#" className="btn oneMusic-btn btn-2 m-2">
                  Send <i className="fa fa-angle-double-right"></i>
                </a>
              </div>
            </div>

            {/* <!-- ========== Progress Bars & Accordions ========== --> */}
            <div className="col-12">
              <div className="elements-title mb-70">
                <h2>Accordians &amp; Tabs</h2>
              </div>
            </div>

            {/* <!-- ##### Accordians ##### --> */}
            <div className="col-12 col-lg-6">
              <div
                className="accordions mb-100"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                {/* <!-- single accordian area --> */}
                <div className="panel single-accordion">
                  <h6>
                    <a
                      role="button"
                      className=""
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseOne"
                    >
                      Mauris gravida neque augue, euismod ultricies dui sodales
                      ut
                      <span className="accor-open">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                      </span>
                      <span className="accor-close">
                        <i className="fa fa-minus" aria-hidden="true"></i>
                      </span>
                    </a>
                  </h6>
                  <div
                    id="collapseOne"
                    className="accordion-content collapse show"
                  >
                    <p>
                      Nam tristique ex vel magna tincidunt, ut porta nisl
                      finibus. Vivamus eu dolor eu quam varius rutrum. Fusce nec
                      justo id sem aliquam fringilla nec non lacus. Suspendisse
                      eget lobortis nisi, ac cursus odio. Vivamus nibh velit,
                      rutrum at ipsum ac, dignissim iaculis ante.
                    </p>
                  </div>
                </div>
                {/* <!-- single accordian area --> */}
                <div className="panel single-accordion">
                  <h6>
                    <a
                      role="button"
                      className="collapsed"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      href="#collapseTwo"
                    >
                      Pellentesque sit amet velit a libero viverra porta non eu
                      justo
                      <span className="accor-open">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                      </span>
                      <span className="accor-close">
                        <i className="fa fa-minus" aria-hidden="true"></i>
                      </span>
                    </a>
                  </h6>
                  <div id="collapseTwo" className="accordion-content collapse">
                    <p>
                      Nam tristique ex vel magna tincidunt, ut porta nisl
                      finibus. Vivamus eu dolor eu quam varius rutrum. Fusce nec
                      justo id sem aliquam fringilla nec non lacus. Suspendisse
                      eget lobortis nisi, ac cursus odio. Vivamus nibh velit,
                      rutrum at ipsum ac, dignissim iaculis ante.
                    </p>
                  </div>
                </div>
                {/* <!-- single accordian area --> */}
                <div className="panel single-accordion">
                  <h6>
                    <a
                      role="button"
                      aria-expanded="true"
                      aria-controls="collapseThree"
                      className="collapsed"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      href="#collapseThree"
                    >
                      Quisque fringilla orci lacus, ut vestibulum nisi interdum
                      in
                      <span className="accor-open">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                      </span>
                      <span className="accor-close">
                        <i className="fa fa-minus" aria-hidden="true"></i>
                      </span>
                    </a>
                  </h6>
                  <div
                    id="collapseThree"
                    className="accordion-content collapse"
                  >
                    <p>
                      Nam tristique ex vel magna tincidunt, ut porta nisl
                      finibus. Vivamus eu dolor eu quam varius rutrum. Fusce nec
                      justo id sem aliquam fringilla nec non lacus. Suspendisse
                      eget lobortis nisi, ac cursus odio. Vivamus nibh velit,
                      rutrum at ipsum ac, dignissim iaculis ante.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- ##### Tabs ##### --> */}
            <div className="col-12 col-lg-6">
              <div className="oneMusic-tabs-content">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="tab--1"
                      data-toggle="tab"
                      href="#tab1"
                      role="tab"
                      aria-controls="tab1"
                      aria-selected="false"
                    >
                      Mauris gravida neque
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="tab--2"
                      data-toggle="tab"
                      href="#tab2"
                      role="tab"
                      aria-controls="tab2"
                      aria-selected="false"
                    >
                      Pellentesque sit
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="tab--3"
                      data-toggle="tab"
                      href="#tab3"
                      role="tab"
                      aria-controls="tab3"
                      aria-selected="true"
                    >
                      Quisque fringilla
                    </a>
                  </li>
                </ul>

                <div className="tab-content mb-100" id="myTabContent">
                  <div
                    className="tab-pane fade"
                    id="tab1"
                    role="tabpanel"
                    aria-labelledby="tab--1"
                  >
                    <div className="oneMusic-tab-content">
                      {/* <!-- Tab Text --> */}
                      <div className="oneMusic-tab-text">
                        <p>
                          Nam tristique ex vel magna tincidunt, ut porta nisl
                          finibus. Vivamus eu dolor eu quam varius rutrum. Fusce
                          nec justo id sem aliquam fringilla nec non lacus.
                          Suspendisse eget lobortis nisi, ac cursus odio.
                          Vivamus nibh velit, rutrum at ipsum ac, dignissim
                          iaculis ante.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab2"
                    role="tabpanel"
                    aria-labelledby="tab--2"
                  >
                    <div className="oneMusic-tab-content">
                      {/* <!-- Tab Text --> */}
                      <div className="oneMusic-tab-text">
                        <p>
                          Nam tristique ex vel magna tincidunt, ut porta nisl
                          finibus. Vivamus eu dolor eu quam varius rutrum. Fusce
                          nec justo id sem aliquam fringilla nec non lacus.
                          Suspendisse eget lobortis nisi, ac cursus odio.
                          Vivamus nibh velit, rutrum at ipsum ac, dignissim
                          iaculis ante.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show active"
                    id="tab3"
                    role="tabpanel"
                    aria-labelledby="tab--3"
                  >
                    <div className="oneMusic-tab-content">
                      {/* <!-- Tab Text --> */}
                      <div className="oneMusic-tab-text">
                        <p>
                          Nam tristique ex vel magna tincidunt, ut porta nisl
                          finibus. Vivamus eu dolor eu quam varius rutrum. Fusce
                          nec justo id sem aliquam fringilla nec non lacus.
                          Suspendisse eget lobortis nisi, ac cursus odio.
                          Vivamus nibh velit, rutrum at ipsum ac, dignissim
                          iaculis ante.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- ========== Loaders ========== --> */}
            <div className="col-12">
              <div className="elements-title mb-70">
                <h2>Loaders</h2>
              </div>
            </div>

            <div className="col-12">
              {/* <!-- Loaders Area Start --> */}
              <div className="our-skills-area">
                <div className="row">
                  {/* <!-- Single Skills Area --> */}
                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="single-skils-area mb-100">
                      <div id="circle" className="circle" data-value="0.75">
                        <div className="skills-text">
                          <span>75%</span>
                          <p>Good Music</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Single Skills Area --> */}
                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="single-skils-area mb-100">
                      <div id="circle2" className="circle" data-value="0.83">
                        <div className="skills-text">
                          <span>83%</span>
                          <p>Amazing Artists</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Single Skills Area --> */}
                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="single-skils-area mb-100">
                      <div id="circle3" className="circle" data-value="0.25">
                        <div className="skills-text">
                          <span>25%</span>
                          <p>Concerts</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Single Skills Area --> */}
                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="single-skils-area mb-100">
                      <div id="circle4" className="circle" data-value="0.95">
                        <div className="skills-text">
                          <span>95%</span>
                          <p>Superstars</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- ========== Milestones ========== --> */}
            <div className="col-12">
              <div className="elements-title mb-70">
                <h2>Milestone</h2>
              </div>
            </div>

            <div className="col-12">
              <div className="oneMusic-cool-facts-area">
                <div className="row">
                  {/* <!-- Single Cool Facts --> */}
                  <div className="col-12 col-sm-6 col-lg-2">
                    <div className="single-cool-fact mb-100">
                      <div className="scf-text">
                        <h2>
                          +<span className="counter">1000</span>
                        </h2>
                        <p>Live Concerts</p>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Single Cool Facts --> */}
                  <div className="col-12 col-sm-6 col-lg-2">
                    <div className="single-cool-fact mb-100">
                      <div className="scf-text">
                        <h2>
                          <span className="counter">19</span>k
                        </h2>
                        <p>Followers on FB</p>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Single Cool Facts --> */}
                  <div className="col-12 col-sm-6 col-lg-2">
                    <div className="single-cool-fact mb-100">
                      <div className="scf-text">
                        <h2>
                          <span className="counter">732</span>
                        </h2>
                        <p>New Artists</p>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Single Cool Facts --> */}
                  <div className="col-12 col-sm-6 col-lg-2">
                    <div className="single-cool-fact mb-100">
                      <div className="scf-text">
                        <h2>
                          <span className="counter">25</span>mil
                        </h2>
                        <p>Songs in Playlist</p>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Single Cool Facts --> */}
                  <div className="col-12 col-sm-6 col-lg-2">
                    <div className="single-cool-fact mb-100">
                      <div className="scf-text">
                        <h2>
                          <span className="counter">2401</span>
                        </h2>
                        <p>New Songs</p>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Single Cool Facts --> */}
                  <div className="col-12 col-sm-6 col-lg-2">
                    <div className="single-cool-fact mb-100">
                      <div className="scf-text">
                        <h2>
                          <span className="counter">28</span>
                        </h2>
                        <p>Awards Won</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- ========== Icon Boxes ========== --> */}
            <div className="col-12">
              <div className="elements-title mb-70">
                <h2>Icon Boxes</h2>
              </div>
            </div>

            <div className="col-12">
              <div className="row">
                {/* <!-- Single Service Area --> */}
                <div className="col-12 col-md-6">
                  <div className="single-service-area d-flex flex-wrap mb-100">
                    <div className="icon">
                      <span className="icon-favorites"></span>
                    </div>
                    <div className="text">
                      <h5>New Artists</h5>
                      <p>
                        Nam tristique ex vel magna tincidunt, ut porta nisl
                        finibus. Vivamus eu dolor eu quam varius rutrum. Fusce
                        nec justo id sem aliquam fringilla nec non lacus.
                        Suspendisse eget lobortis nisi, ac cursus odio.
                      </p>
                    </div>
                  </div>
                </div>

                {/* <!-- Single Service Area --> */}
                <div className="col-12 col-md-6">
                  <div className="single-service-area d-flex flex-wrap mb-100">
                    <div className="icon">
                      <span className="icon-microphone"></span>
                    </div>
                    <div className="text">
                      <h5>Amazing Music</h5>
                      <p>
                        Vivamus nibh velit, rutrum at ipsum ac, dignissim
                        iaculis ante.Nam tristique ex vel magna tincidunt, ut
                        porta nisl finibus. Vivamus eu dolor eu quam varius
                        rutrum. Fusce nec justo id sem aliquam fringilla nec non
                        lacus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- ========== Icon Boxes ========== --> */}
            <div className="col-12">
              <div className="elements-title mb-70">
                <h2>Web Icons</h2>
              </div>
            </div>

            <div className="col-12">
              <div className="row mb-70">
                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-alarm-clock"></i>
                    <span>icon-alarm-clock</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-atomic"></i>
                    <span>icon-atomic</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-bar-chart"></i>
                    <span>icon-bar-chart</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-battery"></i>
                    <span>icon-battery</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-battery-1"></i>
                    <span>icon-battery-1</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-bell"></i>
                    <span>icon-bell</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-bluetooth"></i>
                    <span>icon-bluetooth</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-book"></i>
                    <span>icon-book</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-box"></i>
                    <span>icon-box</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-calculator"></i>
                    <span>icon-calculator</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-calendar"></i>
                    <span>icon-calendar</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-car"></i>
                    <span>icon-car</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-chat"></i>
                    <span>icon-chat</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-chat-1"></i>
                    <span>icon-chat-1</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-checked"></i>
                    <span>icon-checked</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-cloud"></i>
                    <span>icon-cloud</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-cloud-computing"></i>
                    <span>icon-cloud-computing</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-cloud-computing-1"></i>
                    <span>icon-cloud-computing-1</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-compass"></i>
                    <span>icon-compass</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-credit-card"></i>
                    <span>icon-credit-card</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-cursor"></i>
                    <span>icon-cursor</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-cutlery"></i>
                    <span>icon-cutlery</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-download"></i>
                    <span>icon-download</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-edit"></i>
                    <span>icon-edit</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-envelope"></i>
                    <span>icon-envelope</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-eraser"></i>
                    <span>icon-eraser</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-eye"></i>
                    <span>icon-eye</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-fast-forward"></i>
                    <span>icon-fast-forward</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-favorites"></i>
                    <span>icon-favorites</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-file"></i>
                    <span>icon-file</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-file-1"></i>
                    <span>icon-file-1</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-file-2"></i>
                    <span>icon-file-2</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-file-3"></i>
                    <span>icon-file-3</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-filter"></i>
                    <span>icon-filter</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-flag"></i>
                    <span>icon-flag</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-folder"></i>
                    <span>icon-folder</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-folder-1"></i>
                    <span>icon-folder-1</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-gamepad"></i>
                    <span>icon-gamepad</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-heart"></i>
                    <span>icon-heart</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-Inicio"></i>
                    <span>icon-Inicio</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-id-card"></i>
                    <span>icon-id-card</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-idea"></i>
                    <span>icon-idea</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-image"></i>
                    <span>icon-image</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-inbox"></i>
                    <span>icon-inbox</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-information"></i>
                    <span>icon-information</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-key"></i>
                    <span>icon-key</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-laptop"></i>
                    <span>icon-laptop</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-layers"></i>
                    <span>icon-layers</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-like"></i>
                    <span>icon-like</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-line-chart"></i>
                    <span>icon-line-chart</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-loupe"></i>
                    <span>icon-loupe</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-mail"></i>
                    <span>icon-mail</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-map"></i>
                    <span>icon-map</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-medal"></i>
                    <span>icon-medal</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-megaphone"></i>
                    <span>icon-megaphone</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-message"></i>
                    <span>icon-message</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-message-1"></i>
                    <span>icon-message-1</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-message-2"></i>
                    <span>icon-message-2</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-microphone"></i>
                    <span>icon-microphone</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-money"></i>
                    <span>icon-money</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-monitor"></i>
                    <span>icon-monitor</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-music"></i>
                    <span>icon-music</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-next"></i>
                    <span>icon-next</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-padlock"></i>
                    <span>icon-padlock</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-padlock-1"></i>
                    <span>icon-padlock-1</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-paint-brush"></i>
                    <span>icon-paint-brush</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-pause"></i>
                    <span>icon-pause</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-phone-call"></i>
                    <span>icon-phone-call</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-photo-camera"></i>
                    <span>icon-photo-camera</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-placeholder"></i>
                    <span>icon-placeholder</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-planet-earth"></i>
                    <span>icon-planet-earth</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-play-button"></i>
                    <span>icon-play-button</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-power-button"></i>
                    <span>icon-power-button</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-presentation"></i>
                    <span>icon-presentation</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-printer"></i>
                    <span>icon-printer</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-reload"></i>
                    <span>icon-reload</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-return"></i>
                    <span>icon-return</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-rss"></i>
                    <span>icon-rss</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-safebox"></i>
                    <span>icon-safebox</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-settings"></i>
                    <span>icon-settings</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-settings-1"></i>
                    <span>icon-settings-1</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-settings-2"></i>
                    <span>icon-settings-2</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-share"></i>
                    <span>icon-share</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-shield"></i>
                    <span>icon-shield</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-shopping-cart"></i>
                    <span>icon-shopping-cart</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-smartphone"></i>
                    <span>icon-smartphone</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-speaker"></i>
                    <span>icon-speaker</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-speakers"></i>
                    <span>icon-speakers</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-trash"></i>
                    <span>icon-trash</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-trophy"></i>
                    <span>icon-trophy</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-upload"></i>
                    <span>icon-upload</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-user"></i>
                    <span>icon-user</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-user-1"></i>
                    <span>icon-user-1</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-user-2"></i>
                    <span>icon-user-2</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-user-3"></i>
                    <span>icon-user-3</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-users"></i>
                    <span>icon-users</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-video-camera"></i>
                    <span>icon-video-camera</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-wifi"></i>
                    <span>icon-wifi</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-zoom-in"></i>
                    <span>icon-zoom-in</span>
                  </div>
                </div>

                {/* <!-- Single Web Icon --> */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div className="single-web-icon mb-30">
                    <i className="icon-zoom-out"></i>
                    <span>icon-zoom-out</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Elements;
