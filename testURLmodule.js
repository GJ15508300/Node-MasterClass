const url = require("url");
var adr = "http://localhost:8080/default.htm?year=2017&month=february";
const q = url.parse(adr, true);

console.log("Host : ", q.host);
console.log("PathName : ", q.pathname);
console.log("Search : ", q.search);

var qdata = q.query;
console.log("qdata : ", qdata.month);
