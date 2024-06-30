import { Formulary } from "./Forms";

export function FormularyDemoComponent() {
  return (
    <>
      <Formulary>
        <Formulary.Group>
          <Formulary.Select name="" id="">
            {(options) =>
              options.map((item) => {
                return <option key={item.key}></option>;
              })
            }
          </Formulary.Select>
        </Formulary.Group>
      </Formulary>
    </>
  );
}
