
const advertiseMent = [
    { img: '', link: '', name: 'Image - 1' },
    { img: '', link: '', name: 'Image - 2' },
    { img: '', link: '', name: 'Image - 3' },
]

const AdvertisementSeven = () => {
    return (
        <div className='row9 flex flex-col items-center !p-1'>
            <div className="w-full flex items-center justify-center">
                <h1 className="font-extrabold">🎐 Shop By Category 🎐</h1>
            </div>
            <div className="w-5/6 h-full grid grid-cols-3 items-center justify-center ">
                {advertiseMent.map(() => (
                    <span className="ad-box w-4/6 h-5/6 skeleton bg-white !m-auto"></span>
                ))}
            </div>
        </div>
    )
}

export default AdvertisementSeven