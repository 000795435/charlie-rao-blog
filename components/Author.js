import { Avatar, Divider } from "antd";
import '../styles/components/author.css'

const Auth = () => {


    return (
        <div className="author-div comm-box">
            <div><Avatar size={100} src="my_avatar.JPG" /></div>
            <div className="author-introduction">
                Charlie Rao, CS technology - Software Development, From Mohawk College
                <Divider>Social Media</Divider>
                <Avatar size={28} className="account" src="github.png" />
                <Avatar size={28} className="account" src="google.png" />
                <Avatar size={28} className="account" src="FaceBook_Logo.png" />
            </div>
        </div>
    );
}

export default Auth;