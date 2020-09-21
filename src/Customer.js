import React, { Component } from 'react';
import * as BS from 'react-bootstrap';
import * as Ant from 'antd';
import CustomerDetail from './CustomerDetail';
import axios from 'axios';

export default class Customers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedcustomer: 1
        }
    }

    componentDidMount() {
        this.getCustomerData();
    }
    getCustomerData() {
        axios.get('assets/samplejson/customerlist.json').then(response => {
            this.setState({ customerlist: response })
        })
    }
    render() {
        if (!this.state.customerlist)
            return (<p>Loading data</p>)
        return (<div className="row">
            <div className="col-md-3">
                {
                    this.state.customerlist.data.map(customer =>
                        <BS.Card key={customer.name}>
                            <BS.Card.Header>
                                <BS.Card.Title>{customer.name}</BS.Card.Title>
                            </BS.Card.Header>
                            <BS.Card.Body>
                                <p>{customer.email}</p>
                                <p>{customer.phone}</p>
                                <BS.Button onClick={() => this.setState({ selectedcustomer: customer.id })}>
                                    جزییات
                                </BS.Button>
                            </BS.Card.Body>
                        </BS.Card>
                    )
                }
            </div>
            <div className="col-md-6">
                <CustomerDetail val={this.state.selectedcustomer} />
            </div>
        </div>)
    }
}
