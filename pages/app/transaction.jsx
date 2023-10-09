import { AiOutlineArrowLeft } from "react-icons/ai";
import Items from '@/components/transaction screen/items';
import Drop from '@/components/transaction screen/dropdown';
import Menu from '@/components/transaction screen/menu';
import { useQuery } from "@tanstack/react-query";
import queryKeys from "@/api/queryKeys";
import { getRequest } from "@/api/apiCalls";
import { GET_TRANSACTION } from "@/api/apiURL";
import React from 'react';

export default function transaction() {
  const [transactions, setTransactions] = React.useState([])
 const {data} = useQuery({
  queryKey:[queryKeys.getTransactions], 
  queryFn: async()=> await getRequest({url:GET_TRANSACTION})
 })
 React.useEffect(()=>{
  setTransactions(data?.data)},[data])
 console.log(transactions, data);
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
      {
        transactions?.map(trans =>(
          <Items name={trans.title} price={trans.amount} description={trans.description} time={trans.date}/>
        ))
      }
        {/* <Items name={'Shopping'} price={-5120} description={'Buy some groceries'} time={'10:00am'}/>

        <Items name={'Food'} price={-530} description={'Arabian Hut'} time={'07:07am'}/>

        <Items name={'Salary'} price={5000} description={'salary for August'} time={'07:30pm'}/>

        <Items name={'Subscription'} price={-1180} description={'Disney and Mobile'} time={'03:07pm'}/> */}
      </div>
          </div>
  )
}
