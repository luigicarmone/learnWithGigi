import { dataClient } from '@infrastructure/axios/client'
import PutContactMePayloadAPI from "@infrastructure/interfaces/ContactMeAPI/PutContactMePayloadAPI";
import PutContactMeResponseAPI from "@infrastructure/interfaces/ContactMeAPI/PutContactMeResponseAPI";

export const putContactMe = async (payload: PutContactMePayloadAPI): Promise<PutContactMeResponseAPI> => {
    try {
        const { data, status } = await dataClient.post(`/api/v1/contact`, payload, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log('test: ', data)
        return {
            code: status,
            data,
        };
    } catch (error) {
        console.error('Errore durante la richiesta PUT:', error.response || error.message || error);
        throw error;
    }
}

