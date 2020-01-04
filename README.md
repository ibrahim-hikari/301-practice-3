# 301-practice-3

In your README.md, write the answers to the following questions. Please state the question in bold text, and the answer beneath it in either normal text or formatted for code.

1. **How long is the array returned by .map()? .filter()?**

* For the map method the result will be the same length as the original one, but for the filter the length of the result will be different according to the function and the conditions that you spicified.

2. **What does the following code do:**

``` 
$('button#primary').on('click', function() {
  placeOrder(shoppingCartItems); 
});
```

* When you click on a button with an id="primary", the code will call a function named placeOrder and give it an argument (shoppingCartItem)

3. **Write a function that takes an array of names as an argument and outputs each name in uppercase to the console.**

``` 
function upperCase(arr){
  let results = arr.map(element =>{
    return element.toUpperCase()
  })
  console.log(results)
}
```

