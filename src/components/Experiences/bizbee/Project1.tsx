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
export default function Project_1() {
  return (
    <section className="mt-4">
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
              코코아톡 (비즈니스로 사용할 수 있는 채팅 서비스)
            </Text>
          </li>
          <li>
            <Badge color="purple">NextJS</Badge>&nbsp;
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
              &nbsp;로그인 화면 제작 및 api 연동.
            </Text>
          </li>
          <br />
          <li>
            <Text as="p" mb="1" size="1" style={{ display: "flex" }}>
              <CheckIcon />
              &nbsp;공동 컴포넌트 제작 시 아토믹 디자인 패턴을 도입하여
              컴포넌트를 최대한 분할시켜 재사용성을 높임
            </Text>
          </li>
          <br />
          <li>
            <Text as="p" mb="1" size="1" style={{ display: "flex" }}>
              <CheckIcon />
              &nbsp;폴더 구조 설계에 따른 화면 라우팅, 유저 id값에 따른 동적
              라우팅 설계.
            </Text>
          </li>
          <br />
          <li>
            <Text as="p" mb="1" size="1" style={{ display: "flex" }}>
              <CheckIcon />
              &nbsp; gitlab을 사용하여 팀원 간의 코드리뷰를 통해 코드의 퀄리티를
              높임.
            </Text>
          </li>
          <br />
          <li>
            <Text as="p" mb="1" size="1" style={{ display: "flex" }}>
              <CheckIcon />
              &nbsp;EsLint, Prettier등의 포맷팅을 만들어 코드 컨벤션을 지정함 .
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
          <a href="https://delirious-antelope-5d8.notion.site/f67ad5cd6a744516824a0fc890b3ce07?pvs=4
">
            코코아톡 가이드{" "}
          </a>
        </Text>
      </Flex>
    </section>
  );
}
