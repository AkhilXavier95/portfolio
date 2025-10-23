---
title: "Why React Hooks Remind Me of My Filter Coffee Setup"
date: "2025-10-22"
description: "Coffee and React Hooks share the same beauty: simple elements transforming through careful process. Coffee powder + patience = perfect brew, just like basic functions + hooks = powerful applications."
slug: "coffee-with-use-effect"
category: "Development"
tags: ["React", "Development", "Philosophy"]
---

There’s something truly comforting about my morning ritual of making coffee at home. The sound of water boiling, the swirl of tea leaves and spices, the rich aroma slowly filling the kitchen. it’s a little moment of calm before the day begins. Funny enough, it reminds me of React Hooks both take something familiar and make it smoother, more intuitive, and a bit more magical every time

## useState: The Coffee Powder Base

Making coffee starts with the basics coffee powder and hot water. useState is the same: it holds your local state, simple and essential.

```jsx
const [coffeeReady, setCoffeeReady] = useState(false);
```

## useEffect: The Brewing Process

Watching your coffee brew is all about timing, letting the coffee dissolve and reach the perfect strength.
useEffect handles timing and side effects in your components, just like brewing coffee patiently.

```js
function CoffeeTimer() {
  const [brewTime, setBrewTime] = useState(0);
  const [strength, setStrength] = useState("light");

  useEffect(() => {
    const timer = setInterval(() => setBrewTime((prev) => prev + 1), 1000);

    if (brewTime >= 120) {
      setStrength("perfect");
      clearInterval(timer);
    } else if (brewTime >= 60) {
      setStrength("medium");
    }

    return () => clearInterval(timer);
  }, [brewTime]);

  return (
    <div>
      <p>Brewed for: {brewTime} seconds</p>
      <p>Coffee strength: {strength}</p>
    </div>
  );
}
```

## Custom Hooks: Your Signature Recipe

Custom hooks are like your personal coffee tweaks. How much sugar, milk, or froth you like.
They make your routine reusable and consistent.

```js
function useCoffeeRecipe() {
  const [recipe, setRecipe] = useState({
    sugar: "medium",
    milk: "half"
  });

  const updateRecipe = (key, value) => {
    setRecipe((prev) => ({ ...prev, [key]: value }));
  };

  return [recipe, updateRecipe];
}
```

## useContext: The Shared Coffee Station

useContext is like a shared kitchen jar of coffee powder—everyone can access it when needed.

```js
const CoffeeContext = createContext();

function CoffeeProvider({ children }) {
  const [coffeePowder, setCoffeePowder] = useState(200); // grams

  const makeCoffee = (cups = 1) => {
    setCoffeePowder((prev) => Math.max(0, prev - cups * 10));
  };

  return (
    <CoffeeContext.Provider value={{ coffeePowder, makeCoffee }}>
      {children}
    </CoffeeContext.Provider>
  );
}
```

## Why Coffee = React Hooks

1. Coffee powder + hot water → useState (basic setup)
2. Brewing time → useEffect (timing matters)
3. Adding milk/sugar → custom hooks (personal tweaks)
4. Shared coffee jar → useContext (accessible everywhere)

Even for simple home made coffee, a little patience and the right routine make it perfect, just like writing clean, reusable React code. ☕
