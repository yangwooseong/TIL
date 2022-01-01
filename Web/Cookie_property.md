Cookie
path, /라면 모든 path 에게 보내짐
HttpOnly : Client 에서 접근 X
Secure : HTTPS 로 보내지도록
SameSite : Lax, Strict, None or not set.
Domain : 어떤 도메인에 보내질지
Max-age: 만료 시간

Chrome 80 이전에는 SameSite가 셋팅되지 않으면 None 이 디폴트였기 때문에 cross-site 요청에 보내졌지만, 이후에는 SameSite가 Lax 로 바뀌었기 때문에 cross-site 요청이 불가해짐. 추가 업데이트로, SameSite 가 None이라면 Secure flag 가 설정되어야 함. 설정되지 않으면 쿠키 셋팅 안됨 (set-cookie 무시함)
Client 가 요청할 때 credentials: include 옵션을 보내야 하는데, 이 옵션과 Access-Control-Allow-Origin: \* 를 같이 못쓴다고 하네.. 이게 쿠키가 안보내지는 문제였을 수도?
https://medium.com/swlh/7-keys-to-the-mystery-of-a-missing-cookie-fdf22b012f09
