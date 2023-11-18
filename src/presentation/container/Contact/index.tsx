import React, {useState} from 'react'
import GenericModal from "@core/components/Card/index";
import {Field, Form} from "react-final-form";
import { Grid } from '@mui/material';
import InputWrapper from "@core/components/Adapters/Input";
import {Button, Input, Textarea} from '@nextui-org/react';
import validatorRules from "@infrastructure/constants/validatorRules";
import {validateField} from "@infrastructure/utils/form";
import {MailIcon} from "@core/assets/image/icon/mail";
import {NameIcon} from "@core/assets/image/icon/name";
import {NotesIcon} from "@core/assets/image/icon/notes";
import {CompanyIcon} from "@core/assets/image/icon/company";
import TextareaWrapper from "@core/components/Adapters/Textarea";
import {Values} from "@presentation/container/Contact/interface";

export default function Contact() {
    const debug = false;
    const onSubmit = (values: Values) => {
        console.log(values);
    }

    const validate = (values: Values) => {
        const errors = {};

        validateField(errors, values, 'name', 'nome', validatorRules.name);
        validateField(errors, values,'email', 'email', validatorRules.emailRequired);
        // validateField(errors, values,'company', 'azienda', validatorRules.name);
        // validateField(errors, values,'note', 'altro', null);

        return errors;
    };

    return (
        <>
            <GenericModal cardHeader={'Contact me'} styleBody='w-96'>
                <Form
                    onSubmit={onSubmit}
                    // initialValues={initialValues}
                    validate={validate}
                    mutators={{
                        setClear: (args, state, utils) => {
                            const name = args[0];
                            utils.changeValue(state, `${name}`, () => '')
                        },
                    }}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit} noValidate>
                            <Grid container alignItems="flex-start" spacing={3}>
                                <Grid item xs={12} md={12} xl={12} lg={12}>
                                    <Field name="name" component={InputWrapper} label="Nome" color="#fff" isClearable isRequired
                                           startContent={
                                               <NameIcon className="text-large text-default-400 pointer-events-none flex-shrink-0" />
                                           }
                                           onClear={() => form.mutators.setClear("name")}
                                    />
                                </Grid>
                                <Grid item xs={12} md={12} xl={12} lg={12}>
                                    <Field name="email" component={InputWrapper} label="Email" color="#fff" isClearable isRequired lowerCase
                                           startContent={
                                               <MailIcon className="text-large text-default-400 pointer-events-none flex-shrink-0" />
                                           }
                                           onClear={() => form.mutators.setClear('email')}
                                    />
                                </Grid>
                                <Grid item xs={12} md={12} xl={12} lg={12}>
                                    <Field name="company" component={InputWrapper} isClearable label="Azienda" color="#fff"
                                           startContent={
                                               <CompanyIcon className="text-large text-default-400 pointer-events-none flex-shrink-0" />
                                           }
                                           onClear={() => form.mutators.setClear('company')}
                                    />
                                </Grid>

                                <Grid item xs={12} md={12} xl={12} lg={12}>
                                    <Field name="note" component={InputWrapper} isClearable label="Altro" color="#fff" onClear={() => form.mutators.setClear('note')}
                                           startContent={
                                               <NotesIcon className="text-large text-default-400 pointer-events-none flex-shrink-0" />
                                           }
                                    />
                                </Grid>

                                <Grid item>
                                    <Button
                                        variant="light"
                                        color="primary"
                                        type="submit"
                                        isDisabled={submitting}
                                    >
                                        Invia
                                    </Button>
                                </Grid>
                                <Grid item >
                                    <Button
                                        type="submit"
                                        variant="light"
                                        color="secondary"
                                        onClick={() => form.reset()}
                                        isDisabled={submitting || pristine}
                                    >
                                        Resetta
                                    </Button>
                                </Grid>
                            </Grid>
                            {debug ?
                            <pre>{JSON.stringify(values, null, 2)}</pre> : null
                            }
                        </form>
                    )}
                />
            </GenericModal>
        </>
    )
}
