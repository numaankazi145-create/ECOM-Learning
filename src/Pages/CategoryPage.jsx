import { getProductsByCategory } from "@/API/ProductsAPi";
import { CategoryNavbar } from "@/components/custom/CategoryNav/CategoryNavbar";
import { NoDataFound } from "@/components/custom/Cart/NoDataFound";
import { ProductCard } from "@/components/custom/Cart/ProductCard";
import { ProductClickPop } from "@/components/custom/ProductClickPop";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { RiLoader4Line } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";

export function Category() {
  // --packages--
  const navigate = useNavigate();
  const [popup, setPopup] = useState();
  const { endpoint } = useParams();
  const [itemDetails, setItemDetails] = useState(false);

  // ----Handle for main categoryNavbar----
  const handleCategoryClick = (item) => {
    console.log(item.id);
    if (item.id == "Delevery") {
      navigate("/Services");
    }
  };

  // ---sub menu api call handle----
  const ApiCallHandle = (sub) => {
    console.log(sub);
    navigate(`/category/${sub}`);
  };

  // ----handle for specific productclick----
  const handleProductClick = (product) => {
    console.log("Selected Product :", product.title);
    setPopup(product);
    setItemDetails(true);
  };
  if (popup) console.log(popup, "<<<<<<Popup>>>>");

  // --api call for every submenu list---
  const { data, isLoading } = useQuery({
    queryKey: ["products", endpoint],
    queryFn: () => getProductsByCategory(endpoint),
  });
  if (data) console.log(data.products, ">>>>>Category Page Data>>>>>>>>>>>>");

  // ---Loading state---
  if (isLoading)
    return (
      <div className="flex justify-center min-h-screen items-center text-center animate-spin text-7xl font-normal">
        <RiLoader4Line />
      </div>
    );
  // --jsx--
  return (
    <section className="flex flex-col gap-10">
      <CategoryNavbar
        handleCategoryClick={handleCategoryClick}
        ApiCallHandle={ApiCallHandle}
        showImage={false}
      />
      {data?.products.length > 0 ? (
        <div className="grid grid-cols-5 gap-6 ">
          {data?.products?.map((item) => (
            <ProductCard
              key={item.id}
              ProductData={item}
              onProductSelect={handleProductClick}
            />
          ))}
        </div>
      ) : (
        <NoDataFound
          title="No products available"
          description="Try changing category or clearing applied filters."
          actionText="Clear filters"
        />
      )}
      <ProductClickPop
        open={itemDetails}
        setOpen={setItemDetails}
        product={popup}
      />
    </section>
  );
}
