"use client";
import { useState, FormEvent } from "react"; 
import { useRouter } from "next/navigation";
export default function Home() {

  const [inputVal, setInputVal] = useState("");

  const {push} = useRouter();
  //a function to handle the name submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    push(`/prediction/${inputVal}`);
  }
  return (
    <div>
      <div className="text-center m-8 p-12  rounded bg-blue-100/50">
        <h1 className="text-4xl pb-6 underline">Enter Your Name:</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" 
          placeholder="type your name!"
          value={inputVal} 
          onChange={(e=> setInputVal(e.target.value))}
          className="bg-blue-100 rounded m-2 p-2"
          />
          <button type="submit" className="bg-blue-100 m-2 p-2 rounded transition hover:bg-purple-300">Predict Data</button>
        </form>
      </div>
    </div>
  );
}
