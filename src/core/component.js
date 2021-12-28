import Utils from "@/utils/Utils";

export default class Component {
  constructor(config) {
    this.classSelector = config.classSelector;
    this.el = null || document.querySelector(`.${this.classSelector}`);
    this.template = config.template;
  }

  render() {
    if (!document.querySelector(`.${this.classSelector}`)) {
      location.hash = '';
      throw new Error(`Component with ${this.classSelector} wasn't found`);
    } else
      this.rewriteTag();
    this._initFunctions();
    // this._initExternal();
    this._initEvents();
  }

  _initEvents() {
    if (!this.events) return;

    let events = this.events();
    Object.keys(events).forEach(key => {
      let listener = key.split(' ');
      let classSelector = listener[0];
      let event = listener[1];

      let element = document.querySelectorAll(classSelector);
      if (element.length == 1)
        document.querySelector(classSelector).addEventListener(event, events[key].bind(this));
      else
        element.forEach(el => el.addEventListener(event, events[key].bind(this)));
    })
  }

  // _initExternal() {
  //   if (!this.external) return;

  //   let externalObj = this.external();
  //   Object.keys(externalObj).forEach(selector => {
  //     const element = externalObj[selector][0];
  //     this._initEvents.bind(element);
  //     this._initFunctions.bind(element);

  //     let template = htmlToElement(element.template);
  //     const text = externalObj[selector][1];
  //     if (text) template = changeElementText(template.cloneNode(true), text);

  //     document.querySelector(selector).appendChild(template);
  //     console.log(element)

  //     if (selector.includes('--'))
  //       template.id = selector.split('--').slice(-1);
  //   })
  // }

  _initFunctions() {
    if (!this.functions) return

    this.functions();
  }

  rewriteTag() {
    document.querySelector(`.${this.classSelector}`).innerHTML = '';
    document.querySelector(`.${this.classSelector}`).appendChild(Utils.htmlToElement(this.template));
  }
}