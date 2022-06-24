const moment = require('moment');

//formats dates and value into readable message
module.exports.Formatter = {
    formatMessage: function(fromTime, fromValue, toTime, toValue, yearAgoValue, moneySupplyType='M1') {
        const changed = fromValue < toValue ? "grew" : "shrunk";
        const percent = ((toValue - fromValue)/ fromValue * 100.00).toFixed(2); 
        const fromValueClean = (fromValue / 1000000).toFixed(2);
        const toValueClean = (toValue / 1000000).toFixed(2);
        const fromTimeMonth = moment(fromTime).format("MMMM");
        const toTimeMonth = moment(toTime).format("MMMM");
        // const YoYpercent = ((toValue - yearAgoValue)/ yearAgoValue * 100.00).toFixed(2); 
        return ` Canada's ${moneySupplyType} ${changed} from $${fromValueClean}T in ${fromTimeMonth} to $${toValueClean}T in ${toTimeMonth}, a change of ${percent}% from last month.`;
    }
}   