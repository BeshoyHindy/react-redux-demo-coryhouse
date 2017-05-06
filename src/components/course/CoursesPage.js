import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage}/>

        {/*{this.props.courses.map(this.courseRow)}*/}
        <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // createCourse: course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);


/*
 import React, {PropTypes} from 'react';
 import { bindActionCreators } from 'redux';
 import {connect} from 'react-redux';
 import {browserHistory} from 'react-router';
 import * as courseActions from '../../actions/courseActions';
 import CourseList from './CourseList';

 class CoursesPage extends React.Component {
 constructor(props, context) {
 super(props, context);

 this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
 }

 redirectToAddCoursePage() {
 browserHistory.push('/course');
 }

 render() {
 return (
 <div>
 <h1>Courses</h1>
 <input type="submit"
 value="Add Course"
 className="btn btn-primary"
 onClick={this.redirectToAddCoursePage}/>

 <CourseList courses={this.props.courses}/>
 </div>
 );
 }
 }

 CoursesPage.propTypes = {
 actions: PropTypes.object.isRequired,
 courses: PropTypes.array.isRequired
 };

 function mapStateToProps(state, ownProps) {
 return {
 courses: state.courses
 };
 }

 function mapDispatchToProps(dispatch) {
 return {
 actions: bindActionCreators(courseActions, dispatch)
 };
 }

 export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);*/
