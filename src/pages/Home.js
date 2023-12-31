import { useLocation, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAllCategories } from '../api';
import CategoryList from '../components/CategoryList'
import Loader from '../components/Loader'
import Search from '../components/Search';

export default function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);
    const {pathname, search} = useLocation();
    const {push} = useHistory();

    const handleSearch = (str) => {
        setFilteredCatalog(catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())));
        push({
            pathname,
            search:`?search=${str}`
        })
    }
    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories);
            setFilteredCatalog(search ?
                data.categories.filter(item =>
                    item.strCategory
                        .toLowerCase()
                        .includes(search.split("=")[1].toLowerCase())
                ) : data.categories
            )
        })
    }, [search])
    return (
        <>
            <Search cb={handleSearch} />
            {!catalog.length ? (
                <Loader />
            ) : (
                <CategoryList catalog={filteredCatalog} />
            )}
        </>
    )
}
