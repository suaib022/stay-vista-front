import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import qs from 'query-string'

const CategoryBox = ({ label, icon: Icon, selected }) => {

    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();

    const handleClick = () => {
        let currentQuery = {};

        if(params){
            currentQuery = qs.parse(params.toString());
        }

        const updateQuery = {...currentQuery, category: label};

        const url = qs.stringifyUrl({
            url: '/',
            query: updateQuery
        })

        navigate(url);
        
    }



    return (
        <div onClick={handleClick} className={`flex mt-8 pb-2 gap-2 justify-center flex-col hover:text-black-600 border-b-2 hover:scale-110 cursor-pointer items-center ${selected ? 'border-b-pink-600 text-pink-600 ' : ''}`}>
            <Icon />
            <p className='text-sm font-medium'>{label}</p>
        </div>
    );
}; 

export default CategoryBox;