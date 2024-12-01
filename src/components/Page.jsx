import DemoHeading from "./DemoHeading.jsx";
import DemoSection from "./DemoSection.jsx";

export default function Page() {
  return (
    <DemoSection level={1}>
      <DemoHeading>Title</DemoHeading>
      <DemoSection level={2}>
        <DemoHeading>Heading</DemoHeading>
        <DemoHeading>Heading</DemoHeading>
        <DemoHeading>Heading</DemoHeading>
        <DemoSection level={3}>
          <DemoHeading>Sub-heading</DemoHeading>
          <DemoHeading>Sub-heading</DemoHeading>
          <DemoHeading>Sub-heading</DemoHeading>
          <DemoSection level={4}>
            <DemoHeading>Sub-sub-heading</DemoHeading>
            <DemoHeading>Sub-sub-heading</DemoHeading>
            <DemoHeading>Sub-sub-heading</DemoHeading>
          </DemoSection>
        </DemoSection>
      </DemoSection>
    </DemoSection>
  );
}
