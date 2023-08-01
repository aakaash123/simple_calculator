document.querySelector('#on-off').addEventListener('click', function() {
    const onOff = document.querySelector('#on-off')
    if (onOff.textContent == 'on') {
        onOff.textContent = 'off'
        document.querySelector('#input2').value = '0'
        document.querySelector('.calculator').classList.add('bgcc');
    } else {
        onOff.textContent = 'on'
        document.querySelector('#input2').value = ''
        document.querySelector('.calculator').classList.remove('bgcc');
    }
})


document.querySelector('#clear').addEventListener('click', function() {
    document.querySelector('#input2').value = '0'
})

const digits = document.querySelectorAll('.digit');
for (let digit of digits) {
    digit.addEventListener('click', function() {
        if (document.querySelector('#input2').value == '0') {
            document.querySelector('#input2').value = digit.textContent
        } else {
            document.querySelector('#input2').value += digit.textContent
        }
    })
}

document.querySelector('#point').addEventListener('click', function() {
    if (document.querySelector('#input2').value.indexOf('.') == '-1') {
        document.querySelector('#input2').value += '.';
    }
})


document.querySelector('#plus').addEventListener('click', function() {
    const input2 = document.querySelector('#input2').value 
    const input1 = document.querySelector('#input1').value 
    if (input1 == '') {
            document.querySelector('#input1').value = input2 + ' +'
            document.querySelector('#input2').value = '0'
    } else {
        equal()
        document.querySelector('#input1').value = document.querySelector('#input2').value + ' +'
        document.querySelector('#input2').value = '0'
    }
})

document.querySelector('#minus').addEventListener('click', function() {
    const input2 = document.querySelector('#input2').value 
    const input1 = document.querySelector('#input1').value 
    if (input1 == '') {
            document.querySelector('#input1').value = input2 + ' -'
            document.querySelector('#input2').value = '0'
    } else {
        equal()
        document.querySelector('#input1').value = document.querySelector('#input2').value + ' -'
        document.querySelector('#input2').value = '0'
    }
})

document.querySelector('#multiply').addEventListener('click', function() {
    const input2 = document.querySelector('#input2').value 
    const input1 = document.querySelector('#input1').value 
    if (input1 == '') {
            document.querySelector('#input1').value = input2 + ' x'
            document.querySelector('#input2').value = '0'
    } else {
        equal()
        document.querySelector('#input1').value = document.querySelector('#input2').value + ' x'
        document.querySelector('#input2').value = '0'
    }
})

document.querySelector('#devide').addEventListener('click', function() {
    const input2 = document.querySelector('#input2').value 
    const input1 = document.querySelector('#input1').value 
    if (input1 == '') {
            document.querySelector('#input1').value = input2 + ' %'
            document.querySelector('#input2').value = '0'
    } else {
        equal()
        document.querySelector('#input1').value = document.querySelector('#input2').value + ' %'
        document.querySelector('#input2').value = '0'
    }
})


const equal = function() {
    const input2 = document.querySelector('#input2').value 
    const input1 = document.querySelector('#input1').value 
    if (input1 != '') {
        if (input1[input1.length-1] == '+') {
            let a = parseFloat(input2)
            let b = parseFloat(input1)
            document.querySelector('#input1').value = ''
            document.querySelector('#input2').value = (a+b)
        } else if (input1[input1.length-1] == '-') {
            let a = parseFloat(input2)
            let b = parseFloat(input1)
            document.querySelector('#input1').value = ''
            document.querySelector('#input2').value = (a-b)
        } else if (input1[input1.length-1] == 'x') {
            let a = parseFloat(input2)
            let b = parseFloat(input1)
            document.querySelector('#input1').value = ''
            document.querySelector('#input2').value = (a*b)
        } else {
            let a = parseFloat(input2)
            let b = parseFloat(input1)
            if (a != 0) {
                document.querySelector('#input1').value = ''
                document.querySelector('#input2').value = (b/a)
            }
        }
    }
}

document.querySelector('#equal').addEventListener('click', equal)

const buttons = document.querySelectorAll('button')
for (let button of buttons) {
    button.addEventListener('click', function() {
        if (document.querySelector('#on-off').textContent == 'on') {
            document.querySelector('#input1').value = ''
            document.querySelector('#input2').value = ''
        }
    })
}
