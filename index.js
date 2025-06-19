/**
 * 在指定的参考按钮右侧添加一个新按钮。
 * @param {string} referenceButtonId - 参考按钮的 ID (例如 'extensions_menu_button')。
 * @param {string} newButtonId - 新按钮的 ID。
 * @param {string} newButtonText - 新按钮上显示的文本。
 * @param {function} onClickHandler - 新按钮的点击事件处理函数。
 */
function addCustomButton(referenceButtonId, newButtonId, newButtonText, onClickHandler) {
  // 1. 找到参考按钮
  const referenceButton = document.getElementById(referenceButtonId);

  if (!referenceButton) {
    console.error(`未能找到参考按钮 (ID: ${referenceButtonId})。无法添加新按钮。`);
    return;
  }

  // 检查新按钮是否已存在，防止重复添加
  if (document.getElementById(newButtonId)) {
    console.log(`ID为 "${newButtonId}" 的按钮已存在。`);
    return;
  }

  // 2. 创建新按钮
  const newButton = document.createElement('button');
  newButton.id = newButtonId;
  newButton.textContent = newButtonText;
  // 你可以根据需要为新按钮添加样式类，例如参考按钮的类
  // newButton.className = referenceButton.className;

  // 添加点击事件
  if (typeof onClickHandler === 'function') {
    newButton.addEventListener('click', onClickHandler);
  }

  // 3. 将新按钮插入到参考按钮的右边
  referenceButton.parentNode.insertBefore(newButton, referenceButton.nextSibling);

  console.log(`成功在 #${referenceButtonId} 右侧添加了按钮 #${newButtonId}。`);
}

// --- 如何使用 ---

// 定义你的按钮点击后要执行的操作
function myNewButtonClickHandler() {
  alert('新按钮被点击了！');
  // 在这里执行你的游戏逻辑
}

function onReady(callback) {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(callback, 1);
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}

onReady(() => {
  addCustomButton('extensionsMenuButton', 'star_game_button', '主页', myNewButtonClickHandler);
});
