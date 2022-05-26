import "./widget.scss"

const Widget = ({ type }) => {
  let data;
  // temporary
  // const diff = 20
  const amount = 95000
  const stock = +3523759

  switch (type){
    case "Total profit":
       data={
         profit: "TOTAL PROFIT",
         isMoney: true,
         digit: "see all Total profits", 
         digit : -34353,      
       };
       break;
    case "Total Expences":
       data={
         profit: "TOTAL EXPENCES",
         isMoney: true,
         digit: "view all expences", 
        
       };
       break;
    case "New user":
       data={
         profit: "NEW USERS",
         isMoney: false,
         digit: "see all New users", 
         
       };
       break;
       default:
         break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="profit">{data.profit}</span>
        <span className="counter">{data.isMoney && "$"}{amount}</span>
        
      </div>
      <div className="right ">
        <span className="digit positive"><p>{data.isMoney}{stock}</p></span>
        
      </div>
    </div>
  )
}

export default Widget