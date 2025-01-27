import './style.scss';
import Template from './Template';

const Vlad = () => {
  const cyberProps = {
    text: 'Vlad Tritochki',
    mySkills: {
      html: 'html',
      css: 'css',
      sass: 'sass',
      javascript: 'javascript',
      gsap: 'gsap',
      animation: 'animation',
    },
    changeCase: {
      soulful: '/work/soulful',
      mosaic: '/work/mosaic',
      emt: '/work/emt',
      cyberfam: '/work/cyberfam',
      td: '/work/td',
    },
    changeCaseImg: {
      mosaicImg: '../img/work/1.jpg',
      soulfulImg: '../img/work/2.jpg',
      cyberfamImg: '../img/work/3.jpg',
      emtImg: '../img/work/4.jpg',
      tdImg: '../img/work/11.jpg',
    },
    mainImage: '../img/work/5.jpg',
    description:
      'As part of the project to create a portfolio website for a tattoo artist, my role was both versatile and inspiring. I collaborated with designers to develop a unique and visually appealing website style. We paid special attention to detail to ensure that the site highlighted the art of tattooing and showcased the individuality of each of the artist’s works.',
    templateLink: 'http://vladtritochki.com/',
    imageLaptop: '../img/case/cyberfam/canvas1.jpg',
    canvasText:
      'VLAD TRITOCHKI VLAD TRITOCHKI VLAD TRITOCHKI VLAD TRITOCHKI VLAD TRITOCHKI VLAD TRITOCHKI VLAD TRITOCHKI VLAD TRITOCHKI VLAD TRITOCHKI VLAD TRITOCHKI VLAD TRITOCHKI VLAD TRITOCHKI VLAD TRITOCHKI VLAD TRITOCHKI VLAD TRITOCHKI VLAD TRITOCHKI VLAD TRITOCHKI',
    nextPageLink: '/work/td',
    nextCaseTitle: 'TD Montenegro',
    nextCaseImg: '../img/work/11.jpg',
  };
  const slides = [
    {
      imageUrl: '../img/case/vlad/1.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/vlad/2.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/vlad/3.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/vlad/4.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/vlad/5.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
  ];
  return (
    <>
      <main className='vlad case'>
        <Template
          {...cyberProps}
          slides={slides}
        />
      </main>
    </>
  );
};

export default Vlad;
