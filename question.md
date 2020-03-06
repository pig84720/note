### 你可以描述漸進增強 (progressive enhancement) 和優美退化 (graceful degradation) 間的差異嗎？

-   使用優雅降級技術時,你必須首先完整的實現了網站,其中包括所有的功能和效果。然後再為那些無法支援所有功能的瀏覽器增加候選方案,使之在舊式瀏覽器上以某種形式降級體驗卻不至於完全失效。
-   漸進增強:從被所有瀏覽器支援的基本功能開始,逐步地新增那些只有新式瀏覽器才支援的功能。

### 你怎麼優化一個網站的靜態檔案 (assets) 和資源 (resources)？

-   靜態檔案、資源的種類
    -   1.html
    -   2.css
    -   3.js
    -   4.jpg/.png ....

*   如何優化?
    -   html
        -   把 css、js 放到外面去,不要寫在 html 裡
        -   使用 gzip 壓縮
        -   使用 cdn
    -   Css
        -   minify / uglify
        -   Javascript 會阻擋 DOM 的建構
        -   CSS 會阻擋 Javascript 的執行
        -   CSS 會影響頁面的 Rendering
        -   結論 include css 放上面, js 放下面
    -   js
        -   minify / uglify
        -   把 script include 放在底部
    -   img
        -   壓縮 .png、.jpg
        -   使用 Inline Image 技巧
