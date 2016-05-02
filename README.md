# bootstrap.alert
基于bootstrap2的弹出窗口

- alert
```javascript
  $.alert('内容，可以是HTML'[,'标题','按下确定的回调']);
```

- confirm
```javascript
  $.confirm('内容，可以是HTML[','标题','按下确定的回调','按下取消的回调']);
```

- mask
```javascript
  $.mask({
    title:'title',
    msg:'msg',
    timeout:0
  });
  $.mask('close');
```

- 示例
```javascript
  $.alert('系统错误');
  
  $.alert('按下确定后页面将跳转','跳转',function(){
    location.href='https://github.com';
  });
  
  $.confirm("是否要删除此项目?","删除",function(){
    //do delete
  });
  
  $.mask({
    title:'遮罩',
    msg:'三秒后将消失',
    timeout:3000
  });
  
  $.mask({
    title:'遮罩',
    msg:'永不消失',
    timeout:0
  });
  
  $.mask('close'); //手动关闭遮罩
```
