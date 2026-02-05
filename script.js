const ul = document.querySelector('#band');
const lis = Array.from(ul.querySelectorAll('li'));

function strip(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

lis
  .sort((a, b) =>
    strip(a.textContent).localeCompare(strip(b.textContent))
  )
  .forEach(li => ul.appendChild(li));
