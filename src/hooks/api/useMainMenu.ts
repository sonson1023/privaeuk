import { useQuery } from "@apollo/react-hooks"; 
import { GetMainMenu } from "../../generated/server/GetMainMenu";  
import { Get_Main_Menu } from "../../graphql/server/categoriesAndFeaturedProducts";


export default function useMainMenu() {
  let { data, loading } = useQuery<GetMainMenu>(Get_Main_Menu);

  return {
    data,
    loading,
  };
}