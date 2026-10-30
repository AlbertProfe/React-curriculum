import './Stall.css';

const cherries = {
  name: 'Cherries from the Ebre valley',
  price: 7,
  ripeness: 80,
};

export default function Stall() {
  return (
    <article className="stall">
      <h2>🍒 {cherries.name}</h2>
      <p className="price">{cherries.price} € / kg</p>
      <p>Ripeness</p>
      <div className="ripeness">
        <div
          className="ripeness-fill"
          style={{ width: cherries.ripeness + '%' }}
        />
      </div>
    </article>
  );
}
