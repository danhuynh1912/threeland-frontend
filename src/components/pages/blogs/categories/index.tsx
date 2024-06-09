import { CategoriesList } from '../const';

const Index = () => {
  return (
    <div className='lg:min-w-[clamp(300px,30vw,500px)]'>
      <div className='px-5 text-[24px] text-[#FFFFFF] bg-[#0066B3] h-[70px] leading-[70px]'>
        <p className='font-medium'>CATEGORIES</p>
      </div>
      <div className='border-[2px] border-[#E6E8E8] px-2'>
        {CategoriesList.map((item, index) => (
          <div key={item.id} className='flex py-5'>
            <p className='flex-1 text-[20px] text-[#4A4A4A] font-medium'>
              {item.name}
            </p>
            <p>({item.amount})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
