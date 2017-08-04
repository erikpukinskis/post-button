**post-button** simply creates an HTML form with a submit button in it, and hidden fields with whatever data you need POSTed:

```javascript
var postButton = require("post-button")

var html = postButton("Cancel order", "/orders/15", {authorization: "f1f0"})
```

Outputs something like:

```html
<form style='display: inline;' method='POST' action='/orders/15'>
  <input type='submit' value='Cancel order' />
  <input type='hidden' name='authorization' value='f1f0' />
</form>
```