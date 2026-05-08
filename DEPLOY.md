# VARZAR Shoot Planner 배포 방법

이 앱은 촬영 책임자가 제품 리스트, 촬영완료 체크, 순서 변경을 관리하는 웹앱입니다.

## Render 배포

1. 이 폴더를 GitHub 저장소에 올립니다.
2. Render에서 `New Web Service`를 선택합니다.
3. GitHub 저장소를 연결합니다.
4. 설정은 아래처럼 둡니다.

- Environment: `Node`
- Build Command: 비워두기
- Start Command: `npm start`

배포가 끝나면 Render가 `https://...onrender.com` 형태의 주소를 줍니다.

## 주의

무료 서버는 잠시 사용하지 않으면 잠들 수 있습니다. 처음 접속할 때 몇 초 정도 늦게 열릴 수 있습니다.

현재 서버 저장 방식은 `data/shoot-state.json` 파일에 저장합니다. 간단한 촬영 현장 관리에는 충분하지만, 장기 운영이나 여러 촬영 프로젝트를 동시에 관리하려면 DB 저장 방식으로 바꾸는 것이 좋습니다.
