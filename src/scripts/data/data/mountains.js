// 山データ
export const mountains = [
    {
        id: 1,
        name: '富士山',
        elevation: 3776,
        season: '夏',
        dogAllowed: '-',
    },
    {
        id: 2,
        name: '北岳',
        elevation: 3193,
        season: '夏',
        dogAllowed: '-',
    },
    {
        id: 3,
        name: '奥穂高岳',
        elevation: 3190,
        season: '夏',
        dogAllowed: '-',
    },
    {
        id: 4,
        name: '立山',
        elevation: 3015,
        season: '冬',
        dogAllowed: '-',
    },
    {
        id: 5,
        name: '高尾山',
        elevation: 599,
        season: '秋',
        dogAllowed: '🐶わん!!🐶',
    },
    {
        id: 6,
        name: '谷川岳',
        elevation: 1977,
        season: '秋',
        dogAllowed: '🐶わん!!🐶',
    },
    {
        id: 7,
        name: '金峰山',
        elevation: 2599,
        season: '冬',
        dogAllowed: '🐶わん!!🐶',
    }
];

// 山IDから山データを取得
export function getMountainById(id) {
    return mountains.find(function(mountain) {
        return mountain.id === id;
    });
}

// すべての山データを取得
export function getAllMountains() {
    return mountains;
}
