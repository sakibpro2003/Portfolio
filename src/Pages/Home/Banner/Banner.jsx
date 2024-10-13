import bannerImg from "../../../assets/bannerimg.jpeg" 

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerImg}
            className=" rounded-lg shadow-4xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-[#584267]">Hey!</h1>
            <h1 className="text-5xl text-[#584267] font-bold">I&apos;m Sakib Prodhan</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-[#584267] text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
