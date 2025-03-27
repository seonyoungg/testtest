/*
제목: 달팽이는 올라가고 싶다
설명: 달팽이의 움직임을 계산하는 문제
제출: https://www.acmicpc.net/submit/2869

문제
땅 위에 달팽이가 있다. 
이 달팽이는 높이가 V미터인 나무 막대를 올라갈 것이다.
달팽이는 낮에 A미터 올라갈 수 있다. 
하지만, 밤에 잠을 자는 동안 B미터 미끄러진다. 
또, 정상에 올라간 후에는 미끄러지지 않는다.

달팽이가 나무 막대를 모두 올라가려면, 며칠이 걸리는지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 세 정수 A, B, V가 공백으로 구분되어서 주어진다. (1 ≤ B < A ≤ V ≤ 1,000,000,000)

출력
첫째 줄에 달팽이가 나무 막대를 모두 올라가는데 며칠이 걸리는지 출력한다.

[AI가 추가한 테스트 케이스 10개]
예제 입력 1
2 1 5
예제 출력 1
4

예제 입력 2
5 1 6
예제 출력 2
2

예제 입력 3
100 99 1000000000
예제 출력 3
999999901

예제 입력 4
4 2 10
예제 출력 4
4

예제 입력 5
3 2 9
예제 출력 5
7

예제 입력 6
999999999 999999998 1000000000
예제 출력 6
2

예제 입력 7
1 0 1
예제 출력 7
1

예제 입력 8
10 1 20
예제 출력 8
3

예제 입력 9
9 8 17
예제 출력 9
9

예제 입력 10
100 1 101
예제 출력 10
2

예제 입력 11
50 49 100
예제 출력 11
51

예제 입력 12
1000000 999999 1000001
예제 출력 12
2

예제 입력 13
500000000 1 1000000000
예제 출력 13
3
*/

