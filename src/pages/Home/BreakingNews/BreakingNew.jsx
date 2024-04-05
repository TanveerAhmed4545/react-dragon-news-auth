import Marquee from "react-fast-marquee";

const BreakingNew = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover speed={100}>
        I can be a React component, multiple React components, or just some text.
      </Marquee>
        </div>
        
    );
};

export default BreakingNew;