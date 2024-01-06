import pic from './codechef.jpg'
import pic1 from './codeforces.jpg'
import pic2 from './github.jpg'
import pic3 from './leet.png'
import pic4 from './kink.jpg'
export default function Profiles(){
    return(
        <div className='profiles'>
            <h1 style={{textAlign:'center'}}>PROFILES</h1>
            <div>
                <a href='https://www.codechef.com/users/hritik_422'><img src={pic}></img></a>
                <a href='https://codeforces.com/profile/hritik4november2003'><img src={pic1}></img></a>
                <a href='https://github.com/Hritik422'><img src={pic2}></img></a>
            </div>
            <div>
               <a href='https://leetcode.com/hritik4november2003/'> <img src={pic3}></img></a>
               <a href='https://www.linkedin.com/in/hritik-sharma-8bb887192/'> <img src={pic4}></img></a>
            </div>
        </div>
    )
}