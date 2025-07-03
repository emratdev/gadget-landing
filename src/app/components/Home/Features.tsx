import React from 'react'
import { FaFingerprint } from 'react-icons/fa';
import { HiOutlineChat } from 'react-icons/hi';
import { IoAppsOutline, IoWifiOutline } from 'react-icons/io5';
import { MdOutlineNotifications, MdOutlineTouchApp } from 'react-icons/md'

const featuresData = [
  {
    title: "Touch to buy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    icon: <MdOutlineTouchApp className="w-12 h-12 mx-auto bg-pink-600" />,
  },
  {
    title: "Secure Data",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    icon: <FaFingerprint className="w-12 h-12 mx-auto bg-pink-600" />,
  },
  {
    title: "Instant Chat ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    icon: <HiOutlineChat className="w-12 h-12 mx-auto bg-pink-600" />,
  },
  {
    title: "Live Notification",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    icon: <MdOutlineNotifications className="w-12 h-12 mx-auto bg-pink-600" />,
  },
  {
    title: "Wifi Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    icon: <IoWifiOutline className="w-12 h-12 mx-auto bg-pink-600" />,
  },
  {
    title: "App Watch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    icon: <IoAppsOutline className="w-12 h-12 mx-auto bg-pink-600" />,
  },
];

const Features = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            {featuresData.map((feature, index) => {
                return (
                  <div
                    data-aos="fade-up"
                    data-aos-delay="{index * 100}" 
                    data-aos-anchor-placement="top-center" 
                     key={index}
                    className="text-center mx-auto"
                  >
                    {/* Icon */}
                    <div className="mx-auto text-center">{feature.icon}</div>
                    {/* Title */}
                    <h1 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </h1>
                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
                      {feature.description}
                    </p>
                  </div>
                );
            })}
        </div>
    </div>
  )
}

export default Features