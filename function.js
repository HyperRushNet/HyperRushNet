Sure! Here's a simple random JavaScript function that generates a random integer within a specified range:

```js
function getRandomInt(min, max) {
  // Ensure min and max are integers
  min = Math.ceil(min);
  max = Math.floor(max);
  // Generate random number between min (inclusive) and max (exclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

You can call it like this:

```js
console.log(getRandomInt(1, 10));  // might output any number from 1 to 10
```

Want something a little different or more specific?