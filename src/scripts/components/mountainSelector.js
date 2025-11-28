'use strict';

// importセクション
import { getAllMountains, getMountainById } from '../data/data/mountains.js';
import { updateEquipmentBySeason, resetAllCheckboxes } from './equipmentChecker.js';


function displayMountainInfo(mountainId) {
    const infoElement = document.getElementById("mountain-info");
    const mountain = getMountainById(mountainId);

    // 情報をHTMLとして構築
    let htmlContent = "<h3>" + mountain.name + "</h3>"
     + "<p>標高: " + mountain.elevation + "m</p>"
     + "<p>登山シーズン: " + mountain.season + "</p>"
     + "<p>犬の入山: " + mountain.dogAllowed + "</p>";

    infoElement.innerHTML = htmlContent;
    infoElement.style.display = "block";
    
    // 山の季節に応じて装備を更新
    updateEquipmentBySeason(mountain.season);
}

// changeイベントによって、loadMountainListで生成したoption.valueからmountain.idを得る
// 得られたmountain.idがある時、displayMountainInfoにmountain.idを渡す。
// 得られたmountain.idがfalseの時、infoElementを初期化する
function changeMountain(event) {
    const selectElement = document.getElementById("mountain-select");
    // 選択されたoptionタグのvalueプロパティの値は、selectタグのvalueプロパティに引き継がれる
    const mountainId = parseInt(selectElement.value);
    
    // 山が選択されていない場合は情報をクリア
    if (!mountainId) {
        // mountain-infoをクリア
        const infoElement = document.getElementById("mountain-info");
        infoElement.innerHTML = "";
        infoElement.style.display = "none";
        
        // clothsをクリア
        const clothingDiv = document.getElementById("cloths");
        const items = clothingDiv.querySelectorAll(".equipment-item");
        for (const item of items) {
            item.remove();
        }
        
        // 全てのチェックボックスを初期化
        resetAllCheckboxes();
        console.log("ここ");
    } else {
        // mountain-infoを表示
        displayMountainInfo(mountainId);

        // 全てのチェックボックスを初期化
        resetAllCheckboxes();
    }
}

// ckickイベントによってmountains.jsのmountain.idを取得する
// 取得したmountain.idはoptionタグのvalueプロパティとして登録する
// （↑changeイベントの際にここで生成されたoptionタグのvalueプロパティをsectionタグに渡す）
function loadMountainList() {
    const selectElement = document.getElementById("mountain-select");
    const mountains = getAllMountains();

    for (const mountain of mountains) {
        const option = document.createElement("option");
        option.value = mountain.id;
        option.innerText = mountain.name;
        selectElement.appendChild(option);
    }
}

// 有エクスポート
// 初期化（モジュールのイベントリスナーの設置）
export function initMountainSelector() {
    const selectElement = document.getElementById("mountain-select");
    selectElement.addEventListener("change", changeMountain);
    selectElement.addEventListener("click", loadMountainList());
}
