import { useSearchParams } from "react-router-dom";
import { categories } from "../../../public/categoriesData";
import Container from "../Shared/Container";
import CategoryBox from "./CategoryBox";


const Category = () => {

    const [params, setParams] = useSearchParams();
    const category = params.get('category');

    return (
        <Container>
            <div className="flex pb-6 gap-12 overflow-y-auto px-4">
                {
                categories.map(item => <CategoryBox key={item.label} label={item.label}
                icon={item.icon} selected={category === item.label}></CategoryBox>)
                }
            </div>
        </Container>
    );
};

export default Category;