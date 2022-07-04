import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState, useEffect} from 'react'
import MainVideo from '../components/mainVideo';
import SideVideo from '../components/sideVideo';

export default function Home() {
  const videoData=[
    {
      id:"1-v",
      videoSrc:"/images/vid-1.mp4",
      title:"House Flood Animation"
    },
    {
      id:"2-v",
      videoSrc:"/images/vid-2.mp4",
      title:"Zoombie Walking Animation"
    },
    {
      id:"3-v",
      videoSrc:"/images/vid-3.mp4",
      title:"Emoji Failing Animation"
    },
    {
      id:"4-v",
      videoSrc:"/images/vid-4.mp4",
      title:"3D Town Animation"
    },
    {
      id:"5-v",
      videoSrc:"/images/vid-5.mp4",
      title:"Man Chasing Carrot Animation"
    },
    {
      id:"6-v",
      videoSrc:"/images/vid-6.mp4",
      title:"Door Hinge Animation"
    },
    {
      id:"7-v",
      videoSrc:"/images/vid-7.mp4",
      title:"poeple walking in town Animation"
    },
    {
      id:"8-v",
      videoSrc:"/images/vid-8.mp4",
      title:"knight chasing virus Animation"
    },
    {
      id:"9-v",
      videoSrc:"/images/vid-9.mp4",
      title:"3D helicopter animation"
    }
  ];
  const [currentVideo,setCurrentVideo]=useState(videoData[0]);

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name='desription' content='Home Page'/>
      </Head>
      <div className='flex lg:flex-row flex-col gap-x-6 gap-y-8'>
        <div>
          <MainVideo videoSrc={currentVideo.videoSrc} title={currentVideo.title}/>
        </div>
        <div className=' h-[465px] overflow-auto bg-white px-4 py-4 rounded-lg list-video'>
          {
          videoData.map(video=>{
            return <SideVideo  
            videoSrc={video.videoSrc}
            title={video.title}
            isMatch={video.videoSrc===currentVideo.videoSrc} 
            handleClick={()=>setCurrentVideo(video)} 
            key={video.id}/>
          })
          }
        </div>
      </div>
    </div>
  )
}
