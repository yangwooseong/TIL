react-query 기능

1. cache: default 5 분 동안 fetch한 데이터를 캐싱한다. useQuery에 인자로 넘겨준 키값으로 조회해서 캐시가 있으면 그걸 일단 보여준다음에, 백그라운드에서 다시 fetching을 해서 새 데이터를 보여준다. 데이터 업데이트가 없었다면터동일 데이터를, 있었다면 새로운 데이터를 보여준다. 캐싱된 데이터가 있다면 isLoading = false, isFetching = true -> false 가 되는 것을 확인할 수 있다. 만약 데이터가 자주 업데이트 되지 않아서 필요없는 fetching 을 막고싶다면 stale time (default 0sec) 을 설정하면 된다.
