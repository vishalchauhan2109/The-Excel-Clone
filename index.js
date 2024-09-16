$(document).ready(function () {
    for (let i = 0; i < 100; i++) {

        let ans = " ";
        let n = i;


        while (n > 0) {
            let rem = n % 26;
            if (rem == 0) {
                ans = "Z" + " ";
                n = (n % 26) - 1;
            }
            else {
                ans = String.fromCharCode(rem - 1 + 65) + ans;
                n = Math.floor(n / 26);
            }


            let coloums = $(`<div class="coloumn " id="col-cod-${ans}" data =" col-id-${i}">${ans}</div>`);
            $(".top-right").append(coloums);
            let rows = $(`<div class="row" id="row-id-${i}">${i}</div>`);
            $(".bottom-left").append(rows);
         }
         

        for (let i = 1; i <= 100; i++) {
            let row = $(`<div class="srdc"></div>`)
            for (let j = 1; j <= 100; j++){
                let coloumn = $(`<div class="cell" contenteditable="true" id="coloumn-${1}"></div>`)
                row.append(coloumn);    
                $(".bottom-right").append(row);
            }
        }


    }
});

