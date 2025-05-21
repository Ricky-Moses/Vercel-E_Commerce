
const topLinks = [
    { name: "lipstick", link: "/" },
    { name: "highlighter", link: "/" },
    { name: "hair serum", link: "/" },
    { name: "concealer", link: "/" },
    { name: "face mask", link: "/" },
    { name: "biotique", link: "/" },
    { name: "lip gloss", link: "/" },
    { name: "perfume for women", link: "/" },
    { name: "facial kit", link: "/" },
    { name: "bb cream", link: "/" },
    { name: "victoria secret", link: "/" },
    { name: "love beauty and planet shampoo", link: "/" },
    { name: "eyeliner", link: "/" },
    { name: "hair mask", link: "/" },
    { name: "face wash for oily skin", link: "/" },
    { name: "ordinary", link: "/" },
    { name: "toner", link: "/" },
    { name: "eyeshadow palette", link: "/" },
    { name: "cleanser", link: "/" },
    { name: "chemist at play", link: "/" },
    { name: "mascara", link: "/" },
    { name: "loreal professional", link: "/" },
    { name: "hair extensions", link: "/" },
    { name: "olay cream", link: "/" },
    { name: "fogg", link: "/" },
    { name: "lip tint", link: "/" },
    { name: "under eye cream", link: "/" },
    { name: "wax strips", link: "/" },
    { name: "shower gel", link: "/" },
    { name: "sunscreen for face", link: "/" },
    { name: "insight cosmetics", link: "/" },
    { name: "face foundation", link: "/" },
    { name: "hair removal machine", link: "/" },
    { name: "mac foundation", link: "/" },
    { name: "choker", link: "/" },
    { name: "oud perfume", link: "/" },
    { name: "makeup pouch", link: "/" },
    { name: "olaplex", link: "/" },
    { name: "body mist", link: "/" },
    { name: "wella shampoo", link: "/" },
    { name: "huda beauty foundation", link: "/" },
    { name: "night cream", link: "/" },
    { name: "facewash", link: "/" },
    { name: "nyx", link: "/" },
    { name: "schwarzkopf shampoo", link: "/" },
    { name: "blue heaven", link: "/" },
    { name: "peel off mask", link: "/" },
    { name: "best lip balm", link: "/" },
    { name: "face scrub", link: "/" },
    { name: "Cetaphil Face Wash", link: "/" },
    { name: "Mederma Cream", link: "/" },
    { name: "Multivitamins Tablet", link: "/" },
    { name: "Himalaya Face Wash", link: "/" },
    { name: "Garnier Face Wash", link: "/" },
    { name: "Hair Color For Women", link: "/" },
    { name: "Cetaphil Moisturizers", link: "/" },
    { name: "Ponds Face Wash", link: "/" },
    { name: "Streax Hair Serum", link: "/" },
    { name: "Nivea Body Lotions", link: "/" },
    { name: "Vaseline Body Lotions", link: "/" },
    { name: "Sugar Lipstick", link: "/" },
    { name: "Biotin Tablet", link: "/" },
    { name: "Aqualogica Sunscreen", link: "/" },
    { name: "Salicylic Acid Face Wash", link: "/" },
    { name: "Fogg Perfume", link: "/" },
    { name: "Clean And Clear Face Wash", link: "/" },
    { name: "Neutrogena Sunscreen", link: "/" },
    { name: "Pears Soaps", link: "/" },
    { name: "Hair Color For Men", link: "/" },
    { name: "Dry Cleansers", link: "/" },
    { name: "Face Serum", link: "/" }
]


const SecFive = () => {
    return (
        <div className="sec-5 flex flex-col items-center justify-center">
            <div className=" w-5/6 text-gray-400">
                <div className="text-start font-bold ">Popular Links</div>
                <div className=" flex flex-wrap gap-x-2">
                    {topLinks.map((items) => (
                        <div className="">{items.name},</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SecFive