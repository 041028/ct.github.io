document.addEventListener('DOMContentLoaded', function() {
  // 为"会员中心"按钮添加点击事件监听器
  document.getElementById('member-center').addEventListener('click', function() {
    // 当按钮被点击时，跳转到会员中心的页面
    window.location.href = 'member-center.html'; // 假设会员中心的页面是 member-center.html
  });

  // 为"商品"按钮添加点击事件监听器
  document.getElementById('product').addEventListener('click', function() {
    // 当按钮被点击时，跳转到商品页面
    window.location.href = 'product.html'; // 假设商品的页面是 product.html
  });

  // 为"一元秒杀"按钮添加点击事件监听器
  document.getElementById('flash-sale').addEventListener('click', function() {
    // 当按钮被点击时，跳转到一元秒杀页面
    window.location.href = 'flash-sale.html'; // 假设一元秒杀的页面是 flash-sale.html
  });
// 设置图片切换
let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/firefox2.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
};

// 设置个性化欢迎信息
// 获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h6');

// 个性化欢迎信息设置函数
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '欢迎您，' + myName;
  }
}

// 初始化代码：在页面初次读取时进行构造工作：
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '欢迎您，' + storedName;
}

// 为按钮设置 onclick 事件处理器：
myButton.onclick = function() {
  setUserName();
};
});