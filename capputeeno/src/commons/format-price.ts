export function formatPrice(valueInCents: number | string) {
  const valueInNumber = Number(valueInCents);
  const formattedValue = valueInNumber / 100;
  return formattedValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
