import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    // to track the visibility of the section we are using the useInView hook. The ref is used to track the visibility of the section and inView is a boolean that tells us if the section is in view or not.
    const { ref, inView } = useInView({
        threshold,
      });
      const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // Since we do not want to set state when rendering we need to use the hook useEffect to synchronize the active section with the current section in view.
  // If invView is true we set the active section to "About".
  // We also check if the time of the last click is more than 1 second ago. This is to prevent the active section from stopping by all links in between when the user clicks on a link.
      useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
          setActiveSection(sectionName);
        }
      }, [inView, setActiveSection, timeOfLastClick, sectionName]);

      return { ref };
}
