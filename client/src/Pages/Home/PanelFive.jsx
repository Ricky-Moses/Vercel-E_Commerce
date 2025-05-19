
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
    { img: '', link: '', name: 'Image - 15' },
    { img: '', link: '', name: 'Image - 16' },
    { img: '', link: '', name: 'Image - 17' },
    { img: '', link: '', name: 'Image - 18' },
    { img: '', link: '', name: 'Image - 19' },
    { img: '', link: '', name: 'Image - 20' },
    { img: '', link: '', name: 'Image - 21' },
    { img: '', link: '', name: 'Image - 22' },
    { img: '', link: '', name: 'Image - 23' },
    { img: '', link: '', name: 'Image - 24' },
]

const AdvertisementFive = () => {
  return (
    <div className='row7 h-auto flex flex-col items-center'>
        <div className="w-full flex items-center justify-center">
            <h1 className="font-extrabold">🌸 Here Now? Scorchin' Steals 🌸</h1>
        </div>
        <div className="w-5/6 grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 !p-2">
            {advertiseMent?.map(() => (
                <div className="ad-box skeleton bg-white"></div>
            ))}
        </div>
    </div>
  )
}

export default AdvertisementFive