
const usdEl = document.getElementById('usdprice');
const eurEl = document.getElementById('eurprice');
const gbpEl = document.getElementById('gbpprice');
const btnEl = document.querySelector('.btn');

const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

async function GetPrice(){
    try {
        const response = await fetch(url);
        const data = await response.json();
        usdEl.innerText = data.bpi.USD.rate;
        eurEl.innerText = data.bpi.EUR.rate;
        gbpEl.innerText = data.bpi.GBP.rate;
        console.log(data.bpi.EUR.rate);
    } catch (error) {
        container.innerText = 'Not working, try again later!';
    }
}

btnEl.addEventListener('click', GetPrice);