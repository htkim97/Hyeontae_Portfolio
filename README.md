<p align="center">
  <h1 align="center">🙌 Hyeontae's PortFolio 🙌</h1>
  <p align="center">
 <img src="https://img.shields.io/badge/-NextJS-05122A?style=flat&logo=Next.js&logoColor=ffff"/>
    <img src="https://img.shields.io/badge/-TypeScript-05122A?style=flat&logo=Typescript&logoColor=blue"/>
    <img src="https://img.shields.io/badge/-SASS-05122A?style=flat&logo=Sass&logoColor=red"/>
    <img src="https://img.shields.io/badge/-Vercel-05122A?style=flat&logo=Vercel&logoColor=ffff"/>
</p>

![image](https://github.com/htkim97/Hyeontae_portfolio/assets/52130444/37e2760d-6842-4734-af64-bf967607308f)


**LINK** :
<https://hyeontae-portfolio.vercel.app/>

## 개요

- 서비스 : 웹 포트폴리오
- 개발 환경 : visual code
- 기술 스택 : TypeScript, JavaScript, Tailwind, Sass, NextJS
- 외부 자원 : Radix UI, Radix Icon
- 배포 : Vercel

<br/>

## 내용

Next.js를 활용하여 만든 포트롤리오 사이트 입니다.


1) npm으로 설치하기

```console
npx create-next-app@latest

```

```
What is your project named? portfolio
Would you like to use TypeScript with this project? Yes
Would you like to use ESLint with this project? Yes
Would you like to use Tailwind CSS with this project? Yes
Would you like to use `src/` directory with this project? No
Use App Router (recommended)? Yes
Would you like to customize the default import alias? No
// No가 기본 세팅이지만, 기본 세팅은 "@/*": ["./*"] 으로 맨 상위를 가르키고  있음
```

2) Radix UI
```console
npm install @radix-ui/themes

```

https://www.radix-ui.com/themes/docs/overview/getting-started

```typescript
import "./globals.css";
import { Theme } from '@radix-ui/themes';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body lang="en">
      <Theme>
        <main className="flex flex-col w-full mx-auto max-w-screen-2xl">{children}</main>
      </Theme>
    </body>
  );
}


```

Theme를 import 하여 Theme태그로 감싸줍니다.

<br/>
<br/>
<br/>

3) 컴포넌트 구조

![](https://velog.velcdn.com/images/htkim97/post/f595f742-9ac6-4c7e-bfa5-abbd6ecb411c/image.png)

<br/>
<br/>
<br/>

## 화면

#### profile.tsx
![](https://velog.velcdn.com/images/htkim97/post/f234ac1a-9cc2-43b0-8032-cce0c5067bea/image.png)
#### about.tsx
![](https://velog.velcdn.com/images/htkim97/post/20b9dfe6-b979-4ff4-accf-c14aa093d9c1/image.png)
#### experience.tsx
![](https://velog.velcdn.com/images/htkim97/post/534bfad8-83bb-4ee6-935a-02b262e1f0da/image.png)
#### sideProject.tsx
![](https://velog.velcdn.com/images/htkim97/post/0e074bb4-f9b5-4220-a6af-ddb841039514/image.png)
<br/>
<br/>
<br/>

5) 데모 사이트

https://hyeontae-portfolio.vercel.app/
