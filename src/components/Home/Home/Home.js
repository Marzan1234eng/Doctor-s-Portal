import React from 'react';
import Header from "../Header/Header";
import Services from "../Services/Services";
import Description from "../Description/Description";
import Appointment from "../Appointment/Appointment";
import Card from "../Card/Card";
import Blog from "../Blog/Blog";
import Doctors from "../Doctors/Doctors";
import Contact from "../Contact/Contact";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Description></Description>
            <Appointment></Appointment>
            <Card></Card>
            <Blog></Blog>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
            <div className='text-center mt-3'>
                <p className='text-secondary'>@Copyright 2020 All Right Reserved</p>
            </div>
        </div>
    );
};

export default Home;