let productName = document.getElementById("product-name")
let productCount = document.getElementById("product-count")
let productType = document.getElementById("type-select")
let productList = document.getElementsByClassName("products-list")[0]

let addProductButton = document.getElementsByClassName("add-product")[0]
addProductButton.addEventListener("click", addProduct);

let productArray = [];

function addProduct(){ 
    const a = productType.value;
    const b = productName.value;
    const c = productCount.value;
    if(
        a != "" &&
        b != "" &&
        c != ""
    ){
        let obj = {
            productType: productType.value,
            productName: productName.value,
            productCount:productCount.value,
        }
        productArray.push(obj);
        }
        
        // productList.innerHTML= ""
        // productArray.forEach((e)=>{
            
        //     productList.innerHTML += `<div class="product-item"><span>Тип:${e.productType} </span> <span>Название: ${e.productName}</span><span>Количество: ${e.productCount}</span> </div> `;  
        // })

        // let listInfo = productArray
        
        // productList.innerHTML= "";
        // let htmlCont = "";
        // for(let i = 0; i < productArray.length; i++){
        //     productList.innerHTML += `<div id="data-id" class="product-item"><span>Тип:${ productArray[i].productType} </span> <span>Название: ${ productArray[i].productName}</span><span>Количество: ${ productArray[i].productCount}</span><button class="deleteArr">Удалить</button> </div> `;
        //     console.log(productArray[i]);
            
        // }
        productName.value = ""
        productCount.value = ""
        productType.value = ""

        renderProducts();
}


// Функция для рендеринга всех продуктов
function renderProducts(){
    let htmlContent = "";
    
    for (let i = 0; i < productArray.length; i++) {
        htmlContent += 
            `<div class="product-item" data-id="${i}">
                <span>Тип: ${productArray[i].productType}</span>
                <span>Название: ${productArray[i].productName}</span>
                <span>Количество: ${productArray[i].productCount}</span>
                <button class="deleteArr">Удалить</button>
            </div>`;
    } 
    productList.innerHTML = htmlContent;
    console.log(productArray);
    
}



document.querySelector('body').addEventListener("click", function(e) {
    if (e.target.matches('.deleteArr')) {
        let item = e.target.closest('.product-item'); // Находим родительский div с классом product-item
        let index = item.getAttribute('data-id'); // Получаем индекс из data-id
        productArray.splice(index, 1); // Удаляем элемент из массива по индексу
        renderProducts(); // Рендерим обновленный список продуктов
    }
    if (e.target.matches(".clear-list")){
        productList.innerHTML ="" ;
        productArray.splice(0)
        console.log(productArray);
        
    }
});












// let a = "азиnа"
// let b = a.split("")
// console.log(b);
// let c = b.reverse()
//     console.log(c);

// function revers(){
//     let a = "азиза"
//     let b = a.split("")
//     let c = b.reverse("")
//     console.log(c);
//     if(b[0] == b[4], b[1] == b[3] ){
//         console.log(ok);
        
//     }
// }
// console.log(revers());
