import Component from '@/core/component';
import MainElement from './Main.html';

class Main extends Component {
  constructor(config) {
    super(config)
  }

}

const mainInstance = new Main({
  classSelector: 'main',
  template: MainElement
});
export default mainInstance;
// export class Main {
//   constructor() {}

//   async render () {
//     return MainElement;
//   }

//   async after_render () {};
// }
