### 創建流程

-   新增專案 →Reporting Services(報表伺服器專案)
-   加入新的共同資料來源(Microsoft SQL sever)→ 連接字串 `Data Source=SSSQYHFC01_R2;Initial Catalog=LS`,建立後輸入伺服器名稱、帳密、連接至資料庫(選取資料庫)
-   創建報表
-   找出左方工具列的報表資料 → 加入資料來源(使用共同資料來源參考)→ 加入資料集

### base64 轉圖檔方式

-   插入影像 → 影像屬性
-   選取影像來源:資料庫
-   使用此欄位(運算式)
-   sample:`=System.Convert.FromBase64String`(base64 字串放這)
-   MIME 類型需先得知
-   大功告成

### ssrs 公司佈署環境

-   "上傳前務必將報表版本降至 2008R2"
    -   方法:
        比對 2016 及 2008 的 RDL 檔案，標頭替換：<br/>
        由以下
        ```
        <Report MustUnderstand="df" xmlns="http://schemas.microsoft.com/sqlserver/reporting/2016/01/reportdefinition" xmlns:rd="http://schemas.microsoft.com/SQLServer/reporting/reportdesigner" xmlns:df="http://schemas.microsoft.com/sqlserver/reporting/2016/01/reportdefinition/defaultfontfamily">
        <df:DefaultFontFamily>Segoe UI</df:DefaultFontFamily>
        ```
        替換為
        ```
        <Report xmlns:rd="http://schemas.microsoft.com/SQLServer/reporting/reportdesigner" xmlns:cl="http://schemas.microsoft.com/sqlserver/reporting/2010/01/componentdefinition" xmlns="http://schemas.microsoft.com/sqlserver/reporting/2010/01/reportdefinition">
        ```
        再移除 `<ReportParametersLayout>` 區段之後就可以成功降級為 2008R2 可使用的 RDL 檔案
-   report server http://sssqyhfc01_r2/Reports/Pages/Folder.aspx
-   在對應專案 Report 資料夾上傳報表
-   上傳完成後,於該檔案項目中選擇管理
-   左側選擇資料來源
-   指定該報表資料來源

#### RDLC 報表開發流程

-   VS 以網站方式開啟資料夾
-   專案底下加入新項目 → 選擇報表(若加入資料集掛掉,開一個資料夾建報表,刻完板再丟回原專案)
-   專案底下加入新項目 → web 表單
-   aspx 檔和 cs 檔可參考 CARWEB-BKM340B
-   測試環境路徑範例: \\\hfcweb01\wwwroot\CARWEB\BKM
-   測試環境網誌範例: http://hfcweb01:8080/BKM/BKM340B.aspx
