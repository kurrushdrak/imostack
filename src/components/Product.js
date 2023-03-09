import React, { Component } from 'react';

export class Product extends Component {
    constructor() {
        super();

        this.state = {
            product: [{ "Id": 1, "name": "Engine Oils", "quantity": 100, "price": 500 },
            { "Id": 2, "name": "Wires","quantity": 200, "price": 1000 },
            { "Id": 3, "name": "Fuses","quantity": 300, "price": 1500 }
            ]
        }
    }
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header" style={{ marginTop: 50 }}>
                        <h1>Product list</h1>

                    </div>
                    <div className="card-body">
                        <table className="table table-striped table-hover" align='center'>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>name</th>
                                    <th>quantity</th>
                                    <th>price</th>
                                    <th colspan={2}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.product.map((product, index) => {
                                    return <tr key={index}>
                                        <td>{product.Id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.price}</td>
                                        <td>
                                            <button className='btn btn-primary' style={{ marginRight: 10 }} >edit</button>
                                            <button className='btn btn-warning' style={{ marginRight: 10 }} >Details</button>
                                            <button className='btn btn-danger' style={{ marginRight: 10 }} >Delete</button>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        )
    }
}

export default Product;
