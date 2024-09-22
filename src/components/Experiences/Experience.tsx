import {
  Separator,
  Flex,
  Text,
  Badge,
  Box,
} from '@radix-ui/themes';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import In_Project_1 from './intelloid/project1';
import In_Project_2 from './intelloid/project2';
import In_Project_3 from './intelloid/project3';
import Project_1 from './bizbee/Project1/Project1';
import Project_2 from './bizbee/Project2';

export default function Experience() {
  return (
    <Box className="p-2 mt-10">
      <Text  size="6" weight="bold" color="purple" align="center">
        Experience.
      </Text>

      <Separator color="indigo" size="4" className="my-6" />

      <SectionCompany
        company="(주)비즈비"
        badges="ERP"
        date="2024.05 ~ 재직중"
      >
        <ImageWithSideAlignment
          src="img/cocoaTalk.avif"
          alt="Project 1 Note"
          width={500}
          height={200}
          alignment="right"
        />
        <Project_1 />
        <div>

        <ImageWithSideAlignment
          src="img/works1.png"
          alt="Project 1 Note"
          width={500}
          height={200}
          alignment="right"
        />
        <Project_2 />
        </div>
      </SectionCompany>
<br/>
<br/>
<br/>
      <SectionCompany
       
        company="(주)인텔로이드"
        badges={['STT', 'Voice AI']}
        date="2022.04 ~ 2023.10"
        
      >
        <In_Project_1 />
        <In_Project_2 />
        <In_Project_3 />
      </SectionCompany>
    </Box>
  );
}

// SectionCompany: A reusable component to show company details and projects
const SectionCompany = ({
  company,
  badges,
  date,
  children,
}: {
  company: string;
  badges?: string | string[];
  date: string;
  children: React.ReactNode;
}) => (
  <Box className="mb-10">
    <Flex style={{ margin: '0 20%' }}>
      <ul>
        <li>
          <Text size="5" weight="bold" color="gray">
            {company}
          </Text>
          {Array.isArray(badges)
            ? badges.map((badge) => (
                <Badge key={badge} color={badgeColor(badge)}>
                  {badge}
                </Badge>
              ))
            : badges && <Badge color="purple">{badges}</Badge>}
        </li>
        <li style={{ float: 'left' }}>
          <Text size="1">{date}</Text>
        </li>
      </ul>
    </Flex>
    {children}
  </Box>
);

// ImageWithSideAlignment: Aligns an image to the left or right while keeping layout intact
const ImageWithSideAlignment = ({
  src,
  alt,
  width,
  height,
  alignment,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  alignment: 'left' | 'right';
}) => (
  <Box
    style={{
      float: alignment,
      marginLeft: alignment === 'right' ? '20px' : 0,
      marginRight: alignment === 'left' ? '20px' : 0,
    }}
    className="p-1 rounded-md shadow-md hover:bg-violet-200"
  >
    <img src={src} alt={alt} width={width} height={height} />
  </Box>
);

// Helper function to map badge text to color
const badgeColor = (badge: string) => {
  switch (badge) {
    case 'ERP':
      return 'purple';
    case 'STT':
      return 'blue';
    case 'Voice AI':
      return 'blue';
    default:
      return 'gray';
  }
};
