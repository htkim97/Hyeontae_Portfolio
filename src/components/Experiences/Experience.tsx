import {Separator, Link, Flex, Box, Section, Text, Grid, Badge } from '@radix-ui/themes'
import { EnvelopeClosedIcon, PersonIcon, GitHubLogoIcon, DrawingPinIcon, CornerBottomLeftIcon, CheckIcon,NotionLogoIcon } from '@radix-ui/react-icons'
import In_Project_1 from './intelloid/project1';
import In_Project_2 from './intelloid/project2';
import In_Project_3 from './intelloid/project3'
import Project_1 from './bizbee/Project1';
import Project_2 from './bizbee/Project2';
export default function Experience() {
  return(
    <>
    <div className="p-2 mt-10">
    <div style={{textAlign:"center"}}><Text size="6" weight="bold" color="purple" align="center">Experience.</Text></div>

    <br />
    <Separator color="indigo" size="4" />
    <br />
    <br />
    <Flex style={{ margin: "0 20% 0 20%" }}>

      <ul>
        <li><Text size="5" weight="bold" color="gray">(주)비즈비</Text>&nbsp;<Badge color="purple">ERP</Badge></li>
        <li style={{ float: "left" }}><Text size="1">2024.05 ~ 재직중</Text></li>
      </ul>
    </Flex>

   <Project_1/>
   <Project_2/>


  </div>
    <div className="p-2 mt-20">
   
    <Flex style={{ margin: "0 20% 0 20%" }}>

      <ul>
        <li><Text size="5" weight="bold" color="gray">(주)인텔로이드</Text>&nbsp;<Badge color="purple">STT</Badge>&nbsp;<Badge color="blue">Voice AI</Badge></li>
        <li style={{ float: "left" }}><Text size="1">2022.04 ~ 2023.10</Text></li>
      </ul>
    </Flex>
   <In_Project_1/>
   <In_Project_2/>
   <In_Project_3/>


  </div>
    </>
  )
}