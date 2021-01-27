import { relativeTimeThreshold } from "moment"

// to not call the mock use the line below instead of import moment from 'moment'
const moment = jest.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp)
}