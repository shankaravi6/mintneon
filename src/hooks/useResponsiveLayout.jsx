import useMediaQuery from "./useMediaQuery";


const useResponsiveLayout = () => {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const isMediumScreen = useMediaQuery('(max-width: 1024px)');
  const isLargeScreen = useMediaQuery('(min-width: 1025px)');

  return {
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
  };
};

export default useResponsiveLayout;
