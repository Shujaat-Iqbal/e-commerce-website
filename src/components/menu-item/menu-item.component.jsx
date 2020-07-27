// React Import
import React from 'react';

// Styles Import
import './menu-item.styles.scss';

// React Router Import
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, ...props }) => {
  return(
    <div className={`${size} menu-item`}
        onClick={() => props.history.push(`${props.linkUrl}`)}
    >
      <div
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
        className='background-image'
      ></div>
      <div className="content">
        <h1 className="title">{ title.toUpperCase() }</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
)};

// Exported by withRouter which is an HOC annd gives us access to routing props from parent components.
export default withRouter(MenuItem);
