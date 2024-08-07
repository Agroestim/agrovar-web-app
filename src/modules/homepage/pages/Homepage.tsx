import { HomepageFooterComponent } from "../components/HomepageFooter";
import { HomepageHeaderComponent } from "../components/HomepageHeader";
import { HomepageHeroComponent } from "../components/HomepageHero";

export function HomePage() {
  return (
    <>
      <HomepageHeaderComponent />
      <main className="container g-homepage">
        <HomepageHeroComponent />
        <div id="body"></div>
      </main>
      <HomepageFooterComponent />
    </>
  );
}
