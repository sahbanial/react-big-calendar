import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ label }) => {
	return <strong>{label}</strong>;
};

Header.propTypes = {
	label: PropTypes.node
};

export default Header;
