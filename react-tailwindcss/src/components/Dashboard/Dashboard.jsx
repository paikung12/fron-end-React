import  { Component,useState } from "react";
import styled, { css } from "styled-components";
import Axios from 'axios'

// function timeList() {
//     const [timeList , setTimeList] = useState([])
//     const getTimeList = () => {
//         Axios.get(' ').then((response) =>{ 
//             setTimeList(response.data)
//         } )
//     }
// }


class  tableTime extends Component {

    render() { 
        return (  
            <div class="md:px-10 mt-8 py-8 w-full ">
                <div class="shadow overflow-hidden rounded border-b border-gray-200">
                 <table class="min-w-full bg-white">
                    <thead class="bg-gray-800 text-white">
                        <tr>
                        <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">No</th>
                        <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Time-in</th>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Time-out</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-700">
                        <tr>
                        <td class="w-1/3 text-left py-3 px-4">1</td>
                        <td class="w-1/3 text-left py-3 px-4">Smith</td>
                        <td class="text-left py-3 px-4">09:56</td>
                        <td class="text-left py-3 px-4">17:09</td>
                        </tr>
                        <tr class="bg-gray-100">
                        <td class="w-1/3 text-left py-3 px-4">2</td>
                        <td class="w-1/3 text-left py-3 px-4">Johnson</td>
                        <td class="text-left py-3 px-4">09:57</td>
                        <td class="text-left py-3 px-4">-</td>
                        </tr>
                        <tr>
                        <td class="w-1/3 text-left py-3 px-4">3</td>
                        <td class="w-1/3 text-left py-3 px-4">Smith</td>
                        <td class="text-left py-3 px-4">09:56</td>
                        <td class="text-left py-3 px-4">17:09</td>
                        </tr>
                        <tr class="bg-gray-100">
                        <td class="w-1/3 text-left py-3 px-4">4</td>
                        <td class="w-1/3 text-left py-3 px-4">Johnson</td>
                        <td class="text-left py-3 px-4">09:57</td>
                        <td class="text-left py-3 px-4">-</td>
                        </tr>
                        <tr>
                        <td class="w-1/3 text-left py-3 px-4">5</td>
                        <td class="w-1/3 text-left py-3 px-4">Smith</td>
                        <td class="text-left py-3 px-4">09:56</td>
                        <td class="text-left py-3 px-4">17:09</td>
                        </tr>
                    </tbody>
                 </table>
                </div>
            </div>
        )
    }
}
 
export default tableTime ;