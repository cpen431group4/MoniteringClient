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
  this.interval = setInterval(() => this.fetchData(data => this.setState({ d: data })), 1000);
}

componentWillUnmount() {
  clearInterval(this.interval);
}

  render (){
    const columns = [
    {
      Header: 'Timestamp',
      accessor: 'timestamp',
      width: '220',
      Cell: props => <span className='string'>{new Date(this.state.d.data[this.state.d.data.length-1].timestamp).toString().substring(0,25)}</span> // Custom cell components!
    },
    {
      Header: 'Node Hostname',
      accessor: 'id' ,
      width: '250',
      Cell: props => <span className='string'>{props.value}</span>
    },{
      Header: 'Node Status',
      accessor: 'machine_info',
      width: '150',
      Cell: props => <span className='number'>{(props.value) ? "Alive" : "Dead"}</span> // Custom cell components!
    },{
      Header: 'App Status',
      accessor: 'application_info',
      width: '150',
      Cell: props => <span className='number'>{(props.value) ? "Alive" : "Dead"}</span> // Custom cell components!
    },{
    Header: '# Requests',
      accessor: 'application_info.num_requests',
      width: '150',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header: '# SavedBytes',
      accessor: 'application_info.num_savedBytes',
      width: '150',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header: '# KeysSaved',
      accessor: 'application_info.num_keys_saved',
      width: '150',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header: '# Cached',
      accessor: 'application_info.elements_cached',
      width: '150',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header: 'CPU Usage',
      accessor: 'machine_info.cpu.usage',
      width: '150',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header: 'CPU Idle',
      accessor: 'machine_info.cpu.idle',
      width: '150',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header: 'Total Mem',
      accessor: 'machine_info.memory.total',
      width: '150',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header: 'Free Mem',
      accessor: 'machine_info.memory.free',
      width: '150',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header: 'Buffer Mem',
      accessor: 'machine_info.memory.buffers',
      width: '150',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header: 'Used Disk',
      accessor: 'machine_info.disk_space.used',
      width: '150',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header: 'Free Disk',
      accessor: 'machine_info.disk_space.available',
      width: '150',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header: '1 Min Load',
      accessor: 'machine_info.load.average_1_min',
      width: '150',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header: '5 Min Load',
      accessor: 'machine_info.load.average_5_min',
      width: '150',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header: '15 Min Load',
      accessor: 'machine_info.load.average_15_min',
      width: '150',
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
