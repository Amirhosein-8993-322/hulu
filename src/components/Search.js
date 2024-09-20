import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import axios from 'axios';
import { Fade, Slide } from "react-awesome-reveal";
import { FaImdb } from "react-icons/fa";

function Search() {
  const [search, setSearch] = useState()
  const [result, setResult] = useState([])
  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);

  const Search = () => {
    var config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://seeko.film/api/v1/ghost/get/movies/sort?trending=2&genre=all&free=1&country=0&persian=1&query=${search}&affiliate=1&imdb=&page`,
      headers: {}
    };
    axios(config)
      .then(function (response) {
        if (response.data.data.movies) {
          setResult(response.data.data.movies)
          setIsOpen(false)
          setIsOpens(true);
        } else {
          setIsOpen(true)
          setIsOpens(false);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <div className="w-full h-14 sm:px-8 px-4 sm:mt-28 mt-24 flex items-center justify-center">
        <input onChange={(e) => setSearch(e.target.value)} className="w-full h-12 outline-none bg-black border-white border rounded-xl px-3 text-white" type="text" placeholder='جستجوی فیلم، سریال' />
        <span className="text-white absolute right-0 sm:mr-12 mr-6">
          <CiSearch onClick={Search} size={25} color='white' strokeWidth={1} cursor='pointer' />
        </span>
      </div>
      {isOpen
        ?
        <div className='mt-10 w-full h-full flex items-center justify-center'>
          <span className="text-white items-center w-24 flex justify-center px-3 py-2 rounded-lg bg-red-500 text-[15px]">وجود ندارد</span>
        </div>
        :
        <div>
          {isOpens && <div dir='rtl' className="mt-3 sm:mr-12 mr-6">
            <span className="text-white font-bold">نتایج({`${result?.length}`})</span>
          </div>}
          <div className="w-full flex items-center justify-center">
            <div dir="rtl" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 sm:gap-6 gap-2 sm:px-8 px-2 mt-4">
              {result?.map((x) => {
                return (
                  <>
                    <section className="w-52 h-72">
                      <a href={`/animation/${x.id}`}>
                        <div key={x.id} className="w-52 h-64 mt-2 relative group">
                          <img className="rounded-lg object-cover object-center sm:w-full sm:h-full w-[165px] h-56" alt={`${x.name_fa}`} title={`${x.name_fa}`} src={`https://thumb.upera.shop/thumb?w=208&h=257&q=256&a=c&src=https://cdn.upera.shop/s3/posters/${x.poster}`} />
                          <span className="text-white sm:text-sm text-[13px] line-clamp-1 mt-1 truncate ">{x.name_fa}</span>
                          <div className="absolute left-0 top-[-10%] opacity-0 rounded-lg group-hover:opacity-100 group-hover:top-[0] w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                            <div className="flex items-center w-full justify-between p-2">
                              <Slide cascade>
                                <h1 className="text-black bg-yellow-400 px-5 rounded-lg py-3 text-sm w-0 h-0 flex items-center justify-center">{x.year}</h1>
                                <Fade cascade damping={0.05}>
                                  <div className="flex items-center text-sm">
                                    <p className="text-white ml-1">{x.rate}</p>
                                    <FaImdb size={30} color='yellow' />
                                  </div>
                                </Fade>
                              </Slide>
                            </div>
                            <div dir='ltr'>
                              <p className="text-white text-sm mt-3 px-4 line-clamp-1">{x.name}</p>
                              <p className="text-white bg-emerald-400 w-12 ml-3 rounded-full h-5 text-sm mt-2 flex items-center justify-center line-clamp-1">{x.age}</p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </section>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Search