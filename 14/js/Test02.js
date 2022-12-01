    const memNum = parseInt(prompt("입장객 명수"));
    const colNum = parseInt(prompt("1열당 수용가능 명수"));

    const seatNum = memNum % colNum === 0 ? memNum / colNum : memNum / colNum + 1;

    if(memNum && colNum){
        for(let i = 0; i < seatNum; i++){
            document.write('<tr>');
            MakeRowSeat(i);
            document.write('</tr>');
        }
    } else {
        document.write("잘못된 값을 입력")
    }

    function MakeRowSeat(nowRow) {
        for(let x = 1; x <= colNum; x++){
            const SeatNo = nowRow * colNum + x ;
            if(seatNum > memNum) break;
            document.write('<td>좌석 ' + SeatNo + '</td>');
        }
        return true;
    }