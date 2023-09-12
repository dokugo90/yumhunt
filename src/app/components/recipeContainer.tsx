import Link from "next/link";

interface IRecipeContainer {
    foodImage: string,
    title: string,
    description: string,
    url: string
}

export default function RecipeContainer({ foodImage, title, description, url }: IRecipeContainer) {
    return (
        <>
        <Link href={url} target="_blank">
        <div className="w-full border-t  flex flex-row items-center justify-between ">
            <div className="flex flex-col gap-2">
                <p className="uppercase font-extrabold text-lg text-[#6c717b]" >Recipe</p>
                <div className="max-w-[350px] overflow-hidden whitespace-nowrap">
                <p className="font-bold text-[25px] text-black truncate">{title}</p>
                </div>
                <div className="max-w-[350px] overflow-hidden whitespace-nowrap">
                <div className="truncate" dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            </div>

            <div>
            <img src={foodImage} className="w-52 h-52 object-contain rounded-md aspect-auto" />
            </div>

        </div>
        </Link>
        </>
    )
}