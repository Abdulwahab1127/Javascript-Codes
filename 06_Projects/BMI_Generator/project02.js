const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please Right Correct Height Value';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please Right Correct Weight Value';
  } else {
    results.innerHTML = (weight / ((height * height) / 10000)).toFixed(2);
  }
});
