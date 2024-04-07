/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'src/particlesjs-config.json', function() {
  // console.log('callback - particles.js config loaded');
});

const products = [
  { link: "https://shope.ee/9A0iexB7pr", name: "Sandal Hiu" },
  { link: "https://shope.ee/A9tFsMGSoS", name: "Hoodie polos" },
  { link: "https://shope.ee/40IcXXZsij", name: "NETPAC X20 Fancooler Radiator" }
];

const container = document.querySelector('.container-link2');

products.forEach((product, index) => {
  const link = document.createElement('a');
  link.setAttribute('style', 'text-decoration: none');
  link.setAttribute('href', product.link);

  const div = document.createElement('div');
  div.setAttribute('class', 'link');

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttribute('width', '1em');
  svg.setAttribute('height', '1em');
  svg.setAttribute('viewBox', '0 0 24 24');

  const style = document.createElement('style');
  style.textContent = 'svg { fill: #ffffff; }';

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('fill', 'white');
  path.setAttribute('d', 'M19 6h-2c0-2.8-2.2-5-5-5S7 3.2 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-7-3c1.7 0 3 1.3 3 3H9c0-1.7 1.3-3 3-3m7 17H5V8h14zm-7-8c-1.7 0-3-1.3-3-3H7c0 2.8 2.2 5 5 5s5-2.2 5-5h-2c0 1.7-1.3 3-3 3');

  const p = document.createElement('p');
  p.setAttribute('class', 'text-link product-name');
  p.innerHTML = `${index + 1}. <span>${product.name}</span>`;

  svg.appendChild(style);
  svg.appendChild(path);
  div.appendChild(svg);
  div.appendChild(p);
  link.appendChild(div);
  container.appendChild(link);
});
