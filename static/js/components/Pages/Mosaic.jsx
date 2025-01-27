import './style.scss';
import Template from './Template';

const Soulful = () => {
  const soulfulProps = {
    text: 'mosaic of cultures',
    mySkills: {
      html: 'html',
      react: 'react',
      css: 'css',
      sass: 'sass',
      blender: 'blender',
      r3f: 'React-Three-Fiber',
      gsap: 'GSAP',
    },
    changeCase: {
      soulful: '/work/soulful',
      emt: '/work/emt',
      cyberfam: '/work/cyberfam',
      vlad: '/work/vlad',
      td: '/work/td',
    },
    changeCaseImg: {
      soulfulImg: '../img/work/2.jpg',
      cyberfamImg: '../img/work/3.jpg',
      vladImg: '../img/work/5.jpg',
      emtImg: '../img/work/4.jpg',
      tdImg: '../img/work/11.jpg',
    },
    mainImage: '../img/work/1.jpg',
    description:
      'As part of this project, my primary tasks were to create the website layout, develop a 3D model, integrate it into the site, and implement animations. I closely collaborated with designers throughout the process to ensure the final product was both high quality and visually appealing.',
    templateLink: 'http://chernivtsi.ocb.works/',
    canvasText:
      'MOSAIC OF CULTURES MOSAIC OF CULTURES MOSAIC OF CULTURES MOSAIC OF CULTURES MOSAIC OF CULTURES MOSAIC OF CULTURES MOSAIC OF CULTURES MOSAIC OF CULTURES MOSAIC OF CULTURES MOSAIC OF CULTURES MOSAIC OF CULTURES MOSAIC OF CULTURES',
    nextPageLink: '/work/emt',
    nextCaseTitle: 'Emt Promo',
    nextCaseImg: '../img/work/4.jpg',
  };
  const slides = [
    {
      imageUrl: '../img/case/mosaic/1.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/mosaic/2.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/mosaic/3.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/mosaic/4.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/mosaic/5.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
  ];
  return (
    <>
      <main className='mosaic case'>
        <Template
          {...soulfulProps}
          slides={slides}
        />
      </main>
    </>
  );
};

export default Soulful;
