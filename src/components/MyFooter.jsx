import Container from './Container/Container';
import Typed from 'react-typed';
const MyFooter = () => {
  return (
    <Container className="bg-black py-10 text-white mb-4">
      <div className="w-full flex  justify-center items-center py-4">
        <Typed
          className="w-full text-center md:text-5xl pt-3  font-extralight text-2xl"
          strings={['Smartminicar']}
          backSpeed={140}
          typeSpeed={40}
          loop
        />
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-3 text-xs text-center gap-x-4">
            <p className="">Contact us</p>
            <p className="">Terms of use</p>
            <p className="">Privacy Policy</p>
          </div>
          <p className="md:pl-10 py-2 text-xs">©Smartminicart.com 2023</p>
          <div className="text-xs md:pl-12 text-gray-500 pl-5 pb-4">All Rights Reserved.</div>
        </div>
      </div>
    </Container>
  );
};
export default MyFooter;
