import React from "react";
import PropTypes from "prop-types";
import "./_image.scss";

const Image = (props) => (
  <img
    className={`img img--${props.className}`}
    src={props.src}
    alt={props.alt}
  />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Image;
