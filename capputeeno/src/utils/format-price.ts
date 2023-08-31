export function formatPrice(valueInCents: number) {
    const formattedValue = valueInCents / 100;
    return formattedValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}