export function createMain() {
  const main = document.createElement('main');

  const h1 = document.createElement('h1');
  h1.className = 'h1';
  h1.textContent = 'Bulls and Cows';

  main.append(h1);

  return main;
}
