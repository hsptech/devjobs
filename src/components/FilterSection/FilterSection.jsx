import React from 'react';
import './FilterSection.scss';
import InputField from './../InputField';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

function FilterSection() {
    return (
        <div className="filter-section-wrapper">
            <InputField
                placeholder="Filter by title, companies, expertise..."
                outerClassName="filter-company"
                component={<FaSearch />}
            />
            <InputField
                placeholder="Filter by location..."
                component={<FaMapMarkerAlt />}
                outerClassName="filter-location"
            />
            <div className="filter-search">
                <span>
                    <input type="checkbox" /> Full Time Only
                </span>
                <button className="filter-search-btn">Search</button>
            </div>
        </div>
    );
}

export default FilterSection;
