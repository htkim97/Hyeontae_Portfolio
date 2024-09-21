import { Separator, Link, Flex, Box, Section, Text, Grid, Badge } from '@radix-ui/themes'
import { CornerBottomLeftIcon, GitHubLogoIcon} from '@radix-ui/react-icons'
import { MdOutlineCircle } from "react-icons/md";

export default function Project() {

    return (
        <div className="p-2 mt-10">
            <div style={{ textAlign: "center" }}><Text size="6" weight="bold" color="purple" align="center">Project.</Text></div>

            <br />
            <Separator color="indigo" size="4" />
            <br />
            <br />
            <section className=''>

            <Flex style={{ margin: "0 20% 0 20%" }}>
                <ul>
                    
                    <br />
                    <li className='flex'><CornerBottomLeftIcon/><Text size="5" weight="bold" color="gray">회고 다이어리</Text></li>
                    <li>
                        &nbsp;<Badge color="purple">NextJS</Badge>
                        &nbsp;<Badge color="purple">TypeScript</Badge>
                        &nbsp;<Badge color="purple">JavaScript</Badge>
                        &nbsp;<Badge color="purple">Tailwind</Badge>
                        &nbsp;<Badge color="blue">GPT AI</Badge>
                        

                    </li>
                </ul>
            </Flex>
            <Flex style={{ margin: "2% 20% 0 20%" }}>
                <Text as="p" mb="1" size="3">
                NextJS 토이프로젝트 "회고 다이어리"입니다.
                </Text>
            </Flex>
            <Flex>
                <a className='flex p-2 mx-auto' href="https://github.com/htkim97/Nextjs_diary"> 
                    <img src="img/diary.png" alt="" width={700} height={200} className='p-1 rounded-md shadow-md hover:bg-violet-200' />
                </a>
            </Flex>
            </section>
            <br />
            <br />
            <section className=''>

            <Flex style={{ margin: "0 20% 0 20%" }}>
                <ul>
                    
                    <br />
                    <li className='flex'><CornerBottomLeftIcon/><Text size="5" weight="bold" color="gray">심플 노트</Text></li>
                    <li>
                        &nbsp;<Badge color="purple">NextJS</Badge>
                        &nbsp;<Badge color="purple">TypeScript</Badge>
                        &nbsp;<Badge color="purple">JavaScript</Badge>
                        &nbsp;<Badge color="purple">Tailwind</Badge>
                        &nbsp;<Badge color="blue">Radix UI</Badge>

                    </li>
                </ul>
            </Flex>
            <Flex style={{ margin: "2% 20% 0 20%" }}>
                <Text as="p" mb="1" size="3">
                NextJS 토이프로젝트 "SimpleNote App"입니다.
                </Text>
            </Flex>
            <Flex>
                <a className='flex p-2 mx-auto' href="https://github.com/htkim97/simply_Note"> 
                    <img src="img/note.png" alt="" width={700} height={200} className='p-1 rounded-md shadow-md hover:bg-violet-200' />
                </a>
            </Flex>
            </section>
            <br />
            <br />
            <section className=''>

            <Flex style={{ margin: "0 20% 0 20%" }}>
                <ul>
                    
                    <br />
                    <li className='flex'><CornerBottomLeftIcon/><Text size="5" weight="bold" color="gray">인스타그램 Clone</Text></li>
                    <li>
                        &nbsp;<Badge color="purple">NextJS</Badge>
                        &nbsp;<Badge color="purple">TypeScript</Badge>
                        &nbsp;<Badge color="purple">JavaScript</Badge>
                        &nbsp;<Badge color="purple">Tailwind</Badge>
                        &nbsp;<Badge color="blue">Daisy UI</Badge>
                        &nbsp;<Badge color="orange">Sanity Studio</Badge>
                    </li>
                </ul>
            </Flex>
            <Flex style={{ margin: "2% 20% 0 20%" }}>
                <Text as="p" mb="1" size="3">
                    NextJS를 공부하며 인스타그램의 화면 레이아웃을 클론 코딩한 프로젝트 입니다.
                </Text>
            </Flex>
            <Flex>
                <a className='flex p-2 mx-auto' href="https://github.com/htkim97/musical_blog"> 
                    <img src="img/panel.png" alt="" width={700} height={200} className='p-1 rounded-md shadow-md hover:bg-violet-200' />
                </a>
            </Flex>
            </section>
            <br />
            <br />
            <br />
            <section>

            <Flex style={{ margin: "0 20% 0 20%" }}>
                <ul>
                    
                    <br />
                    <li className='flex'><CornerBottomLeftIcon/><Text size="5" weight="bold" color="gray">포트폴리오 사이트</Text></li>
                    <li>
                        &nbsp;<Badge color="purple">NextJS</Badge>
                        &nbsp;<Badge color="purple">TypeScript</Badge>
                        &nbsp;<Badge color="purple">JavaScript</Badge>
                        &nbsp;<Badge color="purple">SCSS</Badge>
                        &nbsp;<Badge color="blue">Radix UI</Badge>
                    </li>
                </ul>
            </Flex>
            <Flex style={{ margin: "2% 20% 0 20%" }}>
                <Text as="p" mb="1" size="3" >NextJS를 활용한 포트폴리오 웹사이트 입니다.</Text>
            </Flex>
            <Flex>
                <a href="https://github.com/htkim97/Hyeontae_portfolio" className='flex p-2 mx-auto'>
                    <img src="img/portfolio.png" alt="" width={700} height={200} className='p-1 rounded-md shadow-md hover:bg-violet-200' />
                </a>
            </Flex>
            </section>

        </div>
    )

}