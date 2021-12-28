export const Utils = {
  parseRequestURL: () => {
    const url = location.hash.slice(1).toLowerCase() || '/';
    const r = url.split('/');

    const request = {
      id: null,
      resource: null,
      verb: null,
    };

    request.id = r[0];
    request.resource = r[1];
    request.verb = r[2];

    return request;
  },

  sleep: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),

  htmlToElement: (htmlElement) => {
    const template = document.createElement('template');
    template.innerHTML = htmlElement;
    return template.content.firstChild;
  }
};

export default Utils;
