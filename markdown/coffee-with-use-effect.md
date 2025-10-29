---
title: "Why React Hooks Remind Me of My Morning Coffee"
date: "2025-10-22"
description: "Coffee and React Hooks share the same beauty: simple elements transforming through careful process. Coffee powder + patience = perfect brew, just like basic functions + hooks = powerful applications."
slug: "coffee-with-use-effect"
category: "Development"
tags: ["React", "Development", "Philosophy"]
---

There’s something incredibly grounding about my morning ritual, brewing a cup of coffee.
The water boils, the aroma builds, and for a few quiet minutes, everything slows down. It’s a small pause before the chaos of the day begins.

And weirdly enough, it always makes me think of React Hooks.
Both take something simple and familiar. Through a bit of process and patience turn it into something smooth, intuitive, and kind of magical.

## useState: The Coffee Powder Base

Every great cup starts with the basics — coffee powder and hot water.
That’s your useState: simple, local, and essential.

```jsx
const [coffeeReady, setCoffeeReady] = useState(false);
```

It’s the foundation. Everything else builds on top of it.

## useEffect: The Brewing Process

Brewing coffee is all about timing.
You can’t rush it. You watch it slowly darken, waiting for that perfect strength.

That’s useEffect for me. It handles the timing and side effects, making sure everything reacts at just the right moment.

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

Some people like their coffee strong.
Some want it sweet, or extra frothy.

That’s where custom hooks come in, your personal recipe that makes things just the way you like them.

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

Picture a shared kitchen jar of coffee powder.
Everyone in the house knows where it is and can grab what they need.

That’s useContext, a shared space for values everyone can access without passing props all around.

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

1. Coffee powder + hot water → useState (your base)
2. Brewing time → useEffect (timing matters)
3. Milk and sugar → custom hooks (your unique style)
4. Shared jar → useContext (accessible everywhere)

Even with something as simple as homemade coffee, a little patience and the right process make it perfect
just like writing clean, reusable React code.
