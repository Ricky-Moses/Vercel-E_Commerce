import { useEffect, useRef, useState } from 'react'
import Category from './Link/Category'
import Brand from './Link/Brand'

const CateBrand = ['Categories', 'Brands']
const Sidebar = ({ isOpen, closeSidebar }) => {

    const [activeTab, setActiveTab] = useState('Categories')
    const sidebarRef = useRef(null)

    useEffect(() => {
        const handleSidebar = (e) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                closeSidebar()
            }
        }

        if (isOpen) {
            window.addEventListener('mousedown', handleSidebar)
        }

        return () => {
            window.removeEventListener('mousedown', handleSidebar)
        }
    }, [isOpen, closeSidebar])

    if(!isOpen) return null
    // console.log(sidebarRef);
    // console.log(isOpen);

    return (
        <div ref={sidebarRef} className='side-bar w-4/6 md:w-7/12 h-dvh bg-white shadow-2xl '>
            <div className="advertise h-2/12 !p-2">
                <div className="skeleton bg-neutral-200 w-full h-full"></div>
            </div>
            <div className="cate-brand flex items-center justify-around h-1/12">
                {CateBrand.map((list) => (
                    <h1
                        key={list}
                        onClick={() => setActiveTab(list)}
                        className={`
                            h-full flex items-center justify-center
                            ${activeTab === list ? 'active' : ''}
                        `}>
                        {list}
                    </h1>
                ))}
            </div>
            <div className="list h-[60vh] !overflow-scroll">
                {activeTab === 'Categories' ? <Category /> : <Brand />}
            </div>
        </div>
    )
}

export default Sidebar