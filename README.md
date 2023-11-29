# 경남 유통 웹 페이지 


##
<aside>
💡 **목표: 달걀도매 웹 사이트를 제작하여 판매하는 물품을 유저에게 소개하고 구매 관련 카카오톡 채널 문의 및 이메일 문의 기능을 넣어 제공.**

</aside>

---

# ☑️  메인화면 (PC 버전)

> 메인
>
> ![image](https://github.com/Juriri/eggboy/assets/29352771/0df6d1ea-2f2d-44fc-9880-3cbc28451595)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/983ad7ca-80be-47c2-a43d-96a2d5b212ea/064ea707-93e1-42a6-949a-9b477ee47cf9/Untitled.png)

> **판매 도매 품목 리스트  [계란 상품 살펴보기]**
> 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/983ad7ca-80be-47c2-a43d-96a2d5b212ea/f5fb303b-ebe6-4a65-a077-51f4f325ee31/Untitled.png)

> **대표 아이콘**
> 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/983ad7ca-80be-47c2-a43d-96a2d5b212ea/e30a3e83-1004-48ad-8d5e-6b126ec08dab/Untitled.png)

# ☑️ 기능 소개, 기술 소개

---

> **기능 소개**
> 
- **`달걀 도매 판매 물품 소개`:** 메인 홈페이지와 [계란 상품 살펴보기] 탭 클릭 시 현재 유통회사의 달걀 품목 출력
- **`이메일 문의`:** Footer의 [이메일 문의하기] 링크를 통해 메일 작성이 팝업되고 유저의 이메일 정보를 통해 메일 송신
- **`카카오톡 채널 문의`**: Footer의 [카카오톡 채널] 링크를 통해 카카오톡 채널 추가가 되면 판매자에게 톡 문의 지원 (카카오 API 비지니스 전환 확인)

> **기술 소개**
> 

```
- 프론트엔드 기술:
    **React:** 웹 페이지의 구조와 사용자 인터페이스를 구축하기 위한 자바스크립트 라이브러리.
		**Axios**: 비동기적으로 서버와 데이터를 교환하기 위해 사용
    
- 백엔드 기술:
    **Flask(Python):** 백엔드 서버를 구축하고 API를 개발하는 데 사용.
    **Flask-Security:** Flask-Security와 같은 라이브러리를 사용하여 사용자 인증 및 권한 부여를 관리
    **ORM (객체 관계 매핑):** SQLAlchemy를 사용.
    
- DB:
    - **`MySQL DB:`** 데이터 저장 및 관리를 위한 데이터베이스 시스템으로 사용.
    
- 도구 및 개발 환경:
    - **IntelliJ IDEA**: Python 백엔드 및 React 프론트엔드 개발을 위한 통합 개발 환경으로 사용.
    - **Git**: 버전 관리 및 협업을 위한 버전 관리 시스템으로 사용.
```

# ☑️ 개발 과정 (다이어그램, 구조)

---

> **유즈케이스 다이어그램**
> 

> **프론트엔드 구조**
> 

```jsx
egg
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Footer
│   │   │   ├── Header
│   │   │   ├── Main
│   │   ├── pages
│   │   │   ├── Login
│   │   │   ├── Product
│   │   ├── ...
│   ├── package.json
│   ├── ...

├── backend
│   ├── app
│   │   ├── static
│   │   ├── templates
│   │   ├── __init__.py
│   │   ├── routes.py
│   ├── config.py
│   ├── run.py
```

---
