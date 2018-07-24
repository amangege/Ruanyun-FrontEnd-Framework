var total = 30  // 总数
var maxLength = 9 // 展示几个数字
var current = 1  // 标记目前点击

var array = []
for (var i = 0; i < total+1; i++) {
    array[i] = i
}

init()






//  helper function
function init() {
    generatorSpan(current)
    bindEvent()
}
function bindEvent() {
    $('#pagination').on('click', '.num span', function(e){
        current = +e.currentTarget.innerHTML 
        generatorSpan(current)
    })

}

function beActive(i) {
    $('.num span').eq(i).addClass('active')
}

function generatorSpan(current) {
    var spanList = [current]
    var left = current - 1
    var right = current + 1
    var isBreak = 0

    while (spanList.length < maxLength) {
        if (isBreak === 2) {
            break
        }
        isBreak = 0
        if (left > 0) {
            spanList.unshift(left)
            left -= 1
        } else {
            isBreak++
        }
    
        if (right < total+1) {
            spanList.push(right)
            right += 1
        } else {
            isBreak++
        }
    }
    $('.num').empty()
    for (var i = 0; i < spanList.length; i++) {
        $('.num').append('<span>' + spanList[i] + '</span>' )
        if (spanList[i] === current) {
            beActive(i)
        }
    }
}
