'use client';
import BannerBlog from '@/components/pages/blogs/banner-blog';
import Content from '@/components/pages/blogs/detail/content';

const Index = () => {
  return (
    <main>
      <BannerBlog isDetail={true} />

      <Content />
    </main>
  );
};

export default Index;
