import { useEffect, useState } from 'react';
import './styles.css'

const CatsFacts = () => {
  const [fact, setFact] = useState('');

  const fetchFact = async () => {
    try {
      const response = await fetch('https://cat-fact.herokuapp.com/facts/random');
      const data = await response.json();
      setFact(data.text);
    } catch (error) {
      console.error('Error fetching cat fact:', error);
    }
  };

  useEffect(() => {
    fetchFact().catch((error) => {
      console.error('Error fetching cat fact:', error);
    });
  }, []);

  const getAnotherFact = () => {
    fetchFact().catch((error) => {
      console.error('Error fetching cat fact:', error);
    });
  };

  return (
    <div className="cats-facts">
      <p>{fact}</p>
      <button onClick={getAnotherFact}>Get a new fact!</button>
    </div>
  );
};

export default CatsFacts;