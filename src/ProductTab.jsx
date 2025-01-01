import Product from "./Product.jsx";

function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={styles}>
      
      <Product title="Logitech" idx={0} />
      <Product title="Apple Pencil" idx={1} />
      <Product title="Zebronic" idx={2} />
      <Product title="Proton" idx={3} />
    </div>
  );
}

export default ProductTab;
