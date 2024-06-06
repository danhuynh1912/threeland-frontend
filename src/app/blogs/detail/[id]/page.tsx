"use client";
import BannerBlog from "@/components/blogs/banner-blog";
import Content from "@/components/blogs/detail/content";

const Index = () => {
  return (
    <main>
      <BannerBlog isDetail={true} />

      <Content />
    </main>
  );
};

export default Index;
