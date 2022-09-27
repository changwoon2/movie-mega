# MAPO MOVIE

마포관련된첫프로젝트!

# 목차

1. HOME
2. MAPO MOVIE
3. THEATER
4. LOGIN

# 1. MAPO MOVIE home page

### 홈화면

![homeimg](https://user-images.githubusercontent.com/103020096/171074582-5aeafd3f-0a7c-40c3-88ae-77bfa7605a9f.jpg)

# Explanation

##### 로고기능

- 로고에는 애니메이션 효과를 줌

##### 헤더영역 목록

- 헤더목록 노토산스 폰트 로그인에는 회색부여 간격조절
- 목록 클릭시 각페이지로 이동 호버시 색상변경

##### 햄버거 메뉴 설명

- 햄버거 메뉴 클릭시 서브페이지 목록 출현

##### 페이지 이동 버튼

- SNS 아이콘 영역
- 페이스북 인스타 트위터 클릭시 마포구청 SNS이동
- 배경색과 테두리를 설정 애니메이션효과 부여

##### 텍스트 애니메이션 효과

- 왼쪽에서 오른쪽 반복 하는 애니메이션

##### 영화 포스터 클릭시

- 해당 영화에 대한 예고편 팝업 출력
- 영화 설명문과 그림자효과

##### 카피라이트 클릭시

- 나의 깃허브로 이동

# 1. MAPO MOVIE bars menu

### 햄버거메뉴

![barsimg](https://user-images.githubusercontent.com/103020096/171076420-c0986dfc-d2a1-4d9b-91a2-2eee0a7782b2.jpg)

# Explanation

##### 햄버거 메뉴 클릭시

- 뒷배경은 어두어짐

##### 로고

- 360도 애니메이션 추가

##### 전체 텍스트 요소

- 마우스 호버시 보라색 색상효과

##### 네이버 카카오 아이콘

- SNS 아이콘 영역
- 마우스 호버시 흔들리는효과

##### 서비스 공지사항 아이콘

- 마우스 호버시 색상 변경

##### 영화 팝업 클릭시

- 좌우 반전효과

# 1. MAPO MOVIE home popup

### 팝업창

![mainone](https://user-images.githubusercontent.com/103020096/171080241-bb28e123-a1ea-48ce-9616-457843a48424.jpg)
![maintwo](https://user-images.githubusercontent.com/103020096/171079203-9d29b551-9bcc-4742-af4f-4be1eddea4d8.jpg)

# Explanation

##### 영화 포스터

- 마우스 호버시 배경 어두어짐
- 텍스트 박스 클릭시 팝업 실행

##### 팝업 영역

- 각 영화 예고편 실행
- 400x180 해상도 기준으로 만듬
- 오디오 확대 기능

# 1. 팝업창코드

```swift
(function ($) {
  $(function () {
    // 클릭 이벤트 바인딩
    // jQuery v.1.7.0에서 .bind() 대신 .on()을 사용합니다.
    $(".imgone").on("click", function (e) {
      let self = $(this), //button
        content = $(".content");
      $("element_to_pop_up").bPopup({
        onOpen: function () {
          content.html(self.data("bpopup") || "");
        },
        onClose: function () {
          content.empty();
        },
      });
      // 기본 작업이 트리거되지 않도록 합니다.
      e.preventDefault();
      // 클릭 이벤트가 발생할 때 bPopup 트리거링
      $("#element_to_pop_up").bPopup();
    });
    })(jQuery);
```

# 2. MAPO MOVIE page

### 마포무비

![mapomovie](https://user-images.githubusercontent.com/103020096/171077661-2ed6bc34-3670-462f-8865-9f5e4eda773a.jpg)

# Explanation

##### 움직이는 텍스트 효과

- 구글 웹폰트 사용 움직이는 트랜지션 효과
- 텍스트 그라데이션 추가

##### Top Ten 슬라이드

- 좌우 슬라이드 구현
- 마우스 오버시 해당 영역 확대
- 텍스트 박스 구현

##### Most Viewed 슬라이드

- 좌우 슬라이드 구현
- 마우스 오버시 해당 영역 확대
- 텍스트 박스 구현

##### Recommended For You

- 좌우 슬라이드 구현
- 영화 제목과 설명
- 영화 목록추가

# 3. Theater

### 극장페이지

![theater](https://user-images.githubusercontent.com/103020096/171079891-1fa0a4dc-96ee-4daa-8259-4a7038257078.jpg)

##### 움직이는 텍스트 효과

- 구글 웹폰트 사용 움직이는 트랜지션 효과
- 텍스트 그라데이션 추가

##### 메인 슬라이드

- 좌측으로 3초후 이동하는 슬라이드

##### 비디오 박스

- 마우스 호버시 해당 브랜드 비디오 실행

# 3. Theater submenu

### 극장소개

![submenu1](https://user-images.githubusercontent.com/103020096/171080482-b910ce88-b55a-40fd-acc8-20c673b5981c.jpg)
![submenu2](https://user-images.githubusercontent.com/103020096/171080491-db8d2708-b712-4be0-812f-44506d771ff2.jpg)
![submenu](https://user-images.githubusercontent.com/103020096/171080471-c6839c90-d7b8-4156-8615-f8207dd7efe2.jpg)
![button](https://user-images.githubusercontent.com/103020096/171080705-b95298fa-cc20-4d5b-9f12-a98d9fee8e19.jpg)

# Explanation

##### 극장 서브메뉴 소개

- 스크롤시 이미지 텍스트 zoom 기능
- 아래로 스크롤시 사라졌다가 다시 생기는 기능

##### 탑 스크롤

- 아래로 스크롤시 탑버튼 클릭추가
- 상단페이지로 이동

# 3. Theater map

### 카카오맵

![map](https://user-images.githubusercontent.com/103020096/171081182-e1392326-f837-4ff7-9f25-a26f62e40714.jpg)

# Explanation

##### 카카오맵 기반 극장 위치 안내

- 키워드 검색하기 클릭시 영화관 등 다양한 검색기능
- 키워드 목록 클릭시 해당위치로 이동

##### 마커

- 마커 호버시 해당 업체 목록 추가

##### 키워드 목록

- 15개 메뉴에서 1,2,3 메뉴별로 이동시 다른 메뉴 목록추가

# 4. LOGIN

### 로그인

![LOGIN](https://user-images.githubusercontent.com/103020096/171081721-8567fbdb-c4cb-48ab-b52e-28c2b616e8ae.jpg)

# Explanation

##### 마포 문화재단 비디오 재생

- 마포 문화재단 영상 자동재생

- 키워드 목록 클릭시 해당위치로 이동

##### 마포무비 텍스트

- 텍스트 호버시 트랜지션 트랜스폼 효과
- 호버시 370도 도는 애니메이션 구현

##### 로그인 패스워드 폼

- 이메일 패스워드 입력 기능 호버시 보더효과
- 로그인 보더효과
- Back 버튼 홈으로 돌아가기

---

![man](https://user-images.githubusercontent.com/103020096/171081934-f9073139-c1ee-475e-8c90-1ed401cedc24.jpg)

THANK YOU
