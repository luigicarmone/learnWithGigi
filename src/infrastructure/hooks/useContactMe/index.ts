import {useMutation, useQuery} from '@tanstack/react-query'
import {putContactMe} from "@infrastructure/api/ContactMeAPI";

export const useContactMe = () => {
    return useMutation(putContactMe, {})
}