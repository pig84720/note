### 創建流程

-   新增專案 →Reporting Services(報表伺服器專案)
-   加入新的共同資料來源(Microsoft SQL sever)→ 連接字串 Data Source=SSSQYHFC01_R2;Initial Catalog=LS,建立後輸入伺服器名稱、帳密、連接至資料庫(選取資料庫)
-   創建報表
-   找出左方工具列的報表資料 → 加入資料來源(使用共同資料來源參考)→ 加入資料集

### base64 轉圖檔方式

-   插入影像 → 影像屬性
-   選取影像來源:資料庫
-   使用此欄位(運算式)
-   sample:=System.Convert.FromBase64String(base64 字串放這)
-   MIME 類型需先得知
-   大功告成

### ssrs 公司佈署環境

-   report server(http://sssqyhfc01_r2/Reports/Pages/Folder.aspx)
-   在對應專案 Report 資料夾上傳報表
-   上傳完成後,於該檔案項目中選擇管理
-   左側選擇資料來源
-   指定該報表資料來源
