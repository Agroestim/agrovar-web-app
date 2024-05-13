export default function DefaultErrorComponent() {
  return (
    <>
      <main className="container">
        <hgroup>
          <i>Client Error</i>
          <h1>El sitio que estas buscando no existe o dejo de funcionar.</h1>
          <hr />
          <p className="secondary">
            Si el error persiste intenta las siguientes recomendaciones:
          </p>
          <ul>
            <li>Intenta recargar la página o cerrar y abrir tu navegador.</li>
            <li>Chequea tu conexión a</li>
          </ul>
        </hgroup>
      </main>
    </>
  );
}
