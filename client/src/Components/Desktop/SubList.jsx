import React, { useContext, useEffect, useMemo, useState } from 'react'
import { MenuContext } from '../../Hooks/useContext'

const SubList = ({ index }) => {

    const { data } = useContext(MenuContext)
    const menuData = useMemo(() => data[1]?.SubMenu || [], [data])

    const [selectedData, setSelectedData] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        if (menuData.length > 0 && index !== null && index !== undefined) {
            const findData = menuData.find((_, i) => i === index);
            setSelectedData(findData);
        }
    }, [index, menuData]);

    useEffect(() => {
        if (selectedData?.subMenu?.length > 0) {
            setSelectedItem(selectedData.subMenu[0]); // default to first item
        } else {
            setSelectedItem(null);
        }
    }, [selectedData]);

    // console.log("Selected Data: ", selectedData);
    // console.log("Selected Item: ", selectedItem);
    // console.log("Sub Menu: ", menuData);
    // console.log("Index: ", index);
    return (
        <div className='component-sublist w-3/4 grid grid-cols-5 gap-2 items-start auto-rows-auto shadow-2xl !p-2 word-break wrap-break-word overflow-y-scroll'>
            {selectedItem?.items?.map((item, i) => (
                <div key={i} className="h-fit border-r-1 border-b-1">
                    <div className="">{item?.subTitle}</div>
                    {item?.subItems?.map((list, i) => (
                        <div key={i} className="">
                            <div className="text-gray-500">{list?.itemsName}</div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default SubList