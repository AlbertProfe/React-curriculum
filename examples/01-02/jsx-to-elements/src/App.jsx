import { createElement } from 'react';

function TitleWithJsx() {
  return <h2 className="title">Pa amb tomàquet</h2>;
}

function TitleWithoutJsx() {
  return createElement('h2', { className: 'title' }, 'Pa amb tomàquet');
}

export default function App() {
  return (
    <main>
      <TitleWithJsx />
      <TitleWithoutJsx />
    </main>
  );
}
