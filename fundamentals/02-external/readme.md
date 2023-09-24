# Mastering JavaScript: External JavaScript

This topic explores the use of external JavaScript files in web development. External JavaScript allows you to separate your JavaScript code from your HTML documents, making your code more organized, maintainable, and reusable.

## Introduction

External JavaScript involves placing your JavaScript code in separate `.js` files and then linking those files to your HTML documents. This separation of concerns enhances code organization and reusability.

## Linking External JavaScript

To link an external JavaScript file to an HTML document, use the `<script>` tag with the `src` (source) attribute. Here's the basic syntax:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>External JavaScript Example</title>
    <script src="external.js"></script>
  </head>
  <body>
    <!-- Your HTML content here -->
  </body>
</html>
```

## Example

Here's an example of using an external JavaScript file to display an alert when a button is clicked:

#### external.js

```javascript
function showAlert() {
  alert('Hello, external JavaScript!');
}
```

#### index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <title>External JavaScript Example</title>
    <script src="external.js"></script>
  </head>
  <body>
    <button onclick="showAlert()">Click me</button>
  </body>
</html>
```

In this example, the external.js file contains the showAlert() function, which is called when the button is clicked in the HTML document.
