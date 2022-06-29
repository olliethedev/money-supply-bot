const moment = require("moment");

//formats dates and value into readable message
module.exports.Formatter = {
  formatMessage: function (
    fromTime,
    fromValue,
    toTime,
    toValue,
    yearAgoValue,
    moneySupplyType = "M1"
  ) {
    const isUp = fromValue < toValue;
    const changed = isUp
      ? "chart_with_upwards_trend"
      : "chart_with_downwards_trend";
    const percent = (((toValue - fromValue) / fromValue) * 100.0).toFixed(2);
    // const fromValueClean = (fromValue / 1000000).toFixed(2);
    // const toValueClean = (toValue / 1000000).toFixed(2);
    // const fromTimeMonth = moment(fromTime).format("MMMM");
    const toTimeMonth = moment(toTime).format("MMMM");
    const YoYpercent = ((toValue - yearAgoValue)/ yearAgoValue * 100.00).toFixed(2);
    return `:flag-ca: *${moneySupplyType}* in ${toTimeMonth} \n:${changed}: Monthly change: *${percent}%* (YoY: ${YoYpercent}) `;
    // return ` Canada's ${moneySupplyType} ${changed} from $${fromValueClean}T in ${fromTimeMonth} to $${toValueClean}T in ${toTimeMonth}, a change of ${percent}% from last month.`;
  },
};
