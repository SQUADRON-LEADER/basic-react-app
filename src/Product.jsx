import "./product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
  const oldprice = ["12,212", "11,215", "13,653", "20,320"];
  const newprice = ["8,99", "5,222", "44,515", "54,451"];
  const description=[["8,000 DPI","Nmaste Apple"],["surface","Desing by gucci"],["designed for the ipad","Best Design"],["wireless","Optical best "],];
  return (
    <div className="Product">
      <h4>{title}</h4>
      
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      
      <Price oldprice={oldprice[idx]} newprice={newprice[idx]} />
    </div>
  );
}

export default Product;
