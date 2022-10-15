const itemReportService = require('../services/item-report.service');

const report = async function(req, res, next) {
    try {

        const response = await itemReportService.report(req.query);

        if (response && response.message) {
            throw response;
        }

        res.send(response);
    } catch (error) {
        return next(error);
    }
}

const constructXlsx = async function(req, res, next) {
    try {

        const response = await itemReportService.constructXlsx(req.query);

        if (response && response.message) {
            throw response;
        }

        res.send(response);
    } catch (error) {
        console.log(error)
        return next(error);
    }
}

module.exports = {
    report: report,
    constructXlsx: constructXlsx
}