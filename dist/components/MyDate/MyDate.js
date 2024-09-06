"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyDate = void 0;
exports.getDateTime = getDateTime;
const jsx_runtime_1 = require("react/jsx-runtime");
const moment = __importStar(require("moment-timezone"));
/**
* Accepts dateTime in MM/DD/YYYY hh:mm format and timezone. Returns user's local time in outputFormat
* @param {dateTime} string
* @param {timeZone} Timezones
* @param {outputFormat} string
*/
function getDateTime(dateTime, timeZone, outputFormat) {
    const localtz = moment.tz.guess();
    const date = moment.tz(dateTime, "MM/DD/YYYY hh:mm", timeZone);
    return date.tz(localtz).format(outputFormat);
}
const MyDate = ({ dateTime, timeZone, outputFormat = 'MM/DD/YYYY hh:mm', style }) => {
    return ((0, jsx_runtime_1.jsx)("p", { className: "my-date", style: style, children: getDateTime(dateTime, timeZone, outputFormat) }));
};
exports.MyDate = MyDate;
