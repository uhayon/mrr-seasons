import './seasonDisplay.css';
import React from 'react';

const seasonConfig = { 
  summer: {
    text: 'Let\'s hit the beach',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr, It\'s chilly',
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }
  
  return lat < 0 ? 'summer' : 'winter';
}

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left icon massive ${iconName}`} />
      <h1>{text}</h1>
      <i className={`icon-right icon massive ${iconName}`} />
    </div>
  );
}

export default SeasonDisplay;