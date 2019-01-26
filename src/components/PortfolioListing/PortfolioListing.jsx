import React from 'react';
import Link from 'gatsby-link';

const PortfolioListing = props => {
  return (
    <div className={props.layout}>
      <div className="project-listing-container">
        <img className={props.image_shape} src={props.image} alt={props.alt} />
        <div>
          <div className="translucent" />
          <div className="project-listing-description custom-text">
            {props.description}
            <br />
            <br />
            <Link to={props.link}>
              <button className="btn-block btn-info">Learn More ></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioListing;
