
const traders = [
  {
    trader: {
      name: "김철수",  // traders[0].trager.name
      city: "대전",
    },
    year: 2023,       // tragers[0].year
    value: 500000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2022,
    value: 600000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: "뽀로로",
      city: "부산",
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 780000,
  },
];
// traders.length = 6

// 연습 1: 2022년에 발생한 모든 거래를 찾아 3개 ->trader 추출
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요
traders
 .filter(trad => trad.year === 2022)
 .map(trad => ( {name:trad.trader.name, city:trad.trader.city} ))
 .forEach(result => console.log(result));

 // 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요. city
 const tradersCity = traders.map(trad => trad.trader.city );
 //console.log(tradersCity);
 const cities = new Set(tradersCity); // 중복 제거해서 출력 new Set()
 console.log(cities);
 

// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요.
traders
 .filter(trad => trad.trader.city === '대전')
 .map(trad => ( {name: trad.trader.name, city: trad.trader.city} ))
 .forEach(result => console.log(result));

// 연습 4: 모든 거래자의 이름을 배열에 모아주세요. 6명 모두 이름 추출
const tradersAllName = [...new Set(traders.map (trad => trad.trader.name))];
console.log(tradersAllName);

// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
// map() -> 애당초 반복되는 얘라 안에 for반복문 사용 불가
// let total = 0;

// const totalValue = traders.filter(trad => trad.trader.city === '서울')
//  for(let i = 0; i < totalValue.length; i++) {
//     total += totalValue[i].value;
//     //return `거래총액 : ${total}`
//   }
// console.log(`거래총액 : ${total}`);

// let total2 = 0;
// traders
//   .filter(trs => trs.trader.city === '서울')
//   .map(filteredTrs => filteredTrs.value)
//   .forEach(val => total += val);
  
// console.log(`총액: ${total2}`);

const total = traders
.filter(trs => trs.trader.city === '서울')
// total -> 누적해갈 값 , trs -> 전체 리스트 
.reduce((total, trs) => total + trs.value, 0); // 거래액 총합 누적해감 !
console.log(`총액 : ${total}`);

// const x = traders.filter((a) => {
//   return a.year === 2022; // 여기에 출력으로 담기는 값
// })
// console.log(x);

// const y = traders.filter((a, b) => {  // 두번째 파라미터 b -> index
//   console.log(`${b} => ${a.trader.name}`);
// })