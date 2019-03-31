let labels = {};

export const init = (newLabels) => {
    labels = newLabels;
};

export const i18n = (key) => labels[key];