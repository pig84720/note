### 經典顏色範例 [colorpeek](http://www.colorpeek.com)

### href和src的差別
* 7.1 請求資源類型不同  
（1）href 指向網路資源所在位置，建立和當前元素（錨點）或當前文檔（連結）之間的聯繫。  
（2）在請求 src 資源時會將其指向的資源下載並應用到文檔中，比如 JavaScript 腳本，img 圖片。  
#### 背景圖片格式
* example {  
    background-image: url('網址');}
#### 背景 原圖填滿格式
* .hero {  
  background-image: url("https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-2/bg.jpg");
  background-size: cover;  
}

#### 背景 水平方向平舖(repeat-x)
* exp:  
body  
{  
background-image:url('gradient2.png');  
background-repeat:repeat-x;  
}

#### 背景 不平鋪(no-repeat)
* exp:  
body  
{  
background-image:url('img_tree.png');  
background-repeat:no-repeat;  
}

#### 改變圖片在背景的位置(background-position)
* exp:  
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

#### 變亮:filter:brightness()→建議前面加上-webkit- 能讓所有瀏覽器使用
* 顏色隨時間漸變:transition: all 秒數s  
讓正方形變圓形:border-radius: →0.5會變圓

#### 標籤
* (id優先順序大於class)  
同一個id只能使用一次  
exp:  
<a id="learn-code" href="https://www.codecademy.com">Click here to learn to code!</a> 
