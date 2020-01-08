import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { Field, ErrorMessage } from 'formik'
import Cleave from 'cleave.js/react'
import CleavePhone from 'cleave.js/dist/addons/cleave-phone.ca'
import PlacesAutocomplete from 'react-places-autocomplete'
import {
  blue,
  darkBlue,
  lightRed,
} from './colorPalette'

export const InputField = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 1rem;
`

export const Label = styled.label`
  font-weight: 700; 
  margin-bottom: 0;
  color: ${blue};
`

export const Input = styled(Field)`
  width: 100%;
  border: 1.5px solid lightgrey;
  border-radius: 5px;
  padding: 0 0.5rem;
  transition: border 0.15s ease-in-out;

  &:focus {
    outline: none;
    border: 2px solid ${darkBlue};
  }

  &::placeholder {
    color: #D7D7D7;
  }

  &[type="number"] {
  -moz-appearance: textfield;
  }
  &[type="number"]::-webkit-inner-spin-button, 
  &[type="number"]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
`

export const ErrorField = styled(ErrorMessage)`
  color: ${lightRed};
  font-weight: 700;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: -0.75rem;
`

export const ErrorText = styled.div`
  color: ${lightRed};
  font-weight: 700;
  text-align: center;
  margin-top: 0.5rem;
`

export const CheckboxField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`

export const CheckboxLabel = styled.label`
  color: ${blue};
  margin: 0;
  flex: 0.9;
  white-space: nowrap;
`

export const Checkbox = styled(Field)`
  transform: scale(1.25);
  flex: 0.1;
  margin: 0 0.25rem;
`

export const CheckboxInput = styled.input`
  transform: scale(1.25);
  flex: 0.1;
  margin: 0 0.25rem;
`

export const CleaveInput = ({field, inputRef, ...props}) => (
  <div>
    <Cleave {...field} {...props} htmlRef={r => inputRef && (inputRef.current = r)}/>
  </div>
)

const Suggestion = styled.div`
  border-bottom: 1px solid ${darkBlue};
  font-family: 'Nunito Sans', sans-serif;
`

const handleSelect = async (_address, placeId, setFieldValue, name) => {
  const request = {
    placeId: placeId
  };

  const placeRequest = await new Promise((resolve, reject) => {
      new google.maps.places.PlacesService(document.createElement('div')).getDetails(request, (place, status) => {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
              resolve(place);
          } else { reject() };
      });
  })

  const formattedAddress = placeRequest.address_components
    .filter(({types}) => (types[0] != "sublocality_level_1") && (types[0] != "administrative_area_level_2") && (types[0] != "country"))
    .map(({long_name}) => long_name)
    .join(", ")

  setFieldValue(name, formattedAddress)
}

export const AutoCompleteInput = ({field, setFieldValue, ...props}) => {
  const sessionToken = new google.maps.places.AutocompleteSessionToken()
  return (
    <PlacesAutocomplete
      value={field.value}
      onChange={address => setFieldValue(field.name, address)}
      onSelect={(_address, placeId) => handleSelect(_address, placeId, setFieldValue, field.name)}
      searchOptions={{sessionToken}}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <Input
            {...getInputProps({
              name: field.name,
              ...props
            })}
          />
          <div>
            {loading && <Suggestion>Loading...</Suggestion>}
            {suggestions.map(suggestion => (
              <Suggestion
                {...getSuggestionItemProps(suggestion)}
              >
                <span>{suggestion.description}</span>
              </Suggestion>
            ))}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  )
}
