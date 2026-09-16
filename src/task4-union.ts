// Тип валюты — только три варианта
export type Currency = "RUB" | "USD" | "EUR";
    const ratesToRub: Record<Currency, number> = {
    RUB: 1,
    USD: 90,
    EUR: 100,
};
// Курсы конвертации (упрощенно, относительно RUB):
// 1 USD = 90 RUB
// 1 EUR = 100 RUB

export function convert(amount: number, from: Currency, to: Currency): number {
  if (from === to) {
    return amount;
  }

  // 2. Переводим исходную сумму в рубли
  const amountInRub = amount * ratesToRub[from];

  // 3. Переводим рубли в нужную валюту
  return amountInRub / ratesToRub[to];
}

export function formatCurrency(amount: number, currency: Currency): string {
  // Вернуть строку вида "100 RUB" или "50.5 USD"
  return `${amount} ${currency}`;
}