// // ./src/theme/theme.tsx

// import React from 'react';
// import { Anchor } from 'antd';

// export default () => {
//   const { meta, slugs } = useRoutify();
//   const sections = slugs
//     .filter(slug => slug.depth === 1) // 只获取一级标题
//     .map(slug => ({
//       slug,
//       title: slug.value,
//     }));

//   return (
//     <div style={{ display: 'flex' }}>
//       {/* 侧边栏 */}
//       <div style={{ flex: '1 0 200px', marginRight: '20px' }}>
//         <ul>
//           {sections.map(section => (
//             <li key={section.slug.heading}>
//               <a href={`#${section.slug.heading}`}>{section.title}</a>
//             </li>
//           ))}
//         </ul>
//       </div>
//       {/* 右侧锚点 */}
//       <div style={{ flex: '1 0 200px' }}>
//         <Anchor affix={false}>
//           {sections.map(section => (
//             <Anchor.Link key={section.slug.heading} href={`#${section.slug.heading}`} title={section.title} />
//           ))}
//         </Anchor>
//       </div>
//       {/* 主要内容区域 */}
//       <div style={{ flex: 1 }}>{meta.route.component()}</div>
//     </div>
//   );
// };
