const moment = require('moment');

module.exports.Formatter = {
    formatMessage: function(fromTime, fromValue, toTime, toValue) {
        const changed = fromValue < toValue ? "grew" : "shrunk";
        const percent = ((toValue - fromValue)/ fromValue * 100.00).toFixed(2); 
        const fromValueClean = (fromValue / 1000000).toFixed(2);
        const toValueClean = (toValue / 1000000).toFixed(2);
        const fromTimeMonth = moment(fromTime).format("MMMM");
        const toTimeMonth = moment(toTime).format("MMMM");
        return `:flag-ca: Canada's money supply ${changed} from $${fromValueClean}T in ${fromTimeMonth} to $${toValueClean}T in ${toTimeMonth}, a change of ${percent}%`;
    }
}   