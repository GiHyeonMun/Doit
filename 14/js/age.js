var currentYear = 2022;
var birthYear;
var age;

birthYear = prompt("태어난 연도를 입력하시오. (YYYY)","");
age = currentYear - birthYear + 1;
document.write(currentYear + "년 현재<br>");
document.write(birthYear + "년에 태어난 사람의 나이는 " + age + "세입니다.");