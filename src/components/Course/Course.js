import Component from '@/core/component';
import CourseElement from './Course.html';
import './style.scss'
class Course extends Component {
  constructor(config) {
    super(config)
  }
}

const courseInstance = new Course({
  classSelector: 'info__extra',
  template: CourseElement
});
export default courseInstance;