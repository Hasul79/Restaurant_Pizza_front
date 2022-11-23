import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        {/* title */}
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      </div>
      {/* dash */}
      <div className="app__menuitem-dash" />
      {/* price */}
      <div className="app__menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>
     {/* tags */}
    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;