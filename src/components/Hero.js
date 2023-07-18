import Typed from 'react-typed';
const Hero = () => {
  return (
    <div
      className="  bg-[url('https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')]
      border-8
      bg-cover
      bg-center
      relative
      bg-no-repeat
      bg-blend-overlay bg-black/50
     text-white
    rounded-3xl
    border-white w-full h-[60vh] flex justify-center items-center "
    >
      <div className="w-[80%]  text-xl">
        <p className="font-extrabold py-3 md:text-lg">
          {' '}
          Discover the world of speed and style on our exceptional auto and moto hub.
        </p>
        <Typed
          className="w-full text-center md:text-6xl pt-3  font-extralight text-2xl"
          strings={['With', 'Smartminicar', 'Discover', 'Drive', 'Delight']}
          backSpeed={140}
          typeSpeed={40}
          loop
        />
        <div className="w-full text-center pt-4">
          <button className="bg-black/50 text-white rounded-s-lg font-extrabold   px-7 py-2 text-sm ">
            Unleash Your Drive{' '}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
