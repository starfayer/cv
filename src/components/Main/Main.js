import Component from '@/core/component';
import MainElement from './Main.html';
import './style.scss'
class Main extends Component {
  constructor(config) {
    super(config)
  }

  events() {
    return {
      '.link--rs click': this.changeLink
    }
  }

  changeLink(event) {
    const mainList = document.querySelectorAll('.info__column');
    const href = event.target.href.split('#').splice(-1)[0];
    switch (href) {
      case 'rs': {
        mainList.forEach((el, index) => {
          if (index != 0) {
            el.classList.toggle('hide');
            setTimeout(() => el.style.display = 'none', 800);
          }
        })
        break;
      }
      case '': {
        mainList.forEach((el, index) => {
          if (index != 0) {
            el.classList.toggle('hide');
            setTimeout(() => el.style.display = 'block', 800);
          }
        })
        break;
      }
    }
    document.querySelector(`.info__extra`).classList.toggle('show')

    const link = event.target;
    link.style.opacity = 0;
    setTimeout(() => {
      link.textContent = link.textContent == 'turn back' ? 'click to see a story' : 'turn back';
      link.style.opacity = 1;
      link.href = '#';
    }, 300)
  }
}

const mainInstance = new Main({
  classSelector: 'main',
  template: MainElement
});
export default mainInstance;