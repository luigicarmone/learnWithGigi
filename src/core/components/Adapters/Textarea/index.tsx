import React from 'react'
import {Textarea, TextAreaProps} from "@nextui-org/react";
import { FieldRenderProps } from 'react-final-form';

type CustomTextFieldProps = Omit<TextAreaProps, 'name' | 'value' | 'onChange' | 'onBlur' | 'onFocus' | 'upperCase' | 'lowerCase'>;

type TextareaWrapperProps = FieldRenderProps<string, HTMLElement> & CustomTextFieldProps;

const TextareaWrapper: React.FC<TextareaWrapperProps> = ({ input, meta, ...rest }) => {
    const { name, value, onChange, onBlur } = input;
    const { error, submitError, touched, modifiedSinceLastSubmit } = meta;

    const isUpperCase = rest.upperCase || false;
    const isLowerCase = rest.lowerCase || false;

    const isError = touched && ((error && !modifiedSinceLastSubmit) || (!modifiedSinceLastSubmit && submitError));

    return (
        <Textarea
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
            onBlur={(e) => {
                onBlur(e);

                if (rest.onBlur) {
                    rest.onBlur(e);
                }
            }}
        />
    )
};

export default TextareaWrapper;