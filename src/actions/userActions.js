import * as types from '../constants/actionsConstants';

export function fieldChange(fieldName, value) {
  let val = value;
  if (fieldName === 'email') {
    val = value.toLowerCase();
  }
  return (dispatch) => {
    dispatch({
      value: val,
      fieldName,
      type: types.FIELD_CHANGE
    });
  };
}
export function imagePreview(e) {
  return (dispatch) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      const url = reader.result;
      dispatch({
        url,
        type: types.IMAGE_PREVIEW
      });
    };
    reader.readAsDataURL(file);
  };
}
