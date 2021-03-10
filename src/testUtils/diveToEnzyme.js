function diveTo(wrapper, TargetComponent) {
  wrapper.single((n) => {
    if (n && n.nodeType === 'host') {
      throw new Error(
        'diveTo(): Target component not found, but other host component was reached (nested components is not supported by dive())'
      )
    }
  })

  // `.type()` returns type of current node, not a root component, so it needs one more .`dive()`
  if (wrapper.type() === TargetComponent) {
    return wrapper.dive()
  }

  const targetWrapper = wrapper.dive()
  return diveTo(targetWrapper, TargetComponent)
}

export default diveTo
