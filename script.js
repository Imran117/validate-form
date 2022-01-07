let forms = document.querySelector('#form'),
    inputs = document.querySelectorAll('.tab'),
    tabsHuman = document.querySelector('.humans__tabs'),
    arr = [];


forms.addEventListener('submit', e => {
    e.preventDefault()
    let result = Object.fromEntries(new FormData(e.target).entries())
    
    if (!arr) {
        arr.push(result)
        humanTabs()
    } else {
        let answer = arr.some(item => item.login.toLowerCase() == result.login.toLowerCase())
        answer == true ? alert('bunday foydalanuvchi mavjud!') : arr.push(result), humanTabs()
    }

})

function humanTabs() {
    tabsHuman.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        tabsHuman.innerHTML += `
          <div>
            <div>
                <h2>${i + 1}-Foydalanuvchi</h2>
                <h4>ism: ${element.name}</h4>
                <h4>familiya ${element.firstname}</h4>
                <h4>login: ${element.login}</h4>
            </div>
      
            <div>
                <p>tug'ilgan sana: ${element.age}/${element.ageThow}/${element.year}</p>
            </div>
          </div>
        `
    }
}

function validation() {
    inputs.forEach(item => {
        item.addEventListener('keyup', () => {
            let val = item.value.search(/[&<>"'-]/g)
            if (val != -1) {
                alert('simbol kiritmang!!!')
                item.value = ''
            }
            
        })
    })
}
validation()















// function escapeHtml() {
//     inputs.forEach(item => {
//         item.addEventListener('keyup', e => {
//             let result = item.value.search(/[&<>"'-]/g)
//             if (result != -1) {
//                 alert('simbol kiritmang');
//                 item.value = ''
//             }
//         })
//     })
// }

// escapeHtml()