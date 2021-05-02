import React from 'react';
import styles from './AppErrorBoundary.module.scss';


class AppErrorBoundary extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  static getDerivedStateFromError(error) {
    return { 
      error: true
    };
  }

  componentDidCatch(error, errorInfo) {
    // ... log error ...
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <div className={styles.Error}>Opps... something did not work!</div>
      );
    }

    return this.props.children; 
  }
}

export default AppErrorBoundary;