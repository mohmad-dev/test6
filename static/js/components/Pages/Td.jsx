import './style.scss';
import Template from './Template';

const Td = () => {
  const props = {
    text: 'TD Montenegro',
    mySkills: {
      html: 'html',
      css: 'css',
      sass: 'sass',
      javascript: 'javascript',
      animation: 'animation',
      cms: 'cms',
    },
    changeCase: {
      soulful: '/work/soulful',
      mosaic: '/work/mosaic',
      emt: '/work/emt',
      cyberfam: '/work/cyberfam',
      vlad: '/work/vlad',
    },
    changeCaseImg: {
      mosaicImg: '../img/work/1.jpg',
      soulfulImg: '../img/work/2.jpg',
      cyberfamImg: '../img/work/3.jpg',
      vladImg: '../img/work/5.jpg',
      emtImg: '../img/work/4.jpg',
    },
    mainImage: '../img/work/11.jpg',
    description:
      'In my role, I was responsible for creating a website, which included developing animations to enhance visual appeal and user interaction. I collaborated closely with the back-end developer to ensure seamless integration between the front-end and server-side. Throughout the development process, I coordinated with the designer to align the design and achieve an optimal user experience.',
    templateLink: 'https://tdmontenegro.com/',
    canvasText:
      'TD MONTENEGRO TD MONTENEGRO TD MONTENEGRO TD MONTENEGRO TD MONTENEGRO TD MONTENEGRO TD MONTENEGRO TD MONTENEGRO TD MONTENEGRO TD MONTENEGRO TD MONTENEGRO TD MONTENEGRO TD MONTENEGRO TD MONTENEGRO TD MONTENEGRO TD MONTENEGRO TD MONTENEGRO TD MONTENEGRO',
    nextPageLink: '/work',
    nextCaseTitle: 'All work',
    nextCaseImg: '',
  };
  const slides = [
    {
      imageUrl: '../img/case/td/1.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/td/2.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/td/3.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/td/4.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/td/5.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
  ];
  return (
    <>
      <main className='td case'>
        <Template
          {...props}
          slides={slides}
        />
      </main>
    </>
  );
};

export default Td;
