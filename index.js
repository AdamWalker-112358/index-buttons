const buttonContainer = document.querySelector('.body__buttons');

// SOLUTION 1
// function createButtons(amount) {
//     buttonContainer.innerHTML = [...(new Array(amount)).keys()].map(function (index) {
//         return `<button onclick="alert('${index}')">Click ${index}</button>`
//     }).join('');
// }

// SOLUTION 2
// function createButtons(amount) {
//     [...(new Array(amount)).keys()].forEach(function (index) {
//         var button = document.createElement('button')
//         button.textContent = `Click ${index}`;
//         button.addEventListener('click', function () {
//             alert(index)
//         })
//         buttonContainer.append(button);
//     })
// }

// SOLUTION 3
function createButtons(amount) {
    for (var index = 0; index < amount; index++){
        function newButton(index) {
            var button = document.createElement('button')
            button.textContent = `Click ${index}`;
            button.addEventListener('click', function () {
                alert(index)
            })
            return button;
        
        }
        var button = newButton(index);
        buttonContainer.append(button);
        
    }
}

createButtons(10);