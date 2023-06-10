

const Heading = ({title,des}) => {
    return (
        <div className="text-center p-8">
            <h1 className=' text-xl text-[#EE5B54]'>{title}</h1>
            <h1 className='text-5xl font-bold'>{des}</h1>
        </div>
    );
};

export default Heading;