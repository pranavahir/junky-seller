import junkylogo from '../../../img/junky-logo.jpg'
import Image from 'next/image'
import Link from 'next/link'
import SellerLogin from '../SellerLogin/SellerLogin'
import { getCookies } from '../../api/Cookies'
import { useEffect,useState } from 'react'
import AdminHeader from "./adminheader"
export default function Auth() {
	const [userid,setUserID] = useState(null)
	useEffect(() =>{
		setUserID(getCookies("userid"))
	},[getCookies("userid")])
	console.log(userid,"userid")
    return (
        <div>
			{userid?<div>
				<AdminHeader/>
			</div>
				:
				<div><SellerLogin/></div>}
            
        </div>
    )
}
