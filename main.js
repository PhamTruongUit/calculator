var numbers = document.querySelectorAll('.numbers div')
    operator = document.querySelectorAll('.operators div')
    equal = document.querySelector('.equal')
    results = document.querySelector('.input')
function inputs() 
{
    numbers.forEach(e => e.addEventListener('click', () => e.innerHTML != 'C' 
                                                    ? results.innerText += e.innerHTML 
                                                    : results.innerText = '' )) 
    operator.forEach(e =>e.addEventListener('click', () => results.innerText += e.innerHTML))
}
function result() 
{
    equal.addEventListener('click', 
    () => {
        var a = ''
        a = results.innerText.replace(/\×/g,'*')
        a = a.replace(/\÷/g,'/')
        results.innerText = eval(a).toFixed(2)
    })
}
function init()
{
    inputs()
    result() 
}
init()