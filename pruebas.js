const lineas = orderDetails.filter(factura => factura.order_id == 10.255)

lineas.reduce((acumulador, fila) => acumulador + fila.unite_price * fila.quantity)

console.log(total)
console.log(lineas)