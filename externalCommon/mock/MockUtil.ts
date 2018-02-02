
import * as exMockUtil from '../../../nicezhuanye_frontend_common/mock/MockUtil.js'
import {allTemplateMap, allUrlMap} from "../ExternalCommonConfig";


export function mockDataByUrl(url:string): void {
    console.log("mock :" + url);
    exMockUtil.mockDataByUrl(url, allUrlMap, allTemplateMap);
}


export function mockDataByActionIDAndUrl(actionID: string, url:string, ajaxType?: string): void{
    exMockUtil.mockDataByActionIDAndUrl(actionID, url, allTemplateMap, ajaxType)
}

