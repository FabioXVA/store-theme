const Price = {
  applyDiscount: (percent: number, price: number): number => {
    return price * (1 - percent / 100)
  },
}

export default Price
