import React, { useCallback } from "react";
import { NumberField, Details } from "./components";
import { Main, Grid, Card, Button, Error } from "./styles";
import { useTriangle } from "./hook";

export function App() {
  const { triangle, updateSide, reset, isValid, details } = useTriangle();

  const onChange = useCallback(
    ({ target }) => {
      updateSide(target.name, target.value);
    },
    [updateSide]
  );

  const { side1, side2, side3 } = triangle;

  return (
    <Main>
      <Card maxWidth='30%'>
        <Grid rows='1fr' columns='1fr 1fr'>
          {isValid() ? (
            <Details details={details} />
          ) : (
            <Error>
              <p>Triángulo Invalido</p>
            </Error>
          )}
          <div>
            <NumberField label='Side 1' value={side1} onChange={onChange} />
            <NumberField label='Side 2' value={side2} onChange={onChange} />
            <NumberField label='Side 3' value={side3} onChange={onChange} />
            <Button onClick={reset}>Borrar</Button>
          </div>
        </Grid>
      </Card>
    </Main>
  );
}
