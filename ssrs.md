### 創建流程
* 新增專案→Reporting Services(報表伺服器專案)
* 加入新的共同資料來源(sever)→連接字串sample:Data Source=SSSQYHFC01_R2;Initial Catalog=LS
* 創建報表
* 找出左方工具列的報表資料→加入資料來源→加入資料集

### base64轉圖檔方式
* 插入影像→影像屬性
* 選取影像來源:資料庫
* 使用此欄位(運算式)
* sample:=System.Convert.FromBase64String(base64字串放這)
* MIME類型需先得知
* 大功告成