import React from 'react';
import people1 from '../../../images/people-1.png'
import people2 from '../../../images/people-2.png'
import BlogDetail from "../BlogDetail/BlogDetail";

const blogInfo = [
    {
        img: '',
        name: 'Rashed Kabir',
        advice: "Check at least a doctor in a year for your teeth",
        description: ''
    },
    {
        img: people1,
        name: 'Dr. Caudi',
        advice: "2 time of brush in a day can keep you healthy",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, laborum.'
    },
    {
        img: people2,
        name: 'Dr. John Mitchel',
        advice: "The tooth cancer is taking a challenge",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, laborum.'
    }
];

const Blog = () => {
    return (
        <div className="text-center mt-5 mb-5">
            <h4 style={{color: 'rgb(28, 199, 193)'}}>Our Blog</h4>
            <h2>From Our Blog News</h2>
            <div className="d-flex justify-content-center mt-5">
                <div className="row row-cols-1 w-75 row-cols-md-3 g-4">
                    {
                        blogInfo.map(
                            info =>
                                <BlogDetail info={info}>

                                </BlogDetail>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;