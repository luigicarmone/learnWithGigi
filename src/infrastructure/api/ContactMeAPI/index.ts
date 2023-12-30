import { dataClient } from '@infrastructure/axios/client'
import PutContactMePayloadAPI from "@infrastructure/interfaces/ContactMeAPI/PutContactMePayloadAPI";
import PutContactMeResponseAPI from "@infrastructure/interfaces/ContactMeAPI/PutContactMeResponseAPI";


export const putContactMe = async (payload: PutContactMePayloadAPI): Promise<PutContactMeResponseAPI> => {
    try {
        const { data } = await dataClient.put(`/api/v1/contact`, payload, {
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        });
        return data ? data : [];
    } catch (error) {
        console.error('Errore durante la richiesta PUT:', error);
        throw error;
    }

}
