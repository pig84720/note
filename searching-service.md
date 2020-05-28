#### appconfig

```
SS.ssapi.url = "http://sswbyhfc08/ssapi45/";
SS.service.baseUrl = "http://sswbyhfc08/LSService/";
```

```
SS.portal.serverInfo = [
    // 'APYHFC12',
    'SSSQYHFC02',
    'PP',
    '',
    '',
    'S'
];
```

```
SS.LC.serverInfo = [
    // 'APYHFC15',
    'SSSQYHFC01_R2',
    'LC',
    '',
    '',
    'S'
];
```

```
SS.LS.serverInfo = [
    // 'APYHFC15',
    'SSSQYHFC01_R2',
    'LS',
    '',
    '',
    'S'
];
```

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

#### PP 上註冊頁面流程

-   IE 上連到 PP http://sswbyhfc06/PP/
-   帳號 很多 9+8 密碼 Aa 很多 9+8
-   登入系統 → 權限管理
-   於 PPA050、PPA060 註冊  
    ![註冊](https://i.ibb.co/g3SgqxD/90435436-3096217243735647-8716227735971692544-o.jpg)

    050 的功能群組代號，若沒有相符選項，預設選第一個欄位。<br/>
    060 的群組代號，長租預設選擇 LLB0 長租企劃群組。
