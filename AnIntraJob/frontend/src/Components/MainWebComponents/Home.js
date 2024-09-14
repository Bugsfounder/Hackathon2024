import React, { useEffect } from 'react'
import bannerImage from "../../images/banner1.jpeg"
import BugsFounder from '../utils/BugsFounder'
import { Link } from 'react-router-dom';

const Home = () => {

    const blogs = [
        {
            id: "1",
            title: "Data Sciencce",
            description: "We are looking for a skilled and passionate Data Scientist to join our team. The ideal candidate will leverage data analytics and machine learning techniques to help us make data-driven decisions, uncover insights, and optimize processes. You will collaborate with cross-functional teams to solve complex business problems and drive growth through data..",
            author: "BugsFounder",
            createdAt: "2024-07-01",
            url: "/jobs/The-Future-of-Web-Development"
        },
        {
            id: "2",
            title: "Web Devlopment",
            description: "We are seeking a talented and motivated Web Developer to join our team. The ideal candidate will have a strong understanding of web development best practices, and experience in designing, building, and maintaining websites and web applications. You will work closely with cross-functional teams to deliver high-quality digital experiences that align with our business goals and user needs..",
            author: "ProCode",
            createdAt: "2024-06-15",
            url: "/jobs/Mastering-React-in-30-Days"
        },
        {
            id: "3",
            title: "Data Analytics",
            description: "We are seeking a skilled Data Analyst to join our dynamic team. In this role, you will collect, analyze, and interpret large datasets to help our company make informed business decisions. You will work closely with various departments, identifying trends and patterns, developing reports, and providing actionable insights that drive strategic initiatives..",
            author: "Alex Johnson",
            createdAt: "2024-05-20",
            url: "/jobs/Top-10-JavaScript-Libraries"
        },
        {
            id: "4",
            title: "Stock Market Analysis",
            description: "We are looking for a highly skilled and motivated Stock Market Analyst to join our team. The ideal candidate will be responsible for conducting in-depth research, analyzing financial data, and providing actionable insights on stock market trends. You will work closely with portfolio managers and investors to make informed decisions that maximize returns and mitigate risks.",
            author: "Emily Davis",
            createdAt: "2024-04-10",
            url: "/jobs/Understanding-Async-Await"
        },
        {
            id: "5",
            title: "Game Development",
            description: "We are looking for a highly skilled and imaginative Game Developer to join our innovative team. In this role, you will take charge of developing immersive, interactive gaming experiences from concept to completion. You’ll collaborate closely with designers, artists, and engineers to design, develop, and refine game mechanics, features, and visuals that captivate and engage players. Your work will involve prototyping, coding, and fine-tuning gameplay to create unforgettable experiences across multiple platforms.",
            author: "KingsWorks",
            createdAt: "2024-03-30",
            url: "/jobs/CSS-Grid-vs-Flexbox"
        }
    ];

    const institutes = [
        {
            id: "1",
            title: "Data Science Institute",
            description: "Our Data Science Institute offers cutting-edge programs in data analytics, machine learning, and artificial intelligence. We provide hands-on training with real-world datasets, preparing students for successful careers in the rapidly growing field of data science.",
            location: "New York, NY",
            foundedYear: "2010",
            url: "/institutes/data-science-institute"
        },
    ];

    return (
        <div className='container m-auto   '>
            <div className="m-5">

                <div className="mt-[132.5px]  welcome lg:flex order-0 pt2 bg-gray-100 dark:bg-slate-800 rounded-full">
                    <div className="">
                        <img src={bannerImage} alt="" className='w-[1020px] rounded-br-[500px]' />
                    </div>

                    <div className="right dark:text-white text-center lg:pr-10 p-5 flex flex-col justify-center items-center">
                        <h1 className='text-3xl lg:text-4xl font-bold'>Welcome To <span className='font-extrabold' id="aboutLogo"> <span className='text-orange-400'>An</span><span className='text-slate-400'>Intra</span><span className='text-green-600'>Job</span></span></h1>
                        {/* <p>Lorem ipsum dolor sit amet.</p> */}
                        <p className='my-3'>Empowering You to Build a Brighter Future – Jobs, Courses, and Professional Development at Your Fingertips</p>
                    </div>
                </div>

                <div className="blogSection">
                    <h1 className="text-2xl font-bold my-8 dark:text-white">Recent Internships</h1>
                    {
                        blogs.length &&
                        blogs.slice(0, 5).map(blog => {
                            return <div key={blog.id} className='p-5 dark:text-white dark:bg-slate-800 bg-gray-100 my-3 shadow-sm rounded-md'>
                                <Link to={blog.url} className='text-sky-600 text-xl'> <h1>{blog.title}</h1></Link>
                                <p>{blog.description}</p>
                                <p>{blog.author} . {blog.createdAt}</p>
                            </div>
                        })
                    }
                    <Link to="/jobs/" className='text-gray-500 pl-1  hover:dark:text-gray-600'>More Internships</Link>
                </div>

                <div className="tutorialSection">
                    <h1 className="text-2xl font-bold my-8 dark:text-white">Top Jobs</h1>
                    {
                        blogs.length &&
                        blogs.slice(0, 5).map(blog => {
                            return <div key={blog.id} className='p-5 dark:text-white dark:bg-slate-800 bg-gray-100 my-3 shadow-sm rounded-md'>
                                <Link to={blog.url} className='text-sky-600 text-xl'> <h1>{blog.title}</h1></Link>
                                <p>{blog.description}</p>
                                <p>{blog.author} . {blog.createdAt}</p>
                            </div>
                        })
                    }
                    <div className='p-1 mb-5'>
                        <Link to="/jobs/" className='text-gray-500 hover:dark:text-gray-600'>More Jobs</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home