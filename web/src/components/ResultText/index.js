import React from 'react';
import PropTypes from 'prop-types';
import Container from './styles';

const ResultText = ({ value }) => {
	return <Container>{value}</Container>;
};

ResultText.propTypes = {
	value: PropTypes.number.isRequired,
};

export default ResultText;
