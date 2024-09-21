import {
  Separator,
  Link,
  Flex,
  Box,
  Section,
  Text,
  Grid,
  Badge,
} from "@radix-ui/themes";
import {
  EnvelopeClosedIcon,
  PersonIcon,
  GitHubLogoIcon,
  DrawingPinIcon,
  CornerBottomLeftIcon,
  CheckIcon,
  NotionLogoIcon,
} from "@radix-ui/react-icons";
export default function Project_2() {
  return (
    <section className="mt-16">
      <Flex style={{ margin: "0 20% 0 21%" }}>
        <ul>
          <li>
            <Text
              as="p"
              mb="1"
              size="3"
              weight="bold"
              style={{ display: "flex" }}
            >
              <CornerBottomLeftIcon />
              사내 works 시스템
            </Text>
          </li>
          <li>
            <Badge color="purple">ReactNative</Badge>&nbsp;
            <Badge color="purple">TypeScript</Badge>&nbsp;
            <Badge color="purple">SCSS</Badge>&nbsp;
            <Badge color="purple">AXIOS</Badge>&nbsp;
            <Badge color="purple">Redux ToolKit</Badge>&nbsp;
          </li>
        </ul>
      </Flex>
      <br />
      <Flex style={{ margin: "0 20% 0 22%" }}>
        <ul>
          <li>
            <Text as="p" mb="1" size="2" weight="bold">
              주요 업무 및 성과 :{" "}
            </Text>
          </li>
        </ul>
      </Flex>
      <br />
      <Flex align="start" style={{ margin: "0 10% 0 22%" }}>
        <ul>
          <li>
            <Text as="p" mb="1" size="1" style={{ display: "flex" }}>
              <CheckIcon />
              &nbsp;문서함 폴더 관리에 따른 api 연동 (폴더 삭제, 생성, 이름 변경).
            </Text>
          </li>
          <br />
          <li>
            <Text as="p" mb="1" size="1" style={{ display: "flex" }}>
              <CheckIcon />
              &nbsp;문서함, 결재함 화면에 따른 공동 컴포넌트 제작
            </Text>
          </li>
      
        </ul>
      </Flex>
      <br />
      <br />
      <Flex style={{ margin: "0 10% 0 22%" }}>
        <Text size="2" style={{ display: "flex" }}>
          <NotionLogoIcon />
          &nbsp;
          <a href="https://www.figma.com/design/8dJnlfn6ByynHxsHFwJN1E/Untitled?node-id=0-1&t=7C1ATik2tjsYBfsL-1">
             사내 works 시스템 가이드 해당 피그마 (문서함, 결재함){" "}
          </a>
        </Text>
      </Flex>
    </section>
  );
}
