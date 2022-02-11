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

## [React-helmet](https://www.npmjs.com/package/react-helmet)

npm i react-helmet

npm i --save-dev @types/react-helmet

Helmet은 그저 head로 가는 direct link일 뿐

---

## Recoil을 이용한 state management

### Recoil은 ReactJS에서 사용할 수 있는 state management library
