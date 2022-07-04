export default function SideVideo({videoSrc,title,isMatch,handleClick}){
    return(
        <div className={`flex items-center gap-4 my-2 ${!isMatch?"bg-[#eee]":"bg-[#444]"} p-[10px] cursor-pointer rounded-[5px]`} onClick={handleClick}>
            <div>
                <video height={"110"} width="110" className="rounded-[4px]">
                    <source src={videoSrc} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <h3 className={`text-[17px] ${!isMatch?"text-[#444]":"text-[#fff]"}`}>{title}</h3>
        </div>
    )
}