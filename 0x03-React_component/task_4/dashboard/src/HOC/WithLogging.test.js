import React from 'react';

const WithLogging = (WrappedComponent) => {
  class HOC extends React.Component {
    componentDidMount() {
      const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
      console.log(`Component ${componentName} is mounted`);
    }

    componentWillUnmount() {
      const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
      console.log(`Component ${componentName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  HOC.displayName = `WithLogging(${componentName})`;

  return HOC;
};

export default WithLogging;
