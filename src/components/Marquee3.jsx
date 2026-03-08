 import React from 'react';
import './Marquee.css';

const Marquee3 = ({ 
  items = [
   '24/7 EMERGENCY SERVICES',
  'EXPERIENCED DOCTORS ON CALL',
  'PHARMACY OPEN 24/7',
  'AMBULANCE AVAILABLE ANYTIME'
  ],
  speed = '200s',
  iconColor = 'black',
  textColors = [
    '#2c3e50',
     
  ]
}) => {
  return (
    <div className="marquee">
      <div 
        className="marquee-inner" 
        style={{ '--scroll-speed': speed }}
      >
         <div className="marquee-content">
          {items.map((item, index) => (
            <React.Fragment key={`first-${index}`}>
              <div 
                className="marquee-text" 
                style={{ color: textColors[index % textColors.length] }}
              >
                <span>{item}</span>
                {index < items.length - 1 && (
                  <i 
                    aria-hidden="true" 
                    className="flaticon-asterisk-1"
                    style={{ color: iconColor }}
                  ></i>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>

         <div className="marquee-content" aria-hidden="true">
          {items.map((item, index) => (
            <React.Fragment key={`second-${index}`}>
              <div 
                className="marquee-text" 
                style={{ color: textColors[index % textColors.length] }}
              >
                <span>{item}</span>
                {index < items.length - 1 && (
                  <i 
                    aria-hidden="true" 
                    className="flaticon-asterisk-1"
                    style={{ color: iconColor }}
                  ></i>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee3;