const ExcelJS = require("exceljs");

async function exceltest() {

    const wb = new ExcelJS.Workbook();
    await wb.xlsx.readFile("C:/Users/Advik/Downloads/Testing purpose.xlsx");
    const ws = wb.getWorksheet('Sheet1');
    ws.eachRow((row, rownum) => {
        row.eachCell((cell, colnum) => {
            console.log(cell.value)
        })
    })

}
exceltest();