
function calcular() {
    let qualityOfService = document.getElementById('quality').value;
    let amount = parseFloat(document.getElementById('total-value').value);
    let percentTip;

    switch (qualityOfService) {
        case 'excelente':
            percentTip = 0.20;
            break;
        case 'muitoBom':
            percentTip = 0.15;
            break;
        case 'bom':
            percentTip = 0.10;
            break;
        case 'ruim':
            percentTip = 0.05
            break;
        default:
            percentTip = 0;
    }

    const totalTip = amount * percentTip;
    const total = amount + totalTip;
    document.getElementById('total-tip').textContent = `Gorjeta: R$ ${totalTip.toFixed(2)}`;
    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;

}