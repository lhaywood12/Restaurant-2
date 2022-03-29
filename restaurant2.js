class restaurant {
    constructor() {
        this.itemsInCart = {
            itemCount: 0,
            subTotal: 0
        }

        this.inventory = {
            item1: {
                id: 1,
                img: 'media/banner1.png',
                alt: 'A Natural Cesar Salad',
                class: 'latest-img',
                price: 6.99,
                qty: 0,
                name: 'A Natural Cesar Salad',
            },

            item2: {
                id: 2,
                img: 'media/banner2.png',
                alt: 'Pizza',
                class: 'latest-img',
                price: 8.95,
                qty: 0,
                name: 'Pizza',
            },

            item3: {
                id: 3,
                img: 'media/banner3.png',
                alt: 'Shrimp & Grits',
                class: 'latest-img',
                price: 7.96,
                qty: 0,
                name: 'Shrimp & Grits',
            },

            item4: {
                id: 4,
                img: 'media/banner4.png',
                alt: 'Fresh Fruit Salad',
                class: 'latest-img',
                price: 6.00,
                qty: 0,
                name: 'Fresh Fruit Salad',
            },

            item5: {
                id: 5,
                img: 'media/banner5.png',
                alt: 'Cottage Chesse Burger w/ Fries',
                class: 'latest-img',
                price: 15.00,
                qty: 0,
                name: 'Cottage Chesse Burger w/ Fries',
            },

            item6: {
                id: 6,
                img: 'media/banner6.png',
                alt: 'Homemade Sandwich',
                class: 'latest-img',
                price: 7.99,
                qty: 0,
                name: 'Homemade Sandwich',
            },

            item7: {
                id: 7,
                img: 'media/banner7.png',
                alt: 'Fruity Pancakes',
                class: 'latest-img',
                price: 8.95,
                qty: 0,
                name: 'Fruity Pancakes',
            },

            item8: {
                id: 8,
                img: 'media/banner8.png',
                alt: 'Chicken Noodle Soup',
                class: 'latest-img',
                price: 8.99,
                qty: 0,
                name: 'Chicken Noodle Soup',
            },

            item9: {
                id: 9,
                img: 'media/banner9.png',
                alt: 'Grilled Chicken',
                class: 'latest-img',
                price: 12.00,
                qty: 0,
                name: 'Grilled Chicken',
            },

            item10: {
                id: 10,
                img: 'media/banner10.png',
                alt: 'Fried Chicken Tenders',
                class: 'latest-img',
                price: 10.00,
                qty: 0,
                name: 'Fried Chicken Tenders',
            },

            item11: {
                id: 11,
                img: 'media/banner11.png',
                alt: 'Chicken Alfredo',
                class: 'latest-img',
                price: 9.85,
                qty: 0,
                name: 'Chicken Alfredo',
            },

            item12: {
                id: 12,
                img: 'media/banner12.png',
                alt: 'Breakfast Cresant',
                class: 'latest-img',
                price: 4.99,
                qty: 0,
                name: 'Breakfast Cresant',
            },

            item13: {
                id: 13,
                img: 'media/banner13.png',
                alt: 'Traditional Breakfast',
                class: 'latest-img',
                price: 8.95,
                qty: 0,
                name: 'Traditional Breakfast',
            },

            item14: {
                id: 14,
                img: 'media/banner14.png',
                alt: 'Breakfast Burrito',
                class: 'latest-img',
                price: 5.99,
                qty: 0,
                name: 'Breakfast Burrito',
            },

            item15: {
                id: 15,
                img: 'media/banner15.png',
                alt: 'Beef Steak',
                class: 'latest-img',
                price: 16.94,
                qty: 0,
                name: 'Beef Steak',
            },

            item16: {
                id: 16,
                img: 'media/banner16.png',
                alt: 'MeatBall Sandwich',
                class: 'latest-img',
                price: 11.98,
                qty: 0,
                name: 'MeatBall Sandwich',
            },

            item17: {
                id: 17,
                img: 'media/banner17.png',
                alt: 'Smoked Fish',
                class: 'latest-img',
                price: 10.99,
                qty: 0,
                name: 'Smoked Fish',
            },

            item18: {
                id: 18,
                img: 'media/banner18.png',
                alt: 'Lemon Dipped Lobster',
                class: 'latest-img',
                price: 17.98,
                qty: 0,
                name: 'Lemon Dipped Lobster',
            },

            item19: {
                id: 19,
                img: 'media/banner19.png',
                alt: 'Hot Fudge Sundae',
                class: 'latest-img',
                price: 4.99,
                qty: 0,
                name: 'Hot Fudge Sundae',
            },

            item20: {
                id: 20,
                img: 'media/banner20.png',
                alt: 'Cream Pie',
                class: 'latest-img',
                price: 3.00,
                qty: 0,
                name: 'Cream Pie',
            },

            item21: {
                id: 21,
                img: 'media/banner21.png',
                alt: 'Cookies',
                class: 'latest-img',
                price: 2.95,
                qty: 0,
                name: 'Cookies',
            },
        }
    }

    
    init() {
        this.loadItems();
        this.addToCart();
        this.checkout();
    }

    loadItems() {
        //load items on page
        let count = 0;

        // access HTML nodes
        let products1 = document.getElementById('products1');
        let products2 = document.getElementById('products2');

        //when count = 4, go to the next DOM element
        for (const key in this.inventory) {
            const item = this.inventory[key];
            const product = document.createElement('div');
            product.className = 'col-md-3 product';
            product.innerHTML = `
              <img src="${item.img}" alt="${item.alt}" class-img-fluid ${item.class}">
              <button class="btn btn-secondary add-button" data-id="${item.id}">Add to Cart</button>`
            
            if (count < 4) {
                // products1.append(product);
            }  else {
                // products2.append(product)
            }
            count++;
        }
    }


    addToCart() {
        //set variables
        let buttons = document.querySelectorAll('.add-button');
        let cartItems = document.getElementById('cartItems');
        let cartSubTotal = document.getElementById('cartSubTotal');
        let itemCount = 0;
        let price = 0;

        //for in loop to loop through this.inventory
        for (const key in this.inventory) {
            const item = this.inventory[key];
            //add event listener to each button
            buttons.forEach(button => {
                button.addEventListener('click', ()=> {
                    //if the id of the data attribute matches item.id
                    if (button.dataset['id'] == item.id) {
                        itemCount++;
                        price = price + item.price;
                        //store changed itemCount and price not this.itemsInCart
                        this.itemsInCart.itemCount = itemCount;
                        this.itemsInCart.subTotal = price;

                        item.qty++;
                        console.log(item);
                        console.log(this.itemsInCart);
                    }

                    //send back to the DOM
                    cartItems.innerText = itemCount;
                    cartSubTotal.innerText = price.toFixed(2);
                })
            })
        }
    }

    checkout() {
        //set variables 
        let table = document.getElementById('tbody');
        let checkout = document.getElementById('checkout');
        let checkoutPage = document.querySelector('.checkout-page');
        let homePage = document.querySelector('.home-page');
        let subTimeQty = 0;
        let subTotalValue = document.getElementById('subtotalValue');
        let taxValue = document.getElementById('taxValue');
        let totalValue = document.getElementById('totalValue');
        let tax = 0;
        let shippingValue = document.getElementById('shippingValue');
        let checkoutItemCount = document.getElementById('checkoutItemCount');
        let shipping = 6;

        
        checkout.addEventListener('click', ()=> {
            //remove d-none from checkout and add d-none to homePage
            checkoutPage.classList.remove('d-none');
            homePage.classList.add('d-none');

            if (this.itemsInCart.itemCount == 1) {
                checkoutItemCount.innerText = `${this.itemsInCart.itemCount} item`;
            } else {
                checkoutItemCount.innerText = `${this.itemsInCart.itemCount} items`
            }

            //load content on checkout page
            for (const key in this.inventory) {
                const item = this.inventory[key];

                subTimeQty = (item.qty * item.price).toFixed(2);
                subtotalValue.innerText = this.itemsInCart.subTotal.toFixed(2);
                shippingValue.innerText = shipping.toFixed(2);
                tax = this.itemsInCart.subTotal * .07;
                taxValue.innerText = tax.toFixed(2);
                totalValue.innerText = (this.itemsInCart.subTotal + tax + shipping).toFixed(2)

                //if qty > 0 (item has been added to cart)
                if (item.qty > 0) {

                    const tableRow = document.createElement('tr');
                    tableRow.className = 'product-checkout';

                    tableRow.innerHTML += `
                    <td id="checkoutImg">
                      <img src="${item.img}" alt="${item.alt}" class="img-fluid checkout-img">
                      <div class="product-desc">
                       <p class="item-name">${item.name}</p>
                       </div>
                       </td>
                        <td id="productCode">${item.productCode}</td>
                        </td>
                          <p class="unit=price">${item.price.toFixed(2)}</p>
                          </td>
                          <td>
                            <div id="itemQuantity">
                              <p id="qtyInput">${item.qty}</p>
                              </div>
                            </td>
                            <td id="itemSubTotal">${subTimesQty}</td>`

                    table.append(tableRow);
                }
            }
        })
    }       
}

let action = new restaurant(); 

action.init();