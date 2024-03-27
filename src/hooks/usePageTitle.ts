import { useEffect } from "react";

type PageTitleHookProp = {
  title: string;
};

export default function usePageTitle({ title }: PageTitleHookProp) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
