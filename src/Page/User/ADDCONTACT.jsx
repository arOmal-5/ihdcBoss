import React, { useContext } from 'react'
import { FaAddressBook } from 'react-icons/fa'
import { IoMdPersonAdd } from 'react-icons/io'
import MyContext from '../../Store/MyContext'
import { TfiSaveAlt } from "react-icons/tfi";

function ADDCONTACT() {

    const{isDark,setIsDark}=useContext(MyContext)

    const  color = isDark ? 'white' :'black'
  return (
    <>

           <div className='flex flex-col items-center'>
             {/* first  row */}
             <div className='flex justify-center gap-20 mt-4' style={{color:color}}>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <FaAddressBook className='text-2xl'/>
                    <p className='text-xs'>All contacts</p>

                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <IoMdPersonAdd className='text-2xl'/>
                    <p className='text-xs'>Add contacts</p>

                </div>
            </div>

            {/* second row */}
           
            <div className='w-10/12 flex flex-col justify-between gap-4 items-center bg-white rounded-2xl mt-4'>
            <button className='rounded-2xl p-1 w-11/12 font-bold mt-8' style={{backgroundColor:'#2EE8CD', boxShadow: '3px 3px 5px rgba(0, 0, 0, 8.5)'}}>Create a new Contact</button>
            

            <div className='w-11/12 flex flex-col gap-2'>
            <div className='flex w-full gap-8 '>
            <div className='flex flex-col w-full items-start gap-2'>
<label htmlFor="first_name" className='text-xs ms-1 font-bold'>First Name</label>
<input type="text" class="bg-gray-50 border h-7 border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-red-400 focus:border-red-400 block w-full  " required style={{backgroundColor:'#E5FAF7'}} />
            </div>
            <div className='flex flex-col w-full items-start gap-2'>
<label htmlFor="first_name" className='text-xs ms-1 font-bold'>Last Name</label>
<input type="text" class="bg-gray-50 border h-7 border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-red-400 focus:border-red-400 block w-full  " required style={{backgroundColor:'#E5FAF7'}} />
</div>

            </div>

            <div className='flex w-full gap-8 '>
            <div className='flex flex-col w-full items-start gap-2'>
<label htmlFor="first_name" className='text-xs ms-1 font-bold'>Email</label>
<input type="text" class="bg-gray-50 border h-7 border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-red-400 focus:border-red-400 block w-full  " required  style={{backgroundColor:'#E5FAF7'}}/>
            </div>
            <div className='flex flex-col w-full items-start gap-2'>
<label htmlFor="first_name" className='text-xs ms-1 font-bold'>Mobile</label>
<input type="text" class="bg-gray-50 border h-7 border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-red-400 focus:border-red-400 block w-full  " required  style={{backgroundColor:'#E5FAF7'}}/>
</div>

            </div>

            <div className='flex w-full gap-8 '>
            <div className='flex flex-col w-full items-start gap-2'>
<label htmlFor="first_name" className='text-xs ms-1 font-bold'>Role</label>
<input type="text" class="bg-gray-50 border h-7 border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-red-400 focus:border-red-400 block w-full  " required style={{backgroundColor:'#E5FAF7'}} />
            </div>
            <div className='flex flex-col w-full items-start gap-2'>
<label htmlFor="first_name" className='text-xs ms-1 font-bold'>Assignee</label>
<input type="text" class="bg-gray-50 border h-7 border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-red-400 focus:border-red-400 block w-full  " required style={{backgroundColor:'#E5FAF7'}} />
</div>

            </div>

            <div className='flex flex-col w-full items-start gap-2'>
<label htmlFor="first_name" className='text-xs ms-1 font-bold'>Message</label>
<input type="text" class="bg-gray-50 border h-16 border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-red-400 focus:border-red-400 block w-full  " required  />
            </div>

            <div className='flex flex-col w-full items-start gap-2'>
<label htmlFor="first_name" className='text-xs ms-1 font-bold'>Requirement</label>
<input type="text" class="bg-gray-50 border h-16 border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-red-400 focus:border-red-400 block w-full  " required  />
            </div>

            <div className='flex flex-col w-full items-start gap-2'>
<label htmlFor="first_name" className='text-xs ms-1 font-bold'>Note</label>
<input type="text" class="bg-gray-50 border h-7 border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-red-400 focus:border-red-400 block w-full  " required  style={{backgroundColor:'#E5FAF7'}} />
            </div>

            <div className='flex w-full gap-8 '>
            <div className='flex flex-col w-full gap-2'>
<label htmlFor="first_name" className='text-xs ms-1 font-bold'>Tags</label>
<input type="text" class="bg-gray-50 border h-7 border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-red-400 focus:border-red-400 block w-full  " required  style={{backgroundColor:'#E5FAF7'}}/>
            </div>
            <div className='flex flex-col w-full items-start gap-2'>
<label htmlFor="first_name" className='text-xs ms-1 font-bold'>Next followup</label>
<input type="text" class="bg-gray-50 border h-7 border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-red-400 focus:border-red-400 block w-full  " required  style={{backgroundColor:'#E5FAF7'}}/>
</div>

            </div>

            <button className='rounded-2xl p-1 w-full flex justify-center items-center gap-2 font-bold mb-12 mt-4' style={{backgroundColor:'#2EE8CD', boxShadow: '3px 3px 5px rgba(0, 0, 0, 8.5)'}}><TfiSaveAlt/> Save Contact</button>


            </div>
 


            </div>
           </div>
          
          
  


    </>
  )
}

export default ADDCONTACT