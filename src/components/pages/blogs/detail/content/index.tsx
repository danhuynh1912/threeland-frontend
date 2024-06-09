import LeftContent from '@/components/pages/blogs/detail/content/leftContent';
import RightContent from '@/components/pages/blogs/detail/content/rightContent';
import RelatedTour from '@/components/pages/blogs/related-tour';
import { useEffect, useRef, useState } from 'react';

const Index = () => {
  const ref = useRef<any>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // when the component gets mounted
    setWidth(ref.current.offsetWidth);
    // to handle page resize
    const getwidth = () => {
      setWidth(ref.current.offsetWidth);
    };
    window.addEventListener('resize', getwidth);
    // remove the event listener before the component gets unmounted
    return () => window.removeEventListener('resize', getwidth);
  }, []);

  return (
    <>
      <div
        ref={ref}
        className={`flex gap-10 xl:flex-row flex-col w-full px-[24px] sm:px-[50px] lg:px-[100px] py-10`}
      >
        <LeftContent />
        <RightContent />
      </div>
      <div className=''>
        <RelatedTour width={width} />
      </div>
    </>
  );
};

export default Index;
