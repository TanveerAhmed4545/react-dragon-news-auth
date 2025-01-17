import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNew from "./BreakingNews/BreakingNew";
import NewsCard from "./NewsCard/NewsCard";


const Home = () => {
    const news = useLoaderData();
    // console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNew></BreakingNew>
            <Navbar></Navbar>
            <h2 className='text-3xl font-poppins font-bold'>This is a Home</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div><LeftSideNav></LeftSideNav></div>
                <div className="md:col-span-2 ">
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }
                </div>
                <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;