import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import {
  siAndroid,
  siBabel,
  siCss3,
  siEslint,
  siFlutter,
  siGit,
  siHtml5,
  siJavascript,
  siJest,
  siJquery,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siReact,
  siRedis,
  siRust,
  siSass,
  siTailwindcss,
  siTypescript,
  siWebpack,
  siWordpress,
} from "simple-icons/icons";

const TagSphere = () => {
  const icons = [
    siGit,
    siMysql,
    siAndroid,
    siFlutter,
    siWebpack,
    siEslint,
    siJest,
    siBabel,
    siCss3,
    siJavascript,
    siHtml5,
    siJquery,
    siReact,
    siNodedotjs,
    siSass,
    siTailwindcss,
    siNextdotjs,
    siRust,
    siPhp,
    siWordpress,
    siMongodb,
    siRedis,
    siTypescript,
  ].map((icon) => {
    return renderSimpleIcon({
      icon,
      size: 48,
      aProps: {
        onClick: (e) => e.preventDefault(),
      },
    });
  });

  return (
    <Cloud
      id={"tag-cloud"}
      canvasProps={{
        className: "w-full",
        style: {},
      }}
      options={{
        depth: 1,
        wheelZoom: false,
        imageScale: 2,
        tooltip: "native",
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineMethod: "none",
        shadow: "#040404",
        shadowBlur: 1,
      }}
    >
      {icons}
    </Cloud>
  );
};

export default TagSphere;
