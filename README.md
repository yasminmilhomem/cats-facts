
# Cats Facts

A website for cats lovers!


## Prototype

Before developing the website, the prototype was made by me on Figma.

You can check the respective prototype by clicking [here](https://www.figma.com/file/3vWWvwCidZvdBhqRoVZYup/Cats-Facts?type=design&node-id=0%3A1&t=JBBKP7fbqwHc97gP-1)!

## Development
The development of Cats Facts was made using Vite, you can clone the repository to check the coding by the following command on your terminal:

```bash
  git clone https://github.com/yasminmilhomem/cats-facts.git
```

### Cat-fact API
In the application, the [cat-fact API](https://cat-fact.herokuapp.com/facts/random) was used.

The `Body` component fetches and displays random cat facts. It uses React hooks like `useState` and `useEffect`. The `fact` state holds the current fact.

The `fetchFact` function fetches a fact from the Cat Fact API and updates the state. `useEffect` calls `fetchFact` on component mount. `getAnotherFact` fetches a new fact.

The component renders a `<div>` with the fact and a button.


#### Usage

```javascript
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

```



### LottieFiles
To have a cool animation, I used LottieFiles in the `Footer` component and it integrates LottieFiles for animating a cat.

It uses the `lottie-web` library to load and configure the animation. The `cat.json` file contains the animation data. The `useRef` hook creates a reference to the animation container. The `useEffect` hook loads the animation on component mount, specifying the container, renderer, loop, autoplay, and animation data.

The `return` statement in `useEffect` ensures proper cleanup. The rendered output includes a `<div>` with the container reference. LottieFiles enhances the visual appeal by adding a dynamic cat animation to the footer.

## Deploy
The deploy was made on Vercel and you can access it here: [![Cats Facts](https://img.shields.io/badge/cats_facts-000?style=for-the-badge&logo=dependabot&logoColor=white)](https://cats-facts-yasminmilhomem.vercel.app/)


### Features

- Responsiveness


### Roadmap

- Light/dark mode toggle





####

<div>
<p align="center" width="40%">
    <img width="40%" src="https://i.ibb.co/9N5P23B/logo.png">
</p>
</div>
