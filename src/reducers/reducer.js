import { FIELD_CHANGE, IMAGE_PREVIEW } from '../constants/actionsConstants';

export const initialState = {
  givenName: { value: '', errors: [] },
  surName: { value: '', errors: [] },
  phone: { value: '', errors: [] },
  houseNo: { value: '', errors: [] },
  email: { value: '', errors: [] },
  street: { value: '', errors: [] },
  stateName: { value: '', errors: [] },
  postcode: { value: '', errors: [] },
  country: { value: '', errors: [] },
  suburb: { value: '', errors: [] },
  imagePreviewURL: './images/user.png'
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case FIELD_CHANGE: {
      return { ...state,
        [action.fieldName]: { ...state[action.fieldName], value: action.value } };
    }
    case IMAGE_PREVIEW: {
      return { ...state,
        imagePreviewURL: action.url };
    }
    default: {
      return state;
    }
  }
}
