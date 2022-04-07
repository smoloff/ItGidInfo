
 class Goods2 extends Goods {
    constructor(name, amount, image, count, sale = true) {
        super (name, amount, image, count)
        this.sale = sale
    }

    draw(x) {
        let sale;
        if (this.sale) {
            sale = document.createElement('span');
            sale.classList.add('sale');
            sale.innerHTML = `SALE `;
            sale = sale.outerHTML;
        } else {
            sale =''
        }
        let out = document.querySelector(`.out-${x}`)
        let div = document.createElement('div');
        div.classList.add('product')
        div.innerHTML = `
            <img class = 'product-img' src = ${this.image} width="200" >
            <h5 class = 'product-name'> ${this.name} </h5>
            <div class = 'amount'>${sale} ${this.amount} $</div>
            <div class = 'count'> in stock ${this.count} pcs </div>
       `;
        out.appendChild(div)
    }
 }