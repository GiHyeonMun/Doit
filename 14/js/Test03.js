var Number = prompt("7의 배수일까요?");
        var i;
        var j = 0;

        if(isNaN(Number)){
            document.write("올바른 값을 입력 해주세요.")
        } else if(Number !== null){
            if(isNaN(Number)){
                document.write("숫자를 입력해주세요."); // 숫자 판별 
            } else if(Number % 7 === 0){
                document.write(Number + "<b>는 7의 배수입니다.");
            } else {
                document.write(Number + "<b>는 7의 배수가 아닙니다.");
            }
        } else {
            alert("입력 취소");
        }