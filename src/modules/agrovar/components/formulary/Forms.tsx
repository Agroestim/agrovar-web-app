import {
  DashboardFormularyDispatchContext,
  DashboardFormularyStateContext,
} from "modules/agrovar/context/DashboardSearchForm";
import { FormularySelectorProps } from "modules/agrovar/types/FormularyTypes";

function Formulary(props: React.PropsWithChildren) {
  return (
    <>
      <DashboardFormularyDispatchContext.Provider
        value={{ dispatch: () => {} }}
      >
        <DashboardFormularyStateContext.Provider value={{ entries: [] }}>
          <form>{props.children}</form>
        </DashboardFormularyStateContext.Provider>
      </DashboardFormularyDispatchContext.Provider>
    </>
  );
}

Formulary.Group = function (props: React.PropsWithChildren) {
  return <>{props.children}</>;
};

Formulary.Select = function (props: FormularySelectorProps) {
  return <></>;
};

Formulary.Submit = function () {
  return <></>;
};
Formulary.Reset = function () {
  return <></>;
};

export { Formulary };
