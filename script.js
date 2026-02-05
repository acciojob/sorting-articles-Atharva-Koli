const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

function strip(bandName) {
  return bandName.replace(/^(a |an |the )/i, '').trim();
}

bands.sort((a, b) => {
  return strip(a).localeCompare(strip(b));
});

const ul = document.getElementById('band');

bands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  ul.appendChild(li);
});
