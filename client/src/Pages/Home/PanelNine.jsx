
const advertiseMent = [
    { img: '', link: '', name: 'Image - 1' },
    { img: '', link: '', name: 'Image - 2' },
    { img: '', link: '', name: 'Image - 3' },
    { img: '', link: '', name: 'Image - 4' },
    { img: '', link: '', name: 'Image - 5' },
    { img: '', link: '', name: 'Image - 6' },
    { img: '', link: '', name: 'Image - 7' },
    { img: '', link: '', name: 'Image - 8' },
    { img: '', link: '', name: 'Image - 9' },
    { img: '', link: '', name: 'Image - 10' },
    { img: '', link: '', name: 'Image - 11' },
    { img: '', link: '', name: 'Image - 12' },
    { img: '', link: '', name: 'Image - 13' },
    { img: '', link: '', name: 'Image - 14' },
]

const AdvertisementNine = () => {
    return (
        <div className='row11 h-auto flex flex-col items-center'>
            <div className="w-full flex items-center justify-center">
                <h1 className="font-extrabold">🦈 Dive Into Rykaa Luxe 🦈</h1>
            </div>
            <div className="w-full grid grid-cols-2 lg:grid-cols-5 items-center justify-center gap-5 !p-2">
                {advertiseMent.map(() => (
                    <div className="ad-box skeleton"></div>
                ))}
            </div>
        </div>
    )
}

export default AdvertisementNine