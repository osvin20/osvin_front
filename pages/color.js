const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled ? 'red' : blue,
        color: '#FFF',
        cursor: isDisabled ? 'not-allowed' : 'default',
      };
    },
  };
  
  export default () => (
    <Select
      defaultValue={items[0]}
      label="Single select"
      options={items}
      styles={colourStyles}
    />
  );