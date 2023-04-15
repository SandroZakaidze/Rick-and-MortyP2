function Character (character) {

    return (
        <div className="col-3">
            <div className="card">
            <img 
                src={character.image}
                alt={character.name}
                className="card-img-top" 
                />
                <div className="card-body">
                    <h3 className="card-title">{character.name} </h3>
                    <p>{`origin: ${character.origin &&
                        character.origin.name}`}</p>
                </div>

            </div>
        </div>
        
    );
}

export default Character;


/*import React from 'react';
import PropTypes from 'prop-types';

function Character(props) {
  const { name, origin, image } = props;

  return (
    <div className='col-sm-6 col-md-4 col-lg-3'>
      <div className='card mb-3'>
        <img src={image} alt={name} className='card-img-top' />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>
            <strong>Origin:</strong> {origin.name}
          </p>
        </div>
      </div>
    </div>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;*/
