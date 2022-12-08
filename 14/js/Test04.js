var Number = prompt("몇 까지의 7의 배수를 찾을까요?");
        var i;
        var j = 0;

        if(isNaN(Number)){
            document.write("숫자를 입력 해주세요.")
        } else if(Number !== null){
            for(i = 1; i <= Number; i++){
              if( i % 7 === 0){
                document.write( i + ", ");
                j++;
              }
          }
          document.write("<br><br>" + "<b>7의 배수의 개수 : " + j);
        } else {
            alert("입력 취소");
        }