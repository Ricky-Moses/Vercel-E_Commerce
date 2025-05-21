
const array = [
    {
        label: 'Rykaa',
        list: [
            { name: 'Who are we?', link: '' },
            { name: 'Careers', link: '' },
            { name: 'Authenticity', link: '' },
            { name: 'Press', link: '' },
            { name: 'Testimonials', link: '' },
            { name: 'Rykaa CSR', link: '' },
            { name: 'Responsible Disclosure', link: '' },
            { name: 'Investor Relations', link: '' },
            { name: 'Link to Smart ODR', link: '' },
        ]
    },
    {
        label: 'Help',
        list: [
            { name: 'Contact US', link: '' },
            { name: 'Frequently asked questions', link: '' },
            { name: 'Store Locator', link: '' },
            { name: 'Cancellations & Return', link: '' },
            { name: 'Shipping & Delivery', link: '' },
            { name: 'Sell on Rykaa', link: '' },
        ]
    },
    {
        label: 'Inspire Me',
        list: [
            { name: 'Beauty Book', link: '' },
            { name: 'Games Board', link: '' },
            { name: 'Buying Guides', link: '' },
        ]
    },
    {
        label: 'Ouick Links',
        list: [
            { name: 'Offers Zone', link: '' },
            { name: 'New Launches', link: '' },
            { name: 'Rykaa Man', link: '' },
            { name: 'Rykaa Fashion', link: '' },
            { name: 'Rykaa Pro', link: '' },
            { name: 'Sitemap', link: '' },
        ]
    }
]


const SecTwo = () => {
    return (
        <div className="sec-2 flex items-center justify-center">
            <div className="w-9/12 grid grid-cols-4">
                {array.map((items, i) => (
                    <div key={i} className="flex flex-col gap-2 text-white">
                        <div className="text-2xl font-extrabold">{items.label}</div>
                        <div className="flex flex-col gap-2">
                            {items.list.map((list) => (
                                <div className="">{list.name}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SecTwo