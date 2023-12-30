import { useQuery } from '@tanstack/react-query'
import {putContactMe} from "@infrastructure/api/ContactMeAPI";

interface Props {
    name: string;
    email: string;
    company?: string;
    note?: string;
}

export const useContactMe = (props: Props) => {
    return useQuery(['contactMe', props.name], async () => putContactMe({name: props.name, email: props.email, company: props.company, note: props.note }), {
        retry: 0,
        enabled: props.name !== '',
    });
}

