import { Separator, Link, Flex, Box, Section, Text, Grid, Badge } from '@radix-ui/themes'
import { EnvelopeClosedIcon, PersonIcon, GitHubLogoIcon, DrawingPinIcon, CornerBottomLeftIcon, CheckIcon, NotionLogoIcon } from '@radix-ui/react-icons'
export default function Profile() {

  return (
    <Section>

<div className='flex justify-center'>

        <div className="flex flex-col text-center md:text-left">
          <Text size="7" weight="bold">안녕하세요,</Text>
          <Text size="7" weight="bold">프론트엔드 개발자 <span className="text-purple-600">김현태</span>입니다.</Text>
        </div>
      </div>
      <br />
      <br />

      <div className='flex justify-center'>

        <br />
        <div className="flex text-center md:text-left gap-10">
          <Box className="profile" >
            <img src="img/user.jpg" className="w-full md:w-64 rounded-lg" />
          </Box>

          <Box className="profile">
            <br />
            <div className='flex flex-col'>
              <div><Text size="7" weight="bold" color="purple">Blog.</Text></div>
              <br />
              <div><Link size="1" style={{ display: "flex" }}><EnvelopeClosedIcon />&nbsp;https://velog.io/@htkim97/posts</Link></div>

            </div>
            <br />
            <br />
            <div>
              <div><Text size="7" weight="bold" color="purple">Channel.</Text></div>
              <br />
              <div><Link size="1" style={{ display: "flex" }}><GitHubLogoIcon />&nbsp; https://github.com/htkim97</Link></div>
            </div>
          </Box>

        </div>
      </div>
    </Section>
  )

}







{/* <img src="img/user.jpg" width="300px" /> */ }