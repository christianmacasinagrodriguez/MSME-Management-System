let Products = [
    {id: 1, name: 'Print-colored-long', price: 13, imageURL: 'https://th.bing.com/th/id/R.17345c637d61f4d51bbeaf5b42eb7647?rik=cNwmIRTzoyvChw&riu=http%3a%2f%2fpropworkshop.nyc%2fwp-content%2fuploads%2f2015%2f08%2f40348.jpg&ehk=TwZ8gIDBGedbg4DlYddbETpcHGCC8dZDBhATuFWl%2fHw%3d&risl=&pid=ImgRaw&r=0', quantity:'1', inStock: true},
    {id: 2, name: 'Print-colored-short', price: 11, imageURL: 'https://img1.etsystatic.com/142/0/8887788/il_340x270.1203168323_oe16.jpg', quantity:'1', inStock: true},
    {id: 3, name: 'Print-black-long', price: 10, imageURL: 'https://th.bing.com/th/id/OIP.szWzZNMeuwz6wpxF8-d-xQHaLH?pid=ImgDet&rs=1', quantity:'1', inStock: true},
    {id: 4, name: 'Print-black-short', price: 8, imageURL: 'https://ecdn.teacherspayteachers.com/thumbitem/Black-lined-paper-for-handwriting-5742517-1593952971/medium-5742517-4.jpg', quantity:'1', inStock: true},
    {id: 5, name: 'Xerox-colored-long', price: 13, imageURL: 'https://th.bing.com/th/id/R.141024cb2bcaf90ba347308e9dd923a1?rik=52PWdtblsVXiAA&riu=http%3a%2f%2fc767204.r4.cf2.rackcdn.com%2fc6ffc082-ddc2-4044-bc82-20f360fcab8c.jpg&ehk=NFNCWHHlZidgL7ReyTfFxyw4dPkB5nAm%2fsjD%2ffvMlw4%3d&risl=&pid=ImgRaw&r=0', quantity:'1', inStock: true},
    {id: 6, name: 'Xerox-colored-short', price: 11, imageURL: 'https://th.bing.com/th/id/R.141024cb2bcaf90ba347308e9dd923a1?rik=52PWdtblsVXiAA&riu=http%3a%2f%2fc767204.r4.cf2.rackcdn.com%2fc6ffc082-ddc2-4044-bc82-20f360fcab8c.jpg&ehk=NFNCWHHlZidgL7ReyTfFxyw4dPkB5nAm%2fsjD%2ffvMlw4%3d&risl=&pid=ImgRaw&r=0', quantity:'1', inStock: true},
    {id: 7, name: 'Xerox-black-long', price: 5, imageURL: 'https://cdn.freebiesupply.com/logos/large/2x/xerox-9-logo-black-and-white.png', quantity:'1', inStock: true},
    {id: 8, name: 'Xerox-black-short', price: 4, imageURL: 'https://cdn.freebiesupply.com/logos/large/2x/xerox-9-logo-black-and-white.png', quantity:'1', inStock: true},
    {id: 9, name: 'Print-colored-long(Back-to-Back)', price: 20, imageURL: 'https://th.bing.com/th/id/R.2ce50727cb8c1ac5ddd07bac3383746e?rik=BXHIMN53J5CJWg&riu=http%3a%2f%2fimages.all-free-download.com%2fimages%2fgraphiclarge%2fabstract_colored_spherical_logos_design_vector_541601.jpg&ehk=V%2fYWmC9CUOwFXuh1dQ5%2fyB5T7vZTjTEtvBb6n%2bjbBuM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1', quantity:'1', inStock: true},
    {id: 10, name: 'Print-colored-short(Back-to-Back)', price: 18, imageURL: 'https://th.bing.com/th/id/R.2ce50727cb8c1ac5ddd07bac3383746e?rik=BXHIMN53J5CJWg&riu=http%3a%2f%2fimages.all-free-download.com%2fimages%2fgraphiclarge%2fabstract_colored_spherical_logos_design_vector_541601.jpg&ehk=V%2fYWmC9CUOwFXuh1dQ5%2fyB5T7vZTjTEtvBb6n%2bjbBuM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1', quantity:'1', inStock: true},
    {id: 11, name: 'Print-black-long(Back-to-Back)', price: 15, imageURL: 'https://images.designtrends.com/wp-content/uploads/2016/08/23183141/Set-of-minimalistic-black-and-white-logos.jpg', quantity:'1', inStock: true},
    {id: 12, name: 'Print-black-short(Back-to-Back)', price: 13, imageURL: 'https://images.designtrends.com/wp-content/uploads/2016/08/23183141/Set-of-minimalistic-black-and-white-logos.jpg', quantity:'1', inStock: true},
    {id: 13, name: 'Xerox-colored-long(Back-to-Back)', price: 20, imageURL: 'https://www.mambomedia.com/wp-content/uploads/2017/01/Xerox-Logo.jpg', quantity:'1', inStock: true},
    {id: 14, name: 'Xerox-colored-short(Back-to-Back)', price: 18, imageURL: 'https://www.mambomedia.com/wp-content/uploads/2017/01/Xerox-Logo.jpg', quantity:'1', inStock: true},
    {id: 15, name: 'Xerox-black-long(Back-to-Back)', price: 8, imageURL: 'https://static.vecteezy.com/system/resources/previews/000/064/426/original/vector-xerox-logo-graphics.jpg', quantity:'1', inStock: true},
    {id: 16, name: 'Xerox-black-short(Back-to-Back)', price: 7, imageURL: 'https://static.vecteezy.com/system/resources/previews/000/064/426/original/vector-xerox-logo-graphics.jpg', quantity:'1', inStock: true},
    {id: 17, name: 'Scan and Print', price: 25, imageURL: 'https://thumbs.dreamstime.com/z/d-print-scan-icons-logos-white-background-vector-illustration-38122733.jpg', quantity:'1', inStock: true},
    {id: 18, name: 'Photo Printing', price: 50, imageURL: 'https://www.perdanauniversity.edu.my/wp-content/uploads/2017/10/GALLERY-Icon.png', quantity:'1', inStock: true},


];


let SearchItems = []
let SearchMedias = []
let SearchManage = []


let f = new Intl.NumberFormat('en-us', {
    currency: 'PHP',
    style: 'currency'
})

// class Product {
//     constructor(id, name, price, imageURL, quantity, inStock) {
//         this.id = id;
//         this.name = name;
//         this.price = price;
//         this.imageURL = imageURL;
//         this.quantity = quantity;
//         this.inStock = inStock;
//     }
// }
Render()

function Render(){
    RetrieveProducts()
    Calculate()
    CreateBoxes()
    CreateElements()
    GroupSearch()   
    Time()
    ProductSort()
    // MyLocationAccess()
    

}



function CreateBoxes(){
    let div_main = document.getElementById('div_main')
    div_main.innerText = ''
    SearchItems = []

    ProductSort()    
    Products.map(product => {
        let searchObject = {id: `${product.id}`, searchTitle: `${product.name}`}
        SearchItems.push(searchObject)
        let newBox = document.createElement('div')
        newBox.id = product.id
        newBox.tabIndex = '-1'
        newBox.style.width = '250px';
        newBox.style.height = '300px';
        newBox.style.backgroundColor = 'black';
        newBox.style.borderRadius = '10px';
        newBox.style.border = '2px solid green';
        newBox.className = 'div-smallBoxes';
        div_main.appendChild(newBox)
        CreateElements(product, newBox)
        newBox.onclick = ()=>{
            AddToCart(product)
        } 
    }) 

}
function CreateElements(item, view) {
    let imageView = document.createElement('img')
    let productNameDIV = document.createElement('div')
    let productPriceDIV = document.createElement('div')

    if(item !== undefined) {
        imageView.src = item.imageURL
        imageView.style.height = '200px';
        imageView.style.width = '250px';
        imageView.style.borderRadius = '10px'
        imageView.style.backgroundColor = 'white'

        productNameDIV.innerText = item.name;
        productNameDIV.style.marginTop = '20px';
        productNameDIV.style.color = 'white';
        productNameDIV.style.display = 'flex';
        productNameDIV.style.justifyContent = 'center';

        productPriceDIV.innerText = '₱'+ item.price;
        productPriceDIV.style.marginTop = '5px';
        productPriceDIV.id = 'price' + item.id
        productPriceDIV.style.color = 'orange';
        productPriceDIV.style.display = 'flex';
        productPriceDIV.style.justifyContent = 'center';

        view.appendChild(imageView)
        view.appendChild(productNameDIV)
        view.appendChild(productPriceDIV)

    }
    
    
    
}

function AddToCart(item) {
    
    let cart_item_name = document.getElementById('cart_item_name')
    let cart_item_quantity = document.getElementById('cart_item_quantity')
    let cart_item_price = document.getElementById('cart_item_price')
  

    let new_cart_item_name = document.createElement('div')
    let new_cart_item_quantity = document.createElement('div')
    let new_cart_item_price = document.createElement('div')

    new_cart_item_name.style.width = '200px'
    new_cart_item_name.innerText = item.name
    new_cart_item_name.style.marginTop = '5px'
    new_cart_item_name.className = item.id
    new_cart_item_name.style.marginLeft = '10px'
    new_cart_item_name.style.whiteSpace = 'nowrap'
    new_cart_item_name.style.marginBottom = '20px'

    

   
    

    new_cart_item_quantity.innerText = 'x1'
    new_cart_item_quantity.style.marginTop = '5px'
    new_cart_item_quantity.style.color = 'gray'
    new_cart_item_quantity.className = item.id
    new_cart_item_quantity.contentEditable = 'true'
    new_cart_item_quantity.style.display = 'flex'
    new_cart_item_quantity.style.justifyContent = 'center'
    new_cart_item_quantity.style.marginBottom = '20px'
    new_cart_item_quantity.addEventListener('keypress', function(e) {
        if(e.key === 'Enter') {
            let quantity = parseInt(checkID[1].textContent.replace('x', ''))
            let currentTotal = checkID[2].textContent.replace(/,/g, '')
            let price = item.price
            let newAmountDue = amount_due.textContent.replace(/,/g, '')

            let total = quantity * price
            totalAmount = parseFloat(newAmountDue.replace('₱', '' )) - currentTotal.replace('₱', '') + total
    
            checkID[1].innerText = ''
            checkID[1].innerText = 'x' + quantity
            checkID[2].innerText = f.format(total).toString()
            amount_due.innerText = f.format(totalAmount).toString()
            document.getElementById('change').innerText = '₱000'
            document.getElementById('input_payment').value = ''
                
        }
    })

    new_cart_item_price.innerText = f.format(item.price).toString()
    new_cart_item_price.style.marginTop = '5px'
    new_cart_item_price.className = item.id
    new_cart_item_price.id = 'price'
    new_cart_item_price.style.marginBottom = '20px'

    let checkID = document.getElementsByClassName(`${item.id}`)
    let amount_due = document.getElementById('amount_due')
    let totalAmount = 0

    if(checkID.length === 3){
    
        let quantity = parseInt(checkID[1].textContent.replace('x', '')) + 1
        let price = item.price

        let total = quantity * price
        let newAmountDue = amount_due.textContent.replace(/,/g, '')
        totalAmount = parseFloat(newAmountDue.replace('₱', '')) + item.price
 
        checkID[1].innerText = ''
        checkID[1].innerText = 'x' + quantity
        checkID[2].innerText = f.format(total).toString()
        amount_due.innerText = f.format(totalAmount).toString()
        document.getElementById('change').innerText = '₱000'
        document.getElementById('input_payment').value = ''

    } else {
        let newAmountDue = amount_due.textContent.replace(/,/g, '')
        totalAmount = parseFloat(item.price) + parseFloat(newAmountDue.replace('₱', ''))

        cart_item_name.appendChild(new_cart_item_name)
        cart_item_quantity.appendChild(new_cart_item_quantity)
        cart_item_price.appendChild(new_cart_item_price)
        amount_due.innerText = f.format(totalAmount).toString()
        document.getElementById('change').innerText = '₱000'
        document.getElementById('input_payment').value = ''

    }
      
}

function Time(){
    let div_time = document.getElementById('div_time')
    let time = setInterval(()=> {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let hours = new Date().getHours()
        let minutes = new Date().getMinutes()
        let seconds = new Date().getSeconds()

        let month = new Date().getMonth()
        let numerice_day = new Date().getDate()
        let year = new Date().getFullYear()

        let day = new Date().getDay()
        
        div_time.style.color = 'white'

        if(hours > 12) {
            div_time.innerText = hours - 12 + ':' + minutes + ':' + seconds + ' pm' + ' (' + months[month] + ' ' + numerice_day + ', ' + year + ')' + " - It's " + days[day]

        } else if(hours === 12){
            div_time.innerText = hours + ':' + minutes + ':' + seconds + ' pm' + ' (' + months[month] + ' ' + numerice_day + ', ' + year + ')' + " - It's " + days[day]


        } else {
            div_time.innerText = hours + ':' + minutes + ':' + seconds + ' am' + ' (' + months[month] + ' ' + numerice_day + ', ' + year + ')' + " - It's " + days[day]
        }
        

    }, 1000)
    
}
    


function TopButtons(number){
    //Logout Button
    if(number === 0){
        localStorage.setItem('loggedUser', '')
        window.location.href = 'index.html'
        
    //Media Button
    } else if(number === 1){
        document.getElementById('container_home').style.display = 'none';
        document.getElementById('container_home').style.visibility = 'hidden';

        document.getElementById('button_home').style.backgroundColor = 'white'
        document.getElementById('button_home').style.color = 'black'
        
        document.getElementById('container_media').style.display = 'block';
        document.getElementById('container_media').style.visibility = 'visible';
        document.getElementById('button_media').style.backgroundColor = 'yellow'
        
        document.getElementById('button_media').style.color = 'blue'

        document.getElementById('container_manage').style.display = 'none';
        document.getElementById('container_manage').style.visibility = 'hidden';
        document.getElementById('button_manage').style.backgroundColor = 'green'
        document.getElementById('button_manage').style.color = 'white'
        document.querySelector('title').innerText = 'Media'

        document.getElementById('button_home').style.borderBottom = 'none'
        document.getElementById('button_manage').style.borderBottom = 'none'
        document.getElementById('button_media').style.borderBottom = 'solid 4px red'
       

    
    //Manage Button
    } else if(number === 2) {
        document.getElementById('container_home').style.display = 'none';
        document.getElementById('container_home').style.visibility = 'hidden';

        document.getElementById('button_home').style.backgroundColor = 'white'
        document.getElementById('button_home').style.color = 'black'
        
        document.getElementById('container_media').style.display = 'none';
        document.getElementById('container_media').style.visibility = 'hidden';
        document.getElementById('button_media').style.backgroundColor = 'blue'
        document.getElementById('button_media').style.color = 'white'

        document.getElementById('container_manage').style.display = 'block';
        document.getElementById('container_manage').style.visibility = 'visible';
        document.getElementById('button_manage').style.backgroundColor = 'yellow'
        document.getElementById('button_manage').style.color = 'blue'
        document.querySelector('title').innerText = 'Manage'

        document.getElementById('button_home').style.borderBottom = 'none'
        document.getElementById('button_manage').style.borderBottom = 'solid 4px red'
        document.getElementById('button_media').style.borderBottom = 'none'

    //Home Button
    } else if(number === 3) {
        document.getElementById('container_home').style.display = 'block';
        document.getElementById('container_home').style.visibility = 'visible';

        document.getElementById('button_home').style.backgroundColor = 'yellow'
        document.getElementById('button_home').style.color = 'blue'
        
        document.getElementById('container_media').style.display = 'none';
        document.getElementById('container_media').style.visibility = 'hidden';
        document.getElementById('button_media').style.backgroundColor = 'blue'
        document.getElementById('button_media').style.color = 'white'

        document.getElementById('container_manage').style.display = 'none';
        document.getElementById('container_manage').style.visibility = 'hidden';
        document.getElementById('button_manage').style.backgroundColor = 'green'
        document.getElementById('button_manage').style.color = 'white'
        document.querySelector('title').innerText = 'Home'
        // CreateBoxes()

        document.getElementById('button_home').style.borderBottom = 'solid 4px red'
        document.getElementById('button_manage').style.borderBottom = 'none'
        document.getElementById('button_media').style.borderBottom = 'none'
    }
    
}


function Calculate() {
    document.getElementById('input_payment').onkeyup = () => {
        

        let input_payment = document.getElementById('input_payment').value
        let amount_due = document.getElementById('amount_due').textContent.replace(/,/g, '')
        let change = input_payment - parseFloat(amount_due.replace('₱', ''))

        document.getElementById('change').innerText = f.format(change)
    }
}

function GroupSearch() {
    let input = document.getElementById('input_search').value.toUpperCase()
    if(input.length === 0){
        document.getElementById('div_search_items').style.display = 'none'
    }
    let searchItem = SearchItems
    let searchMedias = SearchMedias
    let searchManage = SearchManage     

    if(document.getElementById('container_media').style.visibility === 'visible') {
        Search(searchMedias);

    } else if(document.getElementById('container_manage').style.visibility === 'visible') {
        Search(searchManage)
    } else {
        Search(searchItem);

    }

}

function Search(Group) {
    
    let div_search_items = document.getElementById('div_search_items')
    div_search_items.innerText = ''
    
    let input = document.getElementById('input_search').value.toUpperCase()
    let lists = document.getElementsByClassName('search_items')
    
    Group.forEach(searchItem => { 
        let newDIV = document.createElement('div')
        newDIV.id = searchItem.id
        newDIV.className = 'search_items'
        newDIV.innerText = searchItem.searchTitle
        newDIV.value = searchItem.searchTitle
        newDIV.style.display = 'none'
        div_search_items.appendChild(newDIV)
    })
    let index = -1
    for(let i = 0; i < Group.length; i++){
        let items = lists[i].textContent.toUpperCase() || lists[i].innerText.toUpperCase()
        if(items.indexOf(input) > -1){
            div_search_items.style.display = 'block'
            lists[i].style.display = 'block'
            lists[i].onclick = event => {
                let tempID = event.target.id
                div_search_items.innerText = '' 
                document.getElementById(tempID).style.border = '2px solid yellow'
            
                if(document.getElementById('container_media').style.display === 'block') {
                    let timeOut = setTimeout(()=> {  
                        document.getElementById(tempID).style.border = 'none'
                    }, 5000)

                } else {
                    let timeOut = setTimeout(()=> {  
                        document.getElementById(tempID).style.border = '2px solid green'
                    }, 5000)
                }

                
                document.getElementById(tempID).scrollIntoView()

                
            
            }
        } else {
            lists[i].style.display = 'none'
        
        }
    }
    if(input.length > 0 && div_search_items.style.display === 'none') {
        div_search_items.style.display = 'block'
        div_search_items.innerText = 'Nothing Matches'
    }
    if(input.length === 0){
        div_search_items.style.display = 'none'
    }
}

function ProductSort(){
    Products.sort(function(a, b){
    return a.name.localeCompare(b.name)
    })

}
function RetrieveProducts() {
    let retrievedProducts = JSON.parse(localStorage.getItem('Products'))
    if(Array.isArray(retrievedProducts)){
        Products = retrievedProducts
        
    }
}


// async function GetWeather(latitude, longitude){
//     const lat = await latitude;
//     const lng = await longitude;

//     console.log(lat, lng)
//     const params = 'windSpeed';

//     fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
//     headers: {
//         'Authorization': '130b8b0e-7cf5-11ed-b59d-0242ac130002-130b8b72-7cf5-11ed-b59d-0242ac130002'
//     }
//     }).then((response) => response.json()).then((jsonData) => {
//     // Do something with response data.
//     console.log(jsonData)
//     }).catch(error => console.log(error))
// }

// async function MyLocationAccess() {
//     let api_key = '4d8bead44011467c9e65396a0875233f'
//     await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${api_key}`).then((data)=> data.json()).then((object)=>{
//         let my_longitude = object.longitude
//         let my_latitude = object.latitude
//         GetWeather(my_latitude, my_longitude)

        
//     }).catch((err)=>{
//         console.log(err)
//     })

// }
