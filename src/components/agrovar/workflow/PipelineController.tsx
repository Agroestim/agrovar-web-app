import { useQuery } from "@apollo/client";
import { QUERY_VARIETIES_OPTIONS } from "graphql/preflightQueries";

/**
 * This component handles the pipeline operations making queries and
 * checking the WorkflowContexts state at the same time.
 */
export function PipelineContextController() {
  const { data, loading, error } = useQuery(QUERY_VARIETIES_OPTIONS);
}
