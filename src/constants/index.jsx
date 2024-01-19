import { useScreenWidth } from "../hooks/useScreenWidth";




export const BoxStyle = () => {
  const isDesctop = useScreenWidth()
  console.log(isDesctop);
  return {

  };
}
