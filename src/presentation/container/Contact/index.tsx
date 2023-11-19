import React from 'react'
import {Field, Form} from "react-final-form";
import { Grid } from '@mui/material';
import InputWrapper from "@core/components/Adapters/Input";
import {Avatar, Image, Button, Card, CardBody, CardFooter, CardHeader} from '@nextui-org/react';
import validatorRules from "@infrastructure/constants/validatorRules";
import {validateField} from "@infrastructure/utils/form";
import {MailIcon} from "@core/assets/image/icon/mail";
import {NameIcon} from "@core/assets/image/icon/name";
import {NotesIcon} from "@core/assets/image/icon/notes";
import {CompanyIcon} from "@core/assets/image/icon/company";
import {Values} from "@presentation/container/Contact/interface";
import {VideoIcon} from "@core/assets/image/icon/videocamera";
import {PositionIcon} from "@core/assets/image/icon/position";
import {EnvelopeIcon} from "@core/assets/image/icon/envelope";
import icons from "@infrastructure/constants/icon";
import {useTheme} from "next-themes";
import { motion } from 'framer-motion';

export default function Contact() {
    const debug = false;
    const { theme, setTheme } = useTheme();

    const onSubmit = (values: Values) => {
        console.log(values);
    }

    const iconsAvatar = [
        {
            label: 'luigicarmone16@gmail.com',
            component: <EnvelopeIcon className="animate-pulse w-6 h-6 text-white" fill="currentColor" size={20} />,
        },
        {
            label: 'Napoli',
            component: <PositionIcon className="animate-pulse w-6 h-6 text-white" fill="currentColor" size={20} />,
        },
        {
            label: 'Check my availabilities and book your meeting',
            component: <VideoIcon className="animate-pulse w-6 h-6 text-white" fill="currentColor" size={20} />,
        },
    ]

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
            <div className='bg-zinc-50 dark:bg-zinc-900 flex flex-col items-center justify-center h-screen'>
                <Card className='bg-zinc-50 dark:bg-zinc-900 w-3/4 h-auto'>

                    <CardBody className='md:grid md:grid-cols-2'>
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
                                        <CardHeader>
                                            <div className="flex flex-col">
                                                <h1 className="text-md mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Let's partner up!</h1>
                                                <p className="text-small text-default-500">Together for a better solution.</p>
                                            </div>
                                        </CardHeader>
                                        <Grid item xs={12} md={12} xl={12} lg={12}>
                                            <Field name="name" component={InputWrapper} label="Nome" color="primary" isClearable isRequired
                                                   startContent={
                                                       <NameIcon className="text-large text-default-400 pointer-events-none flex-shrink-0" />
                                                   }
                                                   onClear={() => form.mutators.setClear("name")}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={12} xl={12} lg={12}>
                                            <Field name="email" component={InputWrapper} label="Email" color="primary" isClearable isRequired lowerCase
                                                   startContent={
                                                       <MailIcon className="text-large text-default-400 pointer-events-none flex-shrink-0" />
                                                   }
                                                   onClear={() => form.mutators.setClear('email')}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={12} xl={12} lg={12}>
                                            <Field name="company" component={InputWrapper} isClearable color="primary" label="Azienda"
                                                   startContent={
                                                       <CompanyIcon className="text-large text-default-400 pointer-events-none flex-shrink-0" />
                                                   }
                                                   onClear={() => form.mutators.setClear('company')}
                                            />
                                        </Grid>

                                        <Grid item xs={12} md={12} xl={12} lg={12}>
                                            <Field name="note" component={InputWrapper} isClearable label="Altro" color="primary" onClear={() => form.mutators.setClear('note')}
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
                        <div className='hidden md:block h-full ml-10 bg-yellow-400 rounded-2xl dark:bg-violet-900'>
                            <h2 className="ml-2 mt-2 mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Contacts</h2>
                            {iconsAvatar.map((item) => (
                                <div className='flex flex-auto'>
                                    <Avatar
                                        icon={item.component}
                                        classNames={{
                                            base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                                            icon: "text-black/80",

                                        }}
                                        className='ml-2 mb-5'
                                    />
                                    <span className="ml-4 mt-2 ms-1 text-sm font-medium text-gray-900 md:ms-2 dark:text-gray-400">{item.label}</span>
                                </div>
                            ))}
                            <Image
                                width={300}
                                height={200}
                                alt="Message me"
                                src={theme ==='dark' ? icons.MessageYellow : icons.MessagePurple}
                                className='justify-center'
                            />
                        </div>
                    </CardBody>
                    <CardFooter />
                </Card>
            </div>

        </>
    )
}
