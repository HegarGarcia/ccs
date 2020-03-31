import { useReducer, useMemo } from "react";

const initialValues = {
  side1: "",
  side2: "",
  side3: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "update":
      const { value, side } = action;
      return { ...state, [side]: !value ? "" : +value };
    case "reset":
      return initialValues;
    default:
      return state;
  }
}

export function useTriangle() {
  const [triangle, dispatch] = useReducer(reducer, initialValues);
  const sides = useMemo(() => Object.values(triangle), [triangle]);

  const updateSide = (side, value) => dispatch({ type: "update", side, value });
  const reset = () => dispatch({ type: "reset" });
  const isValid = () => {
    const [a, b, c] = Object.values(triangle);
    return a + b > c && a + c > b && b + c > a;
  };

  const getType = () => {
    const uniqSides = new Set(sides);

    switch (uniqSides.size) {
      case 1:
        return "Equilatero";
      case 2:
        return "Isosceles";
      case 3:
        return "Escaleno";
      default:
        return "Invalido";
    }
  };

  const details = useMemo(
    () => ({
      area: area(sides).toFixed(2),
      perimeter: sum(sides),
      type: getType()
    }),
    [sides]
  );

  return { triangle, updateSide, reset, isValid, details };
}

function sum(array) {
  return array.reduce((acc, value) => acc + value);
}

function area(sides) {
  const p = sum(sides) / 2;
  const [a, b, c] = sides;

  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}
