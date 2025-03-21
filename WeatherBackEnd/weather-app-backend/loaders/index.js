const expressLoader = require("./express");

const init = () => {
    const expressApp = expressLoader();
    return {expressApp};
}

const {expressApp} = init();

exports.express = expressApp;
