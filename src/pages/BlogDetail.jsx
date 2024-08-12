import PageNav from "../components/PageNav";

function BlogDetail() {
  return (
    <>
      <PageNav />
      <div className="w-[1170px] mx-auto  flex gap-6 mt-10 font-sans">
        <div className="w-[780px] shadow-md p-5 bg-white h-auto">
          <img
            src="https://preview.colorlib.com/theme/timezone/assets/img/blog/single_blog_1.png.webp"
            className="w-full"
          />
          <div className="w-20 h-20 text-white rounded-md bg-red-500 text-center text-[25px] py-2 relative left-7 bottom-10 grid grid-rows-2">
            15 <span className="text-white">Jan</span>
          </div>

          <div className="w-[750px]">
            <p className="text-[25px] mb-5 hover:text-red-500">
              Google inks pact for new 35-storey office
            </p>
            <p>
              That dominion stars lights dominion divide years for fourth have
              don't stars is that he earth it first without heaven in place seed
              it second morning saying.
            </p>
          </div>
          <div className="flex mt-5 opacity-60">
            <img src="../src/assets/icon/person.svg" className="w-3 mr-2" />
            <a>Travel, Lifestyle</a>
            <span className="mx-5">|</span>
            <img src="../src/assets/icon/message.svg" className="w-5 mr-2" />
            <a> 03 Comments</a>
          </div>
          <div className="mt-10">
            <p className="mb-5">
              MCSE boot camps have its supporters and its detractors. Some
              people do not understand why you should have to spend money on
              boot camp when you can get the MCSE study materials yourself at a
              fraction of the camp price. However, who has the willpower
            </p>
            <p className="mb-5">
              MCSE boot camps have its supporters and its detractors. Some
              people do not understand why you should have to spend money on
              boot camp when you can get the MCSE study materials yourself at a
              fraction of the camp price. However, who has the willpower to
              actually sit through a self-imposed MCSE training. who has the
              willpower to actually
            </p>
            <div className="mb-5 w-full border-[20px] p-5 flex h-[200px]">
              <p>
                MCSE boot camps have its supporters and its detractors. Some
                people do not understand why you should have to spend money on
                boot camp when you can get the MCSE study materials yourself at
                a fraction of the camp price. However, who has the willpower to
                actually sit through a self-imposed MCSE training.
              </p>
            </div>
            <p className="mb-5">
              MCSE boot camps have its supporters and its detractors. Some
              people do not understand why you should have to spend money on
              boot camp when you can get the MCSE study materials yourself at a
              fraction of the camp price. However, who has the willpower
            </p>
            <p>
              MCSE boot camps have its supporters and its detractors. Some
              people do not understand why you should have to spend money on
              boot camp when you can get the MCSE study materials yourself at a
              fraction of the camp price. However, who has the willpower to
              actually sit through a self-imposed MCSE training. who has the
              willpower to actually
            </p>
          </div>
        </div>
        <div className="w-[390px] bg-slate-100 h-auto">
          <div className="flex mt-5 px-5">
            <input
              type="text"
              className="border w-full border-none outline-none"
            />
            <img
              src="../src/assets/icon/search.svg"
              className="w-[50px] p-4 my-auto bg-red-500"
            />
          </div>
          <div className="px-5">
            <button className="w-full p-3 text-[20px] font-sans bg-red-500 mt-5 text-white">
              search
            </button>
          </div>
          <p className="mt-10 text-[20px] p-3">Category</p>
          <div className=" border-y-2 p-2">Resaurant food (32) </div>
          <p className="mt-5 text-[20px] border-b-2 p-3">Recent Post</p>
          <div className="flex">
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/blog/single_blog_1.png.webp"
              className="w-20 h-16 m-5"
            />
            <div className="my-auto">
              <p>From life was you fish...</p>
              <p className="opacity-60">January 12, 2019</p>
            </div>
          </div>
          <p className="text-[20px] p-5 border-b-2 mx-auto ">Tag Cluds</p>
          <div className="grid grid-cols-3 mt-10 w-[300px] mx-auto gap-4">
            <li className="border bg-white text-center p-1 list-none ">
              <a>Project</a>
            </li>
            <li className="border bg-white text-center p-1 list-none">
              <a>Project</a>
            </li>
            <li className="border bg-white text-center p-1 list-none">
              <a>Project</a>
            </li>
            <li className="border bg-white text-center p-1 list-none ">
              <a>Project</a>
            </li>
            <li className="border bg-white text-center p-1 list-none">
              <a>Project</a>
            </li>
            <li className="border bg-white text-center p-1 list-none">
              <a>Project</a>
            </li>
          </div>

          <p className="text-[20px] p-5 border-b-2">Instagram Feed</p>
          <div className="grid grid-cols-3 mt-10 w-[300px] mx-auto gap-4">
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/blog/single_blog_1.png.webp"
              className="w-20 h-16"
            />
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/blog/single_blog_1.png.webp"
              className="w-20 h-16 "
            />
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/blog/single_blog_1.png.webp"
              className="w-20 h-16 "
            />
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/blog/single_blog_1.png.webp"
              className="w-20 h-16"
            />
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/blog/single_blog_1.png.webp"
              className="w-20 h-16 "
            />
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/blog/single_blog_1.png.webp"
              className="w-20 h-16 "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetail;
