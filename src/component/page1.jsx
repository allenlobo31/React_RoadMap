import React from 'react'
import {useState} from 'react';


export default function Page1() {

const[count, setCount] = useState(0)

  return (
    <div class="p-4 text-center">
      <h1 class="text-2xl font-bold">This is Page 1</h1>
      <p class="text-gray-600">Welcome to the first page of our application!</p>
      <div >      
        <button class="mt-4 flex items-center justify-center gap-4 text-center border border-gray-300 rounded-lg p-4 h-20 w-40 mx-auto" onClick={() => setCount(count + 1)}>{count}</button>
      </div>
    </div>
  )
}