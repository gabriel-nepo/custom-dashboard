import React from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(price) => {
                onChange({
                    target: {
                        name: props.name,
                        value: price.value,
                    },
                });
            }}
            thousandSeparator
            isNumericString
            prefix="R$ "
        />
    );
}

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
export default NumberFormatCustom;