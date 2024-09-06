import React, { FC } from "react"
import * as moment from 'moment-timezone'
import { Timezones } from "./timezone"

/**
* Accepts dateTime in MM/DD/YYYY hh:mm format and timezone. Returns user's local time in outputFormat
* @param {dateTime} string
* @param {timeZone} Timezones
* @param {outputFormat} string
*/
export function getDateTime (dateTime: string, timeZone: string, outputFormat: string) {
    const localtz = moment.tz.guess()
    const date = moment.tz(dateTime, "MM/DD/YYYY hh:mm", timeZone)
    return date.tz(localtz).format(outputFormat)
}

type Props = {
    readonly dateTime: string;
    readonly timeZone: Timezones;
    readonly outputFormat?: string;
    readonly style?: React.CSSProperties;
}

export const MyDate: FC<Props> = ({dateTime, timeZone, outputFormat= 'MM/DD/YYYY hh:mm', style}) => {
    return (
        <p className="my-date" style={style}>{getDateTime(dateTime,timeZone, outputFormat )}</p>
    )
}