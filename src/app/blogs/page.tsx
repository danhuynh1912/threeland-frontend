'use client';
import React from 'react';

import BlogList from '@/components/pages/blogs/blog-list';
import BannerBlog from '@/components/pages/blogs/banner-blog';
import Tag from '@/components/pages/blogs/tag';
import ViewedArticles from '@/components/pages/blogs/viewed-articles';
import Tour from '@/components/pages/blogs/tour';
import AllArticles from '@/components/pages/blogs/all-articles';
import Categories from '@/components/pages/blogs/categories';
import RelatedTour from '@/components/pages/blogs/related-tour';

const Page = () => {
  return (
    <main>
      <BannerBlog />

      <BlogList />

      <Tag />

      <ViewedArticles />

      <Tour />

      <div
        className={`flex justify-between lg:flex-row flex-col px-[24px] sm:px-[50px] lg:px-[100px] mt-20`}
      >
        <AllArticles />
        <Categories />
      </div>

      <RelatedTour />
      {/* <Banner
        url='blogs-banner.png'
        defaultForm={false}
        title='Talk to our local expert directly'
        subTitle='We are a real estate agency that will help you find the best residence you dream of, let’s discuss for your dream house?'
      >
        <div
          role='button'
          className='mt-5 text-white h-[48px] w-[201px] rounded-[8px] bg-[rgba(0,102,179,1)] grid place-items-center'
        >
          <span>Get free advice now</span>
        </div>
      </Banner> */}
    </main>
  );
};

export default Page;
