export default function RecipeCard() {
  return (
    <>
      <h2 className="title">Pa amb tomàquet 🍅</h2>
      <p>Ready in 10 minutes<br />Serves 2</p>
      <ul>
        <li>2 slices of rustic bread</li>
        <li>1 ripe tomato</li>
        <li>Olive oil and salt</li>
      </ul>
      <hr />
      <input type="checkbox" id="toasted" />
      <label htmlFor="toasted">The bread is toasted</label>
    </>
  );
}
