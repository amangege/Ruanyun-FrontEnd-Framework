var total = 30  // 总数, 一般为viewModel.total
var maxLength = 9 // 展示几个页码
var current = 1  // 标记目前点击, 一般为viewModel.pageNo

generatorSpans(current)
bindEvents()

//  helper function
function generatorSpans(current) {
    var spanList = [current];
    var left = current - 1;
    var right = current + 1;

    spanList = leftAndRight(left, right, spanList)

    $('#pagination .num').empty();
    appendSpans(spanList);
}

function appendSpans(spanList) {
    for (var i = 0; i < spanList.length; i++) {
        $('#pagination .num').append('<span>' + spanList[i] + '</span>' )
        if (spanList[i] === current) {
            beActive(i)
        }
    }
}

function bindEvents() {
    $('#pagination').on('click', '.num span', function(e){
        current = +e.currentTarget.innerHTML; 
        generatorSpans(current);
    })

    $('#pagination .prev').on('click', function(e) {
        if (current <= 1)
            return;
        current -= 1;
        generatorSpans(current);
    })

    $('#pagination .next').on('click', function(e) {
        if (current >= total)
            return;
        current += 1;
        generatorSpans(current);
    })
}

function beActive(i) {
    $('#pagination .num span').eq(i).addClass('active');
}

function leftAndRight(left, right, spanList) {
    var isBreak = 0;
    while (spanList.length < maxLength) {
        if (isBreak === 2) {
            break;
        }

        isBreak = 0;
        if (left > 0) {
            spanList.unshift(left);
            left -= 1;
        } else {
            isBreak++;
        }
    
        if (right < total+1) {
            spanList.push(right);
            right += 1;
        } else {
            isBreak++;
        }
    }
    return spanList;
}
