"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstStory = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("../components");
//👇 This default export determines where your story goes in the story list
const meta = {
    component: () => (0, jsx_runtime_1.jsx)(components_1.MyDate, { timeZone: 'America/New_York', dateTime: '11/18/1998 03:20' }),
};
exports.default = meta;
exports.FirstStory = {
    args: {
    //👇 The args you need here will depend on your component
    },
};
