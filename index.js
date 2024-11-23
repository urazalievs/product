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
            `<div class="product-item" data-id=" data-id:${productArray[i]}">
                <span>Тип: ${productArray[i].productType}</span>
                <span>Название: ${productArray[i].productName}</span>
                <span>Количество: ${productArray[i].productCount}</span>
                <button class="deleteArr">Удалить</button>
            </div>`;
            // console.log(productArray.indexOf(i++));
    } 
    productList.innerHTML = htmlContent;
    // console.log(productArray[0]);
    
}


document.querySelector('body').onclick = function(e) {
    if (e.target.className != 'deleteArr') return;  // Проверяем, что клик был по элементу с классом "close"
    let item = e.target.closest('.product-item');  // Находим ближайший родительский элемент с классом "item"
    
    if (item) {
        const productId = item.getAttribute('data-id');

        productArray = productArray.filter(product => product.id !== parseInt(productId));

        item.remove();

        console.log(productArray);
    }
    
    
};












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
