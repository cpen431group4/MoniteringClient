import React, { Component } from 'react';
import './App.css';
import ReactTable from "react-table";
import axios from 'axios';

class App extends Component {
  state = {
    d: '',
}

getTrProps = (state, rowInfo, column, instance) => {
  if (rowInfo) {
    return {
      style: {
        color: (!rowInfo.row.machine_info) ? 'red' : (rowInfo.row.application_info) ? 'black' : 'orange'
      }
    }
  }
  return {};
}

fetchData = async () => {
  axios.get('https://cpen431a5.herokuapp.com/getData')
        .then(res => {
            console.log(res)
            this.setState({d: res})
            return res
        })
}

componentDidMount() {
  this.fetchData(data => this.setState({ d: data }));
  this.interval = setInterval(() => this.fetchData(data => this.setState({ d: data })), 30000);
}

componentWillUnmount() {
  clearInterval(this.interval);
}

  render (){
    const columns = [
    {
      Header: 'Timestamp',
      accessor: 'timestamp',
      width: '150',
      fontsize: 5,
      Cell: props => <span className='string'>{new Date(this.state.d.data[this.state.d.data.length-1].timestamp).toString().substring(0,25)}</span> // Custom cell components!
    },
    {
      Header: 'Node Hostname',
      accessor: 'id' ,
      width: '180',
      Cell: props => <span className='string'>{props.value}</span>
    },{
      Header: 'Node Status',
      accessor: 'machine_info',
      width: '85',
      Cell: props => <span className='number'>{(props.value) ? "Alive" : "Dead"}</span> // Custom cell components!
    },{
      Header: 'App Status',
      accessor: 'application_info',
      width: '75',
      Cell: props => <span className='number'>{(props.value) ? "Alive" : "Dead"}</span> // Custom cell components!
    },{
      Header:() => <div>Throughput<br/>(Req/Sec)</div>,
      accessor: 'application_info',
      width: '75',
      Cell: props => <span className='number'>{(props.value) ? (1000*parseFloat(props.original.application_info.num_requests)/parseFloat(props.original.application_info.time_interval)) : ''}</span> // Custom cell components!
    },{
      Header: 'Saved Bytes',
      accessor: 'application_info.num_savedBytes',
      width: '90',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header: 'Keys Saved',
      accessor: 'application_info.num_keys_saved',
      width: '80',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header:() => <div>Cached<br/>Entries</div>,
      accessor: 'application_info.elements_cached',
      width: '80',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header:() => <div>CPU Usage<br/>(%)</div>,
      accessor: 'machine_info.cpu.usage',
      width: '70',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header:() => <div>CPU Idle<br/>(%)</div>,
      accessor: 'machine_info.cpu.idle',
      width: '70',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header:() => <div>Total Mem<br/>(KB)</div>,
      accessor: 'machine_info.memory.total',
      width: '80',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header:() => <div>Free Mem<br/>(KB)</div>,
      accessor: 'machine_info.memory.free',
      width: '80',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header:() => <div>Buffer Mem<br/>(KB)</div>,
      accessor: 'machine_info.memory.buffers',
      width: '80',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header:() => <div>Used Disk<br/>(KB)</div>,
      accessor: 'machine_info.disk_space.used',
      width: '70',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header:() => <div>Free Disk<br/>(KB)</div>,
      accessor: 'machine_info.disk_space.available',
      width: '70',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header:() => <div>1 min<br/>Load</div>,
      accessor: 'machine_info.load.average_1_min',
      width: '60',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header:() => <div>5 min<br/>Load</div>,
      accessor: 'machine_info.load.average_5_min',
      width: '60',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header:() => <div>15 min<br/>Load</div>,
      accessor: 'machine_info.load.average_15_min',
      width: '60',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }]
   
    return (
      <div>
        {<h1>CPEN 431 Group 4A Monitoring Dashboard</h1>}
        {this.state && this.state.d &&  <h2>Total Nodes: {this.state.d.data[this.state.d.data.length-1].stats.total_nodes} <br />
         Live Nodes: {this.state.d.data[this.state.d.data.length-1].stats.alive_nodes_machine} <br />
         Live Apps: {this.state.d.data[this.state.d.data.length-1].stats.alive_nodes_app}</h2>}
      { this.state && this.state.d && 
          <ReactTable
          data={this.state.d.data[this.state.d.data.length-1].nodes}
          columns={columns}
          getTrProps={this.getTrProps}
        />
      }
      </div>
    )
    }
    
}


export default App;
