(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,n){e.exports=n(54)},27:function(e,a,n){},31:function(e,a,n){},54:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),s=n(12),c=n.n(s),o=(n(27),n(5)),i=n.n(o),l=n(13),u=n(14),m=n(15),d=n(19),f=n(16),p=n(20),h=(n(31),n(18)),v=n(17),_=n.n(v),b=function(e){function a(){var e,n;Object(u.a)(this,a);for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(r)))).state={d:""},n.fetchData=Object(l.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:_.a.get("https://cpen431monitor.herokuapp.com/getData").then(function(e){return console.log(e),n.setState({d:e}),e});case 1:case"end":return e.stop()}},e,this)})),n}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.fetchData(function(a){return e.setState({d:a})})}},{key:"updateDate",value:function(){return this.state.d.data[this.state.d.data.length-1].nodes.forEach(function(e){var a=new Date(parseInt(this.state.d.data[this.state.d.data.length-1].timestamp));e.timestamp=a.toISOString()}),!0}},{key:"render",value:function(){var e=[{Header:"Node Hostname",accessor:"id"},{Header:"# Requests",accessor:"application_info.num_requests",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"# SavedBytes",accessor:"application_info.num_savedbytes",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"# KeysSaved",accessor:"application_info.num_keys_saved",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"# Cached",accessor:"application_info.elements_cached",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"CPU Usage",accessor:"machine_info.cpu.usage",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"CPU Idle",accessor:"machine_info.cpu.idle",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"Total Mem",accessor:"machine_info.memory.total",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"Free Mem",accessor:"machine_info.memory.free",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"Buffer Mem",accessor:"machine_info.memory.buffers",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"Used Disk",accessor:"machine_info.disk_space.used",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"Free Disk",accessor:"machine_info.disk_space.available",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"1 Min Load",accessor:"machine_info.load.average_1_min",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"5 Min Load",accessor:"machine_info.load.average_5_min",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"15 Min Load",accessor:"machine_info.load.average_15_min",Cell:function(e){return r.a.createElement("span",{className:"number"},e.value)}},{Header:"Application Timestamp",accessor:"application_info.timestamp",Cell:function(e){return r.a.createElement("span",{className:"string"},new Date(parseInt(e.value)).toISOString())}}];return console.log(this.state.d),r.a.createElement("div",null,this.state&&this.state.d&&r.a.createElement(h.a,{data:this.state.d.data[this.state.d.data.length-1].nodes,columns:e}))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.6d60eaf2.chunk.js.map