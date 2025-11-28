'use strict';

// importセクション
import { initMountainSelector } from './components/mountainSelector.js';
import { initEquipmentChecker } from './components/equipmentChecker.js';

// DOMContentLoadedイベントで初期化
document.addEventListener("DOMContentLoaded", () => {
    // 各モジュールの初期化
    initMountainSelector();
    initEquipmentChecker();
});
