import React from 'react';

class TwitterLoader extends React.Component {
  componentDidMount() {
    twttr.ready(() => {
      twttr.widgets.load();
    });
  }

  render() {
    return null;
  }
}

export default TwitterLoader;
