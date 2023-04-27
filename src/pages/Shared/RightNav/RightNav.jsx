import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h5>Login With</h5>
            <Button
                className="my-2"
                variant="outline-secondary"
            >
                <FaGoogle /> Login with Google
            </Button>
            <Button
                className="my-2"
                variant="outline-secondary"
            >
                <FaGithub />
                Login with github
            </Button>
            <h5>Find us on</h5>
            <ListGroup>
                <ListGroup.Item> <FaFacebook />  Facebook</ListGroup.Item>
                <ListGroup.Item><FaTwitter/>  Twitter</ListGroup.Item>
                <ListGroup.Item><FaInstagram/>  Instagram</ListGroup.Item>
            </ListGroup>
            <QZone/>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;
