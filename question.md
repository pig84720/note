#### 你可以描述漸進增強 (progressive enhancement) 和優美退化 (graceful degradation) 間的差異嗎？

-   使用優雅降級技術時,你必須首先完整的實現了網站,其中包括所有的功能和效果。然後再為那些無法支援所有功能的瀏覽器增加候選方案,使之在舊式瀏覽器上以某種形式降級體驗卻不至於完全失效。
-   漸進增強:從被所有瀏覽器支援的基本功能開始,逐步地新增那些只有新式瀏覽器才支援的功能。

---

#### 你怎麼優化一個網站的靜態檔案 (assets) 和資源 (resources)？

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

---

#### 說出三種能加快網頁讀取速度的方法 (感覺上的速度或是真正的讀取時間)

-   在 CSS 尚未下載並處理完成時,瀏覽器會禁止渲染頁面(render-blocking),因沒有 CSS 的網頁是不允許的,若有此類情形發生稱為"FOUC(文件樣式短暫失效)";因此大量的 CSS 程式碼會造成網頁加載速度變慢,我們可以透過引入不只一個 CSS,以 media query 的方式告訴瀏覽器,在某些情況下(例如列印,頁面寬度小於多少時),才需要在此 CSS 尚未加載完成時阻止頁面渲染,這將會加快頁面載入的速度。

*   JavaScipt 是個單執行緒非同步的程式語言,若採用同步方式,容易造成網頁阻塞(blocking),可使用非同步(Ajax)方式來解決。

*   preload 告訴瀏覽器：「這份資源對目前的頁面是必要的，請用最快的速度下載此資源。」

    preconnect 告訴瀏覽器：「這個網頁將會在不久的將來下載某個 domain 的資源，請先幫我建立好連線。」

    prefetch 告訴瀏覽器：「這資源我等等會用到，有空的話幫我先下載」。

---

#### 什麼是 Flash of Unstyled Content？ 你怎麼避免 FOUC？

-   什麼是 FOUC(文件樣式短暫失效)?如果使用 import 方法對 CSS 進行匯入,會導致某些頁面在 Windows 下的 Internet Explorer 出現一些奇怪的現象:以無樣式顯示頁面內容的瞬間閃爍,這種現象稱之為文件樣式短暫失效(Flash of Unstyled Content),簡稱為 FOUC。原因大致為：1，使用 import 方法匯入樣式表。2，將樣式表放在頁面底部 3，有幾個樣式表，放在 html 結構的不同位置。其實原理很清楚：當樣式表晚於結構性 html 載入，當載入到此樣式表時，頁面將停止之前的渲染。此樣式表被下載和解析後，將重新渲染頁面，也就出現了短暫的花屏現象。

-   解決方法：使用 LINK 標籤將樣式表放在文件 HEAD 中。
