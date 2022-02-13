# **_ 이 깃은 노마드코더 강의 보고 하는 공부 입니다. _**

---

# CSS

1. css module
2. style inline
3. react-reset
4. createGlobalStyle 📌

```ts
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
}
a{
  text-decoration: none;
	color: inherit;
}
`;
```

---

default Theme Color

- background-color : #2f3640
- text-color : #f5f6fa
- accent-color : #12CBC4

---

# use React Hook

- useState
- useEffect
- useParmas
- useLocation
- useRouteMatch
- useRecoilValue
- useSetRecoilState
- useForm

## useLocation

useLocation hooks는 사용자가 현재 머물러 있는 페이지에 대한 정보를 알려주는 hooks이다.

Nested Routes -> routes 안에 routes

## useParams

URL에서 변수의 정보를 가져다 주는 hooks

## useRouteMatch

특정한 URL에 있는지의 여부를 알려주는 hooks

## [react-Query](https://react-query.tanstack.com/)

[React Query](https://react-query.tanstack.com/reference/useQuery#_top)

React 애플리케이션에서 서버 state를 fetching, caching, synchronizing, updating 할 수 있도록 도와주는 라이브러리

[Qeury Key](https://react-query.tanstack.com/guides/query-keys)

React Query는 쿼리 키를 기반으로 쿼리 캐싱을 관리

npm i react-query

1. queryClient 생성
2. QueryClientProvider 생성 -> ThemeProvider과 같은 맥락

react-query도 같은 맥락으로 queryClientProvider 안에 있는 모든 것은 queryClient에 접근 가능.

react-query가 우리에게 주는 도움 -> 스스로 실행하고 있었던 로직들을 축약해줌
예를 들어,

```ts
// Coins.tsx
const [coins, setCoins] = useState<CoinInterface[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  (async () => {
    const response = await (await fetch("URL")).json();
    setCoins(json.slice(0, 100));
    setLoading(false);
  })();
}, []);
```

state를 가지고 있는데, 하나는 데이터를 위한 State, 다른 하나는 loading을 위한 것 <br>
데이터가 준비되면 우리는 데이터를 state에 집어 넣고 로딩을 false로 두었음 <br>
우리가 해주던 위 과정을 **_ react query _** 가 자동으로 해줌.

### react qeury를 사용하기 위한 단계

1. fetch 함수 만들기

- fetch 함수는 꼭 fetch promise를 return 해 줘야함

2. useQuery

- useQuery는 2가지 argument를 필요로 함.

  1.  첫 번째는 query keys -> query의 고유 식별자
  2.  두 번째는 fetch함수
  3.  선택적 object

- useQuery가 return 하는 것 중 'isLoading'이라고 불리는 boolean값을 return

react query가 fetcher 함수를 부르고,
fetcher 함수가 loading 중이라면 react query가 알려줌(true or false)
fetcher 함수가 끝나면 json을 data에 넣어줌

한 번 fetch로 받아온 후 loading 페이지가 보이지 않는다 그 이유는?
=> react query가 데이터를 캐시에 저장해두기 때문

---

## [ApexChart](https://apexcharts.com)

npm i --save react-apexcharts apexcharts

---

## [React-helmet](https://www.npmjs.com/package/react-helmet)

npm i react-helmet

npm i --save-dev @types/react-helmet

Helmet은 그저 head로 가는 direct link일 뿐

---

## [Recoil](https://recoiljs.org/ko/)을 이용한 state management

### Recoil은 ReactJS에서 사용할 수 있는 state management library

npm i recoil

---

## (React Hook Form)[https://react-hook-form.com/]

큰 form이나 form validation(검증)이 많을 때에 사용하면 좋다.

예를 들어, toDo를 받을 때 글자의 길이가 10보다 작으면 Error가 일어난다고 해보자.

```ts
// ToDoList.tsx
function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDoError(""); /* todo를 고치면 바로 Error를 지워줌 */
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setToDoError("To do should be longer");
    }
    console.log("submit");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="Write a to do" />
        <button>Add</button>
        {toDoError !== "" ? toDoError : null}
      </form>
    </div>
  );
}
```

- react-hook-form 설치

npm install react-hook-form

useForm()에 register 함수가 있고 그 함수는 onChange event handler가 필요없다.
register function 안에는 name,onChange,onblur,ref return된다.

watch function : watch는 form의 입력값들의 변화를 관찰 할 수 있게 해주는 function.

handleSubmit(onVaild, onInVaild)

```ts
<input {...register("toDo", { required: true })} placeholder="Write a to do" />
```

required를 register 함수에 넣는 이유는 html에서 보호를 받고 있어서 input에 넣어줘도 되지만
소스코드를 직접 브라우저에서 수정하거나, 지원하지 않는 모바일에선 보호되지 않기 때문에
register 함수에 넣어준다.
또, register에 넣어 주면 error가 있는 항목으로 커서를 자동으로 이동시켜준다.

정규식표현

/^[A-Za-z0-9._%+-]+@naver.com/g<br>
^: 문장의 시작 <br>
[]: 문자셋 안의 아무 문자<br>
+: 하나 또는 많이<br>

## to Do 수정하기

```
[
  {
      "text": "5",
      "id": 1644662620806,
      "category": "TO_DO"
  },
  {
      "text": "4",
      "id": 1644662620267,
      "category": "TO_DO"
  },
  {
      "text": "3",  //수정할 부분
      "id": 1644662619762,
      "category": "TO_DO"
  },
  {
      "text": "2",
      "id": 1644662619258,
      "category": "TO_DO"
  },
  {
      "text": "1",
      "id": 1644662618754,
      "category": "TO_DO"
  }
]

```

1. find to do based on id = id로 to do를 찾아라 / to do의 index만 알면 된다
   array안에 있는 object의 index를 찾는 방법을 알아라.
2. new category로 새로운 to do를 만들기
3. targetIndex에 있는 to do를 newToDo로 바꿔주면 됨.

### 배열의 원소를 어떻게 교체하는지...

- 원소를 교체하는 이유는 원소의 위치가 바뀌지 않길 바리기 때문

1. food라는 배열이 있고 index가 1인 "mango"를 감으로 바꾸고 싶어한다.(순서가 중요!)
   -> 망고를 지우고 감을 추가하는 것이 아닌 망고 자리를 감으로 교체하는 것!

```ts
const food = ["pizza", "mango", "kimchi", "kimbab"];
```

방법 1. tagetIndex

```ts
const target = 1;
[...food.slice(0, target), "감", ...food.slice(target + 1)];
//return => ["pizza", "감", "kimchi", "kimbab"]
```

방법 2. 배열을 두 부분으로 나누기

```ts
const front = ["pizza"];
const back = ["kimchi", "kimbab"];
const finalPart = [...front, "감", ...back]; // 새로운 배열로 return
```

## [Recoil Selectors](https://recoiljs.org/ko/docs/basic-tutorial/selectors/)

- Selector는 derived state를 나타낸다.
  -> derived state란? state를 입력 받아 그걸 변형해 반환하는 순수 함수를 거쳐 반환된 값

selector는 atom의 output을 변형시키는 도구

## useRecoilValue

- atom이나 selector의 값만 반환 (오로지 값만)

## useRecoilState

- 값과 더불어서 modifier 함수도 제공 (value, modifier function)

## [enum](https://www.typescriptlang.org/ko/docs/handbook/enums.html)

- enum은 열거형으로 이름이 있는 상수들의 집합을 정의
- 열거형을 사용하면 의도를 문서화 하거나 구분되는 사례 집합을 쉽게 만들 수 있음
- TypeScript는 숫자와 문자열 -기반 열거형을 제공

code chranges

- localstorage 저장, 삭제 기능
