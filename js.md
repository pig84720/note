#### [Array 方法集](https://ithelp.ithome.com.tw/articles/10213787)

#### [Ajax 詳細解釋](https://blog.techbridge.cc/2019/10/05/javascript-async-sync-and-callback/)

#### [一張圖了解 map reduce](https://www.datasciencecentral.com/forum/topics/what-is-map-reduce)

#### [我知道你懂 hoisting，可是你了解到多深？](https://github.com/aszx87410/blog/issues/34?fbclid=IwAR2vIYN6E-kh38kzzjGwpfcX82BYC63y4iqOZep4c621G5VrxW-iAco_uMY)

#### [深度解析 closure(非常牛逼)](https://blog.huli.tw/2018/12/08/javascript-closure/)

#### [JavaScript 語言核心（15）函式 prototype 特性](https://openhome.cc/Gossip/CodeData/EssentialJavaScript/Prototype.html)

#### [取系統預設日+-N 天](https://blog.csdn.net/qq_34915414/article/details/80746590)

#### 原型鍊

-   [Javascript 繼承機制的設計思想](http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)
-   [從設計初衷解釋 JavaScript 原型鍊](https://www.jianshu.com/p/a97863b59ef7)

---

### 正則表達式

-   一般字元：

    |   語法   |              說明               |
    | :------: | :-----------------------------: |
    | /apple/  |        含有 apple 的字串        |
    |   /./    |       含有任意字元的字串        |
    | /apple./ | 含有 apple 後面接任意字元的字串 |

*   旗標值：

    |   語法   |                                               說明                                               |
    | :------: | :----------------------------------------------------------------------------------------------: |
    | /apple/i |                                         不區分英文大小寫                                         |
    | /apple/g |                                    全域匹配，只要符合就會回傳                                    |
    |    m     |                                             多行匹配                                             |
    |    y     | 進行黏性匹配(sticky matching),<br>只會對最後一次符合處之後進行匹配 ，需要配合設定<br>`lastIndex` |
    |    u     |                                      對 unicode 數值作跳脫                                       |

*   符號：

    | 語法 |           說明            |
    | :--: | :-----------------------: |
    |  ^   | 字串開頭必須符合條件字元  |
    |  \$  | 字串結尾必須符合條件字元  |
    |  \*  |   字元可以出現 0 次以上   |
    |  ?   | 字元可以出現 1 次或 0 次  |
    |  +   |     字元至少出現 1 次     |
    |  {}  |   指定字元重複出現次數    |
    | {1,} | 指定字元重複出現 1 次以上 |
    | {,3} | 指定字元重複出現 3 次以下 |

*   比對多個字元：

    | 語法  |                說明                |
    | :---: | :--------------------------------: |
    |  []   |  字串若含有 [xxx] 裡面字元則匹配   |
    |  [^]  | 字串若不含有 [^xxx] 裡面字元則匹配 |
    | [0-9] | 字串若含有 數字 0 到 9 字元則匹配  |
    | [a-z] |    字串若含有 a 到 z 字元則匹配    |

*   特殊字元(前面加" \ ")：

    | 語法 |                    說明                    |
    | :--: | :----------------------------------------: |
    |  d   |          任何數字字元，等於[0-9]           |
    |  D   |         任何非數字字元，等於[^0-9]         |
    |  w   |  任何數字字元字母底線，等於 [A-Za-z0-9_]   |
    |  W   | 任何非數字字元字母底線，等於 [^a-za-z0-9_] |

---

## ES6 語法

### 物件縮寫 Object shorthand

-   屬性縮寫 : 當物件內的 Key 跟 Value 同名時，可以不用重複撰寫
    ```
    function ( x, y ){ return { x:x, y:y } }
    ```
    ↓↓↓
    ```
    function ( x, y ){ return { x, y } }
    ```

*   計算屬性 : 當宣告 object 時，想要動態指定物件內的 Key，更方便的寫法

    ```
    function creatObj(key,value) {
      const obj = {};
      obj[key] = value;
      return obj;
    }
    ```

    ↓↓↓

    ```
    function creatObj(key,value) {
      const obj = {
        [key] : value
      }
    }
    ```

*   函式縮寫 : 在 Object 內宣告函數時可以做縮寫

    ```
    const options = {
      name : 'Options',
      level : 10,
      created function() {
      }
    }
    ```

    ↓↓↓

    ```
    const options = {
      name : 'Options',
      level : 10,
      created() {
      }
    }
    ```

### 解構賦值 Destructuring assignment

#### 陣列解構

-   預設值

```
const nums = [ 1,2,3 ];
const [ first,second,third,fourth = 0 ] = nums;
//可給預設值
```

-   忽略元素

```
const nums = [ 1,2,3 ];
const [ ,,third ] = nums;
//逗號不可省略
```

-   變數交換

```
let a = 1;
let b = 2;
[ a,b ] = [ b,a ]
```

-   剩餘部分

```
const nums = [ 1,2,3,4 ];
const [ first,others... ] = nums;
first == 1;
others == [ 2,3,4 ];
```

#### 物件解構

-   預設值

```
const point = {
  x : 150,
  y : 100,
};
const {x, y , z = 0} = point;
```

-   指派新名稱

```
const point = {
  x : 150,
  y : 100,
};
const { x:px,y:py} = point;
px == 150;
py == 100;
```

#### 解構函式參數

```
function distance(point) {
  return Math.sqrt(point.x * point.x + point.y * point.y);
}
```

↓↓↓

```
function distance({ x,y }) {
  return Math.sqrt(x * x + y * y);
}
```

### 字串模板 String template(宣告方式:反引號 ``)

-   插入表達式(\${(表達式)})

```
function great(name,days) {
  console.log(`Hello, ${name}! ${(days<7)?'':'Long time no see'}`)
}
```

-   多行字串

```
const words = 'aaaaaaaaaaaaaaaaaaaaaaaaa\n'+
'bbbbbbbbbbbbbbbbbbbbbbbbb\n' +
'ccccccccccccccccccccccccc\n';
```

↓↓↓

```
const words = `aaaaaaaaaaaaaaaaaaaaaaaaa
bbbbbbbbbbbbbbbbbbbbbbbbb
ccccccccccccccccccccccccc`;
```

### 箭頭函式

#### 語法簡短

-   參數只有一個時可省略小括號

```
const double = x => {
  return x * 2
}
```

-   內容只有一行並回傳時可接為一行

```
const double = x => x * 2
```

#### 自動綁定

-   箭頭函式內部的 this 與外部相同
-   this 補充
    -   直接執行 : windows(global)
    -   作為物件的成員函式執行 : 該物件
    -   作為 dom 的偵聽函式執行 : 該 dom

---
