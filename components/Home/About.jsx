import React from "react";

function About() {
  return (
    <div
      className="w-full py-10 rounded-t-3xl  bg-[#CDEA68] backdrop-blur-3xl"
    >
      <div className="">
        <h1 className=" text-9xl font-poppins font-bold ml-10 ">About us</h1>
      </div>
      <div className="font-poppins">
        <h1 className="text-4xl w-[90%] ml-10 mt-3">
          I’m a passionate web developer with a strong focus on creating
          dynamic, responsive, and user-friendly websites. With a background in
          both front-end and back-end development, I specialize in crafting
          seamless digital experiences using modern technologies like HTML, CSS,
          JavaScript, and frameworks such as React and Node.js. I’m driven by a
          love for coding and problem-solving, constantly learning to stay ahead
          of the latest web development trends.
        </h1>
        <div className="border-[0.6px] border-zinc-500 w-full mt-20"></div>

        <div className="flex w-full p-10 mt-20  justify-between">
          <div>
            <h1 className=" text-7xl ml-14 font-[400] ">Our approach:</h1>
            <button className="uppercase ml-14 text-xl hover:bg-zinc-700  py-6 px-7 flex justify-between items-center rounded-full mt-8 bg-zinc-800 text-white ">
              read more{" "}
              <div className=" w-3 h-3 rounded-full bg-white border-[1px] ml-10   border-white"></div>
            </button>
          </div>
          <div className="h-[70vh] w-1/2 flex justify-center items-center rounded-3xl  ">
            <img
              className="w-full"
              src="https://e0.pxfuel.com/wallpapers/358/714/desktop-wallpaper-stefan-iordache-your-desired-developer-to-make-your-perfect-responsive-website-web-programming.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
