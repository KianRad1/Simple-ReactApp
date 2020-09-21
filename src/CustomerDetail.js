import React, { Component } from 'react';
import * as BS from 'react-bootstrap';
import axios from 'axios';

export default class CustomerDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.getCustomerDetails(this.props.val)
    }
    componentDidUpdate(prevProps) {
        if (this.props.val !== prevProps.val) {
            this.getCustomerDetails(this.props.val)
        }
    }
    getCustomerDetails(id) {
        axios.get('assets/samplejson/customer' + id + '.json').then(response => {
            this.setState({ customerDetails: response })
        })
    };
    render() {
        if (!this.state.customerDetails)
            return (<p>Loading Data</p>)
        console.log(this.state.customerDetails.data.name);
        return (
            <div>
                <BS.Card>
                    <BS.Card.Header>
                        <BS.Card.Title>{this.state.customerDetails.data.name}</BS.Card.Title>
                    </BS.Card.Header>
                    <BS.Card.Body>
                        <p>Name : {this.state.customerDetails.data.name}</p>
                        <p>Email : {this.state.customerDetails.data.email}</p>
                        <p>Phone : {this.state.customerDetails.data.phone}</p>
                        <p>City : {this.state.customerDetails.data.city}</p>
                        <p>Country : {this.state.customerDetails.data.country}</p>
                    </BS.Card.Body>
                </BS.Card>
            </div>
        )
    }

}
