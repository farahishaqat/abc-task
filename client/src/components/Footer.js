import React from "react";

const Footer = () => {
  return (
    <div className="main-footer">
      <footer className="page-footer bg-info">
        <div className="bg-dark">
          <div className="row py-4 d-flex align-items-center">
            <div className="col-md-12 text-center">
              <a href="testattribute">
                <i className="fab fa-facebook-f text-white mr-4"></i>
                <i className="fab fa-twitter text-white mr-4"></i>
                <i className="fab fa-google-plus-g text-white mr-4"></i>
                <i className="fab fa-linkedin-in text-white mr-4"></i>
                <i className="fab fa-instagram text-white mr-4"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="container text-center text-md-left mt-5">
          <div className="row">
            <div className="col-md-3 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold"> about us</h6>
              <hr
                className="bg-light mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "125px", height: "2px" }}
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque rhoncus non mi vel eleifend.{" "}
              </p>
            </div>

            <div className="col.md.2 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold"> the provider</h6>

              <hr
                className="bg-light mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "85px", height: "2px" }}
              />
              <ul className="list-unstyled">
                <li className="my-2">
                  <a href="testattribute">HTML</a>
                </li>
                <li className="my-2">
                  <a href="testattribute">CSS</a>
                </li>
                <li className="my-2">
                  <a href="testattribute">Bootstrap</a>
                </li>
                <li className="my-2">
                  <a href="testattribute">java</a>
                </li>
              </ul>
            </div>
            <div className="col.md.2 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">useful links</h6>

              <hr
                className="bg-light mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "110px", height: "2px" }}
              />
              <ul className="list-unstyled">
                <li>
                  {" "}
                  <a className="mu-2" href="testattribute">
                    gfdg
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="mu-2" href="testattribute">
                    gfdg
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="mu-2" href="testattribute">
                    gfdg
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="mu-2" href="testattribute">
                    gfdg
                  </a>
                </li>
              </ul>
            </div>

            <div className="col.md.2 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold"> contact us</h6>

              <hr
                className="bg-light mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "75px", height: "2px" }}
              />
              <ul className="list-unstyled">
                <li className="mu-2" href="testattribute">
                  <i className="fas fa-home mr-3"></i>
                  12 moh street
                </li>
                <li className="mu-2" href="testattribute">
                  <i className="fas fa-envelope mr-3"></i>
                  abc@customer.com
                </li>
                <li className="mu-2" href="testattribute">
                  <i className="fas fa-phone mr-3"></i>
                  +962797423882
                </li>
                <li className="mu-2" href="testattribute">
                  <i className="fas fa-print mr-3"></i>
                  962797423882
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
