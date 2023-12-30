import React, {useState} from 'react'
import {Field, Form} from "react-final-form";
import { Grid } from '@mui/material';
import InputWrapper from "@core/components/Adapters/Input";
import {Avatar, Image, Button, Card, CardBody, CardFooter, CardHeader} from '@nextui-org/react';
import validatorRules from "@infrastructure/constants/validatorRules";
import useFieldValidator from "@infrastructure/utils/form/index";
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
import { motion } from "framer-motion";
import AnimText from "@core/components/AnimatedText/Text Typing/AnimText";
import TextareaWrapper from "@core/components/Adapters/Textarea";
import {useContactMe} from "@infrastructure/hooks/useContactMe";
import {useQueryClient} from "@tanstack/react-query";
import {useTranslate} from "@tolgee/react";

const containerVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut",
            delayChildren: 0.3,
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 15
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};

const initialContactValues = {
        name: '',
        email: '',
        company: '',
        note: ''
}

export default function Contact() {
    const {t} = useTranslate();
    const validateField = useFieldValidator();
    const debug = false;
    const { theme} = useTheme();
    const [contactData, setContactData] = useState<{name: string; email: string; company: string; note: string;}>(initialContactValues);
    const { data: contactsData, isLoading: contactLoading } = useContactMe({
        name: contactData.name,
        email: contactData.email,
        company: contactData.company,
        note: contactData.note,
    });
    const queryClient = useQueryClient()

    const onSubmit = (values: Values) => {
        setContactData(values);
    }

    const iconsAvatar = [
        {
            label: 'luigicarmone16@gmail.com',
            component: <EnvelopeIcon className="animate-pulse w-6 h-6 text-white" fill="currentColor" size={20}
                                     height={20} width={20} />,
        },
        {
            label: t('tr_naples'),
            component: <PositionIcon className="animate-pulse w-6 h-6 text-white" fill="currentColor" size={20}
                                     height={20} width={20} />,
        },
        {
            label: t('tr_availabilities'),
            component: <VideoIcon className="animate-pulse w-6 h-6 text-white" fill="currentColor" size={20}
                                  height={20} width={20} />,
        },
    ]

    const validate = (values: Values) => {
        const errors = {};

        validateField(errors, values, 'name', t('tr_name'), validatorRules.name);
        validateField(errors, values,'email', 'email', validatorRules.emailRequired);
        // validateField(errors, values,'company', t('tr_company'), validatorRules.name);
        // validateField(errors, values,'note', t('tr_other'), null);

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
                                            <div className="ml-4 flex flex-col">
                                                {/*<h1 className="text-md mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Let's partner up!</h1>*/}
                                                <motion.div>
                                                    <motion.div
                                                        variants={containerVariants}
                                                        animate="visible"
                                                        initial="hidden"
                                                        className='text-md mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white'
                                                    >
                                                        <motion.span
                                                            variants={itemVariants}
                                                            className=""
                                                        >
                                                            <AnimText delay={1} />
                                                        </motion.span>
                                                    </motion.div>
                                                </motion.div>
                                                <p className="text-small text-default-500">{t('tr_slogan')}</p>
                                            </div>
                                        </CardHeader>
                                        <Grid item xs={12} md={12} xl={12} lg={12}>
                                            <Field name="name" component={InputWrapper} label={t('tr_name')} color="primary" isClearable isRequired
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
                                            <Field name="company" component={InputWrapper} isClearable color="primary" label={t('tr_company')}
                                                   startContent={
                                                       <CompanyIcon className="text-large text-default-400 pointer-events-none flex-shrink-0" />
                                                   }
                                                   onClear={() => form.mutators.setClear('company')}
                                            />
                                        </Grid>

                                        <Grid item xs={12} md={12} xl={12} lg={12}>
                                            <Field name="note" component={TextareaWrapper} isClearable label={t('tr_other')} color="primary" onClear={() => form.mutators.setClear('note')}
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
                                                {t('tr_send')}
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
                                                {t('tr_reset')}
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
                            <h2 className="ml-2 mt-2 mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">{t('tr_contacts')}</h2>
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
