(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,t){e.exports=t(54)},27:function(e,a,t){},31:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),s=t(12),c=t.n(s),i=(t(27),t(5)),l=t.n(i),o=t(13),u=t(14),m=t(15),d=t(19),h=t(16),p=t(20),f=(t(31),t(18)),v=t(17),w=t.n(v),_=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(d.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={d:""},t.getTrProps=function(e,a,t,n){return a?{style:{color:a.row.machine_info?a.row.application_info?"black":"orange":"red"}}:{}},t.fetchData=Object(o.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:w.a.get("https://cpen431a5.herokuapp.com/getData").then(function(e){return console.log(e),t.setState({d:e}),e});case 1:case"end":return e.stop()}},e,this)})),t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.fetchData(function(a){return e.setState({d:a})}),this.interval=setInterval(function(){return e.fetchData(function(a){return e.setState({d:a})})},3e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this,a=[{Header:"Timestamp",accessor:"timestamp",width:"220",Cell:function(a){return r.a.createElement("span",{className:"string"},new Date(e.state.d.data[e.state.d.data.length-1].timestamp).toString().substring(0,25))}},{Header:"Node Hostname",accessor:"id",width:"250",Cell:function(e){return r.a.createElement("span",{className:"string"},e.value)}},{Header:"Node Status",accessor:"machine_info",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value?"Alive":"Dead")}},{Header:"App Status",accessor:"application_info",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value?"Alive":"Dead")}},{Header:"# Requests",accessor:"application_info.num_requests",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"# SavedBytes",accessor:"application_info.num_savedBytes",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"# KeysSaved",accessor:"application_info.num_keys_saved",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"# Cached",accessor:"application_info.elements_cached",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"CPU Usage",accessor:"machine_info.cpu.usage",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"CPU Idle",accessor:"machine_info.cpu.idle",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"Total Mem",accessor:"machine_info.memory.total",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"Free Mem",accessor:"machine_info.memory.free",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"Buffer Mem",accessor:"machine_info.memory.buffers",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"Used Disk",accessor:"machine_info.disk_space.used",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"Free Disk",accessor:"machine_info.disk_space.available",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"1 Min Load",accessor:"machine_info.load.average_1_min",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"5 Min Load",accessor:"machine_info.load.average_5_min",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"15 Min Load",accessor:"machine_info.load.average_15_min",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}}];return r.a.createElement("div",null,r.a.createElement("h1",null,"CPEN 431 Group 4A Monitoring Dashboard"),this.state&&this.state.d&&r.a.createElement("h2",null,"Total Nodes: ",this.state.d.data[this.state.d.data.length-1].stats.total_nodes," ",r.a.createElement("br",null),"Live Nodes: ",this.state.d.data[this.state.d.data.length-1].stats.alive_nodes_machine," ",r.a.createElement("br",null),"Live Apps: ",this.state.d.data[this.state.d.data.length-1].stats.alive_nodes_app),this.state&&this.state.d&&r.a.createElement(f.a,{data:this.state.d.data[this.state.d.data.length-1].nodes,columns:a,getTrProps:this.getTrProps}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.51329c0c.chunk.js.map