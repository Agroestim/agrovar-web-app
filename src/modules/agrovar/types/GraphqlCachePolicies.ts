import { FieldFunctionOptions } from "@apollo/client";
import { TypedPreflightVariables } from "./GraphqlQueryTypes";

export interface CacheFunctionsPolicy
  extends FieldFunctionOptions<TypedPreflightVariables, Record<string, any>> {}
