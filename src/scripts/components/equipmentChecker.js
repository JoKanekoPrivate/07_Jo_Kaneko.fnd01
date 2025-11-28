'use strict';

// importセクション
import { getClothsBySeason } from '../data/data/equipment.js';

// 引数: createEquipmentItemのイベントリスナー登録で得られるevent
// 返り血: event.target.checkedがtrueの場合、checkbox.parentElement.classNameを"equipment-item checked"に変更
// 返り血: event.target.checkedがfalseの場合、checkbox.parentElement.classNameを"equipment-item"に変更
function handleCheckboxChange(event) {
    const checkbox = event.target;
    const itemDiv = checkbox.parentElement;
    
    if (checkbox.checked === true) {
        itemDiv.className = "equipment-item checked";
    } else {
        itemDiv.className = "equipment-item";
    }
}

// 引数: updateEquipmentBySeasonのループ処理で得られるcloth
// 返り値: 親<div>、子<input><label>の要素群
function createEquipmentItem(clothName) {
    const itemDiv = document.createElement("div");
    itemDiv.className = "equipment-item";
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    itemDiv.appendChild(checkbox);
    
    const label = document.createElement("label");
    label.textContent = clothName;
    itemDiv.appendChild(label);
    
    checkbox.addEventListener("change", handleCheckboxChange);
    return itemDiv;
}

// 有エクスポート
// 季節に応じて服装を更新（getElement→createElement→代入→appendChild）
export function updateEquipmentBySeason(season) {
    // cloths<div>をクリア
    const clothingDiv = document.getElementById("cloths");
    clothingDiv.innerHTML = "";
    
    // <h3>を作成
    const heading = document.createElement("h3");
    heading.textContent = "服装";
    clothingDiv.appendChild(heading);
    
    const cloths = getClothsBySeason(season);
    for (const cloth of cloths) {
        const itemElement = createEquipmentItem(cloth);
        clothingDiv.appendChild(itemElement);
    }
}

// 有エクスポート
// 全ての装備チェックボックスのチェックを外す
export function resetAllCheckboxes() {
    const allCheckboxes = document.querySelectorAll(".equipment-item input[type='checkbox']");
    
    for (const checkbox of allCheckboxes) {
        checkbox.checked = false;
        checkbox.parentElement.className = "equipment-item";
    }
}

// 有エクスポート
// 初期化（モジュールのイベントリスナーの設置）
export function initEquipmentChecker() {
    const allCheckboxes = document.querySelectorAll(".equipment-item input[type='checkbox']");

    for (const checkbox of allCheckboxes) {
        checkbox.addEventListener("change", handleCheckboxChange);
    }
}
