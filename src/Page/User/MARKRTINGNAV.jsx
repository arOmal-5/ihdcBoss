import React, { useContext } from 'react'
import { FaAddressBook } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { IoMdPersonAdd } from "react-icons/io";

import MyContext from '../../Store/MyContext';

function MARKRTINGNAV() {

    const{isDark,setIsDark}=useContext(MyContext)

    const  color = isDark ? 'white' :'black'
  return (
    <>

        <div className='w-full justify-center items-center'>
            {/* first  row */}
            <div className='flex justify-center gap-20 mt-4' style={{color:color}}>
                <div className='flex flex-col justify-center items-center'>
                    <FaAddressBook className='text-2xl'/>
                    <p className='text-xs'>All contacts</p>

                </div>
                <div className='flex flex-col justify-center items-center'>
                    <IoMdPersonAdd className='text-2xl'/>
                    <p className='text-xs'>Add contacts</p>

                </div>
            </div>
            {/* second row */}
            <div className='flex w-full mt-4 gap-6'>
                {/* first col */}
                <div className='w-52 flex flex-col items-center gap-2 bg-white rounded-2xl py-6 shadow-xl'>
                <div className='flex flex-col rounded-xl p-2 px-4 items-start w-44 border border-solid shadow-md' style={{backgroundColor:'#2EE8CD'}}>
                    <p className='font-bold'>100</p>
                    <p className='text-xs font-semibold'>Total Contacts</p>
                </div>
                <div className='flex flex-col rounded-xl p-2 items-start w-44 border border-solid shadow-md' style={{backgroundColor:'#E5FAF7'}}>
                    <p className='font-bold'>100</p>
                    <p className='text-xs font-semibold'>Total Prospets</p>
                </div>
                <div className='flex flex-col rounded-xl p-2 items-start w-44 border border-solid shadow-md' style={{backgroundColor:'#E5FAF7'}}>
                    <p className='font-bold'>100</p>
                    <p className='text-xs font-semibold'>Total Leads</p>
                </div>
                <div className='flex flex-col rounded-xl p-2 items-start w-44 border border-solid shadow-md' style={{backgroundColor:'#E5FAF7'}}>
                    <p className='font-bold'>100</p>
                    <p className='text-xs font-semibold'>Total Customers</p>
                </div>
               
                </div>
                {/* second col */}
                <div className='w-5/6 bg-white rounded-2xl pb-1'>
               <div className='w-11/12 flex justify-between p-1 mt-5 rounded-lg px-4  ms-8' style={{backgroundColor:'#2EE8CD'}}>
                <p className='font-bold'>All Contacts</p>
                <p className='mr-96 font-bold'>100</p>
                <FiSearch className='text-xl font-bold'/>
               </div>
      <div className="w-11/12 ms-8">
       
    <div className='flex justify-between font-bold my-4 '>
        <p>NO</p>
        <p>NAME</p>
        <p>MOBILE</p>
        <p>REQUIREMENT</p>
    </div>

    <div className='flex flex-col gap-1 overflow-scroll h-48' >
    <div className='flex justify-between rounded-lg p-1 px-2' style={{backgroundColor:'#E5FAF7'}}>
        <p>1</p>
        <p>John Honay</p>
        <p>8945562345</p>
        <p>House</p>
    </div>

    <div className='flex justify-between rounded-lg p-1 px-2' style={{backgroundColor:'#E5FAF7'}}>
        <p>2</p>
        <p>John Honay</p>
        <p>8945562345</p>
        <p>House</p>
    </div>

    <div className='flex justify-between rounded-lg p-1 px-2' style={{backgroundColor:'#E5FAF7'}}>
        <p>3</p>
        <p>John Honay</p>
        <p>8945562345</p>
        <p>House</p>
    </div>

    <div className='flex justify-between rounded-lg p-1 px-2' style={{backgroundColor:'#E5FAF7'}}>
        <p>4</p>
        <p>John Honay</p>
        <p>8945562345</p>
        <p>House</p>
    </div>
    <div className='flex justify-between rounded-lg p-1 px-2' style={{backgroundColor:'#E5FAF7'}}>
        <p>5</p>
        <p>John Honay</p>
        <p>8945562345</p>
        <p>House</p>
    </div>
    <div className='flex justify-between rounded-lg p-1 px-2' style={{backgroundColor:'#E5FAF7'}}>
        <p>6</p>
        <p>John Honay</p>
        <p>8945562345</p>
        <p>House</p>
    </div>
    <div className='flex justify-between rounded-lg p-1 px-2' style={{backgroundColor:'#E5FAF7'}}>
        <p>7</p>
        <p>John Honay</p>
        <p>8945562345</p>
        <p>House</p>
    </div>
    <div className='flex justify-between rounded-lg p-1 px-2' style={{backgroundColor:'#E5FAF7'}}>
        <p>8</p>
        <p>John Honay</p>
        <p>8945562345</p>
        <p>House</p>
    </div>
    <div className='flex justify-between rounded-lg p-1 px-2' style={{backgroundColor:'#E5FAF7'}}>
        <p>9</p>
        <p>John Honay</p>
        <p>8945562345</p>
        <p>House</p>
    </div>
    <div className='flex justify-between rounded-lg p-1 px-2' style={{backgroundColor:'#E5FAF7'}}>
        <p>10</p>
        <p>John Honay</p>
        <p>8945562345</p>
        <p>House</p>
    </div>
    </div>
   
        
         
    
      </div>


                </div>
            </div>
        </div>
    </>
  )
}

export default MARKRTINGNAV