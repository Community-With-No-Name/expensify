import React from 'react'
import Items from '@/components/home screen/items'
import Transactions from '@/components/home screen/transactions'
import Balance from '@/components/home screen/balance'

export default function home() {
  return (
    <div>
      <Items date={'Today'} username={'Yusuf'} />
      <Balance income={40000} expenses={32000}/>
      <div className=' px-2'>
        <div className=' flex justify-between pb-6 pt-6 text-sm'>
          <div>Recent Transactions</div>
          <div>View All</div>
        </div>
        <Transactions amount={5100} type={'income'} />
        <Transactions amount={600} type={'food'} />
        <Transactions amount={700} type={'Clothes'} />
      </div>
    </div>
  )
}
