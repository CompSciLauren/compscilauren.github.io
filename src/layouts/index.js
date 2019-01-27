import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import './style.css';
import './index.css';

class TemplateWrapper extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Helmet
          title="CompSciLauren"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          link={[
            {
              rel: 'stylesheet',
              href:
                'http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css',
            },
            {
              rel: 'stylesheet',
              href:
                'http://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css',
            },
          ]}
        />

        {children()}
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
