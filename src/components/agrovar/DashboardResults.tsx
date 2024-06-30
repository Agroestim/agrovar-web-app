import { LoaderComponent } from "@components/common/Loader";
import ErrorComponent from "@components/error/Errors";
import { useCampaignQuery } from "@hooks/graphql/useCampaignQuery";
import { useUserWorkflowStackMedatata } from "@hooks/useUserWorkflowStackMetadata";

export function DashboardResultsComponent() {
  const metadata = useUserWorkflowStackMedatata();
  const { data, loading, error } = useCampaignQuery({
    limit: 10,
    cursor: "",
  });

  if (loading) return <LoaderComponent />;
  if (!data) {
    return (
      <ErrorComponent
        errorType={"Server Error"}
        generalizedMessage={"No data was returned from the server"}
        errorDescription={"El servidor no devolvio ningun dato en la consulta."}
      />
    );
  }

  if (error) {
    return (
      <ErrorComponent
        errorType={error.name}
        generalizedMessage={error.message}
        errorDescription={"El servidor no ha respondido correctamente."}
      />
    );
  }

  console.log(metadata);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">Nro</th>
            <th scope="col">Entrada</th>
            <th scope="col">Media Relativa</th>
          </tr>
        </thead>

        <tbody></tbody>
      </table>
    </>
  );
}
