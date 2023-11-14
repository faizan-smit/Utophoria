import { HandThumbsUp, ChatLeftText, Share } from "react-bootstrap-icons";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './postcard.css';



let PostCard = (props)=>{



    return(
        <>
        

            <div className="maindiv">

            <div className='headdiv'>
            
                <div className="userImg">
                    <img src={props.image} alt={props.alt} />
                
                </div>

                <div className='d-t'>
                <Link to={props.userUrl}>
                    <h4 className='person-name'>{props.name}</h4>
                </Link>
                <p className="post--time">{props.time}</p>
                </div>


            </div>



            <div className="postdiv">



                <h1>{props.title}</h1>
                <p>{props.post}</p>
                {props.postImg? ( <img src={props?.postImg} />): (null)}
               


            </div>




            <hr />

            <div className="postFooter">


            <div className="button">
                <HandThumbsUp />
                Like
            </div>
            <div className="button">
                <ChatLeftText /> Comment
            </div>
            <div className="button">
                <Share /> Share
            </div>


            </div>

            <hr />






            </div>
        
        
        </>
    )


}

export default PostCard