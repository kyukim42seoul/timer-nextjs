### 내가 쓸 타이머

- ADD timer 버튼 -> 시간 입력칸 -> 엔터 -> 타이머 등록
- 시간 입력 칸
  - 분, 초, 이름, (사운드)

### 추가 할 내용

- 음소거 버튼
- 위 아래 키로 사운드 선택
  - 각 사운드는 짧게 들려주는 식으로
- 어떤 타이머를 메인으로 할 지 -> 메인 타이머의 시간을 title 로
- 로컬스토리지에 저장해서 껐다 켜도 유지되도록 -- 진행 중...
  - getInterval 로직 함수 하나로 묶고
  - 시간이 변할 때 remainTimeInfo 에 템플릿 리터럴로 객체 정보 저장
  - page 에서 useEffect 로 처음 렌더링 될 때 로컬스토리지 정보 가져오기
    - prefix 랑 번호가 id 에 포함되어야 가져올 때 필터링, 순차 보장에 좋음
- 프리셋 타이머랑 진행 중이던 타이머를 분리해서 보관해야 함.
