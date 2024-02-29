import { demoPackItemsData } from "./demoPackItemsData";

export const demoPacks = [
  {
    "id": 1,
    "title": "【サンプル】南八ヶ岳テント１泊",
    "memo": "赤岳鉱泉でテント泊。翌朝赤岳から硫黄岳まで歩いた。初日に土砂降りに遭い、寝袋が濡れてしまった。",
    "startDate": "2023-06-16",
    "endDate": "2023-06-17",
  },
  {
    "id": 2,
    "title": "【サンプル】日帰り丹沢・蛭ヶ岳",
    "memo": "下山するころには日が山陰に入ってしまい、林の中はかなり暗かった。\nヘッドライトが活躍した。",
    "startDate": "2023-12-21",
    "endDate": "2023-12-21",
  },
  {
    "id": 3,
    "title": "【サンプル】日帰り奥多摩・大岳山",
    "memo": "山頂付近は雪が残っていてチェーンスパイクが必要だった。\n\n予報では午後から天気が崩れる模様。雨具を持って行ったが、降りだす前に下山できた。\n\n下山後温泉に寄るため、着替えとタオルを持っていった。 ",
    "startDate": "2024-02-29",
    "endDate": "2024-02-29",
  },
];

export const DemoPackItems = {
  get: (packId: number) => {
    const packItemsData = demoPackItemsData.filter(row => row[0] === packId);
    return packItemsData?.map((row, index) => {
        const [, name, weight, quantity] = row;
        const id = index;
        const checked = false;
        return {
        ...{ id, quantity, checked},
        item: { name, weight },
        };
    });
  }
}

