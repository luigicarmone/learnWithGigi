function useLanguage() {
    return localStorage.getItem('language') ?? 'it';
}

function setLanguage(language) {
    return localStorage.setItem('language', language);
}

function getLanguages(){
    return [
        {value: 'it', label: 'tr_italian', icon: 'it'},
        {value: 'en', label: 'tr_english', icon: 'gb'},
        {value: 'es', label: 'tr_spanish', icon: 'es'},
        {value: 'fr', label: 'tr_french', icon: 'fr'},
    ]
}

export {useLanguage, setLanguage, getLanguages};