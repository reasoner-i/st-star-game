/**
 * 在指定的参考按钮右侧添加一个新按钮。
 * @param {string} referenceButtonId - 参考按钮的 ID (例如 'extensions_menu_button')。
 * @param {string} newButtonId - 新按钮的 ID。
 * @param {string} newButtonTitle - 新按钮的 title 属性 (悬浮提示)。
 * @param {function} onClickHandler - 新按钮的点击事件处理函数。
 */
function addCustomButton(referenceButtonId, newButtonId, newButtonTitle, onClickHandler) {
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

  // 2. 创建新按钮，现在是 div
  const newButton = document.createElement('div');
  newButton.id = newButtonId;
  newButton.title = newButtonTitle;
  // 给按钮添加一个 class，方便用 CSS 来设置样式
  newButton.classList.add('st-game-button', 'fa-solid', 'fa-house');

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
  triggerSlash(`/send 【手机】`);
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
