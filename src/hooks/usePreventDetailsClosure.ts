/**
 * This hook prevents details tags closures.
 */
export default function usePreventDetailsClosure() {
  const detailsElements = document.querySelectorAll<HTMLDetailsElement>(
    "details[open][data-disabled-closure]"
  );

  function disableDetailsClosureCallback() {
    detailsElements.forEach((value) => {
      value?.addEventListener("toggle", () => {
        value.open = true;
      });
    });
  }
  return disableDetailsClosureCallback;
}
