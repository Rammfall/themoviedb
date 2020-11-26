// Helper to get wrapper of the actual STATEFUL component
// that resides inside shallow-rendered HOC
// Due to enzyme's instance() returning null for stateless
// components this function works only with stateful ones
// Enzyme's dive() dive only through HOC's
// so you can't reach nested components
// (dive() method may only be run on a single, non-DOM node)

function diveTo(wrapper, TargetComponent) {
  wrapper.single((n) => {
    if (n && n.nodeType === 'host') {
      throw new Error('diveTo(): Target component not found, but other host component was reached (nested components is not supported by dive())')
    }
  })
  const targetWrapper = wrapper.dive()
  if (targetWrapper.instance() === null) {
    throw Error("diveTo(): Target component is not found in given wrapper's component hierarchy or is a functional component")
  }
  if (Object.getPrototypeOf(targetWrapper.instance()) === TargetComponent.prototype) {
    return targetWrapper
  }

  return diveTo(targetWrapper, TargetComponent)
}

export default diveTo
