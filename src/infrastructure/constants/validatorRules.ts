const validatorRules = {
  required: {
    pattern: /^\s*.+/,
    message: {
      it: 'Campo obbligatorio.',
    },
  },
  emailRequired: {
    pattern:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: {
      it: 'Email non valida.',
    },
  },
  numericRequired: {
    pattern: /^[0-9]*$/,
    message: {
      it: 'Si accettano solo valori numerici.',
    },
  },
  textRequired: {
    pattern: /^[a-zA-Z\s]*$/,
    message: {
      it: 'Valore testuale richiesto.',
    },
  },

  name: {
    pattern: /^[a-zA-Z\s&.]*$/,
    message: {
      it: 'Valore testuale richiesto. Può contenere lettere, spazi, e i caratteri "&" e ".".',
    },
  },

  vatNumber: {
    pattern: /^([A-Z]{2}[0-9]{11})|([0-9]{11})$/,
    message: {
      it: 'La Partita IVA deve iniziare con due lettere e contenere 11 cifre oppure contenere direttamente 11 cifre.',
    },
  },

  region: {
    pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ\s\-']+$/,
    message: {
      it: 'La regione deve contenere solo lettere, spazi, trattini e apostrofi.',
    },
  },

  address: {
    pattern: /^[A-Za-z0-9À-ÖØ-öø-ÿ\s\-']+$/,
    message: {
      it: "L'indirizzo deve contenere solo lettere, numeri, spazi, trattini e apostrofi.",
    },
  },

  fiscalCode: {
    pattern: /^[A-Z]{6}\d{2}[ABCDEHLMPRST]\d{2}[A-Z]\d{3}[A-Z]$/,
    message: {
      it: 'Il Codice Fiscale non è valido. Deve seguire il formato standard o essere composto da 11 cifre e lettere.',
    },
  },

  phone: {
    pattern: /^(?:\+\d{1,15}|\d{1,10})$/,
    message: {
      it: 'Il numero di telefono deve contenere solo cifre e avere al massimo 15 caratteri, inclusi il "+" iniziale se presente.',
    },
  },
};

export default validatorRules;