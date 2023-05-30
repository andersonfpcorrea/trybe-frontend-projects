import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, size } = this.props;
    return (
      <div data-testid="planet-card">
        {/* prettier-ignore */}
        <img
          className="planetImg"
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          style={ size }
        />
        <p className="planet-name" data-testid="planet-name">
          {planetName}
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default PlanetCard;
