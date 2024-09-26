import { ApplicationHeaderComponent } from "modules/commons/components/ApplicationHeader";
import { HomepageHeroComponent } from "../components/HomepageHero";
import { ApplicationFooterComponent } from "modules/commons/components/ApplicationFooter";

export function HomePage() {
  return (
    <>
      <ApplicationHeaderComponent />
      <main className="container g-homepage">
        <HomepageHeroComponent />
        <div id="body"></div>
      </main>
      <ApplicationFooterComponent />
    </>
  );
}
