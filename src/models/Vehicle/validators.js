import { makes } from './constant';

export const validateMakes = ({ make, model }) => {
  if (!makes[make]) {
    return { message: `invalid model ${model}` }
  }
  if (!makes[make].includes(model)) {
    return { message: `invalid model ${model} in make ${make}` };
  }
  return null;
};
