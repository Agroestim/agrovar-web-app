import Stack from "modules/agrovar/providers/NavigationStack";

export function TestStackNavigation() {
  return (
    <>
      <Stack>
        <Stack.Consumer></Stack.Consumer>
        <Stack.Breadcrumbs />
        <Stack.Screen name="onboarding" component={<h1>Wenas</h1>} />
        <Stack.Screen name="about" component={<h1>About</h1>} />
        <Stack.Screen name="links" component={<h1>Links</h1>} />
      </Stack>
    </>
  );
}
