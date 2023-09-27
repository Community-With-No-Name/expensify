import { AiOutlineArrowLeft } from "react-icons/ai";
import Items from '@/components/shared/transaction screen/items';
import Drop from '@/components/shared/transaction screen/dropdown';
import Menu from '@/components/shared/transaction screen/menu';

export default function transaction() {
 
  return (
    <div className=' p-11'>

<div className=" flex items-center pb-7">
        <AiOutlineArrowLeft className=" justify-start text-xl" />

        <div className=" flex justify-center w-screen">
          <h1 className=" text-2xl font-semibold text-center justify-center">
            Login
          </h1>
        </div>

      </div>

<div className=' flex gap-6'>
      <Drop/>

      <Menu/>

      </div>
      <div className=' flex flex-col'>
        <Items name={'Shopping'} price={-5120} description={'Buy some groceries'} time={'10:00am'}/>

        <Items name={'Food'} price={-530} description={'Arabian Hut'} time={'07:07am'}/>

        <Items name={'Salary'} price={5000} description={'salary for August'} time={'07:30pm'}/>

        <Items name={'Subscription'} price={-1180} description={'Disney and Mobile'} time={'03:07pm'}/>
      </div>
          </div>
  )
}
