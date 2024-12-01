import DemoHeading from "./DemoHeading.jsx";
import DemoSection from "./DemoSection.jsx";

export default function Page() {
  return (
    <DemoSection>
      <DemoHeading>Title</DemoHeading>
      <DemoSection>
        <DemoHeading>Heading</DemoHeading>
        <DemoHeading>Heading</DemoHeading>
        <DemoHeading>Heading</DemoHeading>
        <DemoSection>
          <DemoHeading>Sub-heading</DemoHeading>
          <DemoHeading>Sub-heading</DemoHeading>
          <DemoHeading>Sub-heading</DemoHeading>
          <DemoSection>
            <DemoHeading>Sub-sub-heading</DemoHeading>
            <DemoHeading>Sub-sub-heading</DemoHeading>
            <DemoHeading>Sub-sub-heading</DemoHeading>
          </DemoSection>
        </DemoSection>
      </DemoSection>
    </DemoSection>
  );
}
