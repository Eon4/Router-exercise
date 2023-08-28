import { useEffect } from "react";
import { ContentSection } from "../components/content/content";

export const HomePage = () => {

  useEffect(() => {
    console.log("Home Page Component has Mounted")
    return (
        () => {
            console.log("Home Page Component has Un-Mounted")
        }
    )
}, [])

  return (
    <ContentSection title="Home page. lala">
      <h4>Here is a welcome page section. Very nice istn it?</h4>
      <p>Welcome!</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iure
        eaque quos commodi praesentium rerum et repudiandae animi. Debitis
        maxime eum, perferendis explicabo temporibus accusantium enim ipsam
        possimus veniam est. lalallaa.
      </p>
    </ContentSection>
  );
};