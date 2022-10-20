const axios = require('axios');
const colors = require('colors');

class CryptoAPI {
	constructor(apiKey){
		this.apiKey = apiKey;
		this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
	}

	async getPricedata(coinOption, curOptions){
       try{
       	const res  = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOptions}&convert=${curOption}`)
         
         let output = '';
         res.data.forEach(coin=>{
         	output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${coin.price.green} | Rank: ${coin.rank.blue}\n`
         });
         return output;
       }
       catch(err){
       	  handleAPIError(err);
       }
	}
}

function handleAPIError(err){
	if(err.response.status === 401){
		throw new Error('Your API key is invalid');
	} else if(err.response.status === 404){
		throw new Error('Your API is not working');
	}else{
		throw new Error('Something went wrong');
	}
}

module.exports = CryptoAPI;