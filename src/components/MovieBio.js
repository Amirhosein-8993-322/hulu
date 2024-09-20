import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaPlay } from "react-icons/fa";
const MovieBio = () => {
  const [bio, setBio] = useState([])
  const [similar, setSimilar] = useState([])
  const [casts, setCasts] = useState([])
  const [play, setPlay] = useState([])
  let { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  var config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://seeko.film/api/v1/ghost/get/movie/${id}`,
    headers: {}
  };

  useEffect(() => {
    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data.data.casts));
        setBio(response.data.data.movie)
        setSimilar(response.data.data.similar)

        if (response.data.data.casts) {
          setCasts(response.data.data.casts)
        } else {
          setIsOpen(true);
        }
        // console.log('a', response.data.data.casts);

      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  var configs = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `https://seeko.film/api/v1/ghost/get/getaffiliatelinks?id=${id}&type=movie&ref=2&traffic=1&token=`,
    headers: {}
  };
  useEffect(() => {
    axios(configs)
      .then(function (response) {
        // console.log(response.data.data.links);
        setPlay(response.data.data.links)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])


  const a = similar?.slice(0, 10)

  const casts1 = casts?.slice(0, 1)
  const casts2 = casts?.slice(1, 2)
  const casts3 = casts?.slice(2, 3)
  const casts4 = casts?.slice(3, 4)


  const video = play.filter((x) => x.type === "player")
  const link1 = play.filter((x) => x.type === "traffic").slice(0, 1)
  const link2 = play.filter((x) => x.type === "traffic").slice(1, 2)
  const link3 = play.filter((x) => x.type === "traffic").slice(2, 3)



  return (
    <>
      <div dir='rtl' className="w-full h-[27rem] relative">
        <div className="w-full h-full flex items-center justify-center">
          <img className="w-full h-full object-cover object-center" src={`https://thumb.upera.shop/thumb?w=1120&h=500&q=95&a=t&zc=1&src=https://cdn.upera.shop/s3/backdrops/${bio.backdrop}`} />
          <div className="bg-black/50 w-full h-full absolute"></div>
        </div>
        <div className="absolute top-0 sm:mt-28 mt-20 sm:mr-12 sm:flex block sm:justify-start justify-center w-full">
          <div>
            <img className='object-cover object-center rounded-lg sm:flex hidden' src={`https://thumb.upera.shop/thumb?w=187&h=227&q=100&a=c&src=https://cdn.upera.shop/s3/posters/${bio.poster}`} />
            <div className="w-full flex items-center justify-center">
              <span class="relative sm:hidden flex h-16 w-16 duration-75 mt-24">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <a href={`${video.map((x) => x.link)}`} class="relative rounded-full h-16 w-16 bg-emerald-500 flex items-center justify-center"><FaPlay className='ml-1' color='white' size={23} /></a>
              </span>
            </div>
          </div>
          <div className="sm:mr-6 mt-2">
            <div className="w-full sm:hidden flex flex-col items-center justify-center mt-8">
            <div>
              <h1 className="text-white font-bold text-2xl">{bio.name_fa}</h1>
            </div>
            <div className="mt-1">
              <span className="text-white text-sm">{bio.name}</span>
            </div>
            <div className="flex items-center text-white gap-4 mt-4">
              <p className="">{bio.genre_fa}</p>
            </div>
            <div className="flex items-center gap-2 text-white text-sm font-sans mt-6">
              <span>{bio.year}</span>
              |
              <span>{bio.age}</span>
              |
              <span>{bio.runtime + " " + "دقیقه"}</span>
              |
              <div className="flex items-center">
                <p className="ml-1 text-yellow-400 font-bold">IMDB</p>
                <span>{bio.rate}</span>
              </div>
            </div>
            </div>
           <div className="sm:flex flex-col hidden">
            <div>
              <h1 className="text-white font-bold text-2xl">{bio.name_fa}</h1>
            </div>
            <div className="mt-1">
              <span className="text-white text-sm">{bio.name}</span>
            </div>
            <div className="flex items-center text-white gap-4 mt-4">
              <p className="">{bio.genre_fa}</p>
            </div>
            <div className="flex items-center gap-2 text-white text-sm font-sans mt-6">
              <span>{bio.year}</span>
              |
              <span>{bio.age}</span>
              |
              <span>{bio.runtime + " " + "دقیقه"}</span>
              |
              <div className="flex items-center">
                <p className="ml-1 text-yellow-400 font-bold">IMDB</p>
                <span>{bio.rate}</span>
              </div>
            </div>
          </div>
          </div>
        </div>
        <a href={`${video.map((x) => x.link)}`} className="bg-emerald-400 px-4 py-3 sm:flex hidden rounded-lg left-0 text-white font-bold bottom-4 ml-4 absolute">پخش</a>
      </div>
      <h1 dir='rtl' className="text-white font-bold text-2xl mt-4 mr-4">داستان</h1>
      <div className="w-full h-auto px-4 py-2">
        <p dir='rtl' className="text-white">{bio.overview_fa}</p>
      </div>



      <div className="w-full justify-center py-2 px-32 h-auto flex flex-col space-y-6 items-center mt-12">
        {link1.map((x) => {
          return (
            <div className='sm:w-[50rem] w-[330px] h-18 rounded p-4 flex items-center justify-center bg-[#15151a] drop-shadow-lg'>
              <div className="bg-[#23232b] shadows text-gray-300 w-[50rem] h-14 rounded flex items-center justify-between sm:px-10 px-2">
                <a href={`${x.link}`} className="sm:px-2 sm:py-3 px-1 py-2 bg-[#12AE40] rounded text-[#fff] text-sm">{x.title}</a>
                <span className="text-sm">{x.size}</span>
              </div>
            </div>
          )
        })}
        {link2.map((x) => {
          return (
            <div className='sm:w-[50rem] w-[330px] h-18 rounded p-4 flex items-center justify-center bg-[#15151a] drop-shadow-lg'>
              <div className="bg-[#23232b] shadows text-gray-300 w-[50rem] h-14 rounded flex items-center justify-between sm:px-10 px-2">
                <a href={`${x.link}`} className="sm:px-2 sm:py-3 px-1 py-2 bg-[#12AE40] rounded text-[#fff] text-sm">{x.title}</a>
                <span className="text-sm">{x.size}</span>
              </div>
            </div>
          )
        })}
        {link3.map((x) => {
          return (
            <div className='sm:w-[50rem] w-[330px] h-18 rounded p-4 flex items-center justify-center bg-[#15151a] drop-shadow-lg'>
              <div className="bg-[#23232b] shadows text-gray-300 w-[50rem] h-14 rounded flex items-center justify-between sm:px-10 px-2">
                <a href={`${x.link}`} className="sm:px-2 sm:py-3 px-1 py-2 bg-[#12AE40] rounded text-[#fff] text-sm">{x.title}</a>
                <span className="text-sm">{x.size}</span>
              </div>
            </div>
          )
        })}
      </div>

      <h1 dir='rtl' className="text-white font-bold text-2xl  mt-10 mr-6">عوامل</h1>
      {isOpen
        ?
        <div dir='rtl' className='mt-5 mr-6'>
          <span className="text-white items-center w-24 flex justify-center px-3 py-2 rounded-lg bg-red-500 text-[15px]">وجود ندارد</span>
        </div>
        :
        <div dir='rtl' className="flex items-center w-full px-5 gap-4 mt-4 mb-4">
          {casts1?.map((x) => {
            return (
              <div key={x.id} className="flex flex-col items-center">
                <img className='sm:w-20 sm:h-20 w-16 h-16 rounded-full object-cover object-center' src={`https://thumb.upera.shop/thumb?w=140&h=140&q=100&a=t&src=https://cdn.upera.shop/s3/casts/${x?.image}`} />
                <span className="text-white text-sm mt-1">{x.name_fa}</span>
              </div>
            )
          })}
          {casts2?.map((x) => {
            return (
              <div key={x.id} className="flex flex-col items-center">
                <img className='sm:w-20 sm:h-20 w-16 h-16 rounded-full object-cover object-center' src={`https://thumb.upera.shop/thumb?w=140&h=140&q=100&a=t&src=https://cdn.upera.shop/s3/casts/${x.image}`} />
                <span className="text-white text-sm mt-1">{x.name_fa}</span>
              </div>
            )
          })}
          {casts3?.map((x) => {
            return (
              <div key={x.id} className="flex flex-col items-center">
                <img className='sm:w-20 sm:h-20 w-16 h-16 rounded-full object-cover object-center' src={`https://thumb.upera.shop/thumb?w=140&h=140&q=100&a=t&src=https://cdn.upera.shop/s3/casts/${x.image}`} />
                <span className="text-white text-sm mt-1">{x.name_fa}</span>
              </div>
            )
          })}
          {casts4?.map((x) => {
            return (
              <div key={x.id} className="flex flex-col items-center">
                <img className='sm:w-20 sm:h-20 w-16 h-16 rounded-full object-cover object-center' src={`https://thumb.upera.shop/thumb?w=140&h=140&q=100&a=t&src=https://cdn.upera.shop/s3/casts/${x.image}`} />
                <span className="text-white text-sm mt-1">{x.name_fa}</span>
              </div>
            )
          })}
        </div>
      }


      <h1 dir="rtl" className="text-white font-bold text-xl sm:mr-10 mr-6 sm:mt-20 mt-12">فیلم های مشابه</h1>
      <div className="w-full flex items-center justify-center">
        <div dir="rtl" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 sm:gap-6 gap-2 px-3 mt-4">
          {a?.map((x) => {
            return (
              <section className="w-52 h-72">
                <a href={`/animation/${x.id}`}>
                  <div key={x.id} className="w-52 h-64 mt-2">
                    <img className="rounded-lg object-cover object-center sm:w-full sm:h-full w-[165px] h-56" alt={`${x.name_fa}`} title={`${x.name_fa}`} src={`https://thumb.upera.shop/thumb?w=208&h=257&q=256&a=c&src=https://cdn.upera.shop/s3/posters/${x.poster}`} />
                    <span className="text-white text-sm line-clamp-1 mt-1 ">{x.name_fa}</span>

                  </div>
                </a>
              </section>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default MovieBio