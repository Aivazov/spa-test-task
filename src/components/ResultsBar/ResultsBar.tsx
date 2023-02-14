import React from 'react';
import '../components_styles/ResultBar/ResultsBar.css';

export default function ResultsBar({ total }) {
  return (
    <div className="results__paragraph--bottom-border">
      <p className="results__paragraph">Results: {total} </p>
    </div>
  );
}
