document.getElementById('convertButton').addEventListener('click', function () {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (isNaN(amount) || amount <= 0) {
        alert('Por favor, insira um valor válido.');
        return;
    }

    // Taxas de câmbio fictícias (substitua por uma API real se necessário)
    const exchangeRates = {
        USD: { BRL: 5.86, EUR: 0.85 },
        EUR: { BRL: 6.1, USD: 1.18 },
        BRL: { USD: 0.19, EUR: 0.16 }
    };

    let convertedValue;

    if (fromCurrency === toCurrency) {
        convertedValue = amount;
    } else {
        convertedValue = amount * exchangeRates[fromCurrency][toCurrency];
    }

    document.getElementById('convertedValue').textContent = 
        `${amount} ${fromCurrency} = ${convertedValue.toFixed(2)} ${toCurrency}`;
});