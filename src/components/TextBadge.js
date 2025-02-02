import React from 'react';
import PropTypes from 'prop-types';

import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

const TextBadge = ({ name, className, children, fill }) => (
  <InputGroup size="sm" className={className ? `w-auto ${className}` : 'w-auto'}>
    <InputGroupAddon className={fill ? 'w-50' : ''} addonType="prepend">
      <InputGroupText className={fill ? `w-100` : ''}>{name}</InputGroupText>
    </InputGroupAddon>
    <InputGroupAddon className={fill ? 'w-50' : ''} addonType="append">
      <InputGroupText className={`${fill ? 'w-100 ' : ''}bg-white`}>{children}</InputGroupText>
    </InputGroupAddon>
  </InputGroup>
);

TextBadge.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  fill: PropTypes.bool,
};

TextBadge.defaultProps = {
  name: 'textBade',
  fill: false,
  className: undefined,
};

export default TextBadge;
