import React from 'react'
import {Input, InputProps} from "@nextui-org/react";
import { FieldRenderProps } from 'react-final-form';

type CustomTextFieldProps = Omit<InputProps, 'name' | 'value' | 'onChange' | 'upperCase' | 'lowerCase'>;

type InputWrapperProps = FieldRenderProps<string, HTMLElement> & CustomTextFieldProps;

const InputWrapper: React.FC<InputWrapperProps> = ({ input, meta, ...rest }) => {
    const { name, value, onChange } = input;
    const { error, submitError, touched, modifiedSinceLastSubmit } = meta;

    const isUpperCase = rest.upperCase || false;
    const isLowerCase = rest.lowerCase || false;

    const isError = touched && ((error && !modifiedSinceLastSubmit) || (!modifiedSinceLastSubmit && submitError));

    return (
        <Input
            {...rest}
            name={name}
            value={value}
            errorMessage={isError ? error || submitError : undefined}
            isInvalid={isError}

            onChange={(e) => {
                if (isUpperCase) {
                    e.target.value = e.target.value.toUpperCase()
                }

                if (isLowerCase) {
                    e.target.value = e.target.value.toLowerCase()
                }

                onChange(e);

                if (rest.onChange) {
                    rest.onChange(e);
                }
            }}
        />
    )
};

export default InputWrapper;