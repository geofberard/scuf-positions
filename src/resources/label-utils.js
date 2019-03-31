let labels = {};

export const init = (newLabels) => {
    labels = {...labels, ...newLabels};
};

export const i18n = (key) => labels[key];