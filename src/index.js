'use strict';

import './styles/style.scss';

import { Utils } from './utils/Utils';
import mainInstance from './components/Main';

// const settingsSettings = new Settings();

const routes = {
  '/': mainInstance,
  // '/rs': rsInstance
};

const router = async () => {
  const container = null || document.querySelector('.container')
  const header = null || document.querySelector('.header');
  const content = null || document.querySelector('.main');

  const request = Utils.parseRequestURL();
  const parsedURL = (request.resource ? `/${request.resource}` : '/') + (request.id ? '/:id' : '') + (request.verb ? `/${request.verb}` : '');

  // const page = routes[parsedURL] ? routes[parsedURL] : error404Instance;
  const page = routes[parsedURL] ? routes[parsedURL] : null;

  await page.render();
  
  // await page.after_render();
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