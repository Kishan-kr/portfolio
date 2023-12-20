import { useTransform } from 'framer-motion';

function useParallax(value, amount) {
  return useTransform(value, [0, 1 ], [-amount, amount]);
}

export default useParallax;