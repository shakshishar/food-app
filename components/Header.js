import Link from "next/link";
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const Header=()=>{
    return(
        <div>
        <div className="flex items-center justify-between">
        <Link href="" className="text-primary font-semibold text-2xl">PIZZA's</Link>
        <nav className="flex gap-8 text-gray-500 font-semibold" >
          <Link className="hover:scale-110 hover:transition-all" href={'/'}>Home</Link>
          <Link className="hover:scale-110 hover:transition-all" href="./menu">Menu</Link> 
          <Link className="hover:scale-110 hover:transition-all" href={'./aboutus'}>About</Link>
          <Link className="hover:scale-110 hover:transition-all" href={'./contactus'}>Contact</Link>
          <div className="flex gap-2">
        
            <Link className="hover:scale-110 hover:transition-all" href={'/login'} style={{ display: 'flex', alignItems: 'center', marginTop:"-5px"}}>
                <Avatar size="medium" style={{background:"red", color:"white"}} icon={<UserOutlined />} />
            </Link>
            <Link className="hover:scale-110 hover:transition-all text-primary " href={'./register'}>Register</Link>
            </div>
        </nav>

        {/* <nav className="flex gap-2 text-gray-500 font-semibold">
       
        </nav> */}
        </div>
        {/* <hr className="mt-2 border-primary" /> */}

        </div> 
    )
}

export default Header;