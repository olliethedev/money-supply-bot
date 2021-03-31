const fetch = require("node-fetch");

//network helper
module.exports.ApiSource =   {
    getMoneySupply: async()=>{
        return fetch("https://ycharts.com/charts/fund_data.json?annotations=&annualizedReturns=false&calcs=&chartType=interactive&chartView=&correlations=&dateSelection=range&displayDateRange=false&displayTicker=false&endDate=&format=real&legendOnChart=false&note=&partner=basic_2000&quoteLegend=false&recessions=false&scaleType=linear&securities=id%3AI%3ACM1MSSM%2Cinclude%3Atrue%2C%2C&securityGroup=&securitylistName=&securitylistSecurityId=&source=false&splitType=single&startDate=&title=&units=false&useCustomColors=false&useEstimates=false&zoom=1&redesign=true&maxPoints=700")
    },
    parseResponse:(respJson)=>{
        const moneyData = respJson.chart_data[0][0].raw_data;
        const moneyDataFrom = moneyData[moneyData.length-2];
        const moneyDataTo = moneyData[moneyData.length-1];
        const moneyDataYearAgo = moneyData[moneyData.length-12];
        return {moneyDataFrom, moneyDataTo, moneyDataYearAgo};
    }
}