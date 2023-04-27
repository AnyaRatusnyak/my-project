import React from "react";
import "./Price.css";

const Price = () => {
  return (
    <div className="content__boxed">
      <div className="content__wrap">
        <h2 className="h1 pt-4 mb-4 text-center">
          Google Chrome Extension Plans
        </h2>
        <div className="d-lg-flex justify-content-center">
          <div className="w-md-250px ">
            <div className="card my-3 first-block border-0">
              <div className="card-body">
                <div className="text-center">
                  <h5>Free</h5>
                  <div className="mt-4">
                    <span className="h3 m-0 text-primary">$</span>
                    <span className="display-2 text-primary">0</span>
                    <span>/mo</span>
                  </div>
                </div>

                <ul className="list-group list-group-borderless mt-4">
                  <li className="list-group-item border-0 text">
                    <i className=" demo-pli-yes fs-5 me-2 text-success "></i>
                    Word Definitions
                  </li>
                  <li className="list-group-item border-0 ">
                    <i className=" demo-pli-yes fs-5 me-2 text-success"></i>
                    Up to 10 Lists
                  </li>
                </ul>

                <div className="d-grid mt-4">
                  <button className="btn btn-outline-primary">
                    <a href="https://boostvocab.com/register">Sign up today</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-md-250px">
            <div className="card my-3 border-0">
              <div className="card-body">
                <div className="text-center">
                  <h5>Monthly</h5>
                  <div className="mt-4">
                    <span className="h3 m-0 text-primary">$</span>
                    <span className="display-2 text-primary">3.99</span>
                    <span>/mo</span>
                  </div>
                </div>

                <ul className="list-group list-group-borderless mt-4">
                  <li className="list-group-item border-0 ">
                    <i className=" demo-pli-yes fs-5 me-2 text-success"></i>
                    Word Definitions
                  </li>
                  <li className="list-group-item border-0 ">
                    <i className=" demo-pli-yes fs-5 me-2 text-success"></i>
                    Unlimited Lists
                  </li>
                  <li className="list-group-item border-0 ">
                    <i className=" demo-pli-yes fs-5 me-2 text-success"></i>
                    Directly add words from any site using Chrome Extension
                  </li>
                </ul>

                <div className="d-grid mt-4">
                  <button className="btn btn-outline-primary">
                    <a
                      target="new"
                      href="https://buy.stripe.com/5kAdRpbLh3k71RS6oo"
                    >
                      Sign up today
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-md-250px">
            <div className="card h-100 border border-2 border-success shadow position-relative">
              <div className="z-2 position-absolute badge border rounded-circle bg-danger ribbon">
                <span>POPULAR</span>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <h5>Yearly</h5>
                  <div className="mt-4">
                    <span className="h3 m-0 text-primary">$</span>
                    <span className="display-2  text-primary">29.99</span>
                    <span>/year</span>
                  </div>
                </div>

                <ul className="list-group list-group-borderless mt-4">
                  <li className="list-group-item border-0 ">
                    <i className=" demo-pli-yes fs-5 me-2 text-success"></i>
                    Word Definitions
                  </li>
                  <li className="list-group-item border-0 ">
                    <i className=" demo-pli-yes fs-5 me-2 text-success"></i>
                    Unlimited Lists
                  </li>
                  <li className="list-group-item border-0 ">
                    <i className=" demo-pli-yes fs-5 me-2 text-success"></i>
                    Directly add words from any site using Chrome Extension
                  </li>
                </ul>

                <div className="d-grid mt-4">
                  <button className="btn btn-success">
                    <a
                      target="new"
                      href="https://buy.stripe.com/aEU6oX3eL6wjdAA7st"
                    >
                      Sign up today
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-md-250px">
            <div className="card my-3 border-0 last-block">
              <div className="card-body">
                <div className="text-center">
                  <h5>Lifetime</h5>
                  <div className="mt-4">
                    <span className="h3 m-0 text-primary">$</span>
                    <span className="display-2  text-primary">99</span>
                    <span>one time</span>
                  </div>
                </div>

                <ul className="list-group list-group-borderless mt-4">
                  <li className="list-group-item border-0 ">
                    <i className=" demo-pli-yes fs-5 me-2 text-success"></i>
                    Word Definitions
                  </li>
                  <li className="list-group-item border-0 ">
                    <i className=" demo-pli-yes fs-5 me-2 text-success"></i>
                    Unlimited Lists
                  </li>
                  <li className="list-group-item border-0 ">
                    <i className=" demo-pli-yes fs-5 me-2 text-success"></i>
                    Directly add words from any site using Chrome Extension
                  </li>
                </ul>

                <div className="d-grid mt-4">
                  <button className="btn btn-outline-primary">
                    <a
                      target="new"
                      href="https://buy.stripe.com/4gwfZxbLh8Er54428a"
                    >
                      Sign up today
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
