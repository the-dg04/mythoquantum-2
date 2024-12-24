import Image from "next/image";

function Card({img_src,title,author,link}){
    return(
        <a href={link} className="flex flex-col items-center w-[300px] sm:w-[350px] h-[500px] rounded-lg bg-white transition-all hover:scale-105 hover:shadow-[0px_0px_20px_0px_lightgrey] p-6 gap-4">
            <div className="w-[80%] h-1/2">
                <Image src={img_src} width={400} height={0} alt="image" className="object-cover"/>
            </div>
            <div className="w-full h-1/2">
                <div className="text-2xl">{title}</div>
                <div className="text-2xl font-bold">By{" "}{author}</div>
            </div>
        </a>
    );
}

export default function Cards(){
    const data=[
        {
            title:"Title",
            author:"Author",
            img_src:"/HarnessPowerImage.png",
            link:"#"
        },
        {
            title:"Title",
            author:"Author",
            img_src:"/HarnessPowerImage.png",
            link:"#"
        },
        {
            title:"Title",
            author:"Author",
            img_src:"/HarnessPowerImage.png",
            link:"#"
        },
        {
            title:"Title",
            author:"Author",
            img_src:"/HarnessPowerImage.png",
            link:"#"
        },
        {
            title:"Title",
            author:"Author",
            img_src:"/HarnessPowerImage.png",
            link:"#"
        },
    ]
    return(<>
    <div className="w-full lg:px-10 my-10 flex justify-center items-center flex-wrap gap-8">
        {data.map((props,id)=><Card key={id} {...props}/>)}
    </div>
    </>)
}