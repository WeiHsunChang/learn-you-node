# learnyounode

# Node.js
* Node.js 是以 Javascript 語言為基礎，是一個高效能、易擴充的網站應用程式開發框架 (Web Application Framework)。

---

# 第一步
> 撰寫一個可以印出命令列參數總和的程式

* 要撰寫一個 Node.js 程式，可以先建立一個以副欓名 .js結尾的檔案，然後在裡面撰寫 JavaScript 程式碼
* 在終端機以 node 命令執行

Example：
`$ node program.js`

* 可以透過一個物件，存取來自命令列的參數。物件會把完整的命令列放到底下的 argv 屬性中。

* 撰寫一個可以印處命令列參數總和的程式
  - 撰寫一個單純包含底下命令的程式：
    ```js
    console.log(process.argv)
    //process為一全域物件
    ```
  - 在命令列中輸入 `node program.js` 後面在多數入幾個數字作為參數
    `$ node program.js 1 2 3`
  - 在這個範例中，輸出為一個陣列：
  `['node', '/path/to/your/program.js', '1', '2', '3']`
  - `program.js` 陣列的第一個元素永遠是『node』，第二個元素也永遠是被執行的程式`program.js`的完整路徑。
  所以須從第三個元素開始讀取參數，直到陣列結束。
  - `process.argv` 的所有元素都是字串，轉換成數字需在 `process.argv` 前加上 ＋ 或是把這個屬性傳給函式 Number()。
  例如： `+process.argv[2]` 或 `Number(process.argv[2])`。

Example：

```js
let args = process.argv;
let total=0;
for(let i=2; i<args.length; i++){
    total += +args[i];
}
console.log(total);
```

---

# 輸入/輸出

> 撰寫一個程式，使用 同步（Synchronous） 操作方式的檔案系統API。這個程式要開啟指定檔案，然後讀取並計算該檔案內容的行(\n)數，最後利用console （標準輸出 stdout）方法將計算結果輸出到終端機命令列。