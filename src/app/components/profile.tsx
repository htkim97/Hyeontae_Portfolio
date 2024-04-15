import {Separator, Link, Flex, Box, Section, Text, Grid, Badge } from '@radix-ui/themes'
import { EnvelopeClosedIcon, PersonIcon, GitHubLogoIcon, DrawingPinIcon, CornerBottomLeftIcon, CheckIcon,NotionLogoIcon } from '@radix-ui/react-icons'
export default function Profile() {

    return(
        <Section>

        <div style={{ display: "flex", justifyContent: "center" }}>

          <ul>

          <li><Text size="7" weight="bold" style={{ display: "flex" }}>안녕하세요,</Text></li>
            <li><Text size="7" weight="bold" style={{ display: "flex" }}>프론트엔드 개발자&nbsp;<Text style={{color:"purple"}}>김현태</Text>&nbsp;입니다.</Text></li>

          </ul>
        </div>
        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>

          <br />
          <div className='flex items-center gap-16'>
            <Box className="profile" >
              <img src="img/user.jpg" width="300px" />
            </Box>
          
            <Box className="profile">
              <br />
              <ul>
                <li><Text size="7" weight="bold" color="purple">Blog.</Text></li>
                <br />
                <li><Link size="1" style={{ display: "flex" }}><EnvelopeClosedIcon />&nbsp; https://velog.io/@htkim97/posts</Link></li>
                
              </ul>
              <br />
              <br />
              <ul>
                <li><Text size="7" weight="bold" color="purple">Channel.</Text></li>
                <br />
                <li><Link size="1" style={{ display: "flex" }}><GitHubLogoIcon />&nbsp; https://github.com/htkim97</Link></li>
              </ul>
            </Box>

          </div>
        </div>
      </Section>
    )
  
}