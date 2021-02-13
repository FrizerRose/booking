import { DeveloperError } from '@/types/customError';
import SharedMutationTypes from './modules/shared/mutation-types';
import ServiceMutationTypes from './modules/service/mutation-types';
import CompanyMutationTypes from './modules/company/mutation-types';

const allMutationEnums = [
  SharedMutationTypes,
  ServiceMutationTypes,
  CompanyMutationTypes,
];

const actionTypeValues = allMutationEnums.map((abc) => Object.values(abc)).flat();
const hasConsistentNames = allMutationEnums.map((abc) => Object.entries(abc)).flat().every((keyValue) => keyValue[0] === keyValue[1]);

// Since we don't have namespaced modules, we need to make sure there are no duplicate Mutation names.
if (actionTypeValues.length !== new Set(actionTypeValues).size) {
  throw new DeveloperError('Duplicate Mutation-Types!');
}

// Since we are only checking values in the previous check, we need to make sure all Mutations have identical keys and values.
if (!hasConsistentNames) {
  throw new DeveloperError('Inconsistent Mutation-Type name!');
}

const allMutationTypes = {
  ...SharedMutationTypes,
  ...ServiceMutationTypes,
  ...CompanyMutationTypes,
};

export default allMutationTypes;
