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

#### setServerInfo

-   require session 時已經先 setServerInfo 一次(Session.js)
-   initial 一律在 getsession 的 done 裡面做,不然 ServerInfo 會被設為空陣列
-   initial 前先跑 DC 裡的 setServerInfo(getSessionData 後)

#### PP 上註冊專案流程

-   IE 上連到 PP http://sswbyhfc06/PP/
-   帳號 99998 密碼 Aa99998
-   登入系統 → 權限管理
-   於 PPA050、PPA060 註冊  
    ![註冊](https://scontent.ftpe7-3.fna.fbcdn.net/v/t1.0-9/90435436_3096217243735647_8716227735971692544_o.jpg?_nc_cat=108&_nc_sid=8024bb&_nc_ohc=ckvyiNYX3LwAX-RpMHY&_nc_ht=scontent.ftpe7-3.fna&oh=53245e095abde977328c152530f1514e&oe=5E995995)
