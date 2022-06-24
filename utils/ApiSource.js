const fetch = require("node-fetch");

//network helper
module.exports.ApiSource =   {
    getMoneySupply: async(moneySupplyType='M1')=>{
        return fetch(`https://ycharts.com/charts/fund_data.json?annotations=&annualizedReturns=false&calcs=&chartType=interactive&chartView=&correlations=&dateSelection=range&displayDateRange=false&displayTicker=false&endDate=&format=real&legendOnChart=false&note=&partner=basic_2000&quoteLegend=false&recessions=false&scaleType=linear&securities=id%3AI%3AC${moneySupplyType}${moneySupplyType==="M3"?"MS":"MSSM"}%2Cinclude%3Atrue%2C%2C&securityGroup=&securitylistName=&securitylistSecurityId=&source=false&splitType=single&startDate=&title=&units=false&useCustomColors=false&useEstimates=false&zoom=3&redesign=true&maxPoints=700`, {
            "headers": {
              "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
              "accept-language": "en-US,en;q=0.9",
              "cache-control": "max-age=0",
              "sec-fetch-dest": "document",
              "sec-fetch-mode": "navigate",
              "sec-fetch-site": "none",
              "sec-fetch-user": "?1",
              "sec-gpc": "1",
              "upgrade-insecure-requests": "1",
              "User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36"
            },
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include",
          });
    },
    parseResponse:(respJson)=>{
        const moneyData = respJson.chart_data[0][0].raw_data;
        const moneyDataFrom = moneyData[moneyData.length-2];
        const moneyDataTo = moneyData[moneyData.length-1];
        const moneyDataYearAgo = moneyData[moneyData.length-12];
        return {moneyDataFrom, moneyDataTo, moneyDataYearAgo};
    }
}