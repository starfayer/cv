'use strict';

import './styles/style.scss';

import { Utils } from './utils/Utils';
import mainInstance from './components/Main';

// const settingsSettings = new Settings();

const routes = {
  '/': mainInstance,
  // '/settings': settingsSettings,
  // '/categories': categoriesInstance,
  // '/rsarchive': rsInstance
};

const router = async () => {
  // const header = null || document.getElementById('header_container');
  const content = null || document.querySelector('.main');
  // const footer = null || document.getElementById('footer_container');

  // header.innerHTML = await headerInstance.render();
  // await headerInstance.after_render();

  // footer.innerHTML = await footerInstance.render();
  // await footerInstance.after_render();

  const request = Utils.parseRequestURL();
  const parsedURL = (request.resource ? `/${request.resource}` : '/') + (request.id ? '/:id' : '') + (request.verb ? `/${request.verb}` : '');

  // const page = routes[parsedURL] ? routes[parsedURL] : error404Instance;
  const page = routes[parsedURL] ? routes[parsedURL] : null;

  await page.render();

  // await page.after_render();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
