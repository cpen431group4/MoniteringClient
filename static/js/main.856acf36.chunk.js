(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,n){e.exports=n(54)},27:function(e,a,n){},31:function(e,a,n){},54:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),s=n(12),c=n.n(s),i=(n(27),n(5)),o=n.n(i),l=n(13),u=n(14),m=n(15),d=n(19),h=n(16),f=n(20),p=(n(31),n(18)),v=n(17),w=n.n(v),_=function(e){function a(){var e,n;Object(u.a)(this,a);for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={d:""},n.getTrProps=function(e,a,n,t){return a?{style:{color:a.row.machine_info?a.row.application_info?"black":"orange":"red"}}:{}},n.fetchData=Object(l.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:w.a.get("https://cpen431monitor.herokuapp.com/getData").then(function(e){return console.log(e),n.setState({d:e}),e});case 1:case"end":return e.stop()}},e,this)})),n}return Object(f.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){return e.fetchData(function(a){return e.setState({d:a})})},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this,a=[{Header:"Timestamp",accessor:"timestamp",width:"220",Cell:function(a){return r.a.createElement("span",{className:"string"},new Date(e.state.d.data[e.state.d.data.length-1].timestamp).toString().substring(0,25))}},{Header:"Node Hostname",accessor:"id",width:"250",Cell:function(e){return r.a.createElement("span",{className:"string"},e.value)}},{Header:"Node Status",accessor:"machine_info",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value?"Alive":"Dead")}},{Header:"App Status",accessor:"application_info",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value?"Alive":"Dead")}},{Header:"# Requests",accessor:"application_info.num_requests",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"# SavedBytes",accessor:"application_info.num_savedBytes",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"# KeysSaved",accessor:"application_info.num_keys_saved",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"# Cached",accessor:"application_info.elements_cached",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"CPU Usage",accessor:"machine_info.cpu.usage",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"CPU Idle",accessor:"machine_info.cpu.idle",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"Total Mem",accessor:"machine_info.memory.total",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"Free Mem",accessor:"machine_info.memory.free",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"Buffer Mem",accessor:"machine_info.memory.buffers",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"Used Disk",accessor:"machine_info.disk_space.used",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"Free Disk",accessor:"machine_info.disk_space.available",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"1 Min Load",accessor:"machine_info.load.average_1_min",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"5 Min Load",accessor:"machine_info.load.average_5_min",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"15 Min Load",accessor:"machine_info.load.average_15_min",width:"150",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}}];return r.a.createElement("div",null,r.a.createElement("h1",null,"CPEN 431 Group 4A Monitoring Dashboard"),this.state&&this.state.d&&r.a.createElement(p.a,{data:this.state.d.data[this.state.d.data.length-1].nodes,columns:a,getTrProps:this.getTrProps}))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.856acf36.chunk.js.map