import { useQuery } from "react-query";
import QUERYKEYS from "@constants/queryKeys";
import { menuApi } from "@apis/menu";

const useMenu = (name: string) => {
  return useQuery([QUERYKEYS.MENU, name], () => {
    return menuApi.getMenu(name);
  });
};

export { useMenu };
