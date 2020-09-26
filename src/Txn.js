import React, { Component } from 'react';
import * as BS from 'react-bootstrap';
import axios from 'axios';
import * as Ant from 'antd';

const columns = [
    {
        title: 'زمان',
        dataIndex: 'TxnServerTime',
        key: 'TxnServerTime',
    },
    {
        title: 'شماره ترمینال',
        dataIndex: 'TerminalNo',
        key: 'TerminalNo',
    },
    {
        title: 'پاسخ',
        dataIndex: 'Response',
        key: 'Response',
    },
    {
        title: 'پردازش 1',
        dataIndex: 'PProcess',
        key: 'PProcess',
    },
    {
        title: 'شماره کارت',
        dataIndex: 'PAN',
        key: 'PAN',
    },
    {
        title: 'کد ریسپانس',
        dataIndex: 'ResponseCode',
        key: 'ResponseCode',
    },
    {
        title: 'مدت زمان پاسخ دهی',
        dataIndex: 'ResponseTime',
        key: 'ResponseTime',
    },
];
git commit -m 
export default class Txn extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.getTxnList(this.props.val)
    }
    // componentDidUpdate(prevProps) {
    //     if (this.props.val !== prevProps.val) {
    //         this.getTxnList(this.props.val)
    //     }
    // }
    getTxnList() {
        axios.get('assets/samplejson/TxnList.json').then(response => {
            this.setState({ TxnList: response })
        })
    };
    render() {
        if (!this.state.TxnList)
            return (<p>در حال دریافت اطلاعات</p>)
        return (
            <div>
                <Ant.Table direction="RTL" rowKey={record => record.id} onClick={() => console.log(5)} rowClassName={record => (record.ResponseCode == 0) ? "successrow" : "failrow"} dataSource={this.state.TxnList.data} columns={columns} />
            </div>
        )
    }

}
