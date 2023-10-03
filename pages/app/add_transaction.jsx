import { postRequest } from "@/api/apiCalls";
import { ADD_TRANSACTION } from "@/api/apiURL";
import TopNav from "@/components/shared/TopNav";
import Button from "@/components/shared/button";
import InputComp from "@/components/shared/input";
import SelectComp from "@/components/shared/select";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

export default function add_transaction() {
  const inputList  = [
    {
      placeholder: "Enter Amount",
      type: "number",
      required: true,
      name: "amount"
    },
    {
      placeholder: "",
      type: "date",
      required: false,
      name: "date"
    }
  ]
  const selectList = [
    {label: "Please select a category", value: ""},
    {label: "Income", value: "income"},
    {label: "Expense", value: "expense"},
  ]
  const [state, setState] = React.useState({
    category: "",
    amount: 0,
    date: new Date(),
    description: ""
  })
  const handleChange =(e)=> {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const router = useRouter()
  const {mutate} = useMutation( postRequest , {
    onSuccess(){
      router.push('/app/transaction', "/app/transaction")
    }
  })
  
  const handleSubmit =(e)=> {
    e.preventDefault()
    console.log(state)
    mutate({
      url : ADD_TRANSACTION,
      data: state
    })
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full h-screen no-scrollbar overflow-y-scroll gap-10 px-6 pt-16">
      <TopNav title={"Add Transaction"} />
      <div className="flex flex-col gap-6">
        <SelectComp
        options={selectList}
        onChange={handleChange}
        value={state.category}
        name={"category"}
        />
        {
          inputList.map((list, i)=>
            <InputComp
            placeholder={list.placeholder}
            type={list.type}
            required={list.required}
            name={list.name}
            change={handleChange}
            />
          )
        }
        <textarea className="w-full h-20 p-3 border-2 border-blue-600 rounded-md shadow-lg outline-none hover:shadow-xl" placeholder="Description text goes here" name="description" onChange={handleChange}>

        </textarea>
        <Button color="primary" click={()=>{}} name={"Add Transaction"} type={"submit"} />
      </div>
    </form>
  );
}
