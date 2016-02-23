### Download Link

https://github.com/jasmine/jasmine/releases/tag/v2.4.1

### Getting jasmine

> droid@droidserver:~/onGit/Jasmine/Basic$ curl -L -O https://github.com/jasmine/jasmine/releases/download/v2.4.1/jasmine-standalone-2.4.1.zip

      % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                     Dload  Upload   Total   Spent    Left  Speed
    100   602    0   602    0     0   1312      0 --:--:-- --:--:-- --:--:--  1314
    100 46770  100 46770    0     0  49157      0 --:--:-- --:--:-- --:--:--  581k

> droid@droidserver:~/onGit/Jasmine/Basic$ ls -la

    total 56
    drwxrwxr-x 2 droid droid  4096 Feb 22 19:49 .
    drwxrwxr-x 4 droid droid  4096 Feb 22 19:46 ..
    -rw-rw-r-- 1 droid droid 46770 Feb 22 19:49 jasmine-standalone-2.4.1.zip
    
> droid@droidserver:~/onGit/Jasmine/Basic$ unzip jasmine-standalone-2.4.1.zip 

    Archive:  jasmine-standalone-2.4.1.zip
      inflating: MIT.LICENSE             
      inflating: lib/jasmine-2.4.1/jasmine_favicon.png  
      inflating: lib/jasmine-2.4.1/jasmine.js  
      inflating: lib/jasmine-2.4.1/jasmine-html.js  
      inflating: lib/jasmine-2.4.1/jasmine.css  
      inflating: lib/jasmine-2.4.1/console.js  
      inflating: lib/jasmine-2.4.1/boot.js  
      inflating: SpecRunner.html         
      inflating: src/Player.js           
      inflating: src/Song.js             
      inflating: spec/PlayerSpec.js      
      inflating: spec/SpecHelper.js      

### Project contents

<img src="_misc/project%20structure.png"/>

### Setting up

<b> Removing Default Files and References </b>

Delete the files provided by default: Player.js, Song.js, PlayerSpec.js, SpecHelper.js

Remove References in SpecRunner.html

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Jasmine Spec Runner v2.4.1</title>

  <link rel="shortcut icon" type="image/png" href="lib/jasmine-2.4.1/jasmine_favicon.png">
  <link rel="stylesheet" href="lib/jasmine-2.4.1/jasmine.css">

  <script src="lib/jasmine-2.4.1/jasmine.js"></script>
  <script src="lib/jasmine-2.4.1/jasmine-html.js"></script>
  <script src="lib/jasmine-2.4.1/boot.js"></script>

  <!-- include source files here... -->
  <script src="src/Player.js"></script>  <----------------
  <script src="src/Song.js"></script>

  <!-- include spec files here... -->
  <script src="spec/SpecHelper.js"></script>  <-------------
  <script src="spec/PlayerSpec.js"></script>

</head>

<body>
</body>
</html>
```

to contain

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Jasmine Spec Runner v2.4.1</title>

  <link rel="shortcut icon" type="image/png" href="lib/jasmine-2.4.1/jasmine_favicon.png">
  <link rel="stylesheet" href="lib/jasmine-2.4.1/jasmine.css">

  <script src="lib/jasmine-2.4.1/jasmine.js"></script>
  <script src="lib/jasmine-2.4.1/jasmine-html.js"></script>
  <script src="lib/jasmine-2.4.1/boot.js"></script>

  <!-- include source files here... -->

  <!-- include spec files here... -->
</head>

<body>
</body>
</html>
```

<b> View SpecRunner.html </b>

The appearance of the SpecRunner.html file in the browser is shown below.

<img src="_misc/SpecRunner%20in%20browser.png"/>

<b> Create Files </b>

Create src/MathOperations.js and spec/MathOperations.spec.js, and include them in SpecRunner.html

<img src="_misc/Project%20contents%20with%20custom%20source%20and%20spec%20files.png"/>

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Jasmine Spec Runner v2.4.1</title>

  <link rel="shortcut icon" type="image/png" href="lib/jasmine-2.4.1/jasmine_favicon.png">
  <link rel="stylesheet" href="lib/jasmine-2.4.1/jasmine.css">

  <script src="lib/jasmine-2.4.1/jasmine.js"></script>
  <script src="lib/jasmine-2.4.1/jasmine-html.js"></script>
  <script src="lib/jasmine-2.4.1/boot.js"></script>

  <!-- include source files here... -->
  <script src="src/MathOperations.js"></script>  <------------

  <!-- include spec files here... -->
  <script src="spec/MathOperations.spec.js"></script>  <-----------

</head>

<body>
</body>
</html>
```

### Write a Test Case

<b> Adding a test case to MathOperations.spec.js </b>

```javascript
describe('Math Operations', function() {
	it('perform addition on two numbers', function() {
		/*
			Create an expectation using jasmine's expect() function

			Pass in an expression that would be evaluated to a value (add(5, 10), in this case)

			Use a matcher (toBe() in this case) to assert the expectation on the result value of the expression
				passed to the expect() function
		*/
		expect(add(5, 10)).toBe(15);
	})
});
```

### View the Results

<b> View SpecRunner.html </b>

<img src="_misc/Test%20Failure.png"/>

The test failed because there is no function called "add", so define the function in MathOperations.js

### Making the Tests Pass

Define the function "add" that is being tested.

```javascript
function add(num1, num2) {
	return 0;
}
```

<b> View SpecRunner.html </b>

<img src="_misc/Test%20Fail%20-%20Expectation%20does%20not%20match.png"/>

