import { Link } from 'react-router-dom';
export default function PageHeader(props){
    return(
        <>
            <div className="w-full h-90 relative mb-10">
                <img src={props.image} className='w-full h-full object-cover'/>
                <div className='absolute w-full h-full top-0 bg-black/50'>
                <div className='absolute py-5 px-15 top-50 left-10 flex flex-col'>
                    <p className='text-gray-200 font-semibold text-xl'>
                        <Link to="/" className='text-[#80ECC9] font-semibold'>Home</Link> / {props.title}
                    </p>
                </div>
                </div>
            </div>
        </>
    );
}