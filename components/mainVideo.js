export default function MainVideo({videoSrc,title}){
    return(
        <div className="bg-white px-4 py-4 rounded-lg  lg:h-[465px]">
            <div>
                <video height={"280"} width="720" className=" rounded-lg" autoPlay preload="true" controls src={videoSrc} typeof="video/mp4"/>
            </div>
            <h3 className="text-[20px] text-[#444] font-bold mt-2">{title}</h3>
        </div>
    )
}