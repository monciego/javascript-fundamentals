# Mastering JavaScript: Internal JavaScript

This topic focuses on internal JavaScript, which involves placing JavaScript code directly within the `<script>` tags of an HTML document. Internal JavaScript is a fundamental aspect of web development and is used to add interactivity and functionality to web pages.

## Introduction

Internal JavaScript refers to the practice of writing JavaScript code directly within the HTML file. It allows web developers to create interactive web pages and manipulate the Document Object Model (DOM) without the need for external JavaScript files.

## Syntax

To use internal JavaScript, you enclose your JavaScript code within `<script>` tags within the HTML document. Here's the basic syntax:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Internal JavaScript Example</title>
  </head>
  <body>
    <script>
      // Your JavaScript code goes here
    </script>
  </body>
</html>
```

## Syntax

Here's an example of using internal JavaScript to change the content of an HTML element when a button is clicked:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Internal JavaScript Example</title>
  </head>
  <body>
    <p id="demo">Click the button to change this text.</p>

    <button onclick="changeText()">Click me</button>

    <script>
      function changeText() {
        document.getElementById('demo').innerHTML = 'Text has been changed!';
      }
    </script>
  </body>
</html>
```

In this example, the changeText() function is defined within the <script> tag, and the onclick attribute of the button element calls this function to change the content of the paragraph element.
