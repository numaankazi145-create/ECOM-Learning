import { CarausolImg } from "@/components/custom/Carausol";
import { useNavigate } from "react-router-dom";
import { CategoryNavbar } from "@/components/custom/CategoryNav/CategoryNavbar";
import { getProductsByCategory } from "@/API/ProductsAPi";
import { useQuery } from "@tanstack/react-query";
import { RiLoader4Line } from "react-icons/ri";
import { DealsSection } from "@/components/custom/Deals/DealsSection";
// import { ProductClickPop } from "@/components/custom/ProductClickPop";
import { images } from "@/Data/staticData";
import { DropdownMenuDemo } from "@/components/custom/CategoryNav/Dropdown";


export function Home() {
  const navigate = useNavigate();

  const handleCategoryClick = (item) => {
    console.log(item?.title);
    if (item.id == "Delevery") {
      navigate("/Services");
    }
  };

  const ApiCallHandle = (sub) => {
    console.log(sub);
    navigate(`/category/${sub}`);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProductsByCategory(),
    select: (data) => data?.products,
  });

  if (data) console.log(data, ">>>>>>Home>>>>>>>>>>>");
  if (isLoading)
    return (
      <div className="flex justify-center min-h-screen items-center text-center animate-spin text-7xl font-normal">
        <RiLoader4Line />
      </div>
    );

  return (
    <div className="flex flex-col gap-10">
      <CategoryNavbar
        navigate={navigate}
        handleCategoryClick={handleCategoryClick}
        ApiCallHandle={ApiCallHandle}
      />
      <CarausolImg images={images} />
      <DealsSection data={data} />
     <DropdownMenuDemo/>
    </div>
  );
}
