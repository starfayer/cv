'use strict';

import './styles/style.scss';

import { Utils } from './utils/Utils';
import mainInstance from './components/Main';
import courseInstance from './components/Course';

const routes = {
  '/': mainInstance,
  '/rs': courseInstance
};

const router = async () => {
  const request = Utils.parseRequestURL();
  const parsedURL = (request.id ? `/${request.id}` : '/') + (request.resource ? '/:resource' : '') + (request.verb ? `/${request.verb}` : '');

  const page = routes[parsedURL] ? routes[parsedURL] : null;
  await page.render();
};

function observation() {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.toggle('show');
        observer.unobserve(entry.target);
      }
    })
  }, { threshold: 1 })

  const elements = document.querySelectorAll('.container > .header, .main');
  let ms = 400;
  elements.forEach(el => {
    setTimeout(() => observer.observe(el), ms)
    ms += 300;
  });
}
window.addEventListener('hashchange', router);
window.addEventListener('load', router);

window.addEventListener('load', observation)