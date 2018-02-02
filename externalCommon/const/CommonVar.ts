
import * as exCommonVar from '../../../nicezhuanye_frontend_common/const/commonVar.js'

export const serverIP = exCommonVar.serverIP;

export const debug = exCommonVar.debug;

export const console = exCommonVar.console;

export function isDebug(){
    return exCommonVar.isDebug();
}


// todo
export const dashboardBaseUrl =  'http://' + serverIP  + '/Nicezhuanye';//


export const baseUrl = 'http://' + serverIP + '/Nicezhuanye';///classifyserv
// export const scoreServUrl = 'http://' + serverIP + '/score';
export const scoreServUrl = 'http://' + serverIP + '/scoreserv';

export const classifyservSymbol = "classifyserv";

export const nicezhuanyeServSymbol = "Nicezhuanye";

export const uploadUrl = baseUrl+ '/upload/uploadFile';

export const restBaseURL = exCommonVar.restBaseURL;

export const NZYBaseUrl = 'http://' + serverIP + '/Nicezhuanye';//


//hot line number
export const hotLine = exCommonVar.hotLine;

