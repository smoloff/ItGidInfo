
class Goods {
    constructor(name, amount, image, count) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
    }
    draw(x) {
        let out = document.querySelector(`.out-${x}`)
        let div = document.createElement('div');
        div.classList.add('product')
        div.innerHTML = `
            <img class = 'product-img' src = ${this.image} width="200" >
            <h5 class = 'product-name'> ${this.name} </h5>
            <div class = 'amount'> ${this.amount} $</div>
            <div class = 'count'> in stock ${this.count} pcs </div>
       `;
        out.appendChild(div)
    }
}





