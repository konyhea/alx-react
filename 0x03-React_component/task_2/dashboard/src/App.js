import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import Notifications from './Notifications/Notifications';
import CourseList from './CourseList/CourseList';
import { getLatestNotification } from './utils';
import BodySectionWithMarginBottom from './BodySection/BodySectionWithMarginBottom';
import BodySection from './BodySection/BodySection';

class App extends React.Component {
  // Define default props
  static defaultProps = {
    logOut: () => {},
  };

  // Define prop types
  static propTypes = {
    logOut: PropTypes.func,
  };

  // Define class properties
  listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
  ];

  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  state = {
    isLoggedIn: true,
  };

  // Lifecycle method: Add event listener when the component mounts
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  // Lifecycle method: Remove event listener when the component unmounts
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  // Handle keyboard event
  handleKeyDown = (event) => {
    const { logOut } = this.props;
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      logOut();
    }
  };


//   Wrap the CourseList component with the newly created BodySectionWithMarginBottom component. The title should be Course list
// Wrap the Login component with the newly created BodySectionWithMarginBottom component. The title should be Log in to continue
// Using the BodySection component, add a new block with the title News from the School. The component should contain a paragraph with some random text
render() {
  const { isLoggedIn } = this.state;

  return (
    <>
      <Notifications listNotifications={this.listNotifications} displayDrawer={false} />
      <div className="App">
        <Header />
      </div>
      <div className="App-body">
        {isLoggedIn ? (
          <BodySectionWithMarginBottom title={"Course list"}>
            <CourseList listCourses={this.listCourses} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title={"Log in to continue"}>
            <Login />
          </BodySectionWithMarginBottom>
        )}
        
        {/* Add BodySection for "News from the School" */}
        <BodySection title="News from the School">
          <p>Here is some random text for the news section. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </BodySection>
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </>
  );
}

}

export default App;
