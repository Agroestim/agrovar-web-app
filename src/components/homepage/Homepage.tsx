import { HomepageDocsComponent } from "./HomepageDocs";
import { HomepageHeroComponent } from "./HomepageHero";
import { HomepageTableOfContentsComponent } from "./HomepageTableOfContents";

export default function HomePageComponent() {
  return (
    <>
      <main className="container g-homepage">
        <HomepageHeroComponent />
        <HomepageDocsComponent />
        <HomepageTableOfContentsComponent />
        <div id="body"></div>
      </main>
    </>
  );
}
