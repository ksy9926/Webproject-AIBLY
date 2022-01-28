# AI-BLY

### [서비스 시연영상 링크](https://youtu.be/FvNbOo4l1w4)

<br />

## 🗂 목차

- [**프로젝트 소개**](#1)
- [**역할**](#2)
- [**기획 내용**](#3)
- [**기술 스택**](#4)
- [**구현 기능**](#5)
- [**개발 기간**](#6)
- [**웹서비스 소개**](#7)

<div id='1'></div>
<br />

## 💁‍♂️ 프로젝트 소개

- **주제** : 사용자가 등록한 의류 이미지를 AI 분석하여, 해외직구 상품을 대신 찾아주는 웹앱서비스
- **소개** : AIBLY는 AI(Aritificial Intelligence)와 BLY(: Likeness)의 합성어로, 사용자가 원하는 의류와 유사한 상품을 해외 쇼핑몰에서 찾아주는 것이 주요 서비스입니다.
- **개요** : 해외 직구 사이트는 소비자들이 국내에서 높은 가격대를 형성하고 있는 해외 유명 브랜드들을 합리적인 가격으로 구매할 수 있는 하나의 수단입니다. 하지만 한 명의 사람이 수 많은 해외 쇼핑몰의 모든 상품들을 찾아볼 순 없습니다. 이러한 시장 환경에서 발생한 정보의 불균형은 소비자와 상품이 연결되는 것을 막는 하나의 장애물입니다. 보다 효율적이고 간편한 방식으로 소비자와 상품을 연결시켜주는 것이 저희 서비스의 목표입니다.

<div id='2'></div>
<br />

## 👨‍👨‍👦‍👦 역할

| 이름   | 담당 업무 |
| ------ | --------- |
| 손상준 | PM, FE    |
| 김수영 | FE        |
| 정현구 | BE        |
| 현암   | BE        |
| 강현우 | AI        |

<div id='3'></div>
<br />

## 🟡 기획내용

- 인포메이션 아키텍쳐

![스크린샷 2021-07-12 오후 9 50 18](https://user-images.githubusercontent.com/74908906/125290387-35425200-e35b-11eb-9bcd-0e7abd57673c.png)

- 와이어 프레임

![스크린샷 2021-07-12 오후 9 56 33](https://user-images.githubusercontent.com/74908906/125291362-4475cf80-e35c-11eb-8dd3-b96dee25fdf0.png)

<div id='4'></div>
<br />

## 🛠 기술 스택

| 분류        | Tools      | 목적         |
| ----------- | ---------- | ------------ |
| Development | Docker     | 배포         |
| Server      | Django     | 웹 서버 구동 |
| DB          | postgresql | Database     |
| Client      | React, recoil, material-ui      | 웹 UI 구현   |
| AI          | Tensorflow | AI           |

<div id='5'></div>
<br />

## 💡 구현 기능

1. 해외 직구사이트 상품 추천

   - 1순위 : 해외 상품 크롤링 및 제공
   - 2순위 : 이미지 + 스타일 선택기반 추천

2. 이미지 업로드시 유사 상품 추천
   - 1순위 : 이미지 업로드 기능 /이미지 분석기능
   - 2순위 : 크롤링된 이미지 중 유사 이미지 추천

<div id='6'></div>
<br />

## 🗓 개발 기간

`2021.05.11 ~ 2021.06.12`

<div id='7'></div>
<br />

## ⭐️ 웹서비스 소개

|              랜딩 페이지 및 튜토리얼               |                메인 페이지                 |
| :------------------------------------------------: | :----------------------------------------: |
| <img src='./images/tutorial.gif' alt='tutorial' /> | <img src='./images/main.gif' alt='main' /> |

|              로그인 및 회원가입              |                     클로젯                     |
| :------------------------------------------: | :--------------------------------------------: |
| <img src='./images/login.gif' alt='login' /> | <img src='./images/closet.gif' alt='closet' /> |

|                      카테고리                      |                   좋아요                   |
| :------------------------------------------------: | :----------------------------------------: |
| <img src='./images/category.gif' alt='category' /> | <img src='./images/like.gif' alt='like' /> |

|                 추천 스타일                  |
| :------------------------------------------: |
| <img src='./images/style.gif' alt='style' /> |
