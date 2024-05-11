const img = document.getElementById('cookie') 
let cnt = 0;


img.addEventListener('click', function(){
    cnt++
    document.getElementById('clicker__counter').innerHTML  = cnt;

    if (cnt % 2 !== 0) {
            img.width += 20
            img.height += 20
        }

    else {
            img.width -= 20
            img.height -= 20
        }
})

// const img = document.getElementById('cookie');
// let cnt = 0;

// // Первоначальное привязывание обработчика события onclick
// img.addEventListener('click', function() {
//     cnt++;
//     document.getElementById('clicker__counter').innerHTML = cnt;
    
//     // Изменение размеров изображения внутри обработчика события onclick
//     if (cnt % 2 !== 0) {
//         img.width += 20;
//         img.height += 20;
//     } else {
//         img.width -= 20;
//         img.height -= 20;
//     }
// });
