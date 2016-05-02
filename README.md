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

- 示例
```javascript
  $.alert('系统错误');
  
  $.alert('按下确定后页面将跳转','跳转',function(){
    location.href='https://github.com';
  });
  
  $.confirm("是否要删除此项目?","删除",function(){
    //do delete
  });
```
