var library = require("module-library")(require)

module.exports = library.export(
  "post-button",
  ["web-element"],
  function(element) {
    function postButton(label, action, data) {
      var form = element(
        "form",
        element.style({"display": "inline"}),
        {method: "POST", action: action},[
        element("input", {type: "submit", value: label}),
      ])

      if (data) {
        for(var key in data) {
          var field = element("input", {type: "hidden", name: key, value: data[key].toString()})
          form.addChild(field)
        }
      }

      return form
    }

    return postButton
  }
)
