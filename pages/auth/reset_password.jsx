import Button from '@/components/shared/button'
import InputComp from '@/components/shared/input'
import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'


export default function reset_password() {

  return (
    <div className='flex flex-col w-full h-screen px-6 pt-16 gap-9'>
      <div className="flex items-center justify-between w-full">
        <div className="">
          <FaArrowLeftLong className='w-6 h-6 text-[#E59500]' />
        </div>
        <div className="text-[#1466B8] font-semibold text-2xl flex-grow text-center">Reset Password</div>
      </div>
      <div className="flex flex-col gap-6">
        <InputComp
        placeholder={"Enter New password"}
        type={"password"}
        required={true}
        />
        <InputComp
        placeholder={"Confirm New password"}
        type={"password"}
        required={true}
        />
        <Button color={"primary"} name={"Continue"} />
      </div>
    </div>
  )
}
