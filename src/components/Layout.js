import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fieldChange, imagePreview } from '../actions/userActions';
import InputComponent from './InputComponent';

export const Layout = props => <div>
  <div className="wrap">
    <div className="floatleft">
      <h1>hCard Builder</h1>
      <p className="fieldset-label">PERSONAL DETAILS</p>
      <div className="full-width">
        <InputComponent id="givenName" maxlength="20" value={props.givenName.value} label="GIVEN NAME"
        onChange={value => props.dispatchFieldChange('givenName', value)} type="text" />
        <InputComponent id="surName" maxlength="20" value={props.surName.value} label="SURNAME"
        onChange={value => props.dispatchFieldChange('surName', value)} type="text" />
      </div>
      <div className="full-width">
        <InputComponent id="email" maxlength="35" value={props.email.value} label="EMAIL"
        onChange={value => props.dispatchFieldChange('email', value)} type="email" />
        <InputComponent id="phone" maxlength="20" value={props.phone.value} label="PHONE"
        onChange={value => props.dispatchFieldChange('phone', value)} type="number" />
      </div>

      <p className="fieldset-label">ADDRESS</p>
      <div className="full-width">
        <InputComponent id="houseNo" maxlength="25" value={props.houseNo.value} label="HOUSE NAME OR #"
        onChange={value => props.dispatchFieldChange('houseNo', value)} type="text" />
        <InputComponent id="street" maxlength="25" value={props.street.value} label="STREET"
        onChange={value => props.dispatchFieldChange('street', value)} type="text" />
      </div>
      <div className="full-width">
        <InputComponent id="suburb" maxlength="15" value={props.suburb.value} label="SUBURB"
        onChange={value => props.dispatchFieldChange('suburb', value)} type="text" />
        <InputComponent id="stateName" maxlength="15" value={props.stateName.value} label="STATE"
        onChange={value => props.dispatchFieldChange('stateName', value)} type="text" />
      </div>
      <div className="full-width">
        <InputComponent id="postcode" maxlength="10" value={props.postcode.value} label="POSTCODE"
        onChange={value => props.dispatchFieldChange('postcode', value)} type="number" />
        <InputComponent id="country" maxlength="15" value={props.country.value} label="COUNTRY"
        onChange={value => props.dispatchFieldChange('country', value)} type="text" />
      </div>
      <div className="full-width">
        <div className="size-half">
          <label htmlFor="uploadAvatar" className="fileContainer upload">Upload Avatar
          <input id="uploadAvatar" className="fileInput" type="file" onChange={(e => props.dispatchImagePreview(e))} />
          </label>
        </div>
        <div className="size-half">
          <button className="hcard-button create" type="submit">Create hCard</button>
        </div>
      </div>
    </div>
    <div className="floatright">
      <p className="fieldset-right">HCARD PREVIEW</p>
      <div className="card-name-block">
        <p className="card-name"><span className="card-name-font">{props.givenName.value}&nbsp;{props.surName.value}</span></p>
      </div>
      <p className="img-preview">
        <img alt="Preview" className="img-height" src={props.imagePreviewURL} />
      </p>
      <div className="card-details-block">
        <div className="full-detail move-down">
          <div className="one-fifth hcard-preview-label">EMAIL</div>
          <div className="four-fifth">{props.email.value}</div>
        </div>
        <div className="full-detail move-down">
          <div className="one-fifth hcard-preview-label">PHONE</div>
          <div className="four-fifth">{props.phone.value}</div>
        </div>
        <div className="full-detail move-down">
          <div className="one-fifth hcard-preview-label">ADDRESS</div>
          <div className="four-fifth">{props.houseNo.value} {props.street.value}</div>
        </div>
        <div className="full-detail move-down">
          <div className="one-fifth" />
          <div className="four-fifth">{props.suburb.value}
            {props.stateName.value !== '' ? <span>, {props.stateName.value}</span> : null}</div>
        </div>
        <div className="full-detail move-down">
          <div className="one-fifth hcard-preview-label">POSTCODE</div>
          <div className="one-fourth no-padding">{props.postcode.value}</div>
          <div className="one-fifth hcard-preview-label">COUNTRY</div>
          <div className="one-fourth no-padding">{props.country.value}</div>
        </div>
      </div>
    </div>
    <div id="clearingdiv" />
  </div>
</div>;
Layout.propTypes = {
  dispatchFieldChange: PropTypes.func,
  dispatchImagePreview: PropTypes.func,
  givenName: PropTypes.object,
  surName: PropTypes.object,
  email: PropTypes.object,
  houseNo: PropTypes.object,
  phone: PropTypes.object,
  suburb: PropTypes.object,
  street: PropTypes.object,
  stateName: PropTypes.object,
  country: PropTypes.object,
  postcode: PropTypes.object,
  imagePreviewURL: PropTypes.string
};
const mapStateToProps = state => ({
  givenName: state.givenName,
  surName: state.surName,
  email: state.email,
  houseNo: state.houseNo,
  phone: state.phone,
  suburb: state.suburb,
  street: state.street,
  stateName: state.stateName,
  country: state.country,
  postcode: state.postcode,
  imagePreviewURL: state.imagePreviewURL
});
export default connect(mapStateToProps, { dispatchFieldChange: fieldChange, dispatchImagePreview: imagePreview })(Layout);

