
import * as exExportAjaxUtil from '../../../nicezhuanye_frontend_common/ajax/ExportUtil.js'

export function exportExcel(submitUrl, form, data, showFileName, query){
    exExportAjaxUtil.exportExcel(submitUrl, form, data, showFileName, query)
}

//导出分班的班级或年级数据：
export function exportClassExcel(submitUrl, form, showFilename, query, methodName){
    exExportAjaxUtil.exportClassExcel(submitUrl, form, showFilename, query, methodName)
}