背景 水平方向平舖(repeat-x)
exp:
body
{
background-image:url('gradient2.png');
background-repeat:repeat-x;
}

背景 不平鋪(no-repeat)
exp:
body
{
background-image:url('img_tree.png');
background-repeat:no-repeat;
}

改變圖片在背景的位置(background-position)
exp:
body
{
background-image:url('img_tree.png');
background-repeat:no-repeat;
background-position:right top;
}

文字強迫換行，英文字會被切一半 word-break: break-all;
依單字換行 word-wrap:break-word;
死都不換行 white-space:nowrap;

當文字超過限制時會自動顯示”…”的刪節號:text-overflow: ellipsis;

變亮:filter:brightness()