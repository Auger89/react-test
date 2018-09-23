import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { List, ListItem, ListItemGraphic } from 'rmwc/List';
import { Elevation } from 'rmwc/Elevation';
import { TextField, TextFieldIcon } from 'rmwc/TextField';
import { Checkbox } from 'rmwc/Checkbox';
import 'material-components-web/dist/material-components-web.min.css'
import { Column } from './common'

export class MultiSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      options: {...this.props.options},
      selectedOptions: []
    }
  }

  handleCollapse() {
    this.setState({ show: !this.state.show })
  }

  renderFieldIcon() {
    const fieldIcon = this.state.show ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
    return <TextFieldIcon style={{ cursor: 'pointer', pointerEvents: 'auto' }} onClick={() => this.handleCollapse()} icon={fieldIcon} />
  }

  handleCheck(key, value) {
    const newSelectedOptions = [...this.state.selectedOptions]
    const index = newSelectedOptions.indexOf(value)
    if (index === -1) {
      newSelectedOptions.push(value)
    } else {
      newSelectedOptions.splice(index, 1)
    }
    this.setState(prevState => ({
      options: {
        ...prevState.options,
        [key]: {
          ...prevState.options[key],
          checked: !prevState.options[key].checked
        }
      },
      selectedOptions: newSelectedOptions
    }))
  }

  renderMenu() {
    const { options } = this.state
    return Object.keys(options).map(key => {
      const option = options[key]
      return (
        <ListItem onClick={() => this.handleCheck(key, option.value)}>
          <ListItemGraphic icon={<Checkbox checked={option.checked} />} />
          {option.value}
        </ListItem>
      )
    })
  }

  renderValue() {
    const value = this.state.selectedOptions.join(', ')
    const { maxLength } = this.props
    return value.length > maxLength ? `${value.slice(0, maxLength)} ...` : value
  }

  render() {
    const visibleMenu = this.state.show ? 'inline-flex' : 'none'
    return (
      <Column>
        <TextField style={{ cursor: 'pointer', pointerEvents: 'none' }} 
          box 
          withTrailingIcon={this.renderFieldIcon()} 
          label="Favourite Food" 
          value={this.renderValue()} 
        />
        <Elevation z={7} style={{ display: visibleMenu }}>
          <List style={{width: '100%'}}>
            {this.renderMenu()}
          </List>
        </Elevation>
      </Column>
    )
  }
}

MultiSelect.propTypes = {
  options: PropTypes.object.isRequired,
  maxLength: PropTypes.number
}

MultiSelect.defaultProps = {
  maxLength: 23
}