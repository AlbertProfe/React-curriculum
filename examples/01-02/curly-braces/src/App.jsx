const recipe = {
  id: 'escalivada',
  name: 'Escalivada',
  minutes: 45,
  serves: 4,
  colour: 'darkred',
};

export default function App() {
  return (
    <article>
      <h2 style={{ color: recipe.colour }}>{recipe.name}</h2>
      <p>Ready in {recipe.minutes} minutes · serves {recipe.serves}</p>
      <p>Cooking for a party? A double batch serves {recipe.serves * 2}.</p>
      <p>Shout it across the market: {recipe.name.toUpperCase()}! 📣</p>
      <input type="checkbox" id={recipe.id} />
      <label htmlFor={recipe.id}>I've roasted the vegetables</label>
    </article>
  );
}
