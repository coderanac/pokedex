import pag1 from './pag1.html';
import pag2 from './pag2.html';

const pages = {
  pag1,
  pag2,
};

function createNavigation() {
  const link = document.querySelector('a');

  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    window.history.pushState(null, 'page', target);
    document.body.innerHTML = pages[target];

    createNavigation();
  });
}

document.body.innerHTML = pag1;

createNavigation();
