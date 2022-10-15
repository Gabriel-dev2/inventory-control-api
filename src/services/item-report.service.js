const itemReportRepository = require('../repositories/item-report.repository');
const Excel = require('exceljs');

const report = async function (filter) {
    return await itemReportRepository.report(filter);
}

const constructXlsx = async function (filter) {
    const workBook = new Excel.Workbook();
    const workSheet = workBook.addWorksheet('item-report');
    let columns = { data: []};
    const data = await this.report(filter);
    for (let key in data[0]) {
        columns.data.push({header: key, key: key, width: 10});
    }
    
    workSheet.columns = columns.data

    for (let row of data) {
        workSheet.addRow(row);
    }
    await workBook.xlsx.writeFile('./item-report.xlsx');

    //TODO: upload do arquivo para um server cloud que permita download

    return {file: './item-report.xlsx'}
}

module.exports = {
    report: report,
    constructXlsx: constructXlsx
}