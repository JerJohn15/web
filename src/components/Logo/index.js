import React from 'react';
import SVGInline from 'react-svg-inline';
import svg from '../../static/logo.svg';

const Logo = (props) => {
    return (
        <SVGInline
            svg={svg}
            desc={props.desc}
            width={props.width}
            height={props.height}
            cleanup={['width', 'height']}
        />
    );
};

Logo.propTypes = {
    desc:   React.PropTypes.string,
    width:  React.PropTypes.string,
    height: React.PropTypes.string,
};

Logo.defaultProps = {
    desc: 'devnews logo',
    width: 'auto',
    height: '20px',
};

export default Logo;
