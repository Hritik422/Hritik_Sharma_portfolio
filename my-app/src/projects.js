import './index.css'
import img from './park.png'
import img2 from './kalyanam.png'
import img3 from './medidesk.png'
import img4 from './git.png'
export default function Projects(){
    return(
        <div className='proj'>
           <div className="project"><h1>PROJECTS</h1></div>
           <div className='work'>
             <div>
                <section>
                    KALYALAM
                <p>
                    KALYALAM(weding) is a one stop place for all your marriage booking requirements from hotel venues,e-cards to even sweet vendors and DJ's and all what you require for organising marriage functions of you and your loved ones.HAPPY WEDDING!
                </p>
                <button><a href='https://github.com/Hritik422/KALAYANAM'>Github</a></button>
                </section>
                <img src={img2} style={{height:40+'%',width:50+'%'}}></img>
             </div>
             <div>
             <section>
                    MEDI-DESK
                <p>
                    MEDI-DESK is a multi purpose web-app providing multiple facilities to a user like online doctor consultation , regarding much needed sex education , multiple disease predictions as well as real time ambulance tracking facilities for the users.  
                </p>
                <button><a href='https://github.com/Hritik422/HACKCBS'>GITHUB</a></button>
                </section>
                <img src={img3} style={{height:40+'%',width:50+'%'}}></img>
            </div>
             <div>
             <section>
                    PARKING AUTOMATION
                <p>
                    This webapp provides easier parking access solutions.It helps users generate real time parking access reciet if the user holds a valid driving license.The verification of users license is done through opencv and face matching algorithms.
                </p>
                <button><a href='https://github.com/Hritik422/Ease_PARK'>Github</a></button>
                </section>
                <img src={img} style={{height:40+'%',width:50+'%'}}></img>
            </div>
             <div>
             <section>
                    GITLAB
                <p>
                    Gitlab makes use of githubs REST API for accessing information regarding any public repository present on github.
                </p>
                <button><a href='https://github.com/Hritik422/Gitlab'>Github</a></button>
                </section>
                <img src={img4} style={{height:40+'%',width:50+'%'}}></img>  
            </div>
           </div>
        </div>
    )
 }