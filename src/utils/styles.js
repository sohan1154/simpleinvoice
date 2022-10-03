export const padding = (top = 0, right = 0, bottom = top, left = right) => ({
  paddingTop: top,
  paddingRight: right,
  paddingBottom: bottom,
  paddingLeft: left,
});

export const margin = (top = 0, right = 0, bottom = top, left = right) => ({
  marginTop: top,
  marginRight: right,
  marginBottom: bottom,
  marginLeft: left,
});

export const shadow = shadowColor => ({
  shadowColor: shadowColor,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 5,
});
