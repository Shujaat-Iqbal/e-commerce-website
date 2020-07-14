// React Import
import React from 'react';

// Component Import
import MenuItem from '../menu-item/menu-item.component';

// Styles Import
import './directory.styles.scss';

// HOC Import
import { connect } from 'react-redux';

// redux Import
import { createStructuredSelector } from 'reselect';
import { selectSections } from '../../redux/directory/directory.selectors';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {
      sections.map(( { id, ...itemProperties } ) => (
        <MenuItem key={id} {...itemProperties}/>
      ))
    }
  </div>
);

/**
 * maps required properties from state to our props which we can then use inside our component through connect
 * @param {storeObject} state
 */
const mapStateToProps = createStructuredSelector({
  sections: selectSections
})

export default connect(mapStateToProps)(Directory);
