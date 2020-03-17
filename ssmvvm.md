SS.ssapi.url = "http://sswbyhfc08/ssapi45/";
SS.service.baseUrl = "http://sswbyhfc08/LSService/";

SS.portal.serverInfo = [
// 'APYHFC12',
'SSSQYHFC02',
'PP',
'',
'',
'S'
];

SS.LC.serverInfo = [
// 'APYHFC15',
'SSSQYHFC01_R2',
'LC',
'',
'',
'S'
];

SS.LS.serverInfo = [
// 'APYHFC15',
'SSSQYHFC01_R2',
'LS',
'',
'',
'S'
];

#### datacontext sp 方法(SecureData)

-   exeSPRetB 查詢
-   exeSP 單筆存入
-   exeBatchSP 多筆存入(exp:LSC680 > LSC680DataContext > SP_LSC680_I01)

#### datacontext-Deferred

-   resolve() 回傳資料到 vm(done)
-   reject() 回傳資料到 vm(fail)
-   promise() 完成

### setServerInfo

-   require session 時已經先 setServerInfo 一次(Session.js)
-   initial 一律在 getsession 的 done 裡面做,不然 ServerInfo 會被設為空陣列
-   initial 前先跑 DC 裡的 setServerInfo(getSessionData 後)
