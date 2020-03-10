#### jquery 選擇器用法

-   emp: \$('#BKM031-BUTTON-3').css('display','none')

#### [Array 方法集](https://ithelp.ithome.com.tw/articles/10213787)

#### [Ajax 詳細解釋](https://blog.techbridge.cc/2019/10/05/javascript-async-sync-and-callback/)

### ES6 語法

#### 物件縮寫(Object shorthand)

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
