import React, { FC } from "react";
import { Timezones } from "./timezone";
/**
* Accepts dateTime in MM/DD/YYYY hh:mm format and timezone. Returns user's local time in outputFormat
* @param {dateTime} string
* @param {timeZone} Timezones
* @param {outputFormat} string
*/
export declare function getDateTime(dateTime: string, timeZone: string, outputFormat: string): string;
type Props = {
    readonly dateTime: string;
    readonly timeZone: Timezones;
    readonly outputFormat?: string;
    readonly style?: React.CSSProperties;
};
export declare const MyDate: FC<Props>;
export {};
