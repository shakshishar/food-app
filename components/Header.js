import Link from "next/link";
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const Header=()=>{
    return(
        <div>
        <div className="flex items-center justify-between">
        <Link href="" className="text-primary font-semibold text-2xl">PIZZA's</Link>
        <nav className="flex gap-8 text-gray-500 font-semibold" >
          <Link href={'/'}>Home</Link>
          <Link href="./menu">Menu</Link> 
          <Link href={''}>About</Link>
          <Link href={''}>Contact</Link>
          <Link href={'/login'} style={{ display: 'flex', alignItems: 'center', marginTop:"-5px"}}>
            <Avatar size="medium" style={{background:"red", color:"white"}} icon={<UserOutlined />} />
            
            </Link>
        </nav>
        </div>
        {/* <hr className="mt-2 border-primary" /> */}

          </div> 
    )
}

export default Header;