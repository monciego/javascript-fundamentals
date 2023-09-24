# Mastering JavaScript: Inline JavaScript

This topic covers the concept of using inline JavaScript within HTML documents. Inline JavaScript refers to writing JavaScript code directly within HTML files. It's a fundamental aspect of web development and a common way to add interactivity to your web pages.

## Introduction

Inline JavaScript involves embedding JavaScript code directly within HTML documents. This allows you to perform various tasks, such as handling user interactions, manipulating the DOM, and making AJAX requests, all within your web page.

## Syntax

Inline JavaScript is enclosed within `<script>` tags within your HTML document. The basic syntax is as follows:

```html
<script>
  // Your JavaScript code goes here
</script>
```

## Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Inline JavaScript Example</title>
  </head>
  <body>
    <button onclick="showAlert()">Click me</button>

    <script>
      function showAlert() {
        alert('Hello, inline JavaScript!');
      }
    </script>
  </body>
</html>
```

In this example, the showAlert() function is defined within the <script> tag, and the onclick attribute of the button element calls this function when clicked.
