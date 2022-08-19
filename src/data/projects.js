import {
  IconBrandAndroid,
  IconBrandCss3,
  IconBrandFlutter,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandPhp,
  IconBrandReact,
  IconBrandSass,
  IconBrandTailwind,
  IconBrandWordpress,
  IconDatabase,
  IconLink,
  IconTool,
} from '@tabler/icons';

const projects = [
  {
    title: '1UpInfinite',
    type: 'web',
    icon: <IconLink />,
    url: 'https://1upinfinite.com',
    tags: [
      { name: 'WordPress', icon: <IconBrandWordpress /> },
      { name: 'PHP', icon: <IconBrandPhp /> },
      { name: 'JavaScript', icon: <IconBrandJavascript /> },
      { name: 'Sass', icon: <IconBrandSass /> },
    ],
    description: 'Video game journalism website.',
  },
  {
    title: 'GH Stats',
    type: 'web',
    icon: <IconLink />,
    url: 'https://ghstats.zwwuu.dev',
    repo: 'https://github.com/zwwuu/gh-stats',
    tags: [
      { name: 'React', icon: <IconBrandReact /> },
      { name: 'JavaScript', icon: <IconBrandJavascript /> },
      { name: 'Tailwind', icon: <IconBrandTailwind /> },
    ],
    description: 'Website to check download count for your GitHub releases.',
  },
  {
    title: 'postcss-progress-bar',
    type: 'tool',
    icon: <IconTool />,
    repo: 'https://github.com/zwwuu/postcss-progress-bar',
    tags: [
      { name: 'JavaScript', icon: <IconBrandJavascript /> },
      { name: 'CSS', icon: <IconBrandCss3 /> },
    ],
    description: 'PostCSS plugin for styling progress element.',
  },
  {
    title: 'Shortl',
    type: 'web',
    icon: <IconLink />,
    url: 'https://shortl.net',
    repo: 'https://github.com/zwwuu/shortl',
    tags: [
      { name: 'Next.js', icon: <IconBrandNextjs /> },
      { name: 'React', icon: <IconBrandReact /> },
      { name: 'PostgreSQL', icon: <IconDatabase /> },
    ],
    description: 'Link shortener with password protection.',
  },
  {
    title: 'Zone',
    type: 'mobile',
    icon: <IconBrandAndroid />,
    repo: 'https://github.com/zwwuu/zone',
    tags: [
      { name: 'Android', icon: <IconBrandAndroid /> },
      { name: 'Flutter', icon: <IconBrandFlutter /> },
    ],
    description: 'Yet another HackerNews client.',
  },
  {
    title: 'zwwuu',
    type: 'web',
    icon: <IconLink />,
    url: 'https://zwwuu.dev',
    repo: 'https://github.com/zwwuu/zwwuu.dev',
    tags: [
      { name: 'Next.js', icon: <IconBrandNextjs /> },
      { name: 'React', icon: <IconBrandReact /> },
      { name: 'Tailwind', icon: <IconBrandTailwind /> },
    ],
    description: 'My personal website.',
  },
];

export default projects;
