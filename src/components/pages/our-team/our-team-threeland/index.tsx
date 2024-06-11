const Index = () => {
  return (
    <section
      style={{ backgroundImage: `url('/banner_our_team.jpg')` }}
      className="min-[900px]:flex block relative py-[clamp(2rem,6vw,2rem)] px-[24px]"
    >
      <div className="absolute h-[100%] bg-[#0066B3] opacity-80 bottom-0 left-0 right-0 top-0 z-0"></div>
      <div className="flex flex-col min-[900px]:flex-row py-10 min-[900px]:z-10 z-10">
        <div className="block text-[32px] text-[#fff] sm:px-[10px] lg:px-[200px] py-5 z-10">
          Who we are
        </div>
        <div className="flex-1 pr-[100px] z-10 min-[900px]:mr-[100px] mr-[5px]">
          <h3 className="min-[900px]:text-[56px] text-[32px] font-medium pb-5 text-[#fff]">
            Our team - threelanders
          </h3>
          <p className="text-[20px] text-[#fff] font-light pb-10">
            Threeland has built an impressive team of more than 60 staffs
            engaged in branches, representative offices and alliance partners.
            We are a group of passionate travel coordinators working based on
            teamwork and pride ourselves on creating unbelievable travel
            experiences for our clients and make them feel part of the family.
            Our success is originated from a consistent team effort driven by
            clear direction, common goals and respect for our people and our
            partners. We know our strength and our competitive advantage is from
            our people. Without them we would simply be bricks and mortar.
          </p>
          <p className="text-[20px] text-[#fff] font-light pb-10">
            The success of our trips guaranteed by efforts of the united team
            not only by salesman, tour guide or driver who communicate
            frequently with our clients but also by others who currently are
            working behind the scene to create a complete journey. Owing our
            staff a debt of gratitude, we still do not give prominence to any
            typical faces, high ranking managers or key persons, as we know
            success of the organization is contributed by our teamwork.
            Threeland encourages our staffs by organizing constantly activities
            to create team spirit, giving gifts on children day, full-moon
            festival or birthday of each staff. We create memories for life,
            those once-in-a lifetime moments. That’s priceless.
          </p>
          <p className="text-[20px] text-[#fff] font-light">
            Enjoy working, enjoy timeless joy with us
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
