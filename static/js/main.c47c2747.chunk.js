(this["webpackJsonpauto-complete"]=this["webpackJsonpauto-complete"]||[]).push([[0],{10:function(a,e,n){a.exports=n(18)},15:function(a,e,n){},16:function(a,e,n){},18:function(a,e,n){"use strict";n.r(e);var t=n(0),i=n.n(t),r=n(4),o=n.n(r),s=(n(15),n(16),n(1)),u=n(5),l=n(6),c=n(8),d=n(9),h=n(2),m=n.n(h),f=n(7),g=["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];function p(){return(p=Object(f.a)(m.a.mark((function a(e){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",g.filter((function(a){return a.toLowerCase().indexOf(e.toLowerCase())>-1})));case 1:case"end":return a.stop()}}),a)})))).apply(this,arguments)}var v=function(a){Object(d.a)(n,a);var e=Object(c.a)(n);function n(a){var t;return Object(u.a)(this,n),(t=e.call(this,a)).state={input:"",showHints:!1,isLoading:!1,hints:[],active:-1},t.onChange=function(a){var e=a.target.value;0!==e.length?(t.setState((function(a){return Object(s.a)({},a,{input:e,active:-1,showHints:!0,hints:[],isLoading:!0})})),function(a){return p.apply(this,arguments)}(e).then((function(a){t.setState((function(e){return Object(s.a)({},e,{hints:a,active:a.length>0?0:-1,showHints:!0,isLoading:!1})}))}))):t.setState((function(a){return Object(s.a)({},a,{input:e,active:-1,showHints:!1,isLoading:!1,hints:[]})}))},t.onHintClick=function(a){t.setState({isLoading:!1,showHints:!1,input:a.target.innerText})},t.scrollTo=function(a){a&&a.current&&a.current.scrollIntoView({behavior:"auto",block:"nearest"})},t.onKeyDown=function(a){var e=t.state,n=e.active,i=e.hints,r=e.showHints,o=e.input;if(8!==a.keyCode)if(13!==a.keyCode){if(38===a.keyCode){if(!0===r){if(n<1)return;return void t.setState((function(a){return Object(s.a)({},a,{active:n-1,input:i[n-1]})}),(function(){t.scrollTo(t.activeRef)}))}if(o.length)return void t.setState((function(a){return Object(s.a)({},a,{showHints:!0})}),(function(){t.scrollTo(t.activeRef)}))}if(40===a.keyCode){if(!0===r){if(n+1>=i.length)return;return void t.setState((function(a){return Object(s.a)({},a,{active:n+1,input:i[n+1],showHints:!0})}),(function(){t.scrollTo(t.activeRef)}))}o.length&&t.setState((function(a){return Object(s.a)({},a,{showHints:!0})}),(function(){t.scrollTo(t.activeRef)}))}}else t.setState((function(a){return Object(s.a)({},a,{showHints:!1,input:void 0!==i[n]?i[n]:o})}));else!1===r&&t.setState((function(a){return Object(s.a)({},a,{input:"",active:-1,hints:[]})}))},t.activeRef=i.a.createRef(),t}return Object(l.a)(n,[{key:"render",value:function(){var a=this,e=this.onChange,n=this.onHintClick,t=this.onKeyDown,r=this.state,o=r.active,s=r.hints,u=r.showHints,l=r.input;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,"Autocomplete"),i.a.createElement("p",null,"Start typing:"),i.a.createElement("div",{className:"autocomplete"},i.a.createElement("input",{type:"text",name:"myCountry",onChange:e,onKeyDown:t,value:l,placeholder:"Country",autoComplete:"off"}),u&&s.length>0&&i.a.createElement("ul",{className:"hints"},s.map((function(e,t){var r;return t===o?(r="hint-active",i.a.createElement("li",{ref:a.activeRef,className:r,key:e,onClick:n},e)):i.a.createElement("li",{className:r,key:e,onClick:n},e)}))),u&&0===s.length&&i.a.createElement("div",{className:"no-hints"},i.a.createElement("em",null,"Sorry, there is no overlap"))))}}]),n}(i.a.Component);var b=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.c47c2747.chunk.js.map