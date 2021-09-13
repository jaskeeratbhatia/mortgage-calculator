(this["webpackJsonpmortgage-calculator"]=this["webpackJsonpmortgage-calculator"]||[]).push([[0],{168:function(e,t,a){},169:function(e,t,a){},306:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(74),c=a.n(s),i=(a(168),a(169),a(2)),o=function(){return Object(i.jsx)("div",{className:"container-fluid header",children:Object(i.jsx)("div",{className:"row no-gutters",children:"Mortgage Calculator"})})},l=a(76),m=a(64),d=a(16),j=function(e){return parseInt(e)<1e3||parseInt(e)>1e7?"Amount should be greater than 999 and less than 9,999,999":""},u=function(e){return parseFloat(e)>0&&parseFloat(e)<100?"":"Interest rate should be greater than 0 and less than 100"},b=function(e){return parseInt(e)>0&&parseInt(e)<=30?"":"Period should be miminum 1 year and maximum 30 years"},h=function(e,t){return parseInt(t)>parseInt(e)?"Term shoud be less than Amortization Period":""},p=function(e){for(var t=!1,a=0,r=Object.entries(e);a<r.length;a++){var n=Object(d.a)(r[a],2);n[0];if(""!==n[1]){t=!0;break}}return t},O="The number of term years.",x="By choosing an accelerated payment frequency, you can reduce your amortization period and save thousands of dollars in interest in the long run.",g="Annual interest rate for this mortgage.",v="The number of years and months over which you will repay this loan. The most common amortization period is 25 years.",y="The amount you expect to borrow from your financial institution.",f=[{key:"weekly",label:"Weekly",value:52},{key:"biweekly",label:"Bi-Weekly (every 2 weeks)",value:26},{key:"monthly",label:"Monthly (12x per year)",value:12},{key:"semimonthly",label:"Semi-monthly (24x per year)",value:24}],N=function(){for(var e=[],t=1;t<=30;t++)e.push({label:"".concat(t),value:t});return e},F="Number of Payments",k="Mortgage Payment",z="Principal Payments",w="Interest Payments",P="Total Cost",A=a(144),C=function(e){var t=e.mortgageAmt,a=e.rate,r=e.amortizationPeriod,n=e.paymentFrequency,s=e.term,c=e.handleInputChange,o=e.handleSubmit,l=e.errors;return Object(i.jsxs)("div",{id:"mortgage-form-container","data-testid":"mortgage-form-container",className:"jumbotron no-gutters col-12 col-sm-6 mt-3 py-5",children:[Object(i.jsxs)("div",{className:"row align-items-center mb-3",children:[Object(i.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(i.jsx)("label",{htmlFor:"basic-url",children:"Mortgage Amount"}),Object(i.jsx)("a",{href:"/#","data-tip":y,className:"tooltip-help",children:"?"}),Object(i.jsx)(A.a,{})]}),Object(i.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(i.jsxs)("div",{className:"input-group",children:[Object(i.jsx)("div",{className:"input-group-prepend",children:Object(i.jsx)("span",{className:"input-group-text",children:"$"})}),Object(i.jsx)("input",{id:"mortgageAmt","data-testid":"mortgageAmt",type:"number",className:"form-control",name:"mortgageAmt","aria-label":"Amount (to the nearest dollar)",placeholder:"Value nearest to dollar amount",value:t,onChange:c}),Object(i.jsx)("div",{className:"input-group-append",children:Object(i.jsx)("span",{className:"input-group-text",children:".00"})})]}),(null===l||void 0===l?void 0:l.mortgageAmt)&&Object(i.jsx)("div",{className:"error",children:null===l||void 0===l?void 0:l.mortgageAmt})]})]}),Object(i.jsxs)("div",{className:"row align-items-center mb-3 align-items-center mb-3",children:[Object(i.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(i.jsx)("label",{htmlFor:"interestRate",children:"Interest Rate"}),Object(i.jsx)("a",{href:"/#","data-tip":g,className:"tooltip-help",children:"?"})]}),Object(i.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(i.jsxs)("div",{className:"input-group",children:[Object(i.jsx)("div",{className:"input-group-prepend",children:Object(i.jsx)("span",{className:"input-group-text",children:"%"})}),Object(i.jsx)("input",{id:"rate","data-testid":"rate",type:"number",className:"form-control",name:"rate","aria-label":"Interest Rate",placeholder:"Annual Interest Rate",value:a,max:100,min:0,onChange:c})]}),(null===l||void 0===l?void 0:l.rate)&&Object(i.jsx)("div",{className:"error",children:null===l||void 0===l?void 0:l.rate})]})]}),Object(i.jsxs)("div",{className:"row align-items-center mb-3",children:[Object(i.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(i.jsx)("label",{htmlFor:"amortizationPeriod",children:"Amortization Period"}),Object(i.jsx)("a",{href:"/#","data-tip":v,className:"tooltip-help",children:"?"})]}),Object(i.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(i.jsx)("input",{id:"amortizationPeriod","data-testid":"amortizationPeriod",type:"number",className:"form-control",name:"amortizationPeriod","aria-label":"Amortization Period",placeholder:"Years",value:r,onChange:c,max:30,min:1}),(null===l||void 0===l?void 0:l.amortizationPeriod)&&Object(i.jsx)("div",{className:"error",children:null===l||void 0===l?void 0:l.amortizationPeriod})]})]}),Object(i.jsxs)("div",{className:"row align-items-center mb-3",children:[Object(i.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(i.jsx)("label",{htmlFor:"paymentFrequency",children:"Payment Frequency"}),Object(i.jsx)("a",{href:"/#","data-tip":x,className:"tooltip-help",children:"?"})]}),Object(i.jsx)("div",{className:"col-12 col-sm-6",children:Object(i.jsx)("select",{name:"paymentFrequency",id:"paymentFrequency","data-testid":"paymentFrequency",value:n,onChange:c,children:f.map((function(e,t){return Object(i.jsx)("option",{id:t,value:e.value,children:e.label},t)}))})})]}),Object(i.jsxs)("div",{className:"row align-items-center mb-3",children:[Object(i.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(i.jsx)("label",{htmlFor:"term",children:"Term"}),Object(i.jsx)("a",{href:"/#","data-tip":O,className:"tooltip-help",children:"?"})]}),Object(i.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(i.jsx)("select",{id:"term","data-testid":"term",name:"term",value:s,onChange:c,children:N().map((function(e,t){return Object(i.jsx)("option",{id:t,value:e.value,children:e.label},t)}))}),(null===l||void 0===l?void 0:l.term)&&Object(i.jsx)("div",{className:"error",children:null===l||void 0===l?void 0:l.term})]})]}),Object(i.jsx)("div",{className:"row justify-content-center",children:Object(i.jsx)("button",{type:"button",className:"btn btn-dark calculate-btn",onClick:o,children:"Calculate"})})]})},S=function(e){return Number.parseFloat(e).toFixed(2)},D=function(e){var t=Math.pow(1+e/200,2)-1;return 100*(Math.pow(1+t,1/12)-1)},I=a(310),T=a(82),q=a(83),M=a(314),K=a(66),B=a(156),R=a(315),J=a(63),L=a(159),U="#fdfdfd",W="#ffd200",Y=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("h2",{className:"diagram-heading",children:"Payment Diagrams"}),Object(i.jsxs)("div",{className:"row justify-content-center justify-content-md-around mb-3 mt-3",children:[Object(i.jsxs)(I.a,{className:"chart-container",width:500,height:250,data:e.graphData,children:[Object(i.jsx)("defs",{children:Object(i.jsxs)("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(i.jsx)("stop",{offset:"5%",stopColor:W,stopOpacity:1}),Object(i.jsx)("stop",{offset:"95%",stopColor:W,stopOpacity:.6})]})}),Object(i.jsx)(T.a,{dataKey:"name",tick:{stroke:U}}),Object(i.jsx)(q.a,{tick:{stroke:U}}),Object(i.jsx)(M.a,{strokeDasharray:"3 3"}),Object(i.jsx)(K.a,{}),Object(i.jsx)(B.a,{type:"monotone",dataKey:"principal",stroke:W,fillOpacity:1,fill:"url(#colorUv)"})]}),Object(i.jsxs)(R.a,{className:"chart-container",width:250,height:250,data:e.barData,children:[Object(i.jsx)(M.a,{strokeDasharray:"3 3"}),Object(i.jsx)(T.a,{dataKey:"totalCost",tick:{stroke:U}}),Object(i.jsx)(q.a,{tick:{stroke:U}}),Object(i.jsx)(K.a,{}),Object(i.jsx)(J.a,{}),Object(i.jsx)(L.a,{dataKey:"principal",fill:W}),Object(i.jsx)(L.a,{dataKey:"interest",fill:U})]})]})]})})},$=function(e){var t,a=e.summaryTableData,r=null===(t=a.filter((function(e){return e.category===k}))[0])||void 0===t?void 0:t.term;return Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("h2",{className:"summary-heading",children:"Summary"}),Object(i.jsxs)("h3",{className:"summary-payment-amount",children:["Your Mortgage payment is just : ",Object(i.jsxs)("span",{children:["$",r]})]}),Object(i.jsx)("div",{className:"row justify-content-center align-items-center mb-3 mt-3",children:Object(i.jsx)("div",{className:"col-12 col-sm-10",children:Object(i.jsxs)("table",{id:"summary-table","data-testid":"summary-table",className:"table table-striped",children:[Object(i.jsx)("thead",{className:"thead-dark",children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"col",children:"Category"}),Object(i.jsx)("th",{scope:"col",children:"Term Figures"}),Object(i.jsx)("th",{scope:"col",children:"Amortization Figures"})]})}),Object(i.jsx)("tbody",{children:a.map((function(e,t){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:e.category}),Object(i.jsx)("td",{id:"term-".concat(t),"data-testid":"term-".concat(t),children:e.term}),Object(i.jsx)("td",{id:"amortization-".concat(t),"data-testid":"amortization-".concat(t),children:e.amortization})]},t)}))})]})})})]})},E=function(){var e=Object(r.useState)(5e4),t=Object(d.a)(e,2),a=t[0],n=t[1],s=Object(r.useState)(5),c=Object(d.a)(s,2),o=c[0],O=c[1],x=Object(r.useState)(25),g=Object(d.a)(x,2),v=g[0],y=g[1],f=Object(r.useState)(12),N=Object(d.a)(f,2),A=N[0],I=N[1],T=Object(r.useState)(5),q=Object(d.a)(T,2),M=q[0],K=q[1],B=Object(r.useState)(5),R=Object(d.a)(B,2),J=R[0],L=R[1],U=Object(r.useState)(null),W=Object(d.a)(U,2),E=W[0],G=W[1],V=Object(r.useState)({}),H=Object(d.a)(V,2),Q=H[0],X=H[1],Z=Object(r.useState)({mortgageAmt:"",rate:"",amortizationPeriod:"",paymentFrequency:"",term:""}),_=Object(d.a)(Z,2),ee=_[0],te=_[1],ae=function(){var e=function(e,t,a,r,n){var s=r*n,c=r*a,i=[],o=[];i.push({category:F,term:s,amortization:c}),o.push({name:"0",principal:e});var l=D(t)/100*(12/r),m=e*l,d=m/(1-Math.pow(1+l,-c));i.push({category:k,term:S(d),amortization:S(d)});for(var j=d-m,u=s-1,b=j,h=m,p=e-j,O=1;O<=u;O++){var x=parseFloat(S(p*l)),g=parseFloat(S(d-x));p=parseFloat(p)-parseFloat(d)+parseFloat(x),h+=x,b+=g,O%r===0&&o.push({name:O.toString(),principal:parseFloat((e-b).toFixed(2))})}i.push({category:z,term:S(b),amortization:S(e)}),i.push({category:w,term:S(h),amortization:S(c*d-e)}),i.push({category:P,term:S(s*d),amortization:S(c*d)});for(var v=s;v<=c;v++){var y=parseFloat(S(p*l)),f=parseFloat(S(d-y));p=parseFloat(p)-parseFloat(d)+parseFloat(y),h+=y,b+=f,v%r===0&&o.push({name:v.toString(),principal:parseFloat((e-b).toFixed(2)>0?(e-b).toFixed(2):0)})}return{summaryTableData:i,graphData:o,barData:[{totalCost:"Total Mortgage Cost",interest:parseFloat((d*c-e).toFixed(2)),principal:parseFloat("float"===typeof e?e.toFixed(2):e)}]}}(a,o,v,A,M),t=e.summaryTableData,r=e.graphData,n=e.barData;L(t),G(r),X(n)};return Object(i.jsxs)("div",{className:"main-container",children:[Object(i.jsx)(C,{mortgageAmt:a,rate:o,amortizationPeriod:v,paymentFrequency:A,term:M,handleInputChange:function(e){switch(te(Object(m.a)(Object(m.a)({},ee),{},Object(l.a)({},e.target.name,""))),e.target.name){case"mortgageAmt":n(e.target.value);break;case"rate":O(e.target.value);break;case"amortizationPeriod":y(e.target.value);break;case"paymentFrequency":I(e.target.value);break;case"term":K(e.target.value);break;default:return}},handleSubmit:function(){var e=function(e,t,a,r){return{mortgageAmt:j(e),rate:u(t),amortizationPeriod:b(a),term:h(a,r)}}(a,o,v,M);p(e)?te(Object(m.a)(Object(m.a)({},ee),e)):ae()},errors:ee}),(null===J||void 0===J?void 0:J.length)>0&&!p(ee)&&Object(i.jsx)($,{summaryTableData:J}),(null===E||void 0===E?void 0:E.length)&&!p(ee)&&Object(i.jsx)(Y,{graphData:E,barData:Q})]})};var G=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(o,{}),Object(i.jsx)(E,{})]})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,317)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),s(e),c(e)}))};c.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(G,{})}),document.getElementById("root")),V()}},[[306,1,2]]]);
//# sourceMappingURL=main.6f697725.chunk.js.map