var postButton = require(".")

var html = postButton("Cancel order", "/orders/15", {authorization: "f1f0"}).html()

console.log(html)