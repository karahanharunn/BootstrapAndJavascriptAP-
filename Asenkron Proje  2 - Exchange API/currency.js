
class Currency {
    constructor(firstCurrency, secondCurrency) {
        this.url = "https://api.exchangeratesapi.io/latest?base=";
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.amount = null;
    }

    exchange() {
      return new Promise((resolve,reject)=>{
        fetch(this.url+this.firstCurrency)
        .then(resolve => resolve.json())
        .then(data => {
            const parity = data.rates[this.secondCurrency];
            const miktar = Number(this.amount);
            const total = parity*miktar ; 
            resolve(total);
        })
        .catch(err =>reject(err));
      })
          
       
    }

    changeFirstCurrency(data) {
        this.firstCurrency = data;
    }

    changeSecondCurrency(data) {
        this.secondCurrency = data;
    }

    changeAmount(data) {
        this.amount = data;
    }



}

