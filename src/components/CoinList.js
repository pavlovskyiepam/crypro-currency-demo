// src/components/CoinList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';

const CoinList = () => {
    const [coins, setCoins] = useState([]);
    const [currency, setCurrency] = useState('usd');

    useEffect(() => {
        const fetchCoins = async (retryCount = 3) => {
            try {
                const response = await axios.get(`/api/v3/coins/markets`, {
                    params: {
                        vs_currency: currency,
                        order: 'market_cap_desc',
                        per_page: 10,
                        page: 1,
                        sparkline: true
                    }
                });
                setCoins(response.data);
            } catch (error) {
                if (error.response && error.response.status === 429 && retryCount > 0) {
                    // Wait for 1 second before retrying
                    setTimeout(() => fetchCoins(retryCount - 1), 1000);
                } else {
                    console.error('Failed to fetch coins:', error);
                }
            }
        };
        fetchCoins();
    }, [currency]);

    return (
        <div>
            <select onChange={(e) => setCurrency(e.target.value)} value={currency}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="gbp">GBP</option>
                <option value="uah">UAH</option>
            </select>
            <div>
                {coins.map(coin => (
                    <Coin key={coin.id} coin={coin} />
                ))}
            </div>
        </div>
    );
};

export default CoinList;