import {use, useState} from 'react';

export default function Funk1() {
    const[count, setcount]=useState(10);

    return(
        <div className='border-2 border-blue-500 p-4 h-[150px] w-[200px] items-center justify-center hover:bg-blue-500'>
            <button onClick={() => setcount(count + 1)} 
                    className='text-3xl font-bold'>
                clicked {count} time
            </button>
        </div>  
    )
}

// useState Structure
// const [state, setState] = useState(initialValue);


import { useEffect } from 'react';
export function Funk2() {
    const[time, setTime]=useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='border-2 border-green-500 p-4 h-[150px] w-[200px] items-center justify-center'>
            <p className='text-3xl font-bold'>Time: {time}</p>
        </div>
    );

}


// useEffect Structure
// useEffect(() => {
//     // Effect logic here 
//     return () => {
//         // Cleanup logic here (optional)
//     };
// }, [dependencies]);



