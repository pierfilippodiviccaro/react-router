export default function ProductsSection({ prodotto }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5">
          <img
            className="img-fluid"
            src={prodotto.image}
            alt={prodotto.name}
          />
        </div>
        <div className="col-12 col-md-7">
          <h1>{prodotto.title}</h1>
          <h2>prezzo:{prodotto.price}</h2>
          <p>categoria:{prodotto.category}</p>
          <p>{prodotto.description}</p>
        </div>
      </div>
    </div>
  );
}