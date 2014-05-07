# fs-object

## Example

```javascript
  var fsObj = require('fs-obj');

  fsObj(process.cwd(), function (err, result) {
    cssFiles = result.public.css  
    cssFiles['theme.css'] // content of cwd/public/css/theme.css
  });

```


