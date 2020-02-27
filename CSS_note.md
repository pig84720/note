### 視覺配色相關資源

-   [Adobe Color(各式顏色組合)](https://color.adobe.com/zh/explore)
-   [awwwards(現代感網頁範例)](https://www.awwwards.com/websites/)
-   [dribbble(使用者頁面範例)](https://dribbble.com/)
-   [coolors(隨機顏色生成)](https://coolors.co/3a3335-d81e5b-f0544f-fdf0d5-c6d8d3)
-   [BrandColors(百大品牌顏色操作)](https://brandcolors.net/)
-   [Flaticon(各式 icon)](https://www.flaticon.com/)
-   [超猛調色盤](https://codepen.io/jh3y/pen/dybjLpa)
-   [特殊鼠標樣式](http://www.cursors-4u.com/)

### 各式應用程式小圖像 [Ionicons](https://ionicons.com)

-   css link <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" rel="stylesheet">

### 免費向量圖檔(以拉)

-   [SILHOUETTE-DESIGN](https://kage-design.com/)
-   [freepik](https://www.freepik.com/)
-   [EVENTs Design](https://event-pre.com/)

### href 和 src 的差別

-   請求資源類型不同  
    （1）href 指向網路資源所在位置，建立和當前元素（錨點）或當前文檔（連結）之間的聯繫。  
    （2）在請求 src 資源時會將其指向的資源下載並應用到文檔中，比如 JavaScript 腳本，img 圖片。

#### 層的排列

-   display:block; → 分行顯示。
-   display:inline; → 顯示在同一行。

#### 移動位置(假如上一行空間夠會縮排)

-   float:right; 移向右。
-   float:left; 移向左。

#### text-transform 屬性

-   none 默認 定義帶有小寫字母和大寫字母的標準的文本。
-   capitalize 文本中的每個單詞以大寫字母開頭。
-   uppercase 定義僅有大寫字母。
-   lowercase 定義無大寫字母，僅有小寫字母。
-   inherit 規定應該從父元素繼承 text-transform 屬性的值。

#### 背景圖片格式

-   example {  
     background-image: url('網址');}

#### 背景 原圖填滿格式

-   .hero {  
     background-image: url("https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-2/bg.jpg");
    background-size: cover;  
    }

#### 背景 水平方向平舖(repeat-x)

-   exp:  
    body  
    {  
    background-image:url('gradient2.png');  
    background-repeat:repeat-x;  
    }

#### 背景 不平鋪(no-repeat)

-   exp:  
    body  
    {  
    background-image:url('img_tree.png');  
    background-repeat:no-repeat;  
    }

#### 改變圖片在背景的位置(background-position)

-   exp:  
    body  
    {  
    background-image:url('img_tree.png');  
    background-repeat:no-repeat;  
    background-position:right top;  
    }

#### 文字強迫換行，英文字會被切一半 word-break: break-all;

#### 依單字換行 word-wrap:break-word;

#### 死都不換行 white-space:nowrap;

#### 當文字超過限制時會自動顯示”…”的刪節號:text-overflow: ellipsis;

#### 變亮:filter:brightness(1~2)→ 建議前面加上-webkit- 能讓所有瀏覽器使用

-   顏色隨時間漸變:transition: all 秒數 s  
    讓正方形變圓形:border-radius: →0.5 會變圓

#### 標籤

-   (id 優先順序大於 class)  
    同一個 id 只能使用一次  
    exp:  
    <a id="learn-code" href="https://www.codecademy.com">Click here to learn to code!</a>

#### 被點擊時發生

-   exp:  
    .contact-btn a:active{  
    }

#### text-decoration 去除連結的底線
