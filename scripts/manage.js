


const form_input_item_id = document.getElementById('form_input_item_id')
const form_input_item_name = document.getElementById('form_input_item_name')
const form_input_item_price = document.getElementById('form_input_item_price')
const form_input_item_imageURL = document.getElementById('form_input_item_imageURL')
const form_input_item_quantity = document.getElementById('form_input_item_quantity')
const form_input_item_inStock = document.getElementById('form_input_item_inStock')
const form_input_item_button = document.getElementById('form_input_item_button')
const form_input_item_inStock_class = document.querySelector('.form-input-item-inStock')
const div_message = document.getElementById('div_message')
const plus_icon = document.getElementById('plus-icon')
const div_add = document.querySelector('.div-add')
const div_manage_left = document.getElementById('div_manage_left')
const manage_table = document.getElementById('manage_table')

PopulateList()
IdChange()


function PopulateList() {
    SearchManage = []
    let manage_table = document.getElementById('manage_table')
    manage_table.innerHTML = ''
    let manage_tableRow_data = document.getElementById('manage_tableRow_data')
    let manage_tableHead_dataID = document.getElementById('manage_tableHead_dataID')
    let manage_tableHead_dataName = document.getElementById('manage_tableHead_dataName')
    let manage_tableHead_dataImage = document.getElementById('manage_tableHead_dataImage')
    let manage_tableHead_dataPrice = document.getElementById('manage_tableHead_dataPrice')
    let manage_tableHead_dataQuantity = document.getElementById('manage_tableHead_dataQuantity')
    let manage_tableHead_dataStatus = document.getElementById('manage_tableHead_dataStatus')
    
    ProductSort()

    Products.map(product => {

        let newTR = document.createElement('tr')
        let tdID = document.createElement('td')
        let tdName = document.createElement('td')
        let tdImage = document.createElement('td')
        let tdPrice = document.createElement('td')
        let tdQuantity = document.createElement('td')
        let tdStatus = document.createElement('td')

        manage_table.setAttribute('border', '1');

        tdID.innerText = product.id
        tdID.style.whiteSpace = 'nowrap'

        tdName.innerText = product.name
        tdName.style.whiteSpace = 'nowrap'
        tdName.style.width = '100px'
        tdName.tabIndex = '-1'

        tdImage.innerText = product.imageURL
        tdImage.style.whiteSpace = 'nowrap'
        tdImage.style.width = '100px'
        

        tdPrice.innerText = f.format(product.price)
        tdQuantity.innerText = product.quantity
        if(product.quantity > 0){
            tdStatus.innerText = 'in-stock'
        } else {
            tdStatus.innerText = 'out of stock'

        }
        newTR.id = product.id
       
        newTR.appendChild(tdID)
        newTR.appendChild(tdName)
        newTR.appendChild(tdImage)
        newTR.appendChild(tdPrice)
        newTR.appendChild(tdQuantity)
        newTR.appendChild(tdStatus)
        manage_table.appendChild(newTR)

        let searchObject = {id: `${product.id}`, searchTitle: `${product.name}`}
        SearchManage.push(searchObject)
    
    
        
   
    })

    
}




// top buttons listener

function AddButton() {
    document.getElementById('form_input_item_button').style.color = 'white'
    document.getElementById('form_input_item_button').style.backgroundColor = 'green'
    document.getElementById('form_input_item_button').value = 'ADD'
    form_input_item_id.style.visibility = 'hidden'
    div_message.style.backgroundColor = 'green';
    div_message.innerText = 'Please input the details of the new product.'
    form_input_item_name.style.visibility = 'visible'
    form_input_item_price.style.visibility = 'visible'
    form_input_item_imageURL.style.visibility = 'visible'
    form_input_item_quantity.style.visibility = 'visible'
    form_input_item_inStock_class.style.visibility = 'visible'

}
async function EditButton() {
    
    document.getElementById('form_input_item_button').style.color = 'white'
    document.getElementById('form_input_item_button').style.backgroundColor = 'blue'
    document.getElementById('form_input_item_button').value = 'SAVE'
    div_message.style.visibility = 'visible'
    div_message.style.backgroundColor = 'blue';
    div_message.style.color = 'white'
    div_message.innerText = 'Please type in the "ID" of the product you want to edit.';
    form_input_item_id.style.visibility = 'visible'
    form_input_item_name.style.visibility = 'hidden'
    form_input_item_price.style.visibility = 'hidden'
    form_input_item_imageURL.style.visibility = 'hidden'
    form_input_item_quantity.style.visibility = 'hidden'
    form_input_item_inStock_class.style.visibility = 'hidden'


}

function DeleteButton(){
    
    document.getElementById('form_input_item_button').style.color = 'white'
    document.getElementById('form_input_item_button').style.backgroundColor = 'red'
    document.getElementById('form_input_item_button').value = 'DELETE'
    div_message.style.visibility = 'visible'
    div_message.style.backgroundColor = 'red';
    div_message.style.color = 'white'
    div_message.innerText = 'Please type in the "ID" of the product you want to delete.';

    form_input_item_id.style.visibility = 'visible'
    form_input_item_name.style.visibility = 'hidden'
    form_input_item_price.style.visibility = 'hidden'
    form_input_item_imageURL.style.visibility = 'hidden'
    form_input_item_quantity.style.visibility = 'hidden'
    form_input_item_inStock_class.style.visibility = 'hidden'
    

}

//messages

function RequiredMessage() {
    return new Promise((resolve, reject)=>{
        div_message.style.visibility = 'visible'
        div_message.style.backgroundColor = 'red';
        div_message.style.color = 'white'
        div_message.innerText = 'Required!';
        let removeMessage = setTimeout(()=> {
            div_message.style.visibility = 'hidden'
            resolve('required')
        }, 3000)
       


    })

    
}

function SuccessMessage(message) {
    return new Promise((resolve, reject)=>{
        div_message.style.backgroundColor = 'aqua';
        div_message.style.color = 'green'
        div_message.innerText = `Successfully ${message}!`;
        div_message.style.visibility = 'visible'
        let timeOut = setTimeout(()=>{
            div_message.style.visibility = 'hidden'
            resolve('success')
        }, 3000)
        

    })
}

function ErrorMessage(message) {
    return new Promise((resolve, reject)=>{
        div_message.style.backgroundColor = 'lightCoral';
        div_message.style.color = 'red'
        div_message.innerText = `Unable to ${message}!`;
        div_message.style.visibility = 'visible'
        let timeOut = setTimeout(()=>{
            div_message.style.visibility = 'hidden'
            resolve('error')
        }, 3000)
        

    })

}

// utility functions

function IdChange() {
    form_input_item_id.onkeyup = async ()=>{

        await LocateProduct(form_input_item_id.value)
    
    }
}

function CheckInputs(){
    if(form_input_item_button.value === 'ADD'){
        AddProduct()
    } else if(form_input_item_button.value === 'DELETE') {
        DeleteProduct()

    } else if(form_input_item_button.value === 'SAVE') {
        EditProduct()
    }

}

function ClearInputs() {
    form_input_item_name.value = ''
    form_input_item_price.value = ''
    form_input_item_imageURL.value = ''
    form_input_item_quantity.value = ''
}

function LocateProduct(ID) {
    return new Promise((resolve, reject)=>{
        ClearInputs()
        form_input_item_name.style.visibility = 'hidden'
        form_input_item_price.style.visibility = 'hidden'
        form_input_item_imageURL.style.visibility = 'hidden'
        form_input_item_quantity.style.visibility = 'hidden'

        let newProduct = null
        for(let i = 0; i<Products.length; i++) {
            if(Products[i].id.toString() === ID.toString()){
                newProduct = Products[i]
                break
            }
        }
        if(newProduct === null) {
            reject('not found')
        } else {
            form_input_item_name.style.visibility = 'visible'
            form_input_item_name.value = newProduct.name
            form_input_item_price.style.visibility = 'visible'
            form_input_item_price.value = newProduct.price
            form_input_item_imageURL.style.visibility = 'visible'
            form_input_item_imageURL.value = newProduct.imageURL
            form_input_item_quantity.style.visibility = 'visible'
            form_input_item_quantity.value = newProduct.quantity

            resolve(newProduct)

        }
        
        
    })
}
function SaveProducts() {
    localStorage.setItem('Products', JSON.stringify(Products))
}

function Add(a, b, c, d, e){
    return new Promise((resolve, reject)=>{
        let newB = b[0].toUpperCase() + b.slice(1).toLowerCase()
        let newProduct = {id: a, name: newB, price: parseFloat(c), imageURL: d, quantity: e}
        let searchObject = {id: `${newProduct.id}`, searchTitle: `${newProduct.name}`}
        Products.push(newProduct)
        SearchManage.push(searchObject)
        SaveProducts()
        resolve('added')
        CreateBoxes()

    })
    
}


function Delete(ID){
    return new Promise((resolve, reject) => {
        let newProduct = null
        Products = Products.filter(function (product){
                
            if(product.id.toString() === ID.trim().toString()){
                newProduct = product  
                return false
            } else {
                return true
            }
            
        })

        if (newProduct !== null){
            let searchObject = {id: `${newProduct.id}`, searchTitle: `${newProduct.name}`}
            SearchManage.pop(searchObject)
            CreateBoxes()
            SaveProducts()
            resolve(newProduct)
        } else {
            reject('not found')
        }
        

    })
    

}

async function AddProduct(){

    if(form_input_item_name.value.trim() === '' || form_input_item_price.value.trim() === '' || form_input_item_imageURL.value.trim() === '' || form_input_item_quantity.value.trim() === '') {
        
        if(form_input_item_name.value.trim() === '') {
            form_input_item_name.style.border = '2px solid red'
            form_input_item_name.onkeyup = ()=> {
                form_input_item_name.style.border = 'none'
            }
            RequiredMessage()

        }
        if(form_input_item_price.value.trim() === '') {
            form_input_item_price.style.border = '2px solid red'
            form_input_item_price.onkeyup = ()=> {
                form_input_item_price.style.border = 'none'
            }
            RequiredMessage()


        } 
        if(form_input_item_imageURL.value.trim() === ''){
            form_input_item_imageURL.style.border = '2px solid red'
            form_input_item_imageURL.onkeyup = ()=> {
                form_input_item_imageURL.style.border = 'none'
            }
            RequiredMessage()
        }
        if(form_input_item_quantity.value.trim() === '') {
            form_input_item_quantity.style.border = '2px solid red'
            form_input_item_quantity.onkeyup = ()=> {
                form_input_item_quantity.style.border = 'none'
            }
            RequiredMessage()
        }
        IdChange()
    } else {
        await Add(Products.length + 1, form_input_item_name.value, form_input_item_price.value, form_input_item_imageURL.value, form_input_item_quantity.value)
        
        SuccessMessage('added')
        PopulateList()
        ClearInputs()

    }
    
    

}

async function EditProduct() {
    if(form_input_item_id.value.trim() === '') {
        form_input_item_id.style.border = '2px solid red'
        form_input_item_id.onkeyup = ()=> {
            form_input_item_id.style.border = 'none'
        }
        await RequiredMessage()
        div_message.style.visibility = 'visible'
        div_message.style.backgroundColor = 'blue';
        div_message.style.color = 'white'
        div_message.innerText = 'Please type in the "ID" of the product you want to edit.';
        IdChange()


    } else {
        try {
            let isDeleted = await Delete(form_input_item_id.value)
            if (isDeleted !== 'not found'){
                Add(form_input_item_id.value, form_input_item_name.value, form_input_item_price.value, form_input_item_imageURL.value, form_input_item_quantity.value)
                PopulateList()
                

                await SuccessMessage('edited')
                div_message.style.visibility = 'visible'
                div_message.style.backgroundColor = 'blue';
                div_message.style.color = 'white'
                div_message.innerText = 'Please type in the "ID" of the product you want to edit.';

                form_input_item_id.value = ''
                ClearInputs()

            }
        
        } catch(error) {
            await ErrorMessage('edit. Product not found')
            div_message.style.visibility = 'visible'
            div_message.style.backgroundColor = 'blue';
            div_message.style.color = 'white'
            div_message.innerText = 'Please type in the "ID" of the product you want to edit.';

        }
        
        


    }


}


async function DeleteProduct(){
    
    
    if(form_input_item_id.value.trim() === '') {
        form_input_item_id.style.border = '2px solid red'
        form_input_item_id.onkeyup = ()=> {
            form_input_item_id.style.border = 'none'
        }
        await RequiredMessage()
        div_message.style.visibility = 'visible'
        div_message.style.backgroundColor = 'red';
        div_message.style.color = 'white'
        div_message.innerText = 'Please type in the "ID" of the product you want to delete.';
        IdChange()

    } else {

        try {
            await Delete(form_input_item_id.value)
            PopulateList()
            await SuccessMessage('deleted')
            div_message.style.visibility = 'visible'
            div_message.style.backgroundColor = 'red';
            div_message.style.color = 'white'
            div_message.innerText = 'Please type in the "ID" of the product you want to delete.';
            form_input_item_id.value = ''
            ClearInputs()

        } catch(error) {
            await ErrorMessage('delete. Product not found')
            div_message.style.visibility = 'visible';
            div_message.style.backgroundColor = 'red';
            div_message.style.color = 'white';
            div_message.innerText = 'Please type in the "ID" of the product you want to delete.';
    

        }
        
        

    }
    

}
function addItemsToggle() {
    // div_manage_left
    console.log(plus_icon.innerText)
    switch(plus_icon.innerText) {
        case 'add':
            div_manage_left.style.display = 'block'
            manage_table.classList.add('hide')
            plus_icon.innerText = 'close'
            break

        case 'close':
            div_manage_left.style.display = 'none'
            manage_table.classList.remove('hide')
            plus_icon.innerText = 'add'
            break
    }

}

div_add.addEventListener('click', addItemsToggle)


