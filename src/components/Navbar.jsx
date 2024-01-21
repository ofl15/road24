import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { FaBarsStaggered, FaXmark  } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";
import { road } from '../assets';
import { Link, useNavigate } from 'react-router-dom';
import { FaCreditCard } from "react-icons/fa";

export default function Example() {
    // const navigate = useNavigate()
    // const isAuthenticated = localStorage.getItem("user") && localStorage.getItem("token")


    // if (!isAuthenticated) {
    //   return navigate('/login')
    // }
  return (
    <div className=' z-50' >
    <Disclosure as="nav" className='z-40' style={{backgroundColor: '#198e7c' , position: 'fixed', top: 0, left: 0, right: 0 }}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FaXmark className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBarsStaggered className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center text-xl">
                  <img
                    className="h-8 w-auto"
                    src={road}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link to="/card"
                  type="button"
                  className="relative rounded-full mr-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mr-8"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <FaCreditCard className="h-6 w-6 text-white" aria-hidden="true" />
                </Link>
                <Link to="/addCar"
                  type="button"
                  className="relative rounded-full  text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <AiOutlinePlus className="h-6 w-6 text-white" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

        </>
      )}
    </Disclosure>
    </div>
  )
}
