/*
Smart Shoes payment Page css
Author: Muhammad Shazad Yousufzai Pathan
Date:   11/2/22
Filename:   paymentPage.js
*/



// import {default_loaded_products, default_items_in_cart} from "./store"


// import { Product, SaleLineItem } from "./classes" 

window.purchase_data = {}

class Product {
    constructor(id, name, price, image_link)
    {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image_link = image_link;
    }
}

class SaleLineItem {
    constructor(product, quantity)
    {
        this.product = product;
        this.quantity = quantity;
    }
}

// let default_loaded_products = [
//     new Product('Dress Shoes', 55, './popular4.jpg'),
//     new Product("Men Sneakers", 100, './popular1.jpg')
// ]

// let default_items_in_cart = default_loaded_products.map((item) => {
//     return new SaleLineItem(item, 2);
// })

let related_products = [new Product(2, "Men sneakers red", 120, 'popular2.jpg')]

let store_data_to_storage = (key, data) => {
    // sessionStorage.setItem(key, JSON.stringify(data));
    window.purchase_data[key] = data;
}

let load_data_from_storage = (key) => {
    // return JSON.parse(sessionStorage.getItem(key));
    if(window.purchase_data[key])
    {
        return window.purchase_data[key]
    }
}

let get_purchase_summary_row = (sli_item) => {
    return `
        <tr style = "padding: .5em .5em;
        align-self: center;
        background-color: blue;
        color: #fff;">
            <td>${sli_item.product.name}</td>
            <td>${sli_item.quantity}</td>
            <td>$${sli_item.product.price}</td>
            <td>$${sli_item.product.price*sli_item.quantity}</td>
        </tr>
    `
}

const remove_cart_item = (item_name) => {
    let cart_items = load_data_from_storage('items_in_cart');
    for(let i = 0; i < cart_items.length;i++)
    {
        if(cart_items[i].product.name === item_name){
            console.log(cart_items[i].product.name);
            cart_items.splice(i, 1);
        }
    }
    store_data_to_storage('items_in_cart', cart_items);
}

const add_cart_item = (id, name, price, qty, link) => {
    let cart_items = load_data_from_storage('items_in_cart');
    if(!cart_items){
        cart_items = [];
    }
    let product = new SaleLineItem(new Product(id, name, price, link), qty);
    cart_items.push(product);
    store_data_to_storage('items_in_cart', cart_items);
}

window.remove_cart_item = remove_cart_item
window.add_cart_item = add_cart_item

let get_img_table_row = (sli_item) => {
    return `
    <tr>
        <td class="product-img-container"><img src="${sli_item.product.image_link}" class="product-img" width="300px" height="150px"></td>
        <td class="product-name"><p style = "border-radius: 20px;
        padding: .5em .5em;
        align-self: center;
        background-color: blue;
        color: #fff;">${sli_item.product.name}</p></td>
        <td class="product-price"><p style = "border-radius: 20px;
        padding: .5em .5em;
        align-self: center;
        background-color: blue;
        color: #fff;">$${sli_item.product.price}</p></td>
        <td>
            <form method='post' id='remove-item-form-${sli_item.product.id}'>
                <input type='hidden' name='remove_item_id' value='${sli_item.product.id}' />
                <input type='button' value='Remove' id='remove-item-btn-${sli_item.product.id}'/>
            </form>
        </td>
    </tr>
    `
}

let get_related_product_table_row = (item) => {
    return `
    <tr>
        <td class="product-img-container"><img src="${item.image_link}" class="product-img" width="300px" height="150px"></td>
        <td class="product-name"><p style = "border-radius: 20px;
        padding: .5em .5em;
        align-self: center;
        background-color: blue;
        color: #fff;">${item.name}</p></td>
        <td class="product-price"><p style = "border-radius: 20px;
        padding: .5em .5em;
        align-self: center;
        background-color: blue;
        color: #fff;">$${item.price}</p></td>
        <td>
        <form method='post' id='add-item-form-${item.id}'>
            <input type='hidden' name='add_item_id' value='${item.id}' />
            <input type='button' value='Add' id='add-item-btn-${item.id}'/>
        </form>
        </td>
    </tr>
    `
}

let populate_cart_products = () => {
    let cart_items = load_data_from_storage('items_in_cart');
    let purchase_summary_table = document.getElementById('summary-table-span').children[0];
    let item_imgs_table = document.getElementById('img-table').children[0]

    let total_bill = 0;

    if(!cart_items)
    {
        cart_items = []
    }
    cart_items.forEach(element => {
        purchase_summary_table.children[1].innerHTML += get_purchase_summary_row(element);
        item_imgs_table.children[0].innerHTML += get_img_table_row(element);
        total_bill += (element.product.price*element.quantity);
        document.getElementById(`remove-item-btn-${element.product.id}`).addEventListener('click', () => {
            document.getElementById(`remove-item-form-${element.product.id}`).submit();
        })
        document.getElementById('summary-total-amount').innerHTML = "$" + total_bill;
    });
}

let populate_related_products = () => {

    let related_items_table = document.getElementById('related-items-table-container').children[0];

    related_products.forEach(element => {
        let inner_element = related_items_table.children[0];
        inner_element.innerHTML += get_related_product_table_row(element);
        document.getElementById(`add-item-btn-${element.id}`).addEventListener('click', () => {
            document.getElementById(`add-item-form-${element.id}`).submit();
        })
    });
}

const load_data = () => {
    // if (sessionStorage.getItem('loaded_products') == null) {
    //     store_data_to_storage('loaded_products', default_loaded_products)
    // }
    // if (sessionStorage.getItem('items_in_cart') == null) {
    //     store_data_to_storage('items_in_cart', default_items_in_cart)
    // }

    // if (!window.window.purchase_data) {
    //     window.window.purchase_data
        // store_data_to_storage('loaded_products', default_loaded_products)
    // }
    // if (window.window.purchase_data.getItem('items_in_cart') == null) {
        // store_data_to_storage('items_in_cart', default_items_in_cart)
    // }

    let data_container = document.getElementById('page_data');
    Array.from(data_container.children).forEach( data_row => {
        let name = data_row.children[0].innerHTML;
        let cost = data_row.children[1].innerHTML;
        let img_link = data_row.children[2].innerHTML;
        let quantity = data_row.children[3].innerHTML;
        let id = data_row.children[4].innerHTML;
        add_cart_item(id, name, cost, quantity, img_link);
    })

    populate_cart_products();
    populate_related_products();
}
load_data();
