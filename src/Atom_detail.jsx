import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {all_items_list} from './All_itmes_list'

export default function Atom_detail(props) {
    const given_item=props.atom_data;
    const given_img="/"+given_item.img;

    return (
        <div className="card border-white border-rounded-pill col-12 col-md-12 col-lg-12 mt-2  bg-light " >
            <img className="mt-2 zoom " src={process.env.PUBLIC_URL + given_img} alt="Card image cap" height="200px" witdh="100%" />
            <div className="card-body text-center">
            

                            <div className="row mt-2">
                                <div class="col-6 col-sm-6 col-md-6 col-lg-6  d-flex justify-content-end text-bold">
                                <h6 className="text-primary">पदार्थाचे नाव :-</h6>
                                </div>

                                <div class="col-6 col-sm-6 col-md-6 col-lg-6 d-flex justify-content-start">
                                <h6 className="text-danger"><b>{given_item.name}</b></h6>
                                 </div>

                            </div>

                            <div className="row mt-2">
                                <div class="col-6 col-sm-6 col-md-6 col-lg-6  d-flex justify-content-end">
                                <h6 className="text-primary">दर :-</h6>
                                </div>

                                <div class="col-6 col-sm-6 col-md-6 col-lg-6 d-flex justify-content-start">
                                <h6 className="text-danger"><b>{given_item.rate} रु.कि.</b> </h6>
                                 </div>

                            </div>
            </div>&nbsp;
            </div>
    )}