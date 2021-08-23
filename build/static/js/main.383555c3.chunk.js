(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,,function(e,s,a){},function(e,s,a){},,function(e,s,a){},function(e,s,a){},function(e,s,a){},function(e,s,a){},function(e,s,a){},function(e,s,a){},function(e,s,a){},function(e,s,a){"use strict";a.r(s);var c=a(1),n=a.n(c),l=a(3),i=a.n(l),j=(a(8),a(9),a(0));var r=function(){return Object(j.jsx)("header",{className:"Header",children:Object(j.jsx)("h1",{children:"Users API"})})};a(11);var t=function(){return Object(j.jsxs)("aside",{className:"Aside",children:[Object(j.jsxs)("div",{className:"List",children:[Object(j.jsx)("h2",{children:Object(j.jsx)("a",{href:"#introduction",children:"Introduction"})}),Object(j.jsx)("ul",{children:Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#rest",children:"REST"})})})]}),Object(j.jsxs)("div",{className:"List",children:[Object(j.jsx)("h2",{children:Object(j.jsx)("a",{href:"#endpoints",children:"Endpoints"})}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#users-all",children:"Get all users"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#users-paginated",children:"Get users paginated"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#users-paginated-validated",children:"Get users paginated with validated pagination"})})]})]})]})};a(12);var d=function(e){var s=e.title,a=e.id,c=e.children;return Object(j.jsxs)("section",{className:"Section",id:a,children:[Object(j.jsx)("div",{className:"Title",children:Object(j.jsx)("h2",{children:s})}),Object(j.jsx)("div",{className:"Body",children:c})]})};a(13);var x=function(e){var s=e.title,a=e.id,c=e.children;return Object(j.jsxs)("article",{className:"Article",id:a,children:[Object(j.jsx)("div",{className:"Title",children:Object(j.jsx)("h2",{children:s})}),Object(j.jsx)("div",{className:"Body",children:c})]})};a(14);var h=function(e){var s=e.method,a=e.endpoint,c=e.children;return Object(j.jsxs)("div",{className:"Snippet",children:[Object(j.jsxs)("div",{className:"Head",children:[Object(j.jsxs)("span",{class:"Method",children:[s,":"]}),Object(j.jsx)("span",{className:"Endpoint",children:a})]}),Object(j.jsx)("div",{className:"Response",children:c})]})};a(15);var b=function(){return Object(j.jsxs)("main",{className:"Main",children:[Object(j.jsx)(d,{title:"Introduction",id:"introduction",children:Object(j.jsxs)(x,{title:"REST",id:"rest",children:[Object(j.jsxs)("p",{children:["Base url:",Object(j.jsx)("span",{className:"Underlined",children:Object(j.jsx)("a",{href:"/api",children:"https://users-list-api.herokuapp.com/api"})})]}),Object(j.jsxs)("p",{children:["The base url contains information about all available API's resources. All requests are",Object(j.jsx)("span",{className:"Highlighted",children:"GET"}),"requests and go over",Object(j.jsx)("span",{className:"Highlighted",children:"https"}),". All responses will return data in",Object(j.jsx)("span",{className:"Highlighted",children:"json"}),"."]}),Object(j.jsxs)(h,{method:"GET",endpoint:"https://users-list-api.herokuapp.com/api",children:[Object(j.jsx)("div",{className:"First",children:Object(j.jsx)("span",{className:"Bracket",children:"{"})}),Object(j.jsxs)("div",{className:"Inner-x",children:[Object(j.jsx)("span",{className:"Key",children:'"all":'}),Object(j.jsx)("span",{className:"Value",children:"'https://users-list-api.herokuapp.com/api/all'"})]}),Object(j.jsxs)("div",{className:"Inner-x",children:[Object(j.jsx)("span",{className:"Key",children:'"users":'}),Object(j.jsx)("span",{className:"Value",children:"'https://users-list-api.herokuapp.com/api/users'"})]}),Object(j.jsx)("div",{className:"First",children:Object(j.jsx)("span",{className:"Bracket",children:"}"})})]}),Object(j.jsx)("p",{children:"There are currently two available resources:"}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:"Underlined",children:Object(j.jsx)("a",{href:"#users-all",children:"All"})}),": used to get all the users in a single request."]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:"Underlined",children:Object(j.jsx)("a",{href:"#users-paginated",children:"Users"})}),": used to get users with a pagination of 10 users per page."]})]})]})}),Object(j.jsxs)(d,{title:"Endpoints",id:"endpoints",children:[Object(j.jsxs)(x,{title:"Get all users",id:"users-all",children:[Object(j.jsxs)("p",{children:["You can access the list of users by using the",Object(j.jsx)("span",{className:"Highlighted",children:"/all"}),"endpoint."]}),Object(j.jsxs)(h,{method:"GET",endpoint:"https://users-list-api.herokuapp.com/api/all",children:[Object(j.jsx)("div",{className:"First",children:Object(j.jsx)("span",{className:"Bracket",children:"{"})}),Object(j.jsxs)("div",{className:"Inner-x",children:[Object(j.jsx)("span",{className:"Key",children:'"count":'}),Object(j.jsx)("span",{className:"Value",children:"5"})]}),Object(j.jsxs)("div",{className:"Inner-x",children:[Object(j.jsx)("span",{className:"Key",children:'"results":'}),Object(j.jsx)("span",{className:"Value",children:"["})]}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"{"})}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"id":'}),Object(j.jsx)("span",{className:"Value",children:"1"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"firstName":'}),Object(j.jsx)("span",{className:"Value",children:"'Juan'"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"lastName":'}),Object(j.jsx)("span",{className:"Value",children:"'Robledo'"})]}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"},"})}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"{"})}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"id":'}),Object(j.jsx)("span",{className:"Value",children:"2"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"firstName":'}),Object(j.jsx)("span",{className:"Value",children:"'Tony'"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"lastName":'}),Object(j.jsx)("span",{className:"Value",children:"'Stark'"})]}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"},"})}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"{"})}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"id":'}),Object(j.jsx)("span",{className:"Value",children:"3"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"firstName":'}),Object(j.jsx)("span",{className:"Value",children:"'Peter'"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"lastName":'}),Object(j.jsx)("span",{className:"Value",children:"'Parker'"})]}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"},"})}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"{"})}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"id":'}),Object(j.jsx)("span",{className:"Value",children:"4"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"firstName":'}),Object(j.jsx)("span",{className:"Value",children:"'Sofia'"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"lastName":'}),Object(j.jsx)("span",{className:"Value",children:"'Roseli'"})]}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"},"})}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"{"})}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"id":'}),Object(j.jsx)("span",{className:"Value",children:"5"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"firstName":'}),Object(j.jsx)("span",{className:"Value",children:"'Andres'"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"lastName":'}),Object(j.jsx)("span",{className:"Value",children:"'Guastavino'"})]}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"}"})}),Object(j.jsx)("div",{className:"Inner-x",children:Object(j.jsx)("span",{className:"Bracket",children:"]"})}),Object(j.jsx)("div",{className:"First",children:Object(j.jsx)("span",{className:"Bracket",children:"}"})})]})]}),Object(j.jsxs)(x,{title:"Get users paginated",id:"users-paginated",children:[Object(j.jsxs)("p",{children:["You can access get the users paginated by using the",Object(j.jsx)("span",{className:"Highlighted",children:"/users"}),"endpoint."]}),Object(j.jsx)("p",{children:"The API will automatically paginate the responses. You will receive up to 10 users per page."}),Object(j.jsxs)(h,{method:"GET",endpoint:"https://users-list-api.herokuapp.com/api/users?page=2",children:[Object(j.jsx)("div",{className:"First",children:Object(j.jsx)("span",{className:"Bracket",children:"{"})}),Object(j.jsxs)("div",{className:"Inner-x",children:[Object(j.jsx)("span",{className:"Key",children:'"count":'}),Object(j.jsx)("span",{className:"Value",children:"43"})]}),Object(j.jsxs)("div",{className:"Inner-x",children:[Object(j.jsx)("span",{className:"Key",children:'"page":'}),Object(j.jsx)("span",{className:"Value",children:"2"})]}),Object(j.jsxs)("div",{className:"Inner-x",children:[Object(j.jsx)("span",{className:"Key",children:'"results":'}),Object(j.jsx)("span",{className:"Value",children:"["})]}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"{"})}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"id":'}),Object(j.jsx)("span",{className:"Value",children:"21"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"firstName":'}),Object(j.jsx)("span",{className:"Value",children:"'Juan'"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"lastName":'}),Object(j.jsx)("span",{className:"Value",children:"'Robledo'"})]}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"},"})}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"{"})}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"id":'}),Object(j.jsx)("span",{className:"Value",children:"22"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"firstName":'}),Object(j.jsx)("span",{className:"Value",children:"'Tony'"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"lastName":'}),Object(j.jsx)("span",{className:"Value",children:"'Stark'"})]}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"},"})}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"{"})}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"id":'}),Object(j.jsx)("span",{className:"Value",children:"23"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"firstName":'}),Object(j.jsx)("span",{className:"Value",children:"'Peter'"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"lastName":'}),Object(j.jsx)("span",{className:"Value",children:"'Parker'"})]}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"},"})}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"{"})}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"id":'}),Object(j.jsx)("span",{className:"Value",children:"24"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"firstName":'}),Object(j.jsx)("span",{className:"Value",children:"'Sofia'"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"lastName":'}),Object(j.jsx)("span",{className:"Value",children:"'Roseli'"})]}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"},"})}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"{"})}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"id":'}),Object(j.jsx)("span",{className:"Value",children:"25"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"firstName":'}),Object(j.jsx)("span",{className:"Value",children:"'Andres'"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"lastName":'}),Object(j.jsx)("span",{className:"Value",children:"'Guastavino'"})]}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"},"})}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"{"})}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"id":'}),Object(j.jsx)("span",{className:"Value",children:"26"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"firstName":'}),Object(j.jsx)("span",{className:"Value",children:"'Simon'"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"lastName":'}),Object(j.jsx)("span",{className:"Value",children:"'Fort'"})]}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"},"})}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"{"})}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"id":'}),Object(j.jsx)("span",{className:"Value",children:"27"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"firstName":'}),Object(j.jsx)("span",{className:"Value",children:"'Clara'"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"lastName":'}),Object(j.jsx)("span",{className:"Value",children:"'Palommo'"})]}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"},"})}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"{"})}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"id":'}),Object(j.jsx)("span",{className:"Value",children:"28"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"firstName":'}),Object(j.jsx)("span",{className:"Value",children:"'Juan'"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"lastName":'}),Object(j.jsx)("span",{className:"Value",children:"'Camilo'"})]}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"},"})}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"{"})}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"id":'}),Object(j.jsx)("span",{className:"Value",children:"29"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"firstName":'}),Object(j.jsx)("span",{className:"Value",children:"'Roxana'"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"lastName":'}),Object(j.jsx)("span",{className:"Value",children:"'Johnson'"})]}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"},"})}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"{"})}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"id":'}),Object(j.jsx)("span",{className:"Value",children:"30"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"firstName":'}),Object(j.jsx)("span",{className:"Value",children:"'Eduardo'"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"lastName":'}),Object(j.jsx)("span",{className:"Value",children:"'Gomez'"})]}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"}"})}),Object(j.jsx)("div",{className:"Inner-x",children:Object(j.jsx)("span",{className:"Bracket",children:"]"})}),Object(j.jsx)("div",{className:"First",children:Object(j.jsx)("span",{className:"Bracket",children:"}"})})]}),Object(j.jsxs)("p",{children:["When no page is specified it will return",Object(j.jsx)("span",{className:"Highlighted",children:"page=0"}),"."]}),Object(j.jsx)("p",{children:"If you query for an invalid page you will get an empty results array."}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["If you query for",Object(j.jsx)("span",{className:"Highlighted",children:"page=-1"}),"results will be an empty array."]}),Object(j.jsxs)("li",{children:["If you query for",Object(j.jsx)("span",{className:"Highlighted",children:"page=10"}),"and the total number of users is 43, results will be an empty array."]})]}),Object(j.jsxs)(h,{method:"GET",endpoint:"https://users-list-api.herokuapp.com/api/users?page=7",children:[Object(j.jsx)("div",{className:"First",children:Object(j.jsx)("span",{className:"Bracket",children:"{"})}),Object(j.jsxs)("div",{className:"Inner-x",children:[Object(j.jsx)("span",{className:"Key",children:'"count":'}),Object(j.jsx)("span",{className:"Value",children:"43"})]}),Object(j.jsxs)("div",{className:"Inner-x",children:[Object(j.jsx)("span",{className:"Key",children:'"page":'}),Object(j.jsx)("span",{className:"Value",children:"7"})]}),Object(j.jsxs)("div",{className:"Inner-x",children:[Object(j.jsx)("span",{className:"Key",children:'"results":'}),Object(j.jsx)("span",{className:"Value",children:"[]"})]}),Object(j.jsx)("div",{className:"First",children:Object(j.jsx)("span",{className:"Bracket",children:"}"})})]})]}),Object(j.jsxs)(x,{title:"Get users paginated with validated pagination",id:"users-paginated-validated",children:[Object(j.jsxs)("p",{children:["Appending",Object(j.jsx)("span",{className:"Highlighted",children:"&validated"}),"to the users paginated endpoint will prevent you from getting no results if a page is invalid."]}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["If you query for",Object(j.jsx)("span",{className:"Highlighted",children:"page=-1&validated"}),"it will return",Object(j.jsx)("span",{className:"Highlighted",children:"page=0"}),"."]}),Object(j.jsxs)("li",{children:["If you query for",Object(j.jsx)("span",{className:"Highlighted",children:"page=10&validated"}),"and the total number of users is 43 it will return",Object(j.jsx)("span",{className:"Highlighted",children:"page=4"}),"."]})]}),Object(j.jsxs)(h,{method:"GET",endpoint:"https://users-list-api.herokuapp.com/api/users?page=7&validated",children:[Object(j.jsx)("div",{className:"First",children:Object(j.jsx)("span",{className:"Bracket",children:"{"})}),Object(j.jsxs)("div",{className:"Inner-x",children:[Object(j.jsx)("span",{className:"Key",children:'"count":'}),Object(j.jsx)("span",{className:"Value",children:"43"})]}),Object(j.jsxs)("div",{className:"Inner-x",children:[Object(j.jsx)("span",{className:"Key",children:'"page":'}),Object(j.jsx)("span",{className:"Value",children:"4"})]}),Object(j.jsxs)("div",{className:"Inner-x",children:[Object(j.jsx)("span",{className:"Key",children:'"results":'}),Object(j.jsx)("span",{className:"Value",children:"["})]}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"{"})}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"id":'}),Object(j.jsx)("span",{className:"Value",children:"41"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"firstName":'}),Object(j.jsx)("span",{className:"Value",children:"'Carlos'"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"lastName":'}),Object(j.jsx)("span",{className:"Value",children:"'Menem'"})]}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"},"})}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"{"})}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"id":'}),Object(j.jsx)("span",{className:"Value",children:"42"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"firstName":'}),Object(j.jsx)("span",{className:"Value",children:"'Antonio'"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"lastName":'}),Object(j.jsx)("span",{className:"Value",children:"'Estrella'"})]}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"},"})}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"{"})}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"id":'}),Object(j.jsx)("span",{className:"Value",children:"43"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"firstName":'}),Object(j.jsx)("span",{className:"Value",children:"'Ricardo'"})]}),Object(j.jsxs)("div",{className:"Inner-xxx",children:[Object(j.jsx)("span",{className:"Key",children:'"lastName":'}),Object(j.jsx)("span",{className:"Value",children:"'Darin'"})]}),Object(j.jsx)("div",{className:"Inner-xx",children:Object(j.jsx)("span",{className:"Bracket",children:"}"})}),Object(j.jsx)("div",{className:"Inner-x",children:Object(j.jsx)("span",{className:"Bracket",children:"]"})}),Object(j.jsx)("div",{className:"First",children:Object(j.jsx)("span",{className:"Bracket",children:"}"})})]}),Object(j.jsxs)("p",{children:["When no page is specified it will return",Object(j.jsx)("span",{className:"Highlighted",children:"page=0"}),"."]})]})]})]})};a(16);var m=function(){return Object(j.jsxs)("div",{className:"Content",children:[Object(j.jsx)(t,{}),Object(j.jsx)(b,{})]})};a(17);var O=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(r,{}),Object(j.jsx)(m,{})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(s){var a=s.getCLS,c=s.getFID,n=s.getFCP,l=s.getLCP,i=s.getTTFB;a(e),c(e),n(e),l(e),i(e)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),N()}],[[18,1,2]]]);
//# sourceMappingURL=main.383555c3.chunk.js.map