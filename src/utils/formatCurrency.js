const formatCurrancy = (value, currency) =>{
  return value.toLocaleString('pt-br',{
    style: 'currency',
    currency
  });
};

export default formatCurrancy;
